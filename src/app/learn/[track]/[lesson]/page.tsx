import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import LessonBlocks from "@/components/lesson/Blocks";
import { LessonHeader, LessonNav } from "@/components/lesson/LessonChrome";
import { MarkComplete, PracticePrompts } from "@/components/lesson/LessonActions";
import { lessonByRef, lessons, lessonNeighbours, trackById } from "@/content";
import { Panel } from "@/components/ui/primitives";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ track: lesson.track, lesson: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}): Promise<Metadata> {
  const { track, lesson } = await params;
  const entry = lessonByRef(track, lesson);
  if (!entry) return { title: "Lesson not found" };
  return {
    title: `${entry.title} — IELTS Speaking`,
    description: entry.summary,
    keywords: entry.tags,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}) {
  const { track, lesson } = await params;
  const entry = lessonByRef(track, lesson);
  if (!entry) notFound();

  const trackEntry = trackById(entry.track);
  const { previous, next } = lessonNeighbours(entry.track, entry.slug);

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: trackEntry?.title ?? entry.track, href: `/learn/${entry.track}` },
          { label: entry.title },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="min-w-0">
          <LessonHeader lesson={entry} track={trackEntry} />

          <div className="mt-10">
            <LessonBlocks blocks={entry.blocks} />
          </div>

          {entry.practice?.length ? (
            <div className="mt-10">
              <PracticePrompts track={entry.track} slug={entry.slug} prompts={entry.practice} />
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-lg border border-line bg-paper p-5">
            <MarkComplete track={entry.track} slug={entry.slug} />
            <Link href={`/practice/part-${trackEntry?.part || 1}`} className="btn btn-secondary">
              Practise this now
            </Link>
            <span className="text-xs text-ink-muted">
              Marking complete updates your dashboard and streak.
            </span>
          </div>

          <div className="mt-8">
            <LessonNav
              previous={previous ? { href: `/learn/${previous.track}/${previous.slug}`, title: previous.title } : undefined}
              next={next ? { href: `/learn/${next.track}/${next.slug}`, title: next.title } : undefined}
            />
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <Panel title="Quick revision" eyebrow="Before you leave">
            <ul className="space-y-2 text-sm text-ink-soft">
              {entry.goals.map((goal) => (
                <li key={goal} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[3px] text-brand-500">
                    ✓
                  </span>
                  {goal}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Fix it in writing" eyebrow="Mistakes">
            <p className="text-sm leading-relaxed text-ink-soft">
              Grammar and vocabulary slips from lessons like this live in the mistake library, with
              corrections and Bangla explanations.
            </p>
            <Link href="/mistakes" className="btn btn-secondary btn-sm mt-3">
              Open mistake library
            </Link>
          </Panel>

          <Panel title="Repeat the loop" eyebrow="Method">
            <ol className="space-y-2 text-sm text-ink-soft">
              <li>1. Read the concept (this page).</li>
              <li>2. Say the example sentences aloud twice.</li>
              <li>3. Answer the practice prompts without reading.</li>
              <li>4. Record yourself and listen for the target structure.</li>
            </ol>
          </Panel>
        </aside>
      </div>
    </div>
  );
}
