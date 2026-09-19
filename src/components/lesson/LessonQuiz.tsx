"use client";

import { useState } from "react";
import type { QuizBlock } from "@/content/schema";
import { cn } from "@/lib/utils";

/**
 * Quick-check quiz. Optional and lightweight — never blocks progress.
 * Correct/incorrect is explained immediately, which is where the learning is.
 */
export default function LessonQuiz({ block }: { block: QuizBlock }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const answered = Object.keys(answers).length;
  const correct = block.items.filter((item, index) => answers[index] === item.answer).length;

  return (
    <section className="rounded-lg border border-line bg-paper p-5">
      <p className="eyebrow mb-1.5">Quick check</p>
      <h3 className="text-[1.15rem]">{block.title}</h3>
      {block.intro ? <p className="mt-2 text-sm text-ink-soft">{block.intro}</p> : null}

      <ol className="mt-5 space-y-5">
        {block.items.map((item, index) => {
          const chosen = answers[index];
          const isRevealed = revealed[index];
          return (
            <li key={item.question}>
              <p className="font-medium text-ink">{item.question}</p>
              <div className="mt-2 space-y-1.5">
                {item.options.map((option, optionIndex) => {
                  const isChosen = chosen === optionIndex;
                  const isCorrect = item.answer === optionIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, [index]: optionIndex }));
                        setRevealed((prev) => ({ ...prev, [index]: true }));
                      }}
                      aria-pressed={isChosen}
                      className={cn(
                        "flex w-full items-start gap-2.5 rounded-[6px] border px-3 py-2.5 text-left text-sm transition-colors",
                        isRevealed && isCorrect
                          ? "border-brand-300 bg-brand-50 text-ink"
                          : isRevealed && isChosen && !isCorrect
                            ? "border-danger-300 bg-danger-50 text-ink"
                            : isChosen
                              ? "border-line-strong bg-canvas-deep text-ink"
                              : "border-line bg-paper text-ink-soft hover:border-line-strong hover:text-ink",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[2px] grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line-strong text-[11px] font-semibold"
                      >
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
              {isRevealed ? (
                <p className="mt-2.5 border-l-2 border-brand-300 bg-brand-50/60 px-3 py-2 text-[13px] leading-relaxed text-ink-soft">
                  {item.explain}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>

      {answered === block.items.length ? (
        <p className="mt-5 rounded-[6px] border border-line bg-canvas-deep px-3 py-2 text-sm text-ink">
          You got <strong>{correct}</strong> of {block.items.length} right.{" "}
          {correct === block.items.length
            ? "Move on to the practice prompts below."
            : "Re-read the explanation for the ones you missed — then redo them tomorrow."}
        </p>
      ) : null}
    </section>
  );
}
