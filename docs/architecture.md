# Architecture

_This file mirrors sections 01–03 of the `/docs` page in the running site._

## The shape of the system

Bolte Shikhi is a single Next.js 15 (App Router) application. Learning content is **data, not markup**:
lessons, topics, cue cards, question types, mistake entries and resources are authored as typed
TypeScript objects in `src/content` and rendered by shared components. Because content is typed, the
build fails if a lesson has no goals, a cue card lacks a Band 6.5 model, or a mistake entry forgets
its correction.

Three layers, with one direction of travel:

```
content/*.ts   typed lessons, topics, cue cards, mistakes, resources
     ↓
index.ts       assembled collections, selectors, question banks, stats
     ↓
lib/*          pure logic — search, practice generator, evaluator, progress maths (no React)
     ↓
components/*   one renderer per content block type
     ↓
app/*          routes, metadata, static generation, two API route handlers
```

## What is deliberately absent

| Left out | Reason |
| --- | --- |
| Database | Content is versioned in Git and ships with the build. A database would turn instant static pages into round-trips on mobile connections. |
| CMS login | A contributor edits a typed file and opens a pull request. No admin surface to secure. |
| User accounts | Progress never leaves the browser, so no account is needed to practise. |
| State library | React context plus one localStorage key is sufficient; selectors derive everything else. |
| Animation/date/chart libraries | Every dependency must earn its place in the bundle. |

## Runtime surfaces

| Surface | Rendering | Why |
| --- | --- | --- |
| Home, Learn, Topics, Path, Resources, Docs | Static | Content is known at build time — fastest first paint |
| Practice pages | Static shell + client timers | Timers, recording and speech recognition are browser concerns |
| `/progress` | Client | Reads localStorage; the server has nothing to render |
| `/search` | Server (per request) | Query comes from the URL and can be shared as a link |
| `/api/search` | Route handler | Type-ahead for the header dialog |
| `/api/evaluate` | Route handler | The only route that may call an external provider |

## Stack decisions

| Choice | Reason | Cost accepted |
| --- | --- | --- |
| Next.js 15 (App Router) | Static generation for 170+ content pages plus two route handlers in one framework | Framework knowledge needed to contribute |
| TypeScript (strict) | The content schema is a compile-time contract | More typing up front |
| Tailwind CSS v4 | Tokens live in one `@theme` block; mobile-first by default | Long class strings until you know the tokens |
| Typed content collections | No database, no migrations; content is reviewed like code | Content changes ship as a commit |
| Zod | Runtime validation of API payloads and search params | One small dependency |
| localStorage progress | Works offline, no login, private by default | Per-device only |
| Route handler + env vars for AI | Key never reaches the browser; feature is optional | Requires a server for that route only |

## Folder structure

```
src/
  app/          routes only
  components/   shell · ui · lesson · topics · practice · progress · mistakes · search · home
  content/      schema.ts · builders.ts · content-builders.ts · lessons/ · topics/ · mistakes.ts
                resources.ts · path.ts · tracks.ts · index.ts
  lib/          progress/ · search/ · practice/
  hooks/        useAudioRecorder.ts · useSpeechToText.ts
scripts/        validate-content.mjs · tsconfig.content.json
docs/           this documentation
```

Why this grouping: a flat component folder produces twelve components called `Card`; content inside
pages means a teacher cannot add a lesson without touching JSX; logic inside components cannot be
tested or reused by scripts. The boundary is simple — **teachers work in `content/`, engineers work
everywhere else** — and it is the reason the product can grow without the two interfering.

## Deployment in one paragraph

`npm run typecheck` → `npm run validate:content` → `npm run build` → deploy to any Node host. Static
pages make traffic spikes nearly free; `/api/evaluate` is optional and rate-limited. Set
`NEXT_PUBLIC_SITE_URL` for canonical URLs, and only add `AI_PROVIDER`, `AI_MODEL`, `AI_API_KEY` and
`EVALUATE_RATE_LIMIT` if AI feedback is wanted. See `docs/operations.md`.
