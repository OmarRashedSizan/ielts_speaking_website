"use client";

import Link from "next/link";
import type { EvaluationResult } from "@/lib/practice/evaluate";
import { Badge } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const VERDICT_STYLE: Record<string, { label: string; className: string }> = {
  strength: { label: "Working well", className: "tag-brand" },
  steady: { label: "Developing", className: "tag-accent" },
  priority: { label: "Priority to fix", className: "tag-danger" },
};

export default function EvaluationPanel({
  result,
  onRetry,
}: {
  result: EvaluationResult;
  onRetry?: () => void;
}) {
  return (
    <section className="animate-rise space-y-4">
      <header className="rounded-lg border border-line bg-paper p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="eyebrow mb-1">Feedback report</p>
            <h3 className="text-[1.15rem]">What to keep, what to fix</h3>
          </div>
          <Badge tone={result.method === "ai" ? "brand" : "neutral"}>
            {result.method === "ai" ? "AI-assisted analysis" : "Rule-based analysis"}
          </Badge>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-ink-muted">{result.disclaimer}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Words", value: result.metrics.words },
            { label: "Speaking time", value: `${result.metrics.secondsSpoken}s` },
            { label: "Words / min", value: result.metrics.wordsPerMinute || "—" },
            {
              label: "Complex sentences",
              value: `${Math.round(result.metrics.complexSentenceRatio * 100)}%`,
            },
            { label: "Fillers", value: result.metrics.fillerCount },
            { label: "Connectors", value: result.metrics.connectorCount },
            { label: "Unique content words", value: result.metrics.uniqueContentWords },
            { label: "Sentences", value: result.metrics.sentences },
          ].map((metric) => (
            <div key={metric.label} className="rounded-[6px] bg-canvas-deep px-3 py-2">
              <dt className="text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                {metric.label}
              </dt>
              <dd className="mt-0.5 font-serif text-lg text-ink">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {result.criteria.map((criterion) => {
          const verdict = VERDICT_STYLE[criterion.verdict] ?? VERDICT_STYLE.steady;
          return (
            <article key={criterion.id} className="card p-5">
              <header className="flex items-center justify-between gap-3">
                <h4 className="font-serif text-base font-semibold">{criterion.label}</h4>
                <span className={cn("tag", verdict.className)}>{verdict.label}</span>
              </header>

              <div className="mt-3 space-y-3 text-sm">
                {criterion.strengths.length > 0 ? (
                  <div>
                    <p className="eyebrow mb-1">Strengths</p>
                    <ul className="space-y-1">
                      {criterion.strengths.map((item) => (
                        <li key={item} className="flex gap-2 text-ink-soft">
                          <span aria-hidden="true" className="text-brand-500">
                            +
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {criterion.problems.length > 0 ? (
                  <div>
                    <p className="eyebrow mb-1">Problems</p>
                    <ul className="space-y-1">
                      {criterion.problems.map((item) => (
                        <li key={item} className="flex gap-2 text-ink-soft">
                          <span aria-hidden="true" className="text-danger-500">
                            !
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {criterion.improvements.length > 0 ? (
                  <div>
                    <p className="eyebrow mb-1">How to improve</p>
                    <ul className="space-y-1">
                      {criterion.improvements.map((item) => (
                        <li key={item} className="flex gap-2 text-ink-soft">
                          <span aria-hidden="true" className="text-accent-500">
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {criterion.drills.length > 0 ? (
                  <div className="rounded-[6px] border border-line bg-canvas-deep px-3 py-2">
                    <p className="eyebrow mb-1">Drill</p>
                    <p className="text-ink-soft">{criterion.drills[0]}</p>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {result.detectedMistakes.length > 0 ? (
        <section className="card p-5">
          <h4 className="font-serif text-base font-semibold">
            Mistakes detected in this answer
          </h4>
          <ul className="mt-3 divide-y divide-line">
            {result.detectedMistakes.map((mistake) => (
              <li key={mistake.id} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm">
                  <span className="text-danger-700 line-through decoration-danger-300">
                    {mistake.wrong}
                  </span>
                  <span className="mx-2 text-ink-muted">→</span>
                  <span className="font-medium text-brand-700">{mistake.right}</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{mistake.why}</p>
              </li>
            ))}
          </ul>
          <Link href="/mistakes" className="btn btn-ghost btn-sm mt-3 -ml-2">
            Open the mistake library →
          </Link>
        </section>
      ) : null}

      <section className="rounded-lg border border-brand-200 bg-brand-50 p-5">
        <p className="eyebrow mb-2">Your next practice</p>
        <ol className="space-y-2">
          {result.nextPractice.map((item, index) => (
            <li key={item} className="flex gap-3 text-sm text-ink">
              <span
                aria-hidden="true"
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-brand-300 bg-paper text-[11px] font-semibold text-brand-700"
              >
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
        {onRetry ? (
          <button type="button" className="btn btn-primary btn-sm mt-4" onClick={onRetry}>
            Answer this question again
          </button>
        ) : null}
      </section>
    </section>
  );
}
