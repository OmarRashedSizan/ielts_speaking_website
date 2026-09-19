import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { part2Categories } from "@/content";
import { Badge, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Part 2 cue cards — 23 categories with Band 6–6.5 stories",
  description:
    "IELTS Speaking Part 2 cue-card categories: idea lenses, story advice, vocabulary, sentence structures, model Band 6 and 6.5 answers and common mistakes.",
};

export default function Part2TopicsPage() {
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Topics" }, { label: "Part 2 cue cards" }]}
      />
      <SectionHeading
        as="h1"
        eyebrow="Part 2 categories"
        title="Twenty-three cue-card shapes — one story engine"
        intro="Every cue card is a person, a place, an object, an event or an experience. Learn the shape, then the story tells itself. Each category has an idea lens, story advice, vocabulary, structures, model answers at both levels and common mistakes."
        action={
          <Link href="/learn/part2" className="btn btn-secondary btn-sm">
            Part 2 lessons first →
          </Link>
        }
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {part2Categories.map((category) => (
          <li key={category.slug}>
            <Link href={`/topics/part-2/${category.slug}`} className="card card-interactive flex h-full flex-col p-5">
              <span className="flex items-start justify-between gap-2">
                <span className="font-serif text-lg leading-snug">{category.title}</span>
                <Badge tone="accent">{category.shape}</Badge>
              </span>
              <span className="bn mt-1 text-sm text-ink-muted">{category.banglaTitle}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{category.summary}</span>
              <span className="mt-3 text-xs text-ink-muted">
                {category.cueCards.length} full cue cards · {category.vocabulary.length} vocabulary items
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
