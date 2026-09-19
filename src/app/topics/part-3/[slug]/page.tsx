import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { Part3TypeView } from "@/components/topics/TopicViews";
import { part3Types, questionTypeBySlug } from "@/content";
import { Badge } from "@/components/ui/primitives";

export function generateStaticParams() {
  return part3Types.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = questionTypeBySlug(slug);
  if (!type) return { title: "Question type not found" };
  return {
    title: `${type.title} questions — IELTS Speaking Part 3`,
    description: type.meaning,
  };
}

export default async function QuestionTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = questionTypeBySlug(slug);
  if (!type) notFound();

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Part 3 question types", href: "/topics/part-3" },
          { label: type.title },
        ]}
      />
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">Part 3 · type {type.order}</Badge>
          <Badge>{type.structures.length} structures</Badge>
        </div>
        <h1 className="mt-5">{type.title} questions</h1>
        <p className="bn mt-2 text-lg text-ink-soft">{type.banglaTitle}</p>
        <p className="mt-4 font-serif text-lg italic leading-snug text-ink-soft">
          “{type.sampleQuestion}”
        </p>
      </div>
      <div className="mt-10">
        <Part3TypeView type={type} />
      </div>
    </div>
  );
}
