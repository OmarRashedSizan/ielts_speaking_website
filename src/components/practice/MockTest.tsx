"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { MockTest as MockTestData } from "@/lib/practice/generator";
import SpeakingTimer, { type TimerPhase } from "./SpeakingTimer";
import SelfEvaluation, { type SelfEvaluationValue } from "./SelfEvaluation";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Badge, Meter } from "@/components/ui/primitives";
import { cn, formatClock } from "@/lib/utils";

type StageId = "intro" | "part1" | "part2" | "part3" | "report";

/**
 * Full mock test: Parts 1–3 in exam conditions with a single clock, then a
 * structured self-evaluation report. Deliberately does not fake a band score —
 * it summarises the evidence the learner produced and points at the next fix.
 */
export default function MockTest({ data, seed }: { data: MockTestData; seed: string }) {
  const { recordMock } = useProgress();
  const [stage, setStage] = useState<StageId>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [part1Scores, setPart1Scores] = useState<SelfEvaluationValue["scores"]>({});
  const [part2Scores, setPart2Scores] = useState<SelfEvaluationValue["scores"]>({});
  const [part3Scores, setPart3Scores] = useState<SelfEvaluationValue["scores"]>({});
  const [notes, setNotes] = useState("");
  const [elapsedTotal, setElapsedTotal] = useState(0);

  const part1Questions = useMemo(
    () => data.part1.flatMap((area) => area.questions),
    [data.part1],
  );
  const part3Questions = useMemo(
    () => data.part3.flatMap((area) => area.questions),
    [data.part3],
  );

  const part1Phases: TimerPhase[] = part1Questions.map((question, index) => ({
    id: `p1-${index}`,
    label: `Question ${index + 1} of ${part1Questions.length}`,
    seconds: 30,
    hint: `“${question.question}” — answer, reason, small detail.`,
  }));

  const currentStages: { id: StageId; label: string }[] = [
    { id: "intro", label: "Introduction" },
    { id: "part1", label: "Part 1 · Interview" },
    { id: "part2", label: "Part 2 · Long turn" },
    { id: "part3", label: "Part 3 · Discussion" },
    { id: "report", label: "Report" },
  ];

  const finish = (scores: SelfEvaluationValue["scores"]) => {
    recordMock({
      cueCardId: data.cueCard?.id ?? "unknown",
      totalSeconds: elapsedTotal,
      scores: { ...part1Scores, ...part2Scores, ...scores },
      notes,
    });
    setStage("report");
  };

  return (
    <div className="space-y-5">
      <nav aria-label="Mock test stages" className="flex flex-wrap gap-2">
        {currentStages.map((entry, index) => (
          <span
            key={entry.id}
            className={cn(
              "tag",
              stage === entry.id ? "tag-brand" : "text-ink-muted",
            )}
          >
            {index + 1}. {entry.label}
          </span>
        ))}
      </nav>

      {stage === "intro" ? (
        <section className="card p-6">
          <Badge tone="accent">Mock test {seed.slice(0, 6)}</Badge>
          <h2 className="mt-3 text-xl">Full IELTS Speaking simulation</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            This runs like the real thing: Part 1 interview, Part 2 long turn with one minute of
            preparation, then Part 3 discussion. Take roughly 12–14 minutes. Speak out loud, record
            yourself if you can, and do not stop to write answers.
          </p>
          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[6px] border border-line bg-canvas-deep p-4">
              <dt className="eyebrow">Part 1</dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {data.part1.length} topic areas · {part1Questions.length} questions
              </dd>
            </div>
            <div className="rounded-[6px] border border-line bg-canvas-deep p-4">
              <dt className="eyebrow">Part 2</dt>
              <dd className="mt-1 text-sm text-ink-soft">
                {data.cueCard ? data.cueCard.topic : "No cue card available"}
              </dd>
            </div>
            <div className="rounded-[6px] border border-line bg-canvas-deep p-4">
              <dt className="eyebrow">Part 3</dt>
              <dd className="mt-1 text-sm text-ink-soft">{part3Questions.length} discussion questions</dd>
            </div>
          </dl>
          <button type="button" className="btn btn-primary mt-5" onClick={() => setStage("part1")}>
            Begin the test
          </button>
        </section>
      ) : null}

      {stage === "part1" ? (
        <section className="space-y-4">
          <SpeakingTimer
            key={`p1-${questionIndex}`}
            phases={[part1Phases[questionIndex]]}
            autoStart
            onComplete={() => {
              if (questionIndex + 1 < part1Questions.length) {
                setQuestionIndex(questionIndex + 1);
                setElapsedTotal((total) => total + 30);
              } else {
                setQuestionIndex(0);
                setElapsedTotal((total) => total + 30);
                setStage("part2");
              }
            }}
            onPhaseChange={() => {
              /* the examiner asks the next question when the timer ends */
            }}
          />
          <p className="text-xs text-ink-muted">
            In the real test you do not see the questions — the examiner asks them. Use the timer as
            your cue to finish each answer.
          </p>
        </section>
      ) : null}

      {stage === "part2" && data.cueCard ? (
        <section className="space-y-4">
          <article className="rounded-lg border border-line-strong bg-paper p-5 shadow-raise">
            <p className="eyebrow mb-2">Cue card · {data.cueCard.topic}</p>
            <h2 className="font-serif text-xl leading-snug">{data.cueCard.prompt}</h2>
            <p className="mt-3 text-sm font-medium text-ink-muted">You should say:</p>
            <ul className="mt-1 space-y-1 text-sm text-ink-soft">
              {data.cueCard.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true">·</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
          <SpeakingTimer
            phases={[
              {
                id: "prep",
                label: "Preparation",
                seconds: 60,
                hint: "Keywords only: WHO / WHERE / WHEN / WHAT / WHY / FEELING.",
              },
              {
                id: "speak",
                label: "Long turn",
                seconds: 120,
                hint: "Keep going until the examiner stops you. Two full minutes is the target.",
              },
            ]}
            autoStart
            onComplete={() => {
              setElapsedTotal((total) => total + 180);
              setStage("part3");
            }}
          />
        </section>
      ) : null}

      {stage === "part2" && !data.cueCard ? (
        <p className="card p-5 text-sm text-ink-soft">
          No cue card could be loaded. Continue to Part 3.
          <button type="button" className="btn btn-secondary btn-sm ml-3" onClick={() => setStage("part3")}>
            Continue
          </button>
        </p>
      ) : null}

      {stage === "part3" ? (
        <section className="space-y-4">
          <div className="card p-5">
            <p className="eyebrow mb-2">Discussion questions</p>
            <ol className="space-y-2">
              {part3Questions.map((question, index) => (
                <li
                  key={question.id}
                  className={cn(
                    "rounded-[6px] border px-3 py-2 text-sm",
                    index === questionIndex
                      ? "border-brand-300 bg-brand-50 text-ink"
                      : "border-line bg-paper text-ink-soft",
                  )}
                >
                  <span className="mr-2 font-medium">{index + 1}.</span>
                  {question.question}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-ink-muted">
              In the real test the examiner follows up on whatever you just said. Notice which
              answer prompts the next question — that is exactly how Part 3 flows.
            </p>
          </div>
          <SpeakingTimer
            key={`p3-${questionIndex}`}
            phases={[
              {
                id: `p3-${questionIndex}`,
                label: `Question ${questionIndex + 1} of ${part3Questions.length}`,
                seconds: 45,
                hint: "Opinion → reason → example → contrast. Keep it developing.",
              },
            ]}
            autoStart
            onComplete={() => {
              setElapsedTotal((total) => total + 45);
              if (questionIndex + 1 < part3Questions.length) setQuestionIndex(questionIndex + 1);
              else {
                setQuestionIndex(0);
                setStage("report");
              }
            }}
          />
        </section>
      ) : null}

      {stage === "report" ? (
        <section className="space-y-5">
          <div className="card p-5">
            <p className="eyebrow mb-1">Mock test report</p>
            <h2 className="text-xl">You have finished the test</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Total timed speaking: about {formatClock(elapsedTotal)}.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Meter value={100} label="Part 1 completed" hint="done" />
              <Meter value={100} label="Part 2 completed" hint="done" />
              <Meter value={100} label="Part 3 completed" hint="done" />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <SelfEvaluation
              onSubmit={(value) => setPart1Scores(value.scores)}
              submitLabel="Save Part 1 evaluation"
            />
            <SelfEvaluation
              onSubmit={(value) => setPart2Scores(value.scores)}
              submitLabel="Save Part 2 evaluation"
            />
            <SelfEvaluation
              onSubmit={(value) => {
                setPart3Scores(value.scores);
                finish(value.scores);
              }}
              submitLabel="Save Part 3 and close the test"
            />
          </div>

          <div className="card p-5">
            <label htmlFor="mock-notes" className="text-sm font-medium text-ink">
              What went wrong? (be blunt)
            </label>
            <textarea
              id="mock-notes"
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Part 2: I froze after 40 seconds. Part 3: I repeated “because” three times."
              className="mt-2 w-full resize-y rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-brand-400"
            />
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/progress" className="btn btn-primary btn-sm">
                See this on my dashboard
              </Link>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setStage("intro");
                  setElapsedTotal(0);
                }}
              >
                Run the test again
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
