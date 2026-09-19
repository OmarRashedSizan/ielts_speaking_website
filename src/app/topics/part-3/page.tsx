import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { part3Types } from "@/content";
import { Badge, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Part 3 question types — 18 discussion patterns",
  description:
    "Why, opinion, comparison, past vs present, future prediction, advantages, causes, effects, solutions, hypothetical and society-level questions — with structures and worked Band 6–6.5 answers.",
};

export default function Part3TopicsPage() {
  const types = [...part3Types].sort((a, b) => a.order - b.order);
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Topics" }, { label: "Part 3 question types" }]}
      />
      <SectionHeading
        as="h1"
        eyebrow="Part 3 question types"
        title="Recognise the question type, and the answer structure follows"
        intro="Part 3 is not about knowing more facts. It is about recognising what kind of question you were asked — a cause, a comparison, a prediction, a hypothetical — and reaching for the right structure in the first second."
        action={
          <Link href="/learn/part3/part3-sentence-toolkit" className="btn btn-secondary btn-sm">
            Sentence toolkit first →
          </Link>
        }
      />

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {types.map((type) => (
          <li key={type.slug}>
            <Link href={`/topics/part-3/${type.slug}`} className="card card-interactive flex h-full flex-col p-5">
              <span className="flex items-start justify-between gap-2">
                <span className="eyebrow">Type {type.order}</span>
                <Badge tone="accent">{type.structures.length} structures</Badge>
              </span>
              <span className="mt-2 block font-serif text-lg leading-snug">{type.title}</span>
              <span className="bn mt-1 block text-sm text-ink-muted">{type.banglaTitle}</span>
              <span className="mt-2 block flex-1 text-sm italic leading-relaxed text-ink-soft">
                “{type.sampleQuestion}”
              </span>
              <span className="mt-3 block text-xs text-ink-muted">
                {type.practice.length} practice questions · worked example
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
