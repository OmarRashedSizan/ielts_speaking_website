/**
 * Builds the global search corpus from the content registry.
 *
 * Computed once per server process (module-level singleton) and queried by
 * /api/search. If the corpus moves into a database later, only this file and
 * the route handler change.
 */
import {
  cueCardBank,
  lessons,
  mistakes,
  part1QuestionBank,
  part3QuestionBank,
  part1Topics,
  part2Categories,
  part3Types,
  resources,
  tracks,
} from "@/content";
import type { SearchDoc } from "./types";

function haystack(...parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(" \u0001 ").toLowerCase();
}

function flattenBlocks(blocks: { type: string }[]): string {
  const out: string[] = [];
  for (const block of blocks) {
    const value = block as Record<string, unknown>;
    const push = (input: unknown) => {
      if (typeof input === "string") out.push(input);
      else if (Array.isArray(input)) input.forEach(push);
      else if (input && typeof input === "object") Object.values(input).forEach(push);
    };
    Object.entries(value).forEach(([key, v]) => {
      if (key === "type") return;
      push(v);
    });
  }
  return out.join(" ").slice(0, 4000);
}

function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const lesson of lessons) {
    const body = `${lesson.summary} ${lesson.goals.join(" ")} ${lesson.tags.join(" ")} ${flattenBlocks(
      lesson.blocks,
    )}`;
    docs.push({
      id: `lesson:${lesson.track}/${lesson.slug}`,
      kind: "lesson",
      title: lesson.title,
      subtitle:
        (tracks.find((track) => track.id === lesson.track)?.title ?? "Lesson") +
        ` · ${lesson.minutes} min`,
      href: `/learn/${lesson.track}/${lesson.slug}`,
      body,
      haystack: haystack(lesson.title, lesson.banglaTitle, body),
      tags: lesson.tags,
    });
  }

  for (const topic of part1Topics) {
    docs.push({
      id: `topic:${topic.slug}`,
      kind: "topic",
      title: `Part 1 Topic: ${topic.title}`,
      subtitle: `Part 1 · ${topic.questions.length} questions · ${topic.vocabulary.length} vocabulary items`,
      href: `/topics/part-1/${topic.slug}`,
      body: `${topic.summary} ${topic.vocabulary
        .map((item) => `${item.word} ${item.bangla} ${item.example}`)
        .join(" ")}`,
      haystack: haystack(
        topic.title,
        topic.banglaTitle,
        topic.summary,
        topic.tags.join(" "),
        topic.questions.map((q) => `${q.question} ${q.bangla} ${q.band6}`).join(" "),
        topic.vocabulary.map((v) => `${v.word} ${v.bangla}`).join(" "),
      ),
      part: 1,
      tags: topic.tags,
    });
  }

  part1QuestionBank.forEach((entry) => {
    docs.push({
      id: `question:${entry.id}`,
      kind: "question",
      title: entry.question,
      subtitle: `Part 1 · ${entry.topic}`,
      href: `/practice/part-1?topics=${encodeURIComponent(entry.topic)}&focus=${entry.id}`,
      body: `${entry.topic} ${entry.banglaTopic}`,
      haystack: haystack(entry.question, entry.topic, entry.banglaTopic),
      part: 1,
    });
  });

  part3QuestionBank.forEach((entry) => {
    docs.push({
      id: `question:${entry.id}`,
      kind: "question",
      title: entry.question,
      subtitle: `Part 3 · ${entry.topic}`,
      href: `/practice/part-3?topics=${encodeURIComponent(entry.topic)}&focus=${entry.id}`,
      body: `${entry.topic} part 3 discussion`,
      haystack: haystack(entry.question, entry.topic, entry.banglaTopic, "part 3 discussion"),
      part: 3,
    });
  });

  for (const category of part2Categories) {
    docs.push({
      id: `p2:${category.slug}`,
      kind: "cue-cards",
      title: `Part 2: ${category.title}`,
      subtitle: `Part 2 · ${category.cueCards.length} cue cards · ${category.shape} story`,
      href: `/topics/part-2/${category.slug}`,
      body: `${category.summary} ${category.storyAdvice.join(" ")} ${category.cueCards
        .map((card) => card.prompt)
        .join(" ")}`,
      haystack: haystack(
        category.title,
        category.banglaTitle,
        category.summary,
        category.ideaLens.prompts.join(" "),
        category.cueCards.map((card) => `${card.prompt} ${card.bullets.join(" ")}`).join(" "),
      ),
      part: 2,
    });
  }

  cueCardBank.forEach((card) => {
    docs.push({
      id: `cue:${card.id}`,
      kind: "cue-cards",
      title: card.prompt,
      subtitle: `Cue card · ${card.topic}`,
      href: `/practice/part-2?focus=${card.id}`,
      body: card.bullets.join(" "),
      haystack: haystack(card.prompt, card.topic, card.banglaTopic, card.bullets.join(" ")),
      part: 2,
    });
  });

  for (const type of part3Types) {
    docs.push({
      id: `p3:${type.slug}`,
      kind: "question-type",
      title: `Part 3: ${type.title}`,
      subtitle: `Part 3 · ${type.structures.length} structures · ${type.practice.length} practice questions`,
      href: `/topics/part-3/${type.slug}`,
      body: `${type.meaning} ${type.patterns.join(" ")} ${type.practice.join(" ")}`,
      haystack: haystack(
        type.title,
        type.banglaTitle,
        type.sampleQuestion,
        type.meaning,
        type.patterns.join(" "),
        type.practice.join(" "),
      ),
      part: 3,
    });
  }

  for (const mistake of mistakes) {
    docs.push({
      id: `mistake:${mistake.id}`,
      kind: "mistake",
      title: `${mistake.wrong} → ${mistake.right}`,
      subtitle: `Mistake · ${mistake.category}`,
      href: `/mistakes?focus=${mistake.id}`,
      body: `${mistake.why} ${mistake.bangla} ${mistake.topic}`,
      haystack: haystack(mistake.wrong, mistake.right, mistake.why, mistake.topic, mistake.category),
      tags: [mistake.category, mistake.topic],
    });
  }

  for (const resource of resources) {
    docs.push({
      id: `resource:${resource.slug}`,
      kind: "resource",
      title: resource.title,
      subtitle: `Resource · ${resource.minutes} min`,
      href: `/resources/${resource.slug}`,
      body: `${resource.summary} ${flattenBlocks(resource.blocks)}`,
      haystack: haystack(resource.title, resource.banglaTitle, resource.summary),
    });
  }

  const staticPages: { title: string; href: string; subtitle: string; body: string }[] = [
    { title: "Practice hub", href: "/practice", subtitle: "Practice", body: "part 1 part 2 part 3 mock test timer self evaluation" },
    { title: "Part 1 practice", href: "/practice/part-1", subtitle: "Practice", body: "short answers yes no wh questions" },
    { title: "Part 2 practice", href: "/practice/part-2", subtitle: "Practice", body: "cue card 2 minutes preparation timer" },
    { title: "Part 3 practice", href: "/practice/part-3", subtitle: "Practice", body: "discussion opinion reason example" },
    { title: "Full mock test", href: "/practice/mock", subtitle: "Practice", body: "simulation 11 14 minutes full test" },
    { title: "My progress", href: "/progress", subtitle: "Dashboard", body: "streak weak areas recommended next" },
    { title: "Mistake library", href: "/mistakes", subtitle: "Reference", body: "common mistakes corrections grammar vocabulary pronunciation" },
    { title: "Learning path", href: "/path", subtitle: "Curriculum", body: "recommended sequence order stages" },
    { title: "Band 6 vs Band 6.5", href: "/learn/exam/band-6-vs-6-5", subtitle: "Exam skills", body: "difference between band 6 and 6.5 characteristics" },
  ];
  for (const page of staticPages) {
    docs.push({
      id: `page:${page.href}`,
      kind: "page",
      title: page.title,
      subtitle: page.subtitle,
      href: page.href,
      body: page.body,
      haystack: haystack(page.title, page.subtitle, page.body),
    });
  }

  // Bangla keyword bridges: learners often search with Bangla scripts.
  const bridges: [string, string][] = [
    ["কারণ", "reason because why"],
    ["উদাহরণ", "example for instance"],
    ["মতামত", "opinion i think view"],
    ["ভবিষ্যৎ", "future prediction will likely"],
    ["গ্রামার", "grammar tense articles"],
    ["উচ্চারণ", "pronunciation stress sounds"],
    ["শব্দভান্ডার", "vocabulary words collocation"],
    ["দ্বিধা", "hesitation fillers pause fluency"],
    ["আইডিয়া", "idea generation brainstorm"],
  ];
  for (const [banglaKeyword, english] of bridges) {
    for (const doc of docs) {
      if (english.split(" ").some((word) => doc.haystack.includes(word))) {
        doc.haystack = `${doc.haystack} ${banglaKeyword}`;
      }
    }
  }

  return docs;
}

let cached: SearchDoc[] | null = null;

export function getSearchIndex(): SearchDoc[] {
  cached ??= buildDocs();
  return cached;
}
