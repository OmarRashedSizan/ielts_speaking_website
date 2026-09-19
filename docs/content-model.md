# Content model

_This file mirrors sections 04, 08 and 09 of the `/docs` page in the running site._

## Six collections

| Collection | Size | Contract |
| --- | --- | --- |
| `Lesson` | 55 across 10 tracks | slug, track, order, level, minutes, goals, examUse, tags, `blocks[]`, `practice[]` |
| `Part1Topic` | 45 | vocabulary, phrases and questions; each question carries a pattern, a Band 6 model, a Band 6.5 model, corrections and follow-ups |
| `Part2Category` | 19 | story `shape`, idea lens, story advice, structures, full cue cards with preparation notes and why-it-works |
| `Part3QuestionType` | 19 | meaning, examiner expectations, idea technique, ≥2 architectures, patterns, worked answer, Bangla explanation, corrections, practice |
| `MistakeEntry` | 97 in 8 categories | wrong, right, why, Bangla note, frequency, optional variants, optional detector regex |
| `Resource` / `PathStage` / `Track` | 8 / 17 / 10 | the study-plan layer that orders everything else |

## Lesson block types

Content is authored with **positional builder functions**, not raw JSON:

```ts
bangla(title, paragraphs, takeaway?)      // Bangla-first explanation (required in every lesson)
prose(title, paragraphs, bullets?)
examples(title, items, intro?)
badBetter(title, corrections, intro?)
patterns(title, items, intro?)
steps(title, items, intro?)
table(title | undefined, head, rows, caption?)
callout(tone, title, body, example?)
checklist(title, items, note?)
quiz(title, items, intro?)
compare(title, left, right)
flow(stepsList, options?)
noteGrid(title, items, intro?)
cueCard(...)  phraseBank(...)
```

Block types form a discriminated union, so the renderer in
`src/components/lesson/Blocks.tsx` switches on `block.type` and TypeScript refuses a missing case.
Adding a block type is therefore four safe steps: schema → builder → renderer → content.

## Adding content

1. **A lesson** — create `src/content/lessons/<name>.ts`, export an array, import it in
   `src/content/index.ts`. Routes (`/learn/<track>/<slug>`), search, progress and neighbours update
   automatically.
2. **A Part 1 topic** — add one `topic(...)` entry to `src/content/topics/part1-core.ts` or
   `part1-more.ts`. Nothing else changes.
3. **A cue card** — add a `cueCards` entry inside the relevant `Part2Category`.
4. **A Part 3 type** — add a `qtype(...)` entry; set `order` to slot it into the teaching sequence.
5. **A mistake** — add a `mist(...)` entry to `src/content/mistakes.ts`. The optional detector regex
   immediately feeds the evaluator and `/mistakes`.
6. **A resource** — append a `Resource` to `src/content/resources.ts`.

Then run `npm run validate:content`.

## What the validator enforces

`npm run validate:content` compiles the content modules standalone (via
`scripts/tsconfig.content.json`) and checks that:

- every lesson contains a Bangla explanation block, and each has a worked-example block
- every cue card has bullets, preparation notes, and both band models with **6.5 longer than 6**
- Band 6.5 models ground themselves in a concrete example
- every Part 3 type has ≥2 architectures and ≥4 sentence patterns
- every mistake category is valid and any `detect` regex compiles
- band models and Bangla notes are present where required
- **no internal link is dead** — every `/learn/...`, topic, resource or static route reference
  resolves to real content

## Curriculum order

The 17-stage path is the recommended sequence: understand the test → build a direct answer → extend
it → apply the story engine to Part 2 → move into Part 3 discussion, with grammar, vocabulary,
fluency and pronunciation arriving exactly when the learner hits the problem they solve. Band
6.0–6.5 shapes every decision: speakable vocabulary, twelve grammar structures that raise accuracy,
and Part 3 architectures built for balanced two-sided answers rather than academic essays.
