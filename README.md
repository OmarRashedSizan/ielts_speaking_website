# Bolte Shikhi — IELTS Speaking for Bangladeshi Learners

A complete, self-study IELTS Speaking course for Bangladeshi learners targeting **Band 6.0–6.5**.
The platform teaches **how to build answers** — never answers to memorise.

> **Don't memorise answers. Learn how to build answers.**

---

## What is in the product

| Area | Content |
| --- | --- |
| Lessons | 56 lessons across 10 tracks (overview, Parts 1–3, strategy, exam, grammar, vocabulary, fluency, pronunciation) |
| Part 1 | 45 topic banks with vocabulary, phrases, examiner intent, Band 6 and 6.5 models, corrections and follow-ups |
| Part 2 | 19 cue-card categories with story shapes, a seven-step story engine, keyword-note method and full worked cue cards |
| Part 3 | 19 question types in teaching order, each with answer architectures, sentence patterns, a worked answer and a Bangla explanation |
| Practice | Timed Part 1/2/3 sessions, five progressive levels, a topic-based question generator and a full mock test |
| Evaluation | Rule-based, in-browser evaluation (pace, repetition, fillers, connectors, complexity, 60 mistake detectors) plus optional AI feedback — never a bare band score |
| Progress | Local-only dashboard: skills, streak, weak areas, recommended next lesson and Band 5.5 → 6.5 meters |
| Mistakes | A searchable library of 97 real Bangladeshi learner errors in ❌ / ✅ / why format |
| Resources | Study plans, exam-day checklists, pattern sheets, self-evaluation guide and a final-week revision plan |
| Documents | `/docs` — the full written deliverable: architecture, curriculum, design system, roadmap |

## Quick start

```bash
npm install
npm run dev            # http://localhost:3000
```

```bash
npm run typecheck        # strict TypeScript, no emit
npm run validate:content # content QA: schema, Bangla coverage, band models, dead links
npm run build            # production build (statically prerenders the content routes)
npm start                # serve the production build
```

## Optional AI evaluation

The platform evaluates answers entirely in the browser by default. AI feedback is an
**optional enhancement** — copy `.env.example` to `.env.local` and supply a key to enable it:

```bash
AI_PROVIDER=...      # provider adapter to use
AI_MODEL=...         # model identifier
AI_API_KEY=...       # server-side only; never exposed to the browser
EVALUATE_RATE_LIMIT=12
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

With no key configured, `/api/evaluate` returns the local rule-based result and the site works
fully offline. The AI result is **merged into** the rule-based result — metrics and detected
mistakes always come from the deterministic engine.

## Project structure

```
src/
  app/          routes only — pages, the two API handlers, sitemap and robots
  components/   shell · ui · lesson · topics · practice · progress · mistakes · search · home
  content/      typed content collections (lessons, topics, cue cards, mistakes, resources)
  lib/          pure logic: search, practice generator, evaluator, progress selectors
  hooks/        useAudioRecorder, useSpeechToText
scripts/        validate-content.mjs + its dedicated tsconfig
docs/           the long-form write-up (mirrors the /docs page)
```

**Adding content does not mean touching the app.** A new lesson is a new module in
`src/content/lessons/` imported by `src/content/index.ts`; a new Part 1 topic is one `topic(...)`
call in `src/content/topics/`. Routes, search, progress and navigation pick both up automatically.

## Content rules enforced by the validator

`npm run validate:content` fails the build when content breaks a product rule:

- every lesson must include a **Bangla explanation block**
- every cue card must include **both** a Band 6 and a Band 6.5 model, with Band 6.5 longer
- Band 6.5 models must be grounded in a concrete detail
- every Part 3 type needs at least **two answer architectures** and four sentence patterns
- every mistake entry needs a working correction and, where present, a compilable detector regex
- no internal link may point at a lesson, topic, resource or page that does not exist

## Design and teaching principles

1. **Idea → Structure → Sentence → Development → Example → Conclusion.**
2. Bangla explains the hard parts; English is where you practise.
3. Every lesson states why an answer works and how to build one.
4. Band comparison is written as **characteristics**, never as a promised score.
5. One column, large type, big touch targets — mobile is the primary device.

## Documentation

- `/docs` in the running site — the full deliverable, 18 sections.
- `docs/architecture.md` — architecture, stack decisions, folder structure.
- `docs/content-model.md` — schema, block types, how to add content.
- `docs/curriculum.md` — tracks, lesson structure, practice and progress architecture.
- `docs/design-and-accessibility.md` — design tokens, responsive and accessibility strategy.
- `docs/operations.md` — deployment, AI integration, quality self-check and roadmap.

## Licence

Content is written for this project. No official IELTS material is reproduced; band descriptions
are a simplified teaching summary, not the published public descriptors.
