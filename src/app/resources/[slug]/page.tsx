import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import LessonBlocks from "@/components/lesson/Blocks";
import { resourceBySlug, resources } from "@/content";
import { Badge } from "@/components/ui/primitives";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceBySlug(slug);
  if (!resource) return { title: "Resource not found" };
  return { title: `${resource.title} — Resource`, description: resource.summary };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resourceBySlug(slug);
  if (!resource) notFound();

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: resource.title }]}
      />
      <article className="max-w-[46rem]">
        <div className="flex items-center gap-2">
          <Badge tone="brand">{resource.kind}</Badge>
          <Badge>{resource.minutes} min</Badge>
        </div>
        <h1 className="mt-5">{resource.title}</h1>
        <p className="bn mt-2 text-lg text-ink-soft">{resource.banglaTitle}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">{resource.summary}</p>
        <div className="mt-10">
          <LessonBlocks blocks={resource.blocks} />
        </div>
      </article>
    </div>
  );
}
