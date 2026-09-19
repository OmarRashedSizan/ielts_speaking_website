import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { lessonsForTrack, trackById, tracks } from "@/content";
import { Badge, Panel } from "@/components/ui/primitives";
import { LEVEL_LABELS } from "@/lib/utils";

/** Only slugs produced by generateStaticParams exist: unknown URLs return a real 404,
 *  and the content ships with the build rather than being rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return tracks.map((track) => ({ track: track.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: trackId } = await params;
  const track = trackById(trackId);
  if (!track) return { title: "Track not found" };
  return {
    title: `${track.title} — IELTS Speaking lessons`,
    description: track.blurb,
  };
}

export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: trackId } = await params;
  const track = trackById(trackId);
  if (!track) notFound();

  const lessons = lessonsForTrack(track.id);
  const totalMinutes = lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
  const index = tracks.findIndex((entry) => entry.id === track.id);
  const nextTrack = tracks[index + 1];

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Learn", href: "/learn" }, { label: track.title }]}
      />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brand">{track.code}</Badge>
            {track.part > 0 ? <Badge>Part {track.part}</Badge> : <Badge>All parts</Badge>}
            <Badge>
              {lessons.length} lessons · {totalMinutes} min total
            </Badge>
          </div>
          <h1 className="mt-5">{track.title}</h1>
          <p className="bn mt-2 text-lg text-ink-soft">{track.banglaTitle}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{track.blurb}</p>

          <ol className="mt-9 space-y-3">
            {lessons.map((lesson, lessonIndex) => (
              <li key={lesson.slug}>
                <article className="card card-interactive p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="eyebrow">Lesson {lessonIndex + 1}</span>
                    <Badge>{LEVEL_LABELS[lesson.level]}</Badge>
                    <Badge>{lesson.minutes} min</Badge>
                  </div>
                  <h2 className="mt-2.5 font-serif text-lg leading-snug">
                    <Link href={`/learn/${track.id}/${lesson.slug}`} className="hover:text-brand-700">
                      {lesson.title}
                    </Link>
                  </h2>
                  <p className="bn mt-1 text-sm text-ink-muted">{lesson.banglaTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{lesson.summary}</p>
                  <ul className="mt-3 space-y-1 text-xs text-ink-soft">
                    {lesson.goals.slice(0, 2).map((goal) => (
                      <li key={goal} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand-500">
                          ✓
                        </span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/learn/${track.id}/${lesson.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-brand-700"
                  >
                    Open lesson →
                  </Link>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <Panel title="After this track" eyebrow="Next step">
            {nextTrack ? (
              <Link href={`/learn/${nextTrack.id}`} className="card card-interactive block p-4">
                <span className="eyebrow">{nextTrack.code}</span>
                <span className="mt-1 block font-medium text-ink">{nextTrack.title}</span>
                <span className="mt-1 block text-xs text-ink-muted">{nextTrack.blurb}</span>
              </Link>
            ) : (
              <p className="text-sm text-ink-soft">
                This is the final track. Move on to{" "}
                <Link href="/practice/mock" className="underline">
                  full mock tests
                </Link>
                .
              </p>
            )}
          </Panel>

          <Panel title="Practise alongside" eyebrow="Practice">
            <ul className="space-y-2 text-sm">
              {track.part > 0 ? (
                <li>
                  <Link href={`/practice/part-${track.part}`} className="text-brand-700 underline">
                    Timed Part {track.part} practice →
                  </Link>
                </li>
              ) : null}
              <li>
                <Link href="/practice" className="text-brand-700 underline">
                  Topic practice generator →
                </Link>
              </li>
              <li>
                <Link href="/mistakes" className="text-brand-700 underline">
                  Mistake library →
                </Link>
              </li>
            </ul>
          </Panel>

          <Panel title="How long will this take?" eyebrow="Planning">
            <p className="text-sm leading-relaxed text-ink-soft">
              Read a lesson in {Math.round(totalMinutes / Math.max(lessons.length, 1))}–15 minutes,
              then spend double that time speaking. Learners following the full path at 45 minutes a
              day usually finish the core curriculum in six to eight weeks.
            </p>
          </Panel>
        </aside>
      </div>
    </div>
  );
}
