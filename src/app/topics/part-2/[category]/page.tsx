import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { Part2CategoryView } from "@/components/topics/TopicViews";
import { categoryBySlug, part2Categories } from "@/content";
import { Badge } from "@/components/ui/primitives";

/** Only slugs produced by generateStaticParams exist: unknown URLs return a real 404,
 *  and the content ships with the build rather than being rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return part2Categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: `${category.title} — IELTS Speaking Part 2`,
    description: category.summary,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Part 2 cue cards", href: "/topics/part-2" },
          { label: category.title },
        ]}
      />
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">Part 2 · {category.shape}</Badge>
          <Badge>{category.cueCards.length} cue cards</Badge>
        </div>
        <h1 className="mt-5">{category.title}</h1>
        <p className="bn mt-2 text-lg text-ink-soft">{category.banglaTitle}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">{category.summary}</p>
      </div>
      <div className="mt-10">
        <Part2CategoryView category={category} />
      </div>
    </div>
  );
}
