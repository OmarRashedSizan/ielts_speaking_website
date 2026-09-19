"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Badge, EmptyState, Meter, Panel, Stat } from "@/components/ui/primitives";
import {
  skillLabel,
  summariseProgress,
  type LessonMeta,
} from "@/lib/progress/selectors";
import { cn, formatClock } from "@/lib/utils";

export default function ProgressDashboard({ lessonMeta }: { lessonMeta: LessonMeta[] }) {
  const { state, hydrated, streak, reset } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const summary = useMemo(() => summariseProgress(state, lessonMeta), [state, lessonMeta]);

  if (!hydrated) {
    return (
      <div className="space-y-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="animate-pulse-soft h-32 rounded-lg border border-line bg-paper" />
        ))}
      </div>
    );
  }

  const started = summary.lessonsDone > 0 || summary.practiceSessions > 0;

  if (!started) {
    return (
      <div className="space-y-5">
        <EmptyState
          title="Your dashboard is empty — that is normal on day one"
          body="Progress appears here as soon as you mark a lesson complete or record a practice answer. Start with the test overview, then do one Part 1 practice set today."
          action={
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/learn/overview/how-the-test-works" className="btn btn-primary btn-sm">
                Start the first lesson
              </Link>
              <Link href="/practice/part-1" className="btn btn-secondary btn-sm">
                Try Part 1 practice
              </Link>
            </div>
          }
        />
        <Panel title="How progress is calculated" eyebrow="Transparency">
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>· Lesson progress counts the lessons you mark complete in each track.</li>
            <li>
              · Skill scores combine completed lessons with your own self-evaluation scores from
              practice answers — the honest signal of what still feels hard.
            </li>
            <li>· Everything is stored on this device until you create an account.</li>
          </ul>
        </Panel>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label="Current level"
          value={`Band ${estimateBand(summary.skills)}`}
          sub="Self-assessed estimate from your work — not an IELTS score"
        />
        <Stat label="Target" value="6.0–6.5" sub="The level this curriculum is built for" />
        <Stat
          label="Practice streak"
          value={`${streak} day${streak === 1 ? "" : "s"}`}
          sub={`${summary.activeDays} active days recorded`}
        />
        <Stat
          label="Speaking logged"
          value={`${summary.speakingMinutes} min`}
          sub={`${summary.practiceSessions} answers · ${summary.mocksTaken} mock tests`}
        />
      </section>

      <Panel
        title="Your speaking journey"
        eyebrow="Overall progress"
        action={
          <Link href="/practice" className="btn btn-secondary btn-sm">
            Practise now
          </Link>
        }
      >
        <div className="space-y-4">
          <Meter
            value={summary.overallPercent}
            label="Overall curriculum"
            hint={`${summary.lessonsDone}/${summary.lessonsTotal} lessons · ${summary.overallPercent}%`}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {summary.parts.map((part) => (
              <Meter
                key={part.part}
                value={part.percent}
                label={part.label}
                hint={`${part.lessonsDone}/${part.lessonsTotal} lessons · ${part.practiceSessions} answers`}
                tone={part.percent < 35 ? "accent" : "brand"}
              />
            ))}
          </div>
        </div>
      </Panel>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Panel title="Skills measured against the four criteria" eyebrow="Where you stand">
          <ul className="space-y-4">
            {summary.skills.map((skill) => (
              <li key={skill.id}>
                <Meter
                  value={skill.percent}
                  label={skillLabel(skill.id)}
                  hint={`${skill.percent}%`}
                />
                <p className="mt-1 text-xs text-ink-muted">{skill.evidence}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <div className="space-y-5">
          <Panel title="Recommended next" eyebrow="Do this next">
            {summary.recommended.length === 0 ? (
              <p className="text-sm text-ink-soft">
                Nothing outstanding — take a mock test to find new gaps.
              </p>
            ) : (
              <ol className="space-y-3">
                {summary.recommended.map((item) => (
                  <li key={item.href + item.title}>
                    <Link
                      href={item.href}
                      className="block rounded-[6px] border border-line bg-canvas-deep px-3 py-2.5 transition-colors hover:border-line-strong"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ink">{item.title}</span>
                        <Badge tone={item.kind === "practice" ? "accent" : "brand"}>
                          {item.kind}
                        </Badge>
                      </span>
                      <span className="mt-0.5 block text-xs text-ink-muted">{item.reason}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </Panel>

          <Panel title="Weak areas" eyebrow="Fix these first">
            {summary.weakAreas.length === 0 ? (
              <p className="text-sm text-ink-soft">
                No weak area detected yet. Record more practice answers so the dashboard has evidence.
              </p>
            ) : (
              <ul className="space-y-2">
                {summary.weakAreas.map((area) => (
                  <li key={area.label}>
                    <Link href={area.href} className="flex items-start justify-between gap-3 rounded-[6px] px-2 py-1.5 hover:bg-canvas-deep">
                      <span>
                        <span className="block text-sm font-medium text-ink">{area.label}</span>
                        <span className="text-xs text-ink-muted">{area.detail}</span>
                      </span>
                      <span aria-hidden="true" className="text-ink-muted">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Recent practice answers" eyebrow="History">
          {state.practice.length === 0 ? (
            <p className="text-sm text-ink-soft">
              No answers recorded yet. Every practice session you complete is logged here.
            </p>
          ) : (
            <ul className="divide-y divide-line">
              {state.practice.slice(0, 6).map((entry) => {
                const scores = Object.values(entry.scores ?? {}) as number[];
                const average = scores.length
                  ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
                  : "—";
                return (
                  <li key={entry.id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="truncate text-sm text-ink">{entry.question}</p>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        Part {entry.part} · {formatClock(entry.secondsSpoken)} · {entry.wordCount} words ·{" "}
                        {new Date(entry.at).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={cn("tag", Number(average) >= 4 ? "tag-brand" : "tag-accent")}>
                      self {average}/5
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </Panel>

        <Panel title="Completed lessons" eyebrow="Curriculum">
          {state.completedLessons.length === 0 ? (
            <p className="text-sm text-ink-soft">
              No lessons marked complete yet. Use “Mark complete” at the end of each lesson.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {state.completedLessons.slice(-8).reverse().map((ref) => {
                const [track, slug] = ref.split("/");
                const meta = lessonMeta.find((m) => m.track === track && m.slug === slug);
                return (
                  <li key={ref}>
                    <Link
                      href={`/learn/${track}/${slug}`}
                      className="flex items-center justify-between gap-3 rounded-[6px] px-2 py-1.5 text-sm text-ink-soft hover:bg-canvas-deep"
                    >
                      <span className="truncate">{meta?.title ?? ref}</span>
                      <span aria-hidden="true" className="text-brand-500">
                        ✓
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="mt-4 border-t border-line pt-4">
            {confirmReset ? (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-danger-700">
                  This erases lessons, streak, notes and practice history on this device.
                </span>
                <button type="button" className="btn btn-secondary btn-sm" onClick={reset}>
                  Yes, reset everything
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setConfirmReset(false)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-ghost btn-sm -ml-2"
                onClick={() => setConfirmReset(true)}
              >
                Reset my progress data
              </button>
            )}
          </div>
        </Panel>
      </div>
    </div>
  );
}

/** Deliberately conservative: this is a self-study estimate, not a band score. */
function estimateBand(skills: { percent: number }[]): string {
  if (skills.length === 0) return "—";
  const average = skills.reduce((sum, skill) => sum + skill.percent, 0) / skills.length;
  if (average >= 80) return "6.5+";
  if (average >= 60) return "6.0–6.5";
  if (average >= 40) return "5.5–6.0";
  if (average >= 20) return "5.0–5.5";
  return "5.0";
}
