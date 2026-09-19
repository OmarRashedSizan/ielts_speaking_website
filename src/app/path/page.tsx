import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { lessonByRef, pathStages } from "@/content";
import { Badge, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Learning path — the recommended sequence",
  description:
    "The recommended 17-stage IELTS Speaking learning sequence: from understanding the test to full mock tests, with the lessons and practice for each stage.",
};

export default function PathPage() {
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Learning path" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Recommended sequence"
        title="Follow the path, or jump to your weak spot"
        intro="This order exists for a reason: sentence building comes before answer structures, and idea generation comes before Part 2 stories. If you already have a weak area, jump straight to it — the path is a guide, not a lock."
        action={
          <Link href="/progress" className="btn btn-secondary btn-sm">
            See where I am →
          </Link>
        }
      />

      <ol className="mt-10 space-y-4">
        {pathStages.map((stage) => {
          const lessons = stage.lessonRefs
            .map((ref) => lessonByRef(ref.track, ref.slug))
            .filter((lesson): lesson is NonNullable<typeof lesson> => Boolean(lesson));
          return (
            <li key={stage.id} className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-start gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-200 bg-brand-50 font-serif text-sm font-semibold text-brand-700"
                >
                  {String(stage.order).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-serif text-lg">{stage.title}</h2>
                    <span className="bn text-sm text-ink-muted">{stage.banglaTitle}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{stage.purpose}</p>
                  <p className="mt-3 rounded-[6px] bg-canvas-deep px-3 py-2 text-sm text-ink">
                    <span className="eyebrow mr-2">Outcome</span>
                    {stage.outcome}
                  </p>

                  {lessons.length > 0 ? (
                    <ul className="mt-4 space-y-1.5">
                      {lessons.map((lesson) => (
                        <li key={lesson.slug}>
                          <Link
                            href={`/learn/${lesson.track}/${lesson.slug}`}
                            className="flex items-baseline justify-between gap-3 rounded-[6px] px-2 py-1.5 text-sm text-ink-soft hover:bg-canvas-deep hover:text-ink"
                          >
                            <span className="truncate">
                              {lesson.order}. {lesson.title}
                            </span>
                            <span className="shrink-0 text-[11px] text-ink-muted">
                              {lesson.minutes} min
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-xs text-ink-muted">
                      Practice stage — no reading required, just a timer and your voice.
                    </p>
                  )}

                  {stage.cta ? (
                    <Link href={stage.cta.href} className="btn btn-secondary btn-sm mt-4">
                      {stage.cta.label}
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="card mt-10 p-6">
        <Badge tone="accent">Study rhythm</Badge>
        <h2 className="mt-3 text-lg">45 minutes a day beats 5 hours on Sunday</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Six to eight weeks at 45 minutes a day is enough to move from a hesitant Band 5.5 to a
          controlled 6.0–6.5, provided you speak every single day. A typical day: 15 minutes of
          lesson reading, 20 minutes of speaking and self-evaluation, 10 minutes on your mistake
          list.
        </p>
      </div>
    </div>
  );
}
