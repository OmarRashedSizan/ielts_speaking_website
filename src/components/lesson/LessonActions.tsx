"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { cn } from "@/lib/utils";

/** Mark-complete control, visit tracking and practice prompt save buttons. */
export function MarkComplete({ track, slug }: { track: string; slug: string }) {
  const { isLessonComplete, toggleLessonComplete, registerVisit, hydrated } = useProgress();
  const complete = isLessonComplete(track, slug);

  useEffect(() => {
    registerVisit(track, slug);
  }, [track, slug, registerVisit]);

  return (
    <button
      type="button"
      aria-pressed={complete}
      onClick={() => toggleLessonComplete(track, slug)}
      className={cn("btn", complete ? "btn-secondary" : "btn-primary")}
      disabled={!hydrated}
    >
      {complete ? "✓ Completed — click to undo" : "Mark lesson complete"}
    </button>
  );
}

export function PracticePrompts({
  track,
  slug,
  prompts,
}: {
  track: string;
  slug: string;
  prompts: string[];
}) {
  const { state, toggleSavedQuestion, hydrated } = useProgress();

  if (prompts.length === 0) return null;

  return (
    <section className="rounded-lg border border-line bg-paper p-5">
      <header className="mb-4">
        <p className="eyebrow mb-1.5">Practice out loud</p>
        <h3 className="text-[1.15rem]">Say these before you move on</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Answer each one aloud, using the structure from this lesson. Save any question you found
          hard — it appears on your dashboard for revision.
        </p>
      </header>
      <ul className="divide-y divide-line">
        {prompts.map((prompt) => {
          const id = `${track}/${slug}/${prompt.slice(0, 24)}`;
          const saved = state.savedQuestions.includes(id);
          return (
            <li key={prompt} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <p className="text-sm text-ink">{prompt}</p>
              <button
                type="button"
                onClick={() => toggleSavedQuestion(id)}
                disabled={!hydrated}
                aria-pressed={saved}
                className={cn(
                  "shrink-0 rounded-[4px] border px-2 py-1 text-xs transition-colors",
                  saved
                    ? "border-accent-200 bg-accent-50 text-accent-700"
                    : "border-line bg-paper text-ink-muted hover:text-ink",
                )}
              >
                {saved ? "Saved" : "Save to revise"}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-ink-muted">
        Want a timer and feedback? Try a{" "}
        <Link href="/practice" className="underline">
          timed practice set
        </Link>
        .
      </p>
    </section>
  );
}
