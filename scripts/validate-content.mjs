#!/usr/bin/env node
/**
 * Content validator.
 *
 * The whole site is data-driven, so a broken reference does not throw at
 * runtime — it silently renders an empty page. This script compiles the
 * content layer to plain JavaScript and then checks it the way a test suite
 * would: slugs, required teaching fields, cross-references and content rules
 * such as "every topic has a Bangla meaning" and "every topic has both a
 * Band 6 and a Band 6.5 model".
 *
 * Run with: npm run validate:content
 */
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const buildDir = path.join(root, ".content-build");
const require = createRequire(import.meta.url);

const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);
const warn = (message) => warnings.push(message);

/* -------------------------------------------------------------------------- */
/* 1. Compile the content layer                                                */
/* -------------------------------------------------------------------------- */

execFileSync(
  "npx",
  ["tsc", "-p", path.join("scripts", "tsconfig.content.json")],
  { cwd: root, stdio: "inherit" },
);

const content = require(path.join(buildDir, "content", "index.js"));
const {
  lessons,
  part1Topics,
  part2Categories,
  part3Types,
  mistakes,
  resources,
  tracks,
  pathStages,
  orderedPart3Types,
  questionBank,
  cueCardBank,
} = content;

/* -------------------------------------------------------------------------- */
/* 2. Helpers                                                                  */
/* -------------------------------------------------------------------------- */

const BANGLA = /[\u0980-\u09FF]/;
const hasBangla = (value) => typeof value === "string" && BANGLA.test(value);
const isFilled = (value) => typeof value === "string" && value.trim().length > 0;

function uniqueBy(label, items, key) {
  const seen = new Map();
  for (const item of items) {
    const value = key(item);
    if (!isFilled(value)) fail(`${label}: missing value for unique key`);
    if (seen.has(value)) fail(`${label}: duplicate "${value}"`);
    seen.set(value, item);
  }
  return seen;
}

function requireFields(label, object, fields) {
  for (const field of fields) {
    const value = object[field];
    if (value === undefined || value === null) fail(`${label}: missing field "${field}"`);
    else if (typeof value === "string" && !value.trim()) fail(`${label}: empty field "${field}"`);
    else if (Array.isArray(value) && value.length === 0) fail(`${label}: empty array "${field}"`);
  }
}

function containsTemplate(text, label) {
  if (typeof text !== "string") return;
  // A pattern should show slots, not a finished sentence.
  if (!/___|…|\.\.\./.test(text)) warn(`${label}: pattern has no fill-in slot ("___" or "…")`);
}

/* -------------------------------------------------------------------------- */
/* 3. Lessons                                                                  */
/* -------------------------------------------------------------------------- */

const lessonKeys = uniqueBy("lesson", lessons, (lesson) => `${lesson.track}/${lesson.slug}`);

/** Does a site path point at something that actually exists? */
function resolvesToRealRoute(href) {
  const clean = href.split("#")[0].split("?")[0];
  const lesson = /^\/learn\/([^/]+)\/([^/]+)$/.exec(clean);
  if (lesson) return lessonKeys.has(`${lesson[1]}/${lesson[2]}`);
  const track = /^\/learn\/([^/]+)$/.exec(clean);
  if (track) return tracks.some((entry) => entry.id === track[1]);
  const topic = /^\/topics\/(part-[123])\/([^/]+)$/.exec(clean);
  if (topic) {
    const [, part, slug] = topic;
    return part === "part-1"
      ? part1Topics.some((entry) => entry.slug === slug)
      : part === "part-2"
        ? part2Categories.some((entry) => entry.slug === slug)
        : part3Types.some((entry) => entry.slug === slug);
  }
  const resource = /^\/resources\/([^/]+)$/.exec(clean);
  if (resource) return resources.some((entry) => entry.slug === resource[1]);
  return /^\/(topics\/part-[123]|practice(\/(part-[123]|mock))?|progress|path|mistakes|resources|learn|search|docs)$/.test(
    clean,
  );
}
const lessonSlugsByTrack = new Map();
for (const lesson of lessons) {
  const label = `lesson ${lesson.track}/${lesson.slug}`;
  requireFields(label, lesson, [
    "slug",
    "track",
    "title",
    "banglaTitle",
    "summary",
    "level",
    "minutes",
    "goals",
    "tags",
    "blocks",
  ]);

  if (!tracks.some((track) => track.id === lesson.track)) {
    fail(`${label}: unknown track "${lesson.track}"`);
  }
  if (lesson.level < 1 || lesson.level > 5) fail(`${label}: level out of range`);
  if (lesson.minutes <= 0) fail(`${label}: minutes must be positive`);

  const blockTypes = new Set(lesson.blocks.map((block) => block.type));
  for (const [type, count] of Object.entries(
    lesson.blocks.reduce((acc, block) => ({ ...acc, [block.type]: (acc[block.type] ?? 0) + 1 }), {}),
  )) {
    if (count > 6) warn(`${label}: ${count} "${type}" blocks — consider splitting the lesson`);
  }
  if (!blockTypes.has("bangla")) {
    fail(`${label}: no Bangla explanation block (Bangla-first teaching is a product rule)`);
  }
  if (!lesson.blocks.some((block) => /(examples|badBetter|patterns|quiz|checklist)/.test(block.type))) {
    warn(`${label}: no worked-example block`);
  }
  if (lesson.practice?.length) {
    lesson.practice.forEach((prompt, index) => {
      if (!isFilled(prompt)) fail(`${label}: empty practice prompt #${index + 1}`);
    });
  }
  if (!lessonSlugsByTrack.has(lesson.track)) lessonSlugsByTrack.set(lesson.track, new Set());
  lessonSlugsByTrack.get(lesson.track).add(lesson.slug);
}

// order must be unique and gapless inside a track
for (const track of tracks) {
  const inTrack = lessons.filter((lesson) => lesson.track === track.id);
  const orders = inTrack.map((lesson) => lesson.order).sort((a, b) => a - b);
  orders.forEach((order, index) => {
    if (order !== index + 1) {
      warn(`track ${track.id}: lesson order jumps (expected ${index + 1}, found ${order})`);
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 4. Learning path                                                            */
/* -------------------------------------------------------------------------- */

for (const stage of pathStages) {
  requireFields(`path stage ${stage.id}`, stage, ["title", "banglaTitle", "purpose", "outcome"]);
  for (const ref of stage.lessonRefs) {
    if (!lessonKeys.has(`${ref.track}/${ref.slug}`)) {
      fail(`path stage ${stage.id}: references missing lesson ${ref.track}/${ref.slug}`);
    }
  }
  if (stage.cta && !resolvesToRealRoute(stage.cta.href)) {
    fail(`path stage ${stage.id}: cta href does not resolve (${stage.cta.href})`);
  }
}

/* -------------------------------------------------------------------------- */
/* 5. Part 1 topics                                                            */
/* -------------------------------------------------------------------------- */

uniqueBy("part 1 topic", part1Topics, (topic) => topic.slug);
for (const topic of part1Topics) {
  const label = `part 1 topic ${topic.slug}`;
  requireFields(label, topic, [
    "title",
    "banglaTitle",
    "summary",
    "tags",
    "vocabulary",
    "phrases",
    "questions",
  ]);
  if (!hasBangla(topic.banglaTitle)) fail(`${label}: banglaTitle is not Bangla`);
  if (topic.vocabulary.length < 4) warn(`${label}: only ${topic.vocabulary.length} vocabulary items`);
  for (const item of topic.vocabulary) {
    requireFields(`${label} vocab "${item.word}"`, item, ["word", "pos", "bangla", "example"]);
    if (!hasBangla(item.bangla)) fail(`${label}: vocab "${item.word}" has no Bangla meaning`);
  }
  for (const item of topic.phrases) {
    requireFields(`${label} phrase "${item.phrase}"`, item, ["phrase", "bangla", "example"]);
    if (!hasBangla(item.bangla)) fail(`${label}: phrase "${item.phrase}" has no Bangla gloss`);
  }
  if (topic.questions.length === 0) fail(`${label}: no questions`);
  for (const [index, question] of topic.questions.entries()) {
    const qLabel = `${label} Q${index + 1}`;
    requireFields(qLabel, question, [
      "question",
      "bangla",
      "examinerIntent",
      "ideaSeeds",
      "pattern",
      "band6",
      "band65",
      "corrections",
      "alternatives",
      "practice",
    ]);
    if (!question.question.trim().endsWith("?")) fail(`${qLabel}: question does not end with "?"`);
    if (!hasBangla(question.bangla)) fail(`${qLabel}: missing Bangla translation`);
    if (question.band65.length <= question.band6.length) {
      fail(`${qLabel}: the Band 6.5 model should develop further than the Band 6 model`);
    }
    if (question.corrections.length === 0) fail(`${qLabel}: no common mistake listed`);
    containsTemplate(question.pattern.template, `${qLabel} pattern`);
  }
}

/* -------------------------------------------------------------------------- */
/* 6. Part 2 categories                                                        */
/* -------------------------------------------------------------------------- */

const STORY_SHAPES = new Set([
  "person",
  "place",
  "object",
  "event",
  "experience",
  "activity",
  "skill",
  "media",
  "plan",
  "problem",
  "achievement",
  "decision",
]);
uniqueBy("part 2 category", part2Categories, (category) => category.slug);
for (const category of part2Categories) {
  const label = `part 2 category ${category.slug}`;
  requireFields(label, category, [
    "title",
    "banglaTitle",
    "shape",
    "summary",
    "ideaLens",
    "storyAdvice",
    "vocabulary",
    "structures",
    "cueCards",
    "corrections",
    "practiceCards",
  ]);
  if (!STORY_SHAPES.has(category.shape)) fail(`${label}: unknown story shape "${category.shape}"`);
  if (category.cueCards.length === 0) fail(`${label}: no cue card`);
  for (const [index, card] of category.cueCards.entries()) {
    const cLabel = `${label} card ${index + 1}`;
    requireFields(cLabel, card, ["prompt", "bullets", "prepNotes", "band6", "band65", "whyItWorks"]);
    if (card.bullets.length < 3) warn(`${cLabel}: fewer than three bullets`);
    if (card.prepNotes.length < 5) warn(`${cLabel}: short preparation notes (aim for 6–8 keywords)`);
    if (card.band65.length <= card.band6.length) {
      fail(`${cLabel}: the Band 6.5 model should develop further than the Band 6 model`);
    }
  }
  for (const structure of category.structures) {
    containsTemplate(structure.template, `${label} structure`);
  }
}

/* -------------------------------------------------------------------------- */
/* 7. Part 3 question types                                                    */
/* -------------------------------------------------------------------------- */

uniqueBy("part 3 type", part3Types, (type) => type.slug);
uniqueBy("part 3 type order", orderedPart3Types, (type) => String(type.order));
for (const type of part3Types) {
  const label = `part 3 type ${type.slug}`;
  requireFields(label, type, [
    "order",
    "title",
    "banglaTitle",
    "sampleQuestion",
    "meaning",
    "examinerExpects",
    "ideaLens" in type ? "ideaLens" : "ideaTechnique",
    "structures",
    "patterns",
    "worked",
    "bangla",
    "corrections",
    "practice",
  ]);
  if (type.structures.length < 2) fail(`${label}: fewer than two answer architectures`);
  if (type.patterns.length < 4) warn(`${label}: fewer than four sentence patterns`);
  if (type.practice.length < 3) warn(`${label}: fewer than three practice questions`);
  requireFields(`${label} worked answer`, type.worked, ["question", "breakdown", "band6", "band65"]);
  const workedText = `${type.worked.band6} ${type.worked.band65}`.toLowerCase();
  const showsExample =
    type.worked.breakdown.some((part) => /example|local|case/i.test(part.label)) ||
    /for example|for instance|such as|like a |my cousin|my friend|a friend of mine|in dhaka|in my (area|city|country|own|school|family)|where i (live|grew up)|in a village|in the (city|countryside)|ten years ago|when i was|last (year|summer|winter)/.test(workedText);
  if (!showsExample) {
    warn(`${label}: worked answer never grounds itself in a concrete example`);
  }
  if (type.worked.band65.length <= type.worked.band6.length) {
    fail(`${label}: the Band 6.5 model should develop further than the Band 6 model`);
  }
  if (type.bangla.some((paragraph) => !hasBangla(paragraph))) {
    fail(`${label}: a Bangla explanation paragraph has no Bangla text`);
  }
}

/* -------------------------------------------------------------------------- */
/* 8. Mistake library                                                          */
/* -------------------------------------------------------------------------- */

const MISTAKE_CATEGORIES = new Set([
  "grammar",
  "vocabulary",
  "pronunciation",
  "fluency",
  "structure",
  "word-choice",
  "translation",
  "repetition",
]);
uniqueBy("mistake", mistakes, (entry) => entry.id);
for (const entry of mistakes) {
  const label = `mistake ${entry.id}`;
  requireFields(label, entry, ["category", "topic", "wrong", "right", "why", "bangla", "frequency"]);
  if (!MISTAKE_CATEGORIES.has(entry.category)) fail(`${label}: unknown category "${entry.category}"`);
  if (entry.wrong.trim().toLowerCase() === entry.right.trim().toLowerCase()) {
    fail(`${label}: "wrong" and "right" are identical`);
  }
  if (!hasBangla(entry.bangla)) fail(`${label}: the Bangla note contains no Bangla`);
  if (entry.detect) {
    try {
      new RegExp(entry.detect, "i");
    } catch (error) {
      fail(`${label}: detect regex does not compile (${error.message})`);
    }
  }
}
const usage = new Map();
for (const entry of mistakes) {
  usage.set(entry.detect, (usage.get(entry.detect) ?? 0) + 1);
}

/* -------------------------------------------------------------------------- */
/* 9. Resources, question banks, search index                                  */
/* -------------------------------------------------------------------------- */

uniqueBy("resource", resources, (resource) => resource.slug);
for (const resource of resources) {
  requireFields(`resource ${resource.slug}`, resource, [
    "title",
    "banglaTitle",
    "kind",
    "summary",
    "minutes",
    "blocks",
  ]);
  if (!["checklist", "plan", "reference", "faq"].includes(resource.kind)) {
    fail(`resource ${resource.slug}: unknown kind "${resource.kind}"`);
  }
}

uniqueBy("question bank entry", questionBank, (entry) => entry.id);
for (const entry of questionBank) {
  const label = `question bank ${entry.id}`;
  requireFields(label, entry, ["question", "topic", "sourcePath", "level"]);
  const match = /^\/topics\/(part-[123])\/([^/?#]+)/.exec(entry.sourcePath);
  if (!match) {
    fail(`${label}: sourcePath is not a topic link (${entry.sourcePath})`);
    continue;
  }
  const [, part, slug] = match;
  const exists =
    part === "part-1"
      ? part1Topics.some((topic) => topic.slug === slug)
      : part === "part-2"
        ? part2Categories.some((category) => category.slug === slug)
        : part3Types.some((type) => type.slug === slug);
  if (!exists) fail(`${label}: sourcePath points at a missing page (${entry.sourcePath})`);
}

for (const card of cueCardBank) {
  const match = /^\/topics\/part-2\/([^/?#]+)/.exec(card.sourcePath);
  if (!match || !part2Categories.some((category) => category.slug === match[1])) {
    fail(`cue card ${card.id}: sourcePath points at a missing category (${card.sourcePath})`);
  }
}

/* -------------------------------------------------------------------------- */
/* 10. Cross-links inside the app source                                       */
/* -------------------------------------------------------------------------- */

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(entry)) out.push(full);
  }
  return out;
}

const appFiles = [...walk(path.join(root, "src"))];
let linkCount = 0;
for (const file of appFiles) {
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/["'`](\/learn\/[a-z0-9-]+\/[a-z0-9-]+)["'`]/g)) {
    linkCount += 1;
    const [, href] = match;
    const [, , track, slug] = href.split("/");
    if (!lessonKeys.has(`${track}/${slug}`)) {
      fail(`${path.relative(root, file)}: dead lesson link ${href}`);
    }
  }
  for (const match of source.matchAll(/["'`](\/topics\/part-[123]\/[a-z0-9-]+)["'`]/g)) {
    linkCount += 1;
    const [, href] = match;
    const [, , part, slug] = href.split("/");
    const exists =
      part === "part-1"
        ? part1Topics.some((topic) => topic.slug === slug)
        : part === "part-2"
          ? part2Categories.some((category) => category.slug === slug)
          : part3Types.some((type) => type.slug === slug);
    if (!exists) fail(`${path.relative(root, file)}: dead topic link ${href}`);
  }
}

/* -------------------------------------------------------------------------- */
/* 11. Report                                                                  */
/* -------------------------------------------------------------------------- */

const stats = {
  lessons: lessons.length,
  tracks: tracks.length,
  stages: pathStages.length,
  part1Topics: part1Topics.length,
  part1Questions: part1Topics.reduce((sum, topic) => sum + topic.questions.length, 0),
  part2Categories: part2Categories.length,
  cueCards: cueCardBank.length,
  part3Types: part3Types.length,
  mistakeEntries: mistakes.length,
  detectRules: mistakes.filter((entry) => entry.detect).length,
  resources: resources.length,
  checkedLinks: linkCount,
};

console.log("\nContent report");
for (const [key, value] of Object.entries(stats)) {
  console.log(`  ${key.padEnd(16)} ${value}`);
}

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const message of warnings.slice(0, 25)) console.log(`  ⚠ ${message}`);
  if (warnings.length > 25) console.log(`  … and ${warnings.length - 25} more`);
}

if (existsSync(buildDir)) rmSync(buildDir, { recursive: true, force: true });

if (errors.length > 0) {
  console.error(`\n${errors.length} content error(s):`);
  for (const message of errors) console.error(`  ✖ ${message}`);
  process.exit(1);
}

console.log("\n✅ Content validation passed.\n");
