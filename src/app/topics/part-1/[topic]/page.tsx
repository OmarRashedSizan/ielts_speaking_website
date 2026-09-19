import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { Part1TopicView } from "@/components/topics/TopicViews";
import { part1Topics, topicBySlug } from "@/content";
import { Badge } from "@/components/ui/primitives";

export function generateStaticParams() {
  return part1Topics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) return { title: "Topic not found" };
  return {
    title: `${topic.title} — IELTS Speaking Part 1`,
    description: topic.summary,
    keywords: topic.tags,
  };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Part 1 topics", href: "/topics/part-1" },
          { label: topic.title },
        ]}
      />
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">Part 1 topic</Badge>
          {topic.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="mt-5">{topic.title}</h1>
        <p className="bn mt-2 text-lg text-ink-soft">{topic.banglaTitle}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">{topic.summary}</p>
      </div>
      <div className="mt-10">
        <Part1TopicView topic={topic} />
      </div>
    </div>
  );
}
