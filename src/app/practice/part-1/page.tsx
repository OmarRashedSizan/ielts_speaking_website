import type { Metadata } from "next";
import PracticePageBody from "@/components/practice/PracticePageBody";
import { generateQuestionSet } from "@/lib/practice/generator";

export const metadata: Metadata = {
  title: "Part 1 practice — timed interview answers",
  description:
    "Timed IELTS Speaking Part 1 practice: answer → reason → detail with a self-evaluation rubric and feedback on your English.",
};

export default async function Part1PracticePage({
  searchParams,
}: {
  searchParams: Promise<{ topics?: string; level?: string; count?: string; seed?: string; focus?: string }>;
}) {
  const query = await searchParams;
  const topics = query.topics ? query.topics.split(",").filter(Boolean) : [];
  const level = Number(query.level ?? 2);
  const count = Math.min(12, Math.max(3, Number(query.count ?? 5)));

  const set = generateQuestionSet({
    part: 1,
    topics,
    level: Number.isNaN(level) ? 2 : level,
    count: Number.isNaN(count) ? 5 : count,
    seed: query.seed ?? "part1-default",
  });

  const questions = "questions" in set ? set.questions : [];
  const items = questions.map((entry) => ({
    id: entry.id,
    question: entry.question,
    helper: `Part 1 · ${entry.topic}`,
    pattern: "Direct answer → reason (because) → small detail or example.",
    sourcePath: entry.sourcePath,
  }));

  return (
    <PracticePageBody
      part={1}
      items={items}
      speakSeconds={35}
      title="Part 1 practice"
      intro="Part 1 answers should last roughly 20–35 seconds: a direct answer, a reason, and one small detail. Do not answer with a single sentence, and do not deliver a memorised paragraph."
      lessonHref="/learn/part1/extending-short-answers"
      topicsHref="/topics/part-1"
      contextLabel={
        topics.length > 0 ? `Topics: ${topics.join(", ")} · level ${level}` : `All topics · level ${level}`
      }
    />
  );
}
