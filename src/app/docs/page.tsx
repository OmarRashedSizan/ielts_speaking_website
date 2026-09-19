import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import LessonBlocks from "@/components/lesson/Blocks";
import { SectionHeading, Stat, Badge, Panel } from "@/components/ui/primitives";
import { docSections } from "@/content/documentation";
import { contentStats } from "@/content";

export const metadata: Metadata = {
  title: "Documents & roadmap — how the platform is built",
  description:
    "The full written deliverable: architecture, folder structure, stack decisions, content schema, design system, page list, component architecture, curriculum, lesson structure, practice and progress architecture, mock test design, AI integration plan, responsive and accessibility strategy, deployment, roadmap and a quality self-check.",
  keywords: [
    "IELTS speaking platform architecture",
    "content schema",
    "design system",
    "accessibility",
    "roadmap",
  ],
};

const STATS = [
  { label: "Lessons", value: contentStats.lessons, sub: `${contentStats.tracks} tracks` },
  { label: "Part 1 topics", value: contentStats.topics, sub: `${contentStats.questions} worked questions` },
  { label: "Cue cards", value: contentStats.cueCards, sub: `${contentStats.categories} categories` },
  { label: "Part 3 types", value: contentStats.questionTypes, sub: "teaching order 1–19" },
  { label: "Mistake entries", value: contentStats.mistakes, sub: "8 categories" },
  { label: "Path stages", value: contentStats.stages, sub: "guided order" },
];

export default function DocsPage() {
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Documents" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Documents & roadmap"
        title="How Bolte Shikhi is built"
        intro="This is the full written deliverable for the platform: the architecture, the decisions behind it, the content model that teachers work in, and an honest review of what is finished and what comes next. It is written for the person who maintains the site after launch."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {STATS.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} sub={stat.sub} />
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Panel eyebrow="Contents" title="18 sections">
            <nav aria-label="Documentation sections">
              <ol className="space-y-1.5">
                {docSections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="flex items-baseline gap-2 rounded-[6px] px-2 py-1.5 text-sm text-ink-soft transition-colors hover:bg-canvas-deep hover:text-ink"
                    >
                      <span className="font-mono text-[11px] tabular-nums text-ink-muted">
                        {section.code}
                      </span>
                      <span>{section.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-ink-muted">
              The same document lives in the repository under{" "}
              <span className="mono-chip">docs/</span> for readers who prefer Markdown.
            </p>
          </Panel>
        </aside>

        <article className="min-w-0 space-y-14">
          {docSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <header className="border-b border-line pb-5">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="brand">Section {section.code}</Badge>
                  {section.banglaTitle ? (
                    <span className="bn text-sm text-ink-muted">{section.banglaTitle}</span>
                  ) : null}
                </div>
                <h2 className="mt-3 text-[1.7rem] leading-tight">{section.title}</h2>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-ink-soft">{section.summary}</p>
              </header>
              <div className="mt-8 space-y-8">
                <LessonBlocks blocks={section.blocks} />
              </div>
            </section>
          ))}

          <footer className="card p-6">
            <h2 className="text-lg">Where to go next</h2>
            <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
              If you are a learner rather than a maintainer, the reading order is different: start
              with the overview track, then follow the learning path. This page is the engineering
              and content record.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/learn/overview" className="btn btn-primary">
                Start with the overview
              </Link>
              <Link href="/path" className="btn btn-ghost">
                See the 17-stage path
              </Link>
              <Link href="/resources" className="btn btn-ghost">
                Resources and checklists
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
