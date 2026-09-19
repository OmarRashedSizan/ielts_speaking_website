import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { resources } from "@/content";
import { Badge, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Resources — plans, checklists and references",
  description:
    "Practical IELTS Speaking resources: a six-week study plan, a final-week revision plan, an exam-day checklist, a simplified band-descriptor reference and a phrase bank you can actually say.",
};

export default function ResourcesPage() {
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Resources"
        title="Plans, checklists and references"
        intro="The material you keep coming back to: study plans you can follow day by day, checklists for the exam room, and reference sheets worth printing."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <li key={resource.slug}>
            <Link href={`/resources/${resource.slug}`} className="card card-interactive flex h-full flex-col p-5">
              <span className="flex items-center justify-between gap-2">
                <Badge tone={resource.kind === "plan" ? "brand" : "accent"}>{resource.kind}</Badge>
                <span className="text-xs text-ink-muted">{resource.minutes} min</span>
              </span>
              <span className="mt-3 block font-serif text-lg leading-snug">{resource.title}</span>
              <span className="bn mt-1 block text-sm text-ink-muted">{resource.banglaTitle}</span>
              <span className="mt-2 block flex-1 text-sm leading-relaxed text-ink-soft">
                {resource.summary}
              </span>
              <span className="mt-3 block text-sm font-medium text-brand-700">Open →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
