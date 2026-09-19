import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { part1Topics } from "@/content";
import { Badge, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Part 1 topics — 40 question sets with Band 6–6.5 answers",
  description:
    "Every common IELTS Speaking Part 1 topic: vocabulary, examiner questions with Bangla meaning, idea seeds, sentence patterns, Band 6 and 6.5 answers and common Bangladeshi mistakes.",
};

export default function Part1TopicsPage() {
  const groups = [
    { label: "Home & people", slugs: ["home", "hometown", "family", "friends", "neighbours"] },
    { label: "Study, work & routine", slugs: ["studies", "work", "school", "daily-routine", "mornings", "evenings", "sleep", "weekends", "free-time"] },
    { label: "Food, weather & seasons", slugs: ["food", "cooking", "weather", "seasons", "flowers", "nature"] },
    { label: "Leisure & media", slugs: ["music", "movies", "books", "reading", "photography", "sports", "exercise"] },
    { label: "Technology & modern life", slugs: ["technology", "mobile-phones", "internet", "social-media", "shopping", "clothes"] },
    { label: "Travel, culture & celebrations", slugs: ["transport", "travel", "holidays", "festivals", "gifts", "birthdays"] },
    { label: "Places, animals & memories", slugs: ["animals", "parks", "teachers", "childhood", "future-plans", "names"] },
  ];

  const remaining = part1Topics
    .filter((topic) => !groups.some((group) => group.slugs.includes(topic.slug)))
    .map((topic) => topic.slug);
  if (remaining.length > 0) groups.push({ label: "More topics", slugs: remaining });

  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Topics" }, { label: "Part 1 topics" }]}
      />
      <SectionHeading
        as="h1"
        eyebrow="Part 1 topic bank"
        title="Every topic, with the language you actually need"
        intro="For each topic: topic vocabulary, examiner questions with Bangla meaning, what the examiner is checking, idea seeds, a sentence pattern, a Band 6 answer, a Band 6.5 answer, common mistakes and practice follow-ups. Learn the pattern — never the answer."
        action={
          <Link href="/learn/part1" className="btn btn-secondary btn-sm">
            Part 1 lessons first →
          </Link>
        }
      />

      <div className="mt-10 space-y-10">
        {groups.map((group) => {
          const topics = group.slugs
            .map((slug) => part1Topics.find((topic) => topic.slug === slug))
            .filter((topic): topic is (typeof part1Topics)[number] => Boolean(topic));
          if (topics.length === 0) return null;
          return (
            <section key={group.label}>
              <h2 className="mb-4 flex items-baseline gap-3 font-serif text-lg">
                {group.label}
                <span className="text-xs font-normal text-ink-muted">{topics.length} topics</span>
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic) => (
                  <li key={topic.slug}>
                    <Link href={`/topics/part-1/${topic.slug}`} className="card card-interactive block h-full p-4">
                      <span className="flex items-start justify-between gap-2">
                        <span className="font-medium text-ink">{topic.title}</span>
                        <Badge>{topic.questions.length} Q</Badge>
                      </span>
                      <span className="bn mt-1 block text-sm text-ink-muted">{topic.banglaTitle}</span>
                      <span className="mt-2 block text-xs leading-relaxed text-ink-soft">
                        {topic.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
