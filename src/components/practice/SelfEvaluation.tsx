"use client";

import { useState } from "react";
import { SKILLS, type SkillId } from "@/lib/progress/types";
import { cn } from "@/lib/utils";

const QUESTIONS: Record<SkillId, string[]> = {
  fluency: ["Did I pause too much?", "Did I repeat words?"],
  grammar: ["Did I use different sentence structures?", "Were my sentences understandable?"],
  vocabulary: ["Did I use appropriate vocabulary?", "Did I repeat the same words?"],
  pronunciation: ["Was my speech understandable?"],
  development: ["Did I explain my ideas?", "Did I give an example or detail?"],
};

const LABELS: Record<SkillId, string> = {
  fluency: "Fluency",
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  pronunciation: "Pronunciation",
  development: "Development",
};

export interface SelfEvaluationValue {
  scores: Partial<Record<SkillId, number>>;
  answers: Record<string, "yes" | "partly" | "no">;
  note: string;
}

export default function SelfEvaluation({
  onSubmit,
  submitLabel = "Save self-evaluation",
}: {
  onSubmit: (value: SelfEvaluationValue) => void;
  submitLabel?: string;
}) {
  const [scores, setScores] = useState<Partial<Record<SkillId, number>>>({});
  const [answers, setAnswers] = useState<Record<string, "yes" | "partly" | "no">>({});
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = SKILLS.reduce((sum, skill) => sum + QUESTIONS[skill].length, 0);

  return (
    <section className="rounded-lg border border-line bg-paper p-5">
      <header className="mb-4">
        <p className="eyebrow mb-1.5">Self-evaluation</p>
        <h3 className="text-[1.15rem]">Judge your own answer honestly</h3>
        <p className="mt-2 text-sm text-ink-soft">
          This is the step most learners skip — and the reason they repeat the same mistakes for
          months. Be strict: strictness is what moves you from 6.0 to 6.5.
        </p>
      </header>

      <div className="space-y-5">
        {SKILLS.map((skill) => (
          <div key={skill}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-medium text-ink">{LABELS[skill]}</p>
              <p className="text-xs tabular-nums text-ink-muted">
                {scores[skill] ? `${scores[skill]}/5` : "not rated"}
              </p>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  key={score}
                  type="button"
                  aria-pressed={scores[skill] === score}
                  onClick={() => setScores((prev) => ({ ...prev, [skill]: score }))}
                  className={cn(
                    "rounded-[6px] border py-2 text-sm font-medium transition-colors",
                    scores[skill] === score
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-line bg-paper text-ink-soft hover:border-line-strong",
                  )}
                >
                  {score}
                </button>
              ))}
            </div>
            <div className="mt-2 space-y-1.5">
              {QUESTIONS[skill].map((question) => (
                <div
                  key={question}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-[6px] bg-canvas-deep px-3 py-2"
                >
                  <span className="text-sm text-ink-soft">{question}</span>
                  <span className="flex gap-1">
                    {(["yes", "partly", "no"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={answers[question] === option}
                        onClick={() => setAnswers((prev) => ({ ...prev, [question]: option }))}
                        className={cn(
                          "rounded-[4px] border px-2 py-1 text-xs font-medium capitalize transition-colors",
                          answers[question] === option
                            ? option === "yes"
                              ? "border-brand-300 bg-brand-50 text-brand-700"
                              : option === "partly"
                                ? "border-accent-200 bg-accent-50 text-accent-700"
                                : "border-danger-300 bg-danger-50 text-danger-700"
                            : "border-line bg-paper text-ink-muted hover:text-ink",
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <label htmlFor="self-eval-note" className="text-sm font-medium text-ink">
            One thing I will fix next time
          </label>
          <textarea
            id="self-eval-note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={2}
            placeholder="e.g. I said “I am agree” again — next time: “I agree”."
            className="mt-2 w-full resize-y rounded-[6px] border border-line bg-paper px-3 py-2.5 text-sm outline-none focus:border-brand-400"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => {
            onSubmit({ scores, answers, note });
            setSaved(true);
          }}
        >
          {submitLabel}
        </button>
        <span className="text-xs text-ink-muted">
          {answeredCount}/{totalQuestions} checklist items answered
          {saved ? " · saved to your progress" : ""}
        </span>
      </div>
    </section>
  );
}
