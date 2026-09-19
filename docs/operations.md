# Operations: AI integration, deployment, quality and roadmap

_This file mirrors sections 13 and 16–18 of the `/docs` page in the running site._

## AI integration plan

Two evaluators, one result — and the deterministic one always wins on facts.

| Evaluator | Runs | Produces |
| --- | --- | --- |
| Rule-based | Always, in the browser | Metrics (words, sentences, pace, type-token ratio, fillers, connectors, complexity), detected mistakes, criterion observations, next-practice actions |
| AI (optional) | Server route, only when a key is configured | A qualitative reading of the transcript: per-criterion strengths, problems and improvements, plus three next-practice actions |

**Request flow**

1. The client validates the payload — transcript 10–6000 characters, speaking time 3–600 seconds,
   part label — and rejects with a 400 before any provider call.
2. A per-session rate limit (default 12) protects the operator's key.
3. `AI_PROVIDER`, `AI_MODEL` and `AI_API_KEY` are read **server-side only**; the prompt requests
   structured JSON.
4. The AI result is **merged into** the rule-based result, overriding only criterion text, the method
   flag and the next-practice list.
5. No key, provider error, timeout or malformed JSON all fall back to the local result with a short
   note — never an empty screen.

Rules: no key in client code, nothing cached server-side, rate limits configurable, and the prompt
forbids a bare band score — criterion-level feedback is the required shape.

## Deployment

```
tsc --noEmit            # content schema enforced at compile time
npm run validate:content # structure, Bangla coverage, band models, dead links
next build              # prerenders the content routes
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URLs in metadata, sitemap and robots |
| `AI_PROVIDER` | No | Provider adapter for evaluation |
| `AI_MODEL` | No | Model identifier |
| `AI_API_KEY` | No | Server-only key; never exposed to the browser |
| `EVALUATE_RATE_LIMIT` | No | Requests per session before 429 (default 12) |

Operational notes: content updates ship as a normal release (no migrations); the AI endpoint is the
only surface that can incur cost; no learner data is stored server-side; static pages make traffic
spikes nearly free.

## Quality self-check

**Educational** — every lesson explains why an answer works (concept block + exam-use line + a
callout naming the trap); models are labelled worked examples followed by their pattern; a Bangla
block is mandatory and enforced by the validator; all 15 grammar lessons end in speaking patterns
and spoken drills; questions follow realistic IELTS patterns; band comparison is written as
characteristics; vocabulary is chosen for naturalness and speakability.

**User experience** — the 17-stage path, a recommended-next-lesson card and previous/next navigation
mean a learner always knows what to do; practice mirrors real timers; feedback is actionable
(strengths, problems, improvements, next practice); progress is visible; mobile is first-class;
loading, empty and error states exist on every surface.

**Design** — typography-led pages, a paper palette and one accent colour; serif headings and a
consistent spacing scale give hierarchy; contrast and focus states are checked; motion is one short
entry animation; the listed visual clichés are absent.

**Technical** — strict TypeScript; standalone content validation; API validation, rate limiting, error
boundaries and graceful AI fallback; no hardcoded secrets; landmarks, skip link and keyboard-complete
flows; per-page metadata, sitemap and robots; static rendering with a small shared JavaScript
footprint; content, logic and presentation separated with documented conventions.

**Two honest limitations.** Automated evaluation cannot hear pronunciation — it measures what can be
counted and says so on the page rather than guessing. And progress is per-device by design, so a
learner who switches phones starts a fresh streak until the optional export ships.

## Roadmap

| Priority | Item |
| --- | --- |
| Now | Content depth: more topics, more cue cards, more Band 6.5 examples grounded in concrete detail |
| Next | Pronunciation feedback: detect dropped final consonants and `-ed` endings, then point to the matching drill |
| Next | Per-question-type accuracy so the dashboard can name the weakest question types |
| Later | Teacher mode: a shareable review link for a class |
| Later | Offline study pack via a service worker |
| Later | Optional export/import of progress for moving between devices |

Three commitments do not change: no memorised answers are taught; no band score is promised for any
single answer; progress stays on the learner's device unless they explicitly export it.
