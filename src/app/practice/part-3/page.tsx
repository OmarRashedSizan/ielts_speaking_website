import type { Metadata } from "next";
import PracticePageBody from "@/components/practice/PracticePageBody";
import { generateQuestionSet } from "@/lib/practice/generator";

export const metadata: Metadata = {
  title: "Part 3 practice — discussion and opinion answers",
  description:
    "Timed IELTS Speaking Part 3 practice: opinion → reason → example → contrast, with self-evaluation and structured feedback on development and grammar.",
};

export default async function Part3PracticePage({
  searchParams,
}: {
  searchParams: Promise<{ topics?: string; level?: string; count?: string; seed?: string; focus?: string }>;
}) {
  const query = await searchParams;
  const topics = query.topics ? query.topics.split(",").filter(Boolean) : [];
  const level = Number(query.level ?? 4);
  const count = Math.min(10, Math.max(3, Number(query.count ?? 5)));

  const set = generateQuestionSet({
    part: 3,
    topics,
    level: Number.isNaN(level) ? 4 : level,
    count: Number.isNaN(count) ? 5 : count,
    seed: query.seed ?? "part3-default",
  });

  const questions = "questions" in set ? set.questions : [];
  const items = questions.map((entry) => ({
    id: entry.id,
    question: entry.question,
    helper: `Part 3 · ${entry.topic}`,
    pattern: "Opinion → reason → example → (contrast or qualification).",
    sourcePath: entry.sourcePath,
  }));

  return (
    <PracticePageBody
      part={3}
      items={items}
      speakSeconds={60}
      title="Part 3 practice"
      intro="Part 3 questions are discussion questions, not personal ones. Extend the idea rather than listing words: opinion, reason, explanation, example, and where possible a contrast or a qualification."
      lessonHref="/learn/part3/part3-answer-architecture"
      topicsHref="/topics/part-3"
      contextLabel={
        topics.length > 0 ? `Topics: ${topics.join(", ")} · level ${level}` : `All types · level ${level}`
      }
    />
  );
}
