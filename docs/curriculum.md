# Curriculum, practice and progress

_This file mirrors sections 08–12 of the `/docs` page in the running site._

## The ten tracks (56 lessons)

| Track | Lessons | What it delivers |
| --- | --- | --- |
| Speaking Overview | 4 | How the exam runs, how you are scored, what Band 6 and 6.5 mean, how to use the platform |
| Part 1 | 5 | Direct answer + reason + small detail; WH questions; extension; sentence building |
| Part 2 | 7 | Cue cards, the one-minute preparation, idea generation by story shape, the seven-step story engine, keyword notes, sentence engineering |
| Part 3 | 3 | Discussion skills, the sentence toolkit, the architectures this part demands |
| Strategy | 3 | What to do with nothing to say, thinking in English instead of translating, unfamiliar topics |
| Exam | 4 | Band 6 vs 6.5 characteristics, self-evaluation, mock test guide, exam-day routine |
| Grammar for Speaking | 15 | Tenses, modals, comparison, connectors, relative clauses, conditionals, passive, gerunds, questions, articles, prepositions, agreement |
| Vocabulary | 3 | Learning in chunks, upgrading overused words, collocations you can actually say |
| Fluency | 5 | What fluency means, thinking while speaking, natural fillers, self-correction, connecting ideas |
| Pronunciation | 7 | Intelligibility first, word stress, chunking, connected speech, endings, difficult sounds, intonation |

## Lesson structure

Every lesson page follows one predictable teaching sequence:

1. **What you will learn** — three or four goals written as abilities
2. **Why this matters in the exam** — the examiner behaviour that makes it worth your time
3. **The concept** — plain English, short paragraphs
4. **Bangla explanation** — the same idea in simple Bangla with one takeaway line
5. **Worked examples** — realistic IELTS-style answers with notes on why they work
6. **Bad vs better** — the errors Bangladeshi learners actually make, with corrections and reasons
7. **Sentence patterns and construction steps** — reusable frames, in order
8. **Practice and challenge** — speak-it-now tasks, timed where the exam is timed
9. **Common mistakes and quick revision**, then ← Previous / Mark complete / Next →

Where a model answer appears it is labelled a worked example and is always followed by the pattern
behind it. The product rule is repeated on the landing page and in every Part 2 lesson:
**don't memorise answers, learn how to build answers.**

## Practice architecture

| Step | What happens |
| --- | --- |
| 1 | The set is assembled from the question bank, or from the generator using chosen topics, level and count |
| 2 | The timer runs: Part 1 → 35 s per question, Part 2 → 60 s preparation + 120 s speaking, Part 3 → 60 s per question |
| 3 | Speech is captured in the browser; a live transcript appears where speech recognition exists, otherwise the learner types what they said |
| 4 | Rule-based evaluation runs locally: pace, sentence length, vocabulary variety, fillers, connectors, complexity and 60 mistake detectors |
| 5 | Feedback returns five criteria, each with strengths, problems, improvements, a drill and three next-practice actions |
| 6 | The session is written to progress: skill signals, streak and completion, all in the browser |

**Five progressive levels:** Foundation → Answer extension → Development → Flexible speaking → Mock
speaking. The levels change timers, question types, preparation time and how much development is
expected before the answer is accepted.

## Progress architecture

| Piece | Detail |
| --- | --- |
| Storage key | `bolte-shikhi.progress.v1` (versioned so migrations are explicit) |
| Writes | Debounced 220 ms — a running timer must not write every second |
| Reads | Sanitised shape check; corrupted data is dropped, never trusted |
| Derived | `summariseProgress(state, lessonMeta)` produces weak areas and the recommended next lesson |
| Streak | Day-based with a grace day, because learners practise in bursts |
| Band meters | 5.5 → target 6.5, shown as movement along a range — never a predicted result |

The dashboard answers six questions: progress by part, progress by skill, streak, weak areas, the
single recommended next lesson, and a short speaking overview written in simple Bangla.

## Mock test architecture

A **seeded** generator builds a full test — the same seed always produces the same paper, which
matters for teachers and for retaking a specific test.

1. Part 1: 4–5 topic areas drawn from the 45-topic bank, two or three questions each, no repeats
2. Part 2: one random cue card, always with the 60-second preparation timer
3. Part 3: 4–6 questions from types related to the cue card's theme, moving description → opinion → society
4. Structured feedback report: per-criterion observations, the strongest moment, the two things to fix
   first, and a recommended lesson for each

The report never prints a band number. It reports what was observed and pairs every observation with
a fix — the mock test exists to rehearse the sequence under time pressure, not to promise a result.
