import Link from "next/link";
import type { Metadata } from "next";
import { lessonsForTrack, tracks } from "@/content";
import { Badge, SectionHeading } from "@/components/ui/primitives";
import { LEVEL_SHORT } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Learn — all IELTS Speaking tracks",
  description:
    "Ten learning tracks covering the speaking overview, Part 1, Part 2, Part 3, idea generation, grammar for speaking, vocabulary, fluency, pronunciation and exam skills.",
};

export default function LearnHubPage() {
  return (
    <div className="shell py-12 lg:py-16">
      <SectionHeading
        as="h1"
        eyebrow="Lesson library"
        title="Learn the system, then practise it"
        intro="Every track is a sequence: read a short concept, see a weak answer fixed, learn the pattern, then say it out loud. Start with the Speaking Overview if you are new — it takes about 30 minutes."
        action={
          <Link href="/path" className="btn btn-secondary btn-sm">
            Recommended order →
          </Link>
        }
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {tracks.map((track) => {
          const items = lessonsForTrack(track.id);
          const minutes = items.reduce((sum, lesson) => sum + lesson.minutes, 0);
          return (
            <article key={track.id} className="card p-5 sm:p-6">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="brand">{track.code}</Badge>
                    {track.part > 0 ? <Badge>Part {track.part}</Badge> : <Badge>All parts</Badge>}
                    <Badge>
                      {items.length} lessons · {minutes} min
                    </Badge>
                  </div>
                  <h2 className="mt-3 font-serif text-xl">
                    <Link href={`/learn/${track.id}`} className="hover:text-brand-700">
                      {track.title}
                    </Link>
                  </h2>
                  <p className="bn mt-1 text-sm text-ink-muted">{track.banglaTitle}</p>
                </div>
              </header>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{track.blurb}</p>

              <ol className="mt-4 space-y-1.5">
                {items.slice(0, 4).map((lesson) => (
                  <li key={lesson.slug}>
                    <Link
                      href={`/learn/${track.id}/${lesson.slug}`}
                      className="flex items-baseline justify-between gap-3 rounded-[6px] px-2 py-1.5 text-sm text-ink-soft hover:bg-canvas-deep hover:text-ink"
                    >
                      <span className="truncate">
                        {lesson.order}. {lesson.title}
                      </span>
                      <span className="shrink-0 text-[11px] uppercase tracking-wide text-ink-muted">
                        L{lesson.level} {LEVEL_SHORT[lesson.level]}
                      </span>
                    </Link>
                  </li>
                ))}
                {items.length > 4 ? (
                  <li className="px-2 pt-1 text-xs text-ink-muted">
                    + {items.length - 4} more lessons in this track
                  </li>
                ) : null}
              </ol>

              <Link href={`/learn/${track.id}`} className="mt-4 inline-block text-sm font-medium text-brand-700">
                Open track →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
