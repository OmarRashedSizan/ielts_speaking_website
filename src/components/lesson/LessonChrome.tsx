import Link from "next/link";
import type { Lesson, Track } from "@/content/schema";
import { Badge } from "@/components/ui/primitives";
import { LEVEL_LABELS } from "@/lib/utils";

export function LessonHeader({ lesson, track }: { lesson: Lesson; track?: Track }) {
  return (
    <header className="border-b border-line pb-8">
      <div className="flex flex-wrap items-center gap-2">
        {track ? (
          <Badge tone="brand">
            {track.code} · {track.title}
          </Badge>
        ) : null}
        <Badge>{LEVEL_LABELS[lesson.level]}</Badge>
        <Badge>{lesson.minutes} min read</Badge>
      </div>

      <h1 className="mt-5">{lesson.title}</h1>
      <p className="bn mt-2 text-lg text-ink-soft">{lesson.banglaTitle}</p>
      <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-soft">
        {lesson.summary}
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-lg border border-line bg-paper p-5">
          <p className="eyebrow mb-2.5">What you will learn</p>
          <ul className="space-y-2">
            {lesson.goals.map((goal) => (
              <li key={goal} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-[3px] text-brand-500">
                  ✓
                </span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-canvas-deep p-5">
          <p className="eyebrow mb-2.5">Where this shows up</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            {lesson.examUse ??
              "This skill appears in every part of the speaking test — you will use it in Parts 1, 2 and 3."}
          </p>
          {lesson.tags.length ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {lesson.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function LessonNav({
  previous,
  next,
}: {
  previous?: { href: string; title: string };
  next?: { href: string; title: string };
}) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2"
    >
      {previous ? (
        <Link href={previous.href} className="card card-interactive p-4">
          <span className="eyebrow">← Previous lesson</span>
          <span className="mt-1 block font-medium text-ink">{previous.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link href={next.href} className="card card-interactive p-4 sm:text-right">
          <span className="eyebrow">Next lesson →</span>
          <span className="mt-1 block font-medium text-ink">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
