import Link from "next/link";
import type {
  Part1Topic,
  Part2Category,
  Part3QuestionType,
} from "@/content/schema";
import Tabs from "@/components/ui/Tabs";
import { Badge, Panel } from "@/components/ui/primitives";

function VocabularyTable({
  items,
}: {
  items: { word: string; pos: string; bangla: string; example: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-paper">
      <table className="data-table min-w-[36rem]">
        <thead>
          <tr>
            <th scope="col">Word / phrase</th>
            <th scope="col">Type</th>
            <th scope="col">Meaning</th>
            <th scope="col">Say it like this</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.word}>
              <td className="font-medium text-ink">{item.word}</td>
              <td className="text-xs uppercase tracking-wide text-ink-muted">{item.pos}</td>
              <td className="bn text-[15px]">{item.bangla}</td>
              <td className="text-ink-soft">{item.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CorrectionList({
  items,
}: {
  items: { wrong: string; right: string; why: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.wrong} className="overflow-hidden rounded-lg border border-line bg-paper">
          <p className="answer-block answer-block-weak rounded-none border-l-0 border-b border-line">
            <span className="mr-2 font-semibold text-danger-700">✗</span>
            {item.wrong}
          </p>
          <p className="answer-block rounded-none border-l-0 border-b border-line">
            <span className="mr-2 font-semibold text-brand-700">✓</span>
            {item.right}
          </p>
          <p className="px-4 py-2.5 text-[13px] leading-relaxed text-ink-soft">{item.why}</p>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* Part 1 topic                                                                */
/* -------------------------------------------------------------------------- */

export function Part1TopicView({ topic }: { topic: Part1Topic }) {
  return (
    <Tabs
      items={[
        {
          id: "questions",
          label: "Questions & answers",
          meta: `${topic.questions.length}`,
          content: (
            <div className="space-y-6">
              {topic.questions.map((question, index) => (
                <article key={question.question} className="card p-5">
                  <header>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="brand">Q{index + 1}</Badge>
                      {question.practice.length > 0 ? (
                        <Badge>{question.practice.length} follow-ups</Badge>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-serif text-lg leading-snug">{question.question}</h3>
                    <p className="bn mt-1 text-[15px] text-ink-soft">{question.bangla}</p>
                  </header>

                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-[6px] border border-line bg-canvas-deep p-3">
                      <p className="eyebrow mb-1.5">What the examiner is checking</p>
                      <p className="text-sm text-ink-soft">{question.examinerIntent}</p>
                      <p className="eyebrow mb-1.5 mt-3">Idea seeds (pick two)</p>
                      <ul className="space-y-1 text-sm text-ink-soft">
                        {question.ideaSeeds.map((seed) => (
                          <li key={seed} className="flex gap-2">
                            <span aria-hidden="true" className="text-brand-500">
                              ·
                            </span>
                            {seed}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[6px] border border-line p-3">
                      <p className="eyebrow mb-1.5">Sentence-building pattern</p>
                      <p className="mono-chip block whitespace-pre-wrap break-words">
                        {question.pattern.template}
                      </p>
                      <p className="mt-2 text-sm text-ink-soft">{question.pattern.example}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="eyebrow mb-1.5">Band 6 answer</p>
                      <p className="answer-block text-[15px]">{question.band6}</p>
                    </div>
                    {question.band65 ? (
                      <div>
                        <p className="eyebrow mb-1.5">
                          Band 6.5 answer — notice it is not “fancier”, just more developed
                        </p>
                        <p className="answer-block answer-block-accent text-[15px]">
                          {question.band65}
                        </p>
                      </div>
                    ) : null}
                    {question.corrections.length > 0 ? (
                      <div>
                        <p className="eyebrow mb-1.5">Common Bangladeshi learner mistakes here</p>
                        <CorrectionList items={question.corrections} />
                      </div>
                    ) : null}
                    {question.alternatives.length > 0 ? (
                      <div>
                        <p className="eyebrow mb-1.5">Useful alternatives</p>
                        <div className="flex flex-wrap gap-1.5">
                          {question.alternatives.map((alternative) => (
                            <span key={alternative} className="tag">
                              {alternative}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {question.practice.length > 0 ? (
                      <div>
                        <p className="eyebrow mb-1.5">Practise these follow-ups</p>
                        <ul className="space-y-1 text-sm text-ink-soft">
                          {question.practice.map((item) => (
                            <li key={item}>· {item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ),
        },
        {
          id: "vocabulary",
          label: "Vocabulary",
          meta: `${topic.vocabulary.length}`,
          content: <VocabularyTable items={topic.vocabulary} />,
        },
        {
          id: "phrases",
          label: "Natural phrases",
          meta: `${topic.phrases.length}`,
          content: (
            <ul className="grid gap-3 sm:grid-cols-2">
              {topic.phrases.map((item) => (
                <li key={item.phrase} className="card p-4">
                  <p className="mono-chip inline-block">{item.phrase}</p>
                  <p className="bn mt-2 text-sm text-ink-soft">{item.bangla}</p>
                  <p className="mt-1.5 text-sm text-ink">{item.example}</p>
                </li>
              ))}
            </ul>
          ),
        },
        {
          id: "practice",
          label: "Practise this topic",
          content: (
            <Panel title={`Drill “${topic.title}” out loud`} eyebrow="Practice">
              <p className="text-sm text-ink-soft">
                Answer each question twice: the first time using the pattern, the second time
                adding a detail you did not use before. Then record yourself and listen back.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/practice/part-1?topics=${encodeURIComponent(topic.title)}&level=2&count=5`}
                  className="btn btn-primary btn-sm"
                >
                  Start a timed session
                </Link>
                <Link href="/practice/part-1" className="btn btn-secondary btn-sm">
                  Choose other topics
                </Link>
                <Link href="/mistakes" className="btn btn-ghost btn-sm">
                  Check my common mistakes
                </Link>
              </div>
              <ul className="mt-5 space-y-1.5 text-sm text-ink-soft">
                {topic.questions.flatMap((question) => [question.question, ...question.practice]).map(
                  (item) => (
                    <li key={item}>· {item}</li>
                  ),
                )}
              </ul>
            </Panel>
          ),
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Part 2 category                                                             */
/* -------------------------------------------------------------------------- */

export function Part2CategoryView({ category }: { category: Part2Category }) {
  return (
    <Tabs
      items={[
        {
          id: "cards",
          label: "Cue cards & answers",
          meta: `${category.cueCards.length}`,
          content: (
            <div className="space-y-6">
              {category.cueCards.map((card, index) => (
                <article key={card.prompt} className="card p-5">
                  <Badge tone="brand">Cue card {index + 1}</Badge>
                  <h3 className="mt-3 font-serif text-lg leading-snug">{card.prompt}</h3>
                  <p className="mt-2 text-sm font-medium text-ink-muted">You should say:</p>
                  <ul className="mt-1 space-y-1 text-sm text-ink-soft">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden="true">·</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <p className="eyebrow mb-2">1-minute preparation notes</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {card.prepNotes.map((note) => (
                        <li key={note} className="tag bg-canvas-deep">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="eyebrow mb-1.5">Band 6 answer</p>
                      <p className="answer-block text-[15px]">{card.band6}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-1.5">Band 6.5 answer</p>
                      <p className="answer-block answer-block-accent text-[15px]">{card.band65}</p>
                    </div>
                    <div className="rounded-[6px] border border-line bg-canvas-deep p-3">
                      <p className="eyebrow mb-1.5">Why the 6.5 answer reaches that level</p>
                      <ul className="space-y-1 text-sm text-ink-soft">
                        {card.whyItWorks.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span aria-hidden="true" className="text-brand-500">
                              ✓
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ),
        },
        {
          id: "lens",
          label: "Idea lens",
          content: (
            <div className="grid gap-4 lg:grid-cols-2">
              <Panel title={`How to generate ideas for a ${category.shape} cue card`} eyebrow="Framework">
                <ol className="space-y-2">
                  {category.ideaLens.prompts.map((prompt, index) => (
                    <li key={prompt} className="flex gap-3 text-sm text-ink-soft">
                      <span className="font-medium text-ink">{index + 1}.</span>
                      {prompt}
                    </li>
                  ))}
                </ol>
              </Panel>
              <Panel title="What kind of story works here" eyebrow="Strategy">
                <ul className="space-y-2 text-sm text-ink-soft">
                  {category.storyAdvice.map((advice) => (
                    <li key={advice} className="flex gap-2">
                      <span aria-hidden="true" className="text-brand-500">
                        →
                      </span>
                      {advice}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-ink-muted">
                  Resource:{" "}
                  <Link href="/learn/part2/universal-story-engine" className="underline">
                    the universal story engine
                  </Link>
                </p>
              </Panel>
            </div>
          ),
        },
        {
          id: "language",
          label: "Vocabulary & structures",
          content: (
            <div className="space-y-6">
              <VocabularyTable items={category.vocabulary} />
              <Panel title="Sentence structures that work here" eyebrow="Structures">
                <ul className="divide-y divide-line">
                  {category.structures.map((structure) => (
                    <li key={structure.template} className="py-3 first:pt-0 last:pb-0">
                      <p className="mono-chip inline-block whitespace-pre-wrap break-words">
                        {structure.template}
                      </p>
                      <p className="mt-1.5 text-sm text-ink-soft">{structure.example}</p>
                      {structure.note ? (
                        <p className="mt-1 text-xs text-ink-muted">{structure.note}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          ),
        },
        {
          id: "mistakes",
          label: "Mistakes & practice",
          content: (
            <div className="space-y-6">
              <Panel title="Common mistakes in this category" eyebrow="Fix these">
                <CorrectionList items={category.corrections} />
              </Panel>
              <Panel
                title="Practice cue cards"
                eyebrow="Practice"
                action={
                  <Link
                    href={`/practice/part-2?topics=${encodeURIComponent(category.title)}&level=3&count=2`}
                    className="btn btn-primary btn-sm"
                  >
                    Start timed practice
                  </Link>
                }
              >
                <ul className="space-y-2 text-sm text-ink-soft">
                  {category.practiceCards.map((card) => (
                    <li key={card} className="flex gap-2">
                      <span aria-hidden="true">·</span>
                      {card}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          ),
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Part 3 question type                                                        */
/* -------------------------------------------------------------------------- */

export function Part3TypeView({ type }: { type: Part3QuestionType }) {
  return (
    <div className="space-y-6">
      <Panel title="What this question really means" eyebrow="Understand first">
        <p className="text-sm leading-relaxed text-ink-soft">{type.meaning}</p>
        <p className="eyebrow mb-1.5 mt-4">What the examiner expects</p>
        <ul className="space-y-1.5 text-sm text-ink-soft">
          {type.examinerExpects.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-brand-500">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="bn-block mt-4 space-y-2 border-t border-line pt-4 text-sm">
          {type.bangla.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title={type.ideaTechnique.name} eyebrow="Idea generation">
          <ol className="space-y-2">
            {type.ideaTechnique.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-ink-soft">
                <span className="font-medium text-ink">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </Panel>
        <Panel title="Sentence patterns" eyebrow="Say it like this">
          <ul className="flex flex-wrap gap-1.5">
            {type.patterns.map((pattern) => (
              <li key={pattern} className="mono-chip">
                {pattern}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-muted">
            Full toolkit:{" "}
            <Link href="/learn/part3/part3-sentence-toolkit" className="underline">
              Part 3 sentence toolkit
            </Link>
          </p>
        </Panel>
      </div>

      <Panel title="Recommended answer structures" eyebrow="Architecture">
        <div className="grid gap-3 sm:grid-cols-2">
          {type.structures.map((structure) => (
            <div key={structure.name} className="rounded-[6px] border border-line bg-canvas-deep p-3.5">
              <p className="text-sm font-medium text-ink">{structure.name}</p>
              <p className="mono-chip mt-2 inline-block whitespace-pre-wrap break-words">
                {structure.outline}
              </p>
              <p className="mt-2 text-xs text-ink-soft">{structure.when}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Worked example" eyebrow="Model">
        <p className="font-serif text-lg leading-snug">{type.worked.question}</p>
        <div className="mt-4 space-y-2">
          {type.worked.breakdown.map((part) => (
            <div key={part.label} className="flex flex-col gap-1 rounded-[6px] bg-canvas-deep px-3 py-2 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="eyebrow shrink-0 sm:w-28">{part.label}</span>
              <span className="text-sm text-ink">{part.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          <div>
            <p className="eyebrow mb-1.5">Band 6 answer</p>
            <p className="answer-block text-[15px]">{type.worked.band6}</p>
          </div>
          <div>
            <p className="eyebrow mb-1.5">Band 6.5 answer</p>
            <p className="answer-block answer-block-accent text-[15px]">{type.worked.band65}</p>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Common mistakes" eyebrow="Avoid">
          <CorrectionList items={type.corrections} />
        </Panel>
        <Panel
          title="Practice questions"
          eyebrow="Your turn"
          action={
            <Link
              href={`/practice/part-3?topics=${encodeURIComponent(type.title)}&level=4&count=5`}
              className="btn btn-primary btn-sm"
            >
              Practice this type
            </Link>
          }
        >
          <ul className="space-y-2 text-sm text-ink-soft">
            {type.practice.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">·</span>
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
