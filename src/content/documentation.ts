import type { LessonBlock } from "./schema";
import {
  bangla,
  callout,
  checklist,
  compare,
  examples,
  flow,
  noteGrid,
  patterns,
  prose,
  steps,
  table,
} from "./builders";

/**
 * The written deliverable for the project: how the platform is built, why it
 * is built that way, and what comes next.
 *
 * These sections reuse the same block builders as lessons, so the published
 * page renders with the same design system as the rest of the site. Keeping
 * the documentation in typed content means it cannot drift into inconsistent
 * formatting or, worse, unpublished documentation that only exists in a chat.
 */

export interface DocSection {
  id: string;
  /** Two-digit label used in the table of contents. */
  code: string;
  title: string;
  banglaTitle?: string;
  summary: string;
  blocks: LessonBlock[];
}

export const docSections: DocSection[] = [
  /* ------------------------------------------------------------------ */
  /* 01 Architecture                                                     */
  /* ------------------------------------------------------------------ */
  {
    id: "architecture",
    code: "01",
    title: "Architecture",
    banglaTitle: "আর্কিটেকচার",
    summary:
      "A statically rendered Next.js App Router application with typed content collections, a local-only progress store and one optional network call.",
    blocks: [
      prose("The shape of the system", [
        "The platform is a single Next.js 15 application. Learning content is data, not markup: lessons, topics, cue cards, question types, mistake entries and resources are authored as typed TypeScript objects in src/content and rendered by shared components. Because the content is typed at compile time, the build fails if a lesson is missing a goal list, a cue card lacks Band 6 and Band 6.5 models, or a mistake entry forgets a correction.",
        "Three layers exist, each with a clear boundary: the content layer (src/content), the logic layer (src/lib — search, evaluation, question generation, progress maths) and the presentation layer (src/components and src/app). Nothing in the presentation layer talks to the network except two route handlers, and nothing in the logic layer imports React.",
      ]),
      flow(
        [
          "content/*.ts — typed lessons, topics, cue cards, mistakes",
          "index.ts — indexes, selectors, question banks, stats",
          "lib/* — search, practice generator, evaluator, progress",
          "components/* — one renderer per content block type",
          "app/* — routes, metadata, static generation",
        ],
        {
          title: "Data flows one way",
          note: "Components never reach into content files directly; every page imports from the content index, which is the single place where collections are assembled and validated.",
        },
      ),
      compare(
        "What is deliberately not in the architecture",
        {
          label: "Left out",
          tone: "danger",
          bullets: [
            "No database — content is versioned in Git and ships with the build",
            "No CMS login — a contributor edits a typed file and opens a pull request",
            "No user accounts — progress never leaves the browser",
            "No state library — React context plus localStorage is enough",
            "No heavy dependencies — no date, form, animation or chart libraries",
          ],
        },
        {
          label: "Why",
          tone: "brand",
          bullets: [
            "A learner does not need an account to practise speaking",
            "Static pages are fast and cheap on Bangladeshi mobile connections",
            "Text in Git is reviewable, diffable and reviewable by a teacher",
            "Fewer moving parts means fewer ways for the site to break",
            "Every dependency must earn its place in the bundle",
          ],
        },
      ),
      table(
        "Runtime surfaces",
        ["Surface", "Rendering", "Why"],
        [
          ["Home, Learn, Topics, Path, Resources, Docs", "Static (SSG)", "Content is known at build time — fastest possible first paint"],
          ["Practice pages", "Static shell + client timers", "Timers and recording are browser-only concerns"],
          ["/progress", "Client", "Reads localStorage; server has nothing to render"],
          ["/search", "Server-rendered on request", "Query comes from the URL and can be shared as a link"],
          ["/api/search", "Route handler", "Used by the header dialog for type-ahead"],
          ["/api/evaluate", "Route handler (optional)", "Only route that may call an external AI provider"],
        ],
      ),
      callout(
        "tip",
        "One rule that keeps it honest",
        "If a feature needs a server, ask whether it needs one. Only AI evaluation and search-as-you-type crossed that line, and both are optional — the site works fully without the AI key configured.",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 02 Folder structure                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: "folder-structure",
    code: "02",
    title: "Folder structure",
    summary:
      "Grouped by responsibility, not by file type: content, logic, components and routes each have one home.",
    blocks: [
      examples("The tree that matters", [
        { text: "src/app — routes only: page.tsx, layout.tsx, route handlers, sitemap and robots", note: "Pages compose; they never contain business logic." },
        { text: "src/components/{shell,lesson,practice,progress,topics,mistakes,search,home,ui} — one folder per product area", note: "Component folders mirror the navigation, so a new developer knows where to look." },
        { text: "src/content — schema.ts, builders.ts, content-builders.ts, lessons/, topics/, mistakes.ts, resources.ts, path.ts, tracks.ts, index.ts", note: "Everything a teacher can author lives here." },
        { text: "src/lib/{progress,search,practice} — pure logic, no React imports", note: "Unit-testable and reusable from scripts." },
        { text: "src/hooks — useAudioRecorder, useSpeechToText", note: "Browser capability wrappers with graceful degradation." },
        { text: "scripts — validate-content.mjs plus its dedicated tsconfig", note: "Content QA runs outside the app build." },
        { text: "docs — the long-form write-up in Markdown", note: "Same content as this page, readable in the repository." },
      ]),
      table(
        "Why this grouping",
        ["Alternative", "Problem it creates"],
        [
          ["All components in one flat folder", "Twelve components named Card, Panel, Block — impossible to navigate at scale"],
          ["Content inline in pages", "A teacher cannot add a lesson without touching JSX"],
          ["Logic inside components", "Search and evaluation could not be tested or reused by scripts"],
          ["Everything in app/", "Route folder becomes a dumping ground; no clear owner for cross-cutting pieces"],
        ],
      ),
      bangla(
        "নতুন কনটেন্ট যোগ করা কতটা সহজ",
        [
          "নতুন একটি Part 1 টপিক যোগ করতে শুধু src/content/topics/part1-more.ts ফাইলে একটি topic() এন্ট্রি যোগ করতে হয় — কোনো কম্পোনেন্ট বা পেজ ছুঁতে হয় না।",
          "নতুন পাঠ যোগ করতে lessons/ ফোল্ডারে ফাইল যোগ করে index.ts-এ ইমপোর্ট করলেই রুট, সার্চ, প্রগ্রেস আর নেভিগেশন নিজে থেকেই কাজ করে।",
          "নিয়ম: শিক্ষকের কাজ content ফোল্ডারে, প্রকৌশলীর কাজ বাকি সব জায়গায়। এই সীমারেখা থাকলে দুজন একে অপরের কাজ নষ্ট করে না।",
        ],
        "কনটেন্ট = typed ডেটা ফাইল, বাকিটা = সাধারণ কোড।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 03 Stack decisions                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: "stack",
    code: "03",
    title: "Stack decisions and reasons",
    summary:
      "Every choice below was made against the constraint that matters most here: fast, readable, cheap to host, and easy for a teacher to contribute to.",
    blocks: [
      table(
        "The stack, and the reasoning",
        ["Choice", "Reason", "Cost accepted"],
        [
          ["Next.js 15 (App Router)", "Static generation for 170+ content pages, plus route handlers for the two dynamic features; one framework instead of three", "Framework-specific knowledge required to contribute"],
          ["TypeScript (strict)", "Content errors surface at compile time — the content schema is the contract", "More typing up front; worth it for a content-heavy product"],
          ["Tailwind CSS v4", "Design tokens live in one @theme block; utility classes keep components small; mobile-first is the default", "Class strings can look long until you read the tokens"],
          ["Typed content collections", "No database, no CMS, no migration; content is versioned with the code that renders it", "Adding content requires a Git commit"],
          ["Zod", "Runtime validation of API payloads and search params, where types alone cannot protect you", "One small dependency"],
          ["localStorage progress", "Works offline, needs no login, respects learner privacy", "Progress is per-device; no cross-device sync"],
          ["Route handler + env vars for AI", "The provider key never reaches the browser; the feature is optional", "Requires a server for that one route, and its cost is the operator's"],
        ],
      ),
      prose("Why not the obvious alternatives", [
        "A headless CMS would add an admin surface, an API, a dependency and a login — for a content set that fits in twenty files and changes in pull requests. A database would turn instant static pages into network round-trips on mobile connections, which is the opposite of what a Bangladeshi learner on 4G needs. A component library would impose a generic dashboard look, and this product's design brief explicitly requires the opposite: academic, calm, typographic.",
        "The one place complexity is worth it is evaluation. Rule-based evaluation runs entirely in the browser and covers the measurable things — pace, fillers, repetition, connectors, complexity, plus 60 regex mistake detectors. The AI layer is additive: it only runs if an operator supplies a key, and its output is merged into the rule-based result rather than replacing it.",
      ]),
      bangla(
        "বাংলাদেশের ব্যবহারকারীর কথা ভেবে",
        [
          "প্রায় সব পেজ আগে থেকে তৈরি (static) হয়, তাই দুর্বল ইন্টারনেটেও পেজ দ্রুত খোলে এবং ডেটা খরচ কম হয়।",
          "অগ্রগতি ব্রাউজারেই সংরক্ষিত থাকে — অ্যাকাউন্ট খুলতে হয় না, ফোন নম্বর বা ইমেইল দিতে হয় না।",
          "টাইমার, রেকর্ডিং আর স্পিচ-টু-টেক্সট সব ডিভাইসে না চললেও সাইট ভাঙে না — ব্যাকআপ হিসেবে নিজে নিজে কথা বলে সময় মাপার সুবিধা সব সময় থাকে।",
        ],
        "Quick to load, free to use, no sign-up.",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 04 Content schema                                                   */
  /* ------------------------------------------------------------------ */
  {
    id: "content-schema",
    code: "04",
    title: "Content schema",
    summary:
      "Six collections, each with a blocking contract: a lesson without Bangla, a cue card without both band models, or a mistake without a correction cannot be published.",
    blocks: [
      noteGrid("The six collections", [
        { label: "Lesson", value: "10 tracks · structured blocks", detail: "slug, track, order, goals, examUse, tags, blocks[], practice[]. Every block is a discriminated union member." },
        { label: "Part1Topic", value: "45 topics", detail: "vocabulary[], phrases[], questions[]; each question carries its own pattern, Band 6 model, Band 6.5 model, corrections and follow-ups." },
        { label: "Part2Category", value: "19 categories", detail: "shape (person/place/object/event/experience/…), ideaLens, storyAdvice, structures[], cueCards[] with prep notes and why-it-works." },
        { label: "Part3QuestionType", value: "19 types", detail: "meaning, examiner expectations, idea technique, two or more architectures, patterns, worked answer, Bangla explanation, corrections, practice." },
        { label: "MistakeEntry", value: "97 entries", detail: "category, wrong, right, why, Bangla note, frequency, optional variants, optional regex detector." },
        { label: "Resource / PathStage / Track", value: "8 resources · 17 stages · 10 tracks", detail: "The study-plan layer: ordered stages, each pointing at a lesson, topic bank, practice set or resource." },
      ]),
      table(
        "Lesson block types",
        ["Block", "Purpose", "Rendering rule"],
        [
          ["prose", "The concept, in plain English", "Headline + paragraphs + optional bullets"],
          ["bangla", "The Bangla-first explanation", "Bangla typography, tone-tinted background, one takeaway line"],
          ["examples / badBetter", "Worked evidence", "Bad vs better pairs with a why for each correction"],
          ["patterns / steps", "Reusable sentence frames and construction order", "Templates that a learner can copy and then vary"],
          ["table / compare / noteGrid", "Reference material", "Scannable, printable, never decorative"],
          ["checklist / quiz / callout", "Practice, self-check, one idea worth remembering", "Interactive where it helps, static where it is clearer"],
          ["flow / cueCard / phraseBank", "Process charts, cue cards and phrase collections", "Used where a list would lose the structure"],
        ],
      ),
      callout(
        "tip",
        "Positional builders keep content readable",
        "Content is authored as builder calls — bangla(title, paragraphs, takeaway) — not as raw JSON. The schema is enforced by TypeScript, so a missing argument is a compile error rather than a runtime surprise.",
      ),
      bangla(
        "কনটেন্ট কীভাবে যাচাই হয়",
        [
          "npm run validate:content কনটেন্ট ফাইলগুলো আলাদা করে কম্পাইল করে এবং নিয়ম মেনে চেক করে: প্রতিটি লেসনে বাংলা ব্যাখ্যা আছে কি না, cue card-এ Band 6 ও 6.5 — দুটোই আছে কি না, Part 3 টাইপে অন্তত দুটি আর্কিটেকচার আছে কি না, mistake এন্ট্রির regex সত্যিই চলে কি না।",
          "আরও একটি চেক আছে: সাইটের কোথাও এমন লিংক থাকলে যা কোনো লেসন বা পেজে পৌঁছায় না (dead link), যাচাই ব্যর্থ হয়। এতে পুরনো লিংক ভাঙার ভয় থাকে না।",
        ],
        "প্রকাশের আগে এক কমান্ডেই সব কনটেন্ট যাচাই — শিক্ষকের ভুল এখানেই ধরা পড়ে।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 05 Design system                                                    */
  /* ------------------------------------------------------------------ */
  {
    id: "design-system",
    code: "05",
    title: "UI design system",
    summary:
      "Calm, academic and typographic: a paper-toned palette, two type families plus a Bangla stack, and tokens rather than ad-hoc colours.",
    blocks: [
      prose("The design brief, made concrete", [
        "The site should look like a well-made textbook from a serious language school, not like a dashboard. That decision controls everything: a warm paper background instead of pure white, deep ink text instead of grey-on-grey, a serif for headings, generous line height for long reading, and one accent colour used sparingly to mark actions.",
        "Nothing on the page is decorative. Every tint signals meaning — brand green for 'do this next', amber for cautions, red only for the wrong version of an answer, and a soft tinted block for Bangla explanations so a learner can find them by shape rather than by reading.",
      ]),
      table(
        "Tokens and what they control",
        ["Token group", "Examples", "Role"],
        [
          ["Surfaces", "canvas, canvas-deep, paper", "Page background, section separation, card fill"],
          ["Text", "ink, ink-soft, ink-muted", "Headings, body copy, captions — all checked for contrast"],
          ["Lines", "line, line-strong", "Card borders and dividers; never heavy shadows"],
          ["Brand", "brand-50 … brand-900", "Primary actions, progress, active states"],
          ["Signals", "accent, danger, info", "Highlights, wrong answers, neutral notes"],
        ],
      ),
      patterns("Typography roles", [
        { label: "Display and headings", template: "Source Serif 4, then Georgia, then serif", example: "Page titles and lesson headings carry the academic tone" },
        { label: "Body and UI", template: "Inter, then system-ui, then sans-serif", example: "Paragraphs, buttons, labels, tables" },
        { label: "Bangla", template: "Noto Sans Bengali, then SolaimanLipi, then system Bangla fonts", example: "Every Bangla explanation renders in the .bn class with a slightly larger size and looser line height" },
        { label: "Code-like content", template: "mono-chip", example: "Sentence patterns are shown in a mono chip so the template reads as a template" },
      ]),
      compare(
        "Deliberately avoided",
        {
          label: "Not in this design",
          tone: "danger",
          bullets: [
            "Neon accents and heavy gradients",
            "Glassmorphism, blurred panels, floating cards",
            "Excessive round corners on every surface",
            "Animated illustrations, robots, mascots",
            "Dashboard-style widgets with no teaching purpose",
            "Uniform grid of identical cards on every page",
          ],
        },
        {
          label: "Used instead",
          tone: "brand",
          bullets: [
            "Paper tones and one accent colour",
            "Flat cards with a hairline border and no shadow",
            "One radius scale, applied consistently",
            "Real typography as the main visual device",
            "Sections that differ because their content differs",
            "Subtle, short motion: fade-and-rise on entry only",
          ],
        },
      ),
      bangla(
        "ডিজাইনের তিনটি নিয়ম",
        [
          "পড়তে আরামদায়ক হোক: বড় ফন্ট, বেশি লাইন-স্পেস, চওড়া মার্জিন — দীর্ঘ পাঠও যেন ক্লান্ত না করে।",
          "রঙ অর্থ বহন করবে: সবুজ = যা করবেন, লাল = ভুল উদাহরণ, হালকা টিন্ট = বাংলা ব্যাখ্যা। সাজসজ্জার জন্য কোনো রঙ নেই।",
          "অ্যানিমেশন কম ও ছোট: শুধু পেজ ঢোকার সময় হালকা ফেড-রাইজ, আর কিছু নয় — কারণ দ্রুত চলা মোবাইলেই বেশিরভাগ শিক্ষার্থী পড়ে।",
        ],
        "শান্ত, পাঠ্যপুস্তকের মতো, আর মোবাইলে আগে ভাবা।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 06 Page list                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: "pages",
    code: "06",
    title: "Page list and information architecture",
    summary:
      "Five top-level destinations — Home, Learn, Practice, Progress, Mistakes — with topic banks and resources as deep reference layers.",
    blocks: [
      table(
        "Every route in the product",
        ["Route", "Purpose", "Rendering"],
        [
          ["/", "Landing page: the promise, the method, the four-step flow, entry points into each part", "Static"],
          ["/learn", "Track index: 10 tracks with lesson counts and the band each targets", "Static"],
          ["/learn/[track]", "Track page: ordered lesson list, goals, and the next lesson to take", "Static"],
          ["/learn/[track]/[lesson]", "Lesson page: the full teaching unit with navigation and completion", "Static"],
          ["/topics/part-1", "45 Part 1 topics grouped by theme", "Static"],
          ["/topics/part-1/[topic]", "Topic view: vocabulary, phrases, examiner intent, Band 6 and 6.5 models, corrections", "Static"],
          ["/topics/part-2", "19 cue-card categories grouped by story shape", "Static"],
          ["/topics/part-2/[category]", "Category view: idea lens, story advice, vocabulary, structures, full cue cards", "Static"],
          ["/topics/part-3", "19 Part 3 question types in teaching order", "Static"],
          ["/topics/part-3/[slug]", "Question-type view: meaning, expectations, architectures, worked answer, Bangla explanation", "Static"],
          ["/practice", "Practice hub: choose part, level or full mock", "Static shell"],
          ["/practice/part-1 · 2 · 3", "Timed speaking sets with recording, transcript and self-evaluation", "Client"],
          ["/practice/mock", "Full mock test: Part 1, cue card with preparation timer, Part 3, feedback report", "Client"],
          ["/progress", "Dashboard: skills, streak, weak areas, recommended next lesson, band meters", "Client"],
          ["/mistakes", "Searchable mistake library filtered by category", "Client"],
          ["/mistakes?focus=", "Deep link into one category from a lesson or evaluation", "Client"],
          ["/path", "17-stage learning path from first lesson to final revision", "Static"],
          ["/resources", "Study plans, checklists and reference sheets", "Static"],
          ["/resources/[slug]", "A single resource, print-friendly", "Static"],
          ["/search", "Site-wide search with grouped results and example queries", "Server"],
          ["/docs", "This document: architecture, curriculum, roadmap", "Static"],
          ["/api/search", "JSON search endpoint used by the header dialog", "Route handler"],
          ["/api/evaluate", "Optional AI evaluation, merged into the rule-based result", "Route handler"],
          ["not-found · error · loading", "Recovery and loading states for every route", "Static"],
        ],
      ),
      prose("Why the navigation is shaped this way", [
        "Learn answers 'what should I understand?'. Practice answers 'can I do it under time pressure?'. Topics are the reference shelf you return to when a specific subject appears in the test. Progress and Mistakes close the loop, and Path stitches everything into one ordered route so a learner never has to decide what to study next.",
      ]),
      checklist("Consistent behaviours across every page", [
        "Breadcrumbs on all nested routes, matching the URL exactly",
        "One clear primary action per page, rendered with the same button component",
        "Empty and loading states written in the same voice as the rest of the site",
        "Every practice entry point links back to the lesson that teaches it",
      ]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 07 Components                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "components",
    code: "07",
    title: "Component architecture",
    summary:
      "Server components by default, client components only where a browser API or local state is genuinely required.",
    blocks: [
      table(
        "Component groups",
        ["Group", "Responsibility", "Key pieces"],
        [
          ["shell", "Every-page chrome", "SiteHeader (with search dialog), SiteFooter, Breadcrumbs, skip link"],
          ["ui", "Presentational primitives", "SectionHeading, Panel, Badge, Stat, Meter, EmptyState, LinkRow, Tabs"],
          ["lesson", "Teaching surface", "Blocks.tsx renders the 15 block types; LessonChrome (header + previous/next); LessonActions (mark complete, practice prompts); LessonQuiz"],
          ["topics", "Reference surfaces", "Part1TopicView, Part2CategoryView, Part3TypeView"],
          ["practice", "Speaking flow", "SpeakingTimer, PracticeSession, MockTest, PracticeGenerator, SelfEvaluation, EvaluationPanel, PracticePageBody"],
          ["progress", "Feedback loop", "ProgressDashboard, provider-backed completion state"],
          ["mistakes / search", "Discovery", "MistakeLibrary with category filters, SearchField wired to /api/search"],
          ["providers", "Cross-cutting state", "ProgressProvider (localStorage, debounced writes, sanitised reads)"],
        ],
      ),
      prose("The rendering contract", [
        "Lesson blocks are a discriminated union, so Blocks.tsx switches on block.type and the compiler refuses a missing case. That single decision is why adding a block type is safe: add it to the schema, add a builder, add a renderer, and every lesson that uses it renders correctly — no page-level changes.",
        "Client components are the exception, not the rule: timers, the recorder, speech-to-text, tabs, the search dialog, the progress provider and the mistake filters. Their props are plain data, which keeps the server/client boundary simple to reason about.",
      ]),
      callout(
        "tip",
        "Props are documented by their types",
        "PracticeSession takes a part, an item list, a speaking duration and an optional context label. No component reaches into content indexes, no page re-implements a timer, and no route handler contains teaching logic.",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 08 Curriculum                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "curriculum",
    code: "08",
    title: "Curriculum",
    summary:
      "Ten tracks in teaching order, from how the test works to pronunciation drills — with the idea engine as the spine.",
    blocks: [
      table(
        "The ten tracks",
        ["Track", "Lessons", "What it delivers"],
        [
          ["Speaking Overview", "4", "How the exam runs, how you are scored, what Band 6 and 6.5 mean in practice, how to use the platform"],
          ["Part 1", "5", "Direct answer plus reason plus detail for yes/no questions, WH questions, extension, sentence building"],
          ["Part 2", "6", "Cue cards, the one-minute preparation, story shapes, the seven-step story engine, keyword notes"],
          ["Part 3", "3", "Discussion skills, the sentence toolkit, and the answer architectures this part demands"],
          ["Strategy", "3", "What to do when you have nothing to say, thinking in English instead of translating, and unfamiliar topics"],
          ["Exam", "4", "Band 6 vs 6.5 characteristics, self-evaluation, the mock test guide, exam-day routine"],
          ["Grammar for Speaking", "15", "Tenses, modals, comparison, connectors, clauses, conditionals, passive, gerunds, questions, articles, prepositions, agreement"],
          ["Vocabulary", "3", "Learning in chunks, upgrading overused words, collocations you can actually say"],
          ["Fluency", "5", "What fluency means, thinking while speaking, natural fillers, self-correction, connecting ideas"],
          ["Pronunciation", "7", "Intelligibility first, word stress, chunking, connected speech, endings, difficult sounds, intonation"],
        ],
      ),
      prose("Order, and why it matters", [
        "Learners are guided by the 17-stage path rather than a flat list. The order is deliberate: understand the test, build a direct answer, learn to extend it, apply the story engine to Part 2, then move to Part 3 discussion — with grammar and vocabulary arriving exactly when the learner has a speaking problem they solve. That is why 'present perfect' appears in week three, after learners have already felt the need for it.",
        "The Band 6.0–6.5 ceiling shapes every piece of content. Vocabulary lists contain useful, natural, speakable words — not rare ones. Grammar lessons teach the twelve structures that actually raise accuracy, not the whole system. The Part 3 architectures are built for balanced, two-sided answers rather than academic essays.",
      ]),
      bangla(
        "১০টি ট্র্যাক, ৫৬টি লেসন, ১৭টি ধাপ",
        [
          "প্রথমে পরীক্ষার ধরন বোঝা, তারপর সরাসরি উত্তর দেওয়া শেখা, তারপর উত্তর লম্বা করা — এই ক্রমটাই শিক্ষার্থীর আত্মবিশ্বাস তৈরি করে।",
          "Part 2-এর জন্য আলাদা গল্পের ইঞ্জিন, Part 3-এর জন্য আলাদা আর্কিটেকচার — কারণ দুই অংশের দরকার সম্পূর্ণ আলাদা।",
          "গ্রামার ও শব্দভান্ডার আলাদা বিষয় নয়, বরং বলার সময়েই শেখানো হয়েছে — কারণ পরীক্ষায় গ্রামারের নিয়ম নয়, ব্যবহার দেখা হয়।",
        ],
        "সহজ থেকে কঠিনের দিকে, প্রতিটি ধাপ আগের ধাপের সমস্যার সমাধান।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 09 Lesson structure                                                 */
  /* ------------------------------------------------------------------ */
  {
    id: "lesson-structure",
    code: "09",
    title: "Lesson structure",
    summary:
      "One predictable teaching sequence on every lesson page: what you will learn, why it matters, the concept, the Bangla explanation, modelled answers, construction steps, practice and revision.",
    blocks: [
      steps("The teaching sequence, in order", [
        { title: "What you will learn", detail: "Three or four concrete goals written as abilities, not topics." },
        { title: "Why this matters in the exam", detail: "The examiner behaviour that makes this lesson worth your time." },
        { title: "The concept", detail: "Plain English explanation, short paragraphs, no jargon without a definition." },
        { title: "Bangla explanation", detail: "The same idea in simple Bangla, with one takeaway line to remember." },
        { title: "Worked examples", detail: "Realistic IELTS-style answers with notes on why each one works." },
        { title: "Bad vs better", detail: "The errors Bangladeshi learners actually make, with the correction and the reason." },
        { title: "Sentence patterns and construction steps", detail: "Reusable frames and the order in which to build an answer." },
        { title: "Practice and challenge", detail: "Speak-it-now tasks, timed where the exam is timed." },
        { title: "Common mistakes and quick revision", detail: "A short recall list for the next morning, then Previous / Mark complete / Next." },
      ]),
      prose("Navigation is part of the lesson", [
        "Every lesson ends with the same three elements in the same place: the previous lesson, a completion checkbox that feeds the progress store, and the next lesson. Learners should never have to decide what to do after finishing — the platform decides, and it remembers.",
      ]),
      callout(
        "tip",
        "No lesson teaches an answer to memorise",
        "Where a model answer appears, it is labelled as a worked example and followed by the pattern behind it. The message is repeated on the landing page, in the overview track and in every Part 2 lesson: don't memorise answers, learn how to build them.",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 10 Practice architecture                                            */
  /* ------------------------------------------------------------------ */
  {
    id: "practice",
    code: "10",
    title: "Practice architecture",
    summary:
      "Four practice surfaces built on one component: a timed speaking session, a self-evaluation, an optional AI review, and a question generator with five progressive levels.",
    blocks: [
      steps("What happens when a learner presses Start", [
        { title: "1. The set is assembled", detail: "Either from the part's question bank, or from the generator using the chosen topics, level and count." },
        { title: "2. The timer runs", detail: "Part 1 gives 35 seconds per question, Part 2 gives 60 seconds of preparation, 120 seconds of speaking, Part 3 gives 60 seconds per question." },
        { title: "3. Speech is captured", detail: "Recording runs in the browser; if speech recognition is available the transcript appears live, otherwise the learner types what they said." },
        { title: "4. Rule-based evaluation runs locally", detail: "Pace, sentence length, vocabulary variety, fillers, connectors, complexity, and 60 mistake detectors — all computed offline." },
        { title: "5. Feedback is framed as improvement, not as a score", detail: "Five criteria, each with strengths, problems, how to improve, a drill, and three 'your next practice' actions." },
        { title: "6. The session is written to progress", detail: "Skill signals, streak, and completion — stored in the browser, never uploaded." },
      ]),
      table(
        "The five practice levels",
        ["Level", "Target", "What changes"],
        [
          ["1 — Foundation", "Answer at all", "Short questions, long timers, direct answers accepted"],
          ["2 — Answer extension", "Answer plus reason", "Requires a reason and a small detail before the timer ends"],
          ["3 — Development", "Idea development", "Longer timers, follow-up prompts, Part 2 story shapes"],
          ["4 — Flexible speaking", "Unfamiliar and hypothetical questions", "Mixed question types, no preparation on some items"],
          ["5 — Mock speaking", "Full test conditions", "Full mock: Part 1, cue card with one minute of preparation, Part 3"],
        ],
      ),
      bangla(
        "অনুশীলনের নিয়ম",
        [
          "প্রতিটি অনুশীলনের সঙ্গে টাইমার থাকে — সময় ছাড়া অনুশীলন করলে পরীক্ষায় সময় ঠিক রাখা যায় না।",
          "ভুল ধরার চেয়ে গুরুত্বপূর্ণ হলো কী ঠিক করতে হবে তা জানা; তাই প্রতিটি মূল্যায়নে 'পরের অনুশীলনে কী করবেন' স্পষ্টভাবে লেখা থাকে।",
          "অ্যাপ কোনো নম্বর দেয় না। নম্বরের বদলে শক্তি, দুর্বলতা আর উন্নতির পথ দেখায় — কারণ মূল্যায়নের উদ্দেশ্য শেখা, রায় নয়।",
        ],
        "টাইমার + মূল্যায়ন + পরের ধাপ — এই তিনটি মিলেই অনুশীলন কাজে লাগে।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 11 Progress architecture                                            */
  /* ------------------------------------------------------------------ */
  {
    id: "progress",
    code: "11",
    title: "Progress architecture",
    summary:
      "Local-first: one versioned localStorage key, sanitised on read, debounced on write, and no account needed.",
    blocks: [
      prose("What is stored, and why so little", [
        "The stored state is deliberately small: completed lessons, practice sessions, per-skill signals for fluency, vocabulary, grammar, pronunciation and development, the current streak, and the last practice date. Everything else is derived at read time by selectors, which means the storage format can stay stable while the dashboard grows.",
      ]),
      table(
        "The progress model",
        ["Piece", "Detail", "Why"],
        [
          ["Storage key", "bolte-shikhi.progress.v1", "Version suffix makes a future migration explicit instead of silent"],
          ["Writes", "Debounced 220 ms", "A timer ticking each second must not write on every tick"],
          ["Reads", "Sanitised shape check", "Corrupted or older data is dropped, never trusted into the UI"],
          ["Derived values", "summariseProgress(state, lessonMeta)", "Weak areas and the next recommended lesson are computed, not stored"],
          ["Streak", "Day-based, with a grace day", "Learners practise in bursts; punishing a single missed day is discouraging"],
          ["Band meters", "5.5 → target 6.5", "Progress is shown as movement along a range, never as a predicted result"],
        ],
      ),
      noteGrid("What the dashboard answers", [
        { label: "Progress by part", detail: "How much of Part 1, 2 and 3 has been practised and completed." },
        { label: "Progress by skill", detail: "Fluency, vocabulary, grammar, pronunciation, development — the five criteria learners can act on." },
        { label: "Streak", detail: "Consecutive days practised, shown calmly, with the reason it matters." },
        { label: "Weak areas", detail: "The two or three skills with the least evidence, named plainly." },
        { label: "Recommended next lesson", detail: "A single suggestion with a reason, not a list of twelve options." },
        { label: "Speaking overview in Bangla", detail: "A short summary of where the learner stands, written in simple Bangla." },
      ]),
      callout(
        "tip",
        "Privacy is a feature, not a limitation",
        "Because nothing leaves the browser, a learner can practise without creating an account, on a shared phone, without any data leaving the device. Cross-device sync is listed in the roadmap as an opt-in export, not as a default.",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 12 Mock test                                                        */
  /* ------------------------------------------------------------------ */
  {
    id: "mock-test",
    code: "12",
    title: "Mock test architecture",
    summary:
      "A seeded generator turns the content banks into a full test: four to five Part 1 topic areas, one random cue card with preparation time, four to six related Part 3 questions, and a structured report.",
    blocks: [
      steps("Building one mock test", [
        { title: "Seed the shuffle", detail: "A seeded pseudo-random shuffle means the same seed always produces the same test — useful for teachers and for retakes of a specific paper." },
        { title: "Part 1: 4–5 topic areas", detail: "Drawn from the 45-topic bank, each contributing two or three questions with no repeats." },
        { title: "Part 2: one random cue card", detail: "Taken from the 19 categories, always with the 60-second preparation timer before speaking begins." },
        { title: "Part 3: 4–6 related questions", detail: "Question types linked to the cue card's theme, moving from description to opinion to society." },
        { title: "Feedback report", detail: "Per-criterion observations across the whole test, the strongest moment, the two things to fix first, and a recommended lesson for each." },
        { title: "Recording the attempt", detail: "The attempt updates progress as a mock-test session, with a fixed 6.5 marker on the band meter." },
      ]),
      table(
        "Mock test conditions vs real conditions",
        ["Feature", "In the app", "In the real test"],
        [
          ["Preparation time", "60-second timer", "60 seconds with paper and pencil"],
          ["Speaking time", "120-second timer with a gentle overrun warning", "Examiner stops you at two minutes"],
          ["Part 3 follow-ups", "4–6 questions from related types", "Examiner decides, based on your answers"],
          ["Feedback", "Immediate, criterion by criterion", "None"],
        ],
      ),
      prose("Deliberately not a score", [
        "The report never prints a band number. It reports what was observed — pace, repetition, structure, development — and pairs every observation with a fix. The mock test exists to rehearse the sequence under time pressure and to produce a short list of things to work on, not to promise a result.",
      ]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 13 AI integration                                                   */
  /* ------------------------------------------------------------------ */
  {
    id: "ai",
    code: "13",
    title: "AI integration plan",
    summary:
      "Optional, server-side, provider-agnostic, and additive: the rule-based evaluation always runs first and remains the source of truth for metrics.",
    blocks: [
      table(
        "How the two evaluators divide the work",
        ["Evaluator", "Runs", "Produces"],
        [
          ["Rule-based", "Always, in the browser", "Metrics (words, sentences, pace, type-token ratio, fillers, connectors, complexity), detected mistakes, criterion observations, next-practice actions"],
          ["AI (optional)", "Server route, only when a key is configured", "A qualitative reading of the transcript: criterion-by-criterion strengths, problems and improvements, plus three next-practice actions"],
        ],
      ),
      steps("Request flow for AI evaluation", [
        { title: "1. Client validates the transcript", detail: "10–6000 characters, speaking time 3–600 seconds, and a part label — rejected with a 400 before any provider call is made." },
        { title: "2. Rate limit", detail: "A per-session limit (12 by default) protects the operator's key from accidental loops." },
        { title: "3. Provider call", detail: "AI_PROVIDER, AI_MODEL and AI_API_KEY are read from the environment on the server only. The prompt asks for structured JSON, not prose." },
        { title: "4. Merge, do not replace", detail: "The AI result is merged into the rule-based result, overriding only the criterion text, the method flag and the next-practice list. Metrics and detected mistakes always come from the deterministic engine." },
        { title: "5. Degrade gracefully", detail: "No key, provider error, timeout or malformed JSON all fall back to the local result with a short note — the learner is never left with an empty screen." },
      ]),
      checklist("Security and cost rules", [
        "No API key in client code, ever — only in environment variables on the server",
        "The response is never cached or stored on the server; progress stays in the browser",
        "Rate limits are configurable, so a shared deployment can be protected without code changes",
        "The prompt forbids outputting a bare band score; criteria-level feedback is the required shape",
        "The feature is off by default — an operator must opt in by supplying a key",
      ]),
      bangla(
        "কেন AI মূল্যায়ন বাধ্যতামূলক নয়",
        [
          "নিয়মভিত্তিক মূল্যায়ন ব্রাউজারেই চলে — ইন্টারনেট দুর্বল হলেও কাজ করে, আর কোনো খরচ নেই।",
          "AI যোগ করা যায়, কিন্তু সেটি কখনও মূল ডেটা বদলায় না; শুধু মন্তব্য ও পরামর্শ যোগ করে। ফলে AI ভুল বললেও মেট্রিক ঠিক থাকে।",
          "কোনো অবস্থাতেই API key ব্রাউজারে যায় না — অর্থাৎ অন্য কেউ আপনার খরচে অনুরোধ পাঠাতে পারবে না।",
        ],
        "AI = অতিরিক্ত মন্তব্য, ভিত্তি নয়। কোনো নম্বর দেয় না।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 14 Responsive strategy                                              */
  /* ------------------------------------------------------------------ */
  {
    id: "responsive",
    code: "14",
    title: "Responsive strategy",
    summary:
      "Mobile-first because the learner is mobile: the primary device is a mid-range Android phone on a 4G connection, often shared, often in the evening.",
    blocks: [
      prose("Designed from the smallest screen outwards", [
        "Every layout is written for a 360-pixel viewport first and enhanced upwards. Single-column by default; two columns on tablets for lists; three or four only where the content is a genuine grid, such as a track index or the topic banks. The lesson reading column is capped in characters rather than pixels, so line length stays comfortable on a large monitor.",
        "Interactive elements are sized for thumbs: 44-pixel minimum touch targets, full-width primary buttons on small screens, and timers whose controls sit within reach of the bottom of the screen. Nothing on any page scrolls horizontally, including the wide reference tables — those scroll within their own container so the page itself never does.",
      ]),
      table(
        "Breakpoint behaviour",
        ["Viewport", "Layout", "Notes"],
        [
          ["< 640 px (phones)", "One column, sticky practice controls, collapsible navigation", "Largest text sizes, generous tap targets, timers always visible"],
          ["640–1024 px (tablets)", "Two columns for lists and cards, single column for reading", "Tabs become the primary navigation inside topics"],
          ["1024–1280 px", "Content plus sidebar (lesson navigation, filters)", "Sidebars are sticky and never overlap the text column"],
          ["> 1280 px", "Centred shell with a maximum width", "Extra space goes to margins, not to longer lines of text"],
        ],
      ),
      checklist("Mobile checks performed before shipping", [
        "No horizontal scroll on any page at 360 px width",
        "Timers and record controls reachable with one thumb; they never sit behind a scroll",
        "All headings and body copy announce clearly with the browser's text scaling at 200%",
        "Practice sessions survive a phone call or a screen lock without losing the session state",
        "Bangla text renders without clipping, with the correct line height",
        "Total transferred JavaScript per page stays small, so first interaction is quick on 4G",
      ]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 15 Accessibility                                                    */
  /* ------------------------------------------------------------------ */
  {
    id: "accessibility",
    code: "15",
    title: "Accessibility strategy",
    summary:
      "Semantic structure, keyboard-complete interaction, visible focus, and language tagging — treated as part of correctness, not as a finishing touch.",
    blocks: [
      table(
        "What is implemented, and where",
        ["Area", "Implementation"],
        [
          ["Language", "The document declares English; every Bangla passage is wrapped in a class that sets the Bangla font and script context, so screen readers switch languages"],
          ["Structure", "One h1 per page, ordered headings, landmark elements (header, main, footer, nav), and a skip link as the first focusable element"],
          ["Keyboard", "Every interactive element is a real button or link; filters, tabs, dialogs and timers are operable from the keyboard alone"],
          ["Focus", "A visible focus ring on all controls, with offset so it is never clipped by a card edge"],
          ["Colour", "Text and background token pairs are chosen for a minimum 4.5:1 contrast ratio; meaning is never carried by colour alone"],
          ["Motion", "Animation is limited to a short fade-and-rise on entry, and it is suppressed for visitors who ask for reduced motion"],
          ["Timers", "Timers announce remaining time and offer pause; a learner can complete every exercise without audio or speech recognition"],
          ["Forms", "Labelled inputs, descriptive error text, and a search field with an accessible name and live result count"],
          ["Media", "AI evaluation is optional; the recorded audio never leaves the device unless the learner asks for the transcript to be evaluated"],
        ],
      ),
      prose("Why this matters for this product specifically", [
        "A learner preparing for a speaking exam may also be dealing with anxiety about being recorded or about being watched. Accessibility here means giving control: a pause button, a visible timer, a typed alternative to speech recognition, and no dark patterns around data. That is both an accessibility decision and a product decision.",
      ]),
      callout(
        "tip",
        "Test with the keyboard first",
        "Tab through the practice flow before using a mouse. If the timer, the record button, the self-evaluation and the next-question control are all reachable in a sensible order, the interaction design is usually right for everyone else too.",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 16 Deployment                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "deployment",
    code: "16",
    title: "Deployment strategy",
    summary:
      "Static-first hosting anywhere, one optional environment variable group for AI, and a content check that runs before every build.",
    blocks: [
      steps("Build and release pipeline", [
        { title: "1. Type check", detail: "tsc --noEmit must pass — the content schema is enforced here." },
        { title: "2. Content check", detail: "npm run validate:content compiles the content modules standalone and checks structure, Bangla coverage, band-6-vs-6.5 lengths, cue-card requirements, duplicate slugs, and dead internal links." },
        { title: "3. Build", detail: "next build prerenders the content routes; the practice and progress pages are client-rendered shells." },
        { title: "4. Deploy", detail: "Any Node host or a static-first platform. Only /api/evaluate needs a server runtime; without it, the site still works with local evaluation." },
        { title: "5. Configure", detail: "Set NEXT_PUBLIC_SITE_URL for canonical URLs, and optionally AI_PROVIDER, AI_MODEL, AI_API_KEY and EVALUATE_RATE_LIMIT for AI feedback." },
        { title: "6. Verify", detail: "Check the sitemap, robots, a practice page and one lesson on a phone before announcing the release." },
      ]),
      table(
        "Environment variables",
        ["Variable", "Required", "Purpose"],
        [
          ["NEXT_PUBLIC_SITE_URL", "Recommended", "Canonical URLs in metadata, sitemap and robots"],
          ["AI_PROVIDER", "No", "Which provider adapter to use for evaluation"],
          ["AI_MODEL", "No", "Model identifier for that provider"],
          ["AI_API_KEY", "No", "Server-only key; never exposed to the browser"],
          ["EVALUATE_RATE_LIMIT", "No", "Requests per session before the endpoint returns 429 (default 12)"],
        ],
      ),
      checklist("Operational notes", [
        "Content updates ship as a normal release — there is no database to migrate",
        "The AI endpoint is the only surface that can incur cost, and it is rate-limited by default",
        "No learner data is stored server-side, which keeps privacy obligations minimal",
        "Because pages are static, traffic spikes cost almost nothing",
      ]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 17 Roadmap                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: "roadmap",
    code: "17",
    title: "Future roadmap",
    summary:
      "Sequenced by learner value: first make feedback better, then make practice social, then make the platform adaptable.",
    blocks: [
      noteGrid("Next, in order of expected value", [
        { label: "Now — content depth", detail: "More Part 1 topics and Part 2 cue cards, plus more worked Band 6.5 answers grounded in concrete examples." },
        { label: "Next — pronunciation feedback", detail: "Detect dropped final consonants and -ed endings from the transcript plus timing, and point to the matching pronunciation drill." },
        { label: "Next — richer progress", detail: "Per-question-type accuracy so the dashboard can say 'your comparison answers are weaker than your opinion answers'." },
        { label: "Later — teacher mode", detail: "A shareable review link for a class, so a teacher can see which lessons a group has completed." },
        { label: "Later — offline study pack", detail: "A service worker so lessons, cue cards and mistake entries remain available without a connection." },
        { label: "Later — optional sync", detail: "An export/import file for progress, so a learner can move between devices without creating an account." },
      ]),
      prose("What will not change", [
        "Three commitments are structural rather than features, and the roadmap does not include anything that would break them: no memorised answers are taught anywhere in the product; no band score is promised for any single answer; and progress data stays on the learner's device unless they explicitly export it.",
      ]),
      bangla(
        "রোডম্যাপের অগ্রাধিকার",
        [
          "প্রথমে যেটা শিক্ষার্থীর সবচেয়ে বেশি কাজে লাগবে — আরও উদাহরণ, আরও টপিক, আর প্রতিটি Part 3 উত্তরে বাস্তব উদাহরণ।",
          "এরপর উচ্চারণ নিয়ে সুনির্দিষ্ট মতামত, কারণ এখানেই বাংলাদেশি শিক্ষার্থীদের সবচেয়ে বড় ক্ষতি হয়।",
          "তারপর শিক্ষকদের জন্য সুবিধা আর ইন্টারনেট ছাড়া পড়ার ব্যবস্থা — তবে এই তিনটি প্রতিশ্রুতি কখনও বদলাবে না: মুখস্থ উত্তর নয়, নম্বরের নিশ্চয়তা নয়, আর ডেটা নিজের ডিভাইসেই।",
        ],
        "প্রতিটি ধাপের লক্ষ্য একটাই — শিক্ষার্থীর কাজে লাগা।",
      ),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 18 Quality self-check                                               */
  /* ------------------------------------------------------------------ */
  {
    id: "self-check",
    code: "18",
    title: "Quality self-check",
    summary:
      "A candid review against the four briefs: educational, user experience, design, and technical.",
    blocks: [
      table(
        "Educational quality",
        ["Check", "Verdict", "Evidence"],
        [
          ["Every lesson explains why an answer works", "Met", "Each lesson has a concept block plus an exam-use line, and most end with a callout naming the trap"],
          ["Patterns instead of memorised answers", "Met", "Models are labelled worked examples and are always followed by the pattern behind them"],
          ["Bangla-first explanation where it helps", "Met", "A Bangla block is required by the content validator; it fails the build if one is missing"],
          ["Grammar taught through speaking", "Met", "All 15 grammar lessons end in speaking patterns, corrections and spoken drills"],
          ["Realistic IELTS questions", "Met", "45 Part 1 topics, 19 cue-card categories and 19 Part 3 types drawn from published question patterns"],
          ["No promised band score", "Met", "Band comparison is written as characteristics; both evaluators withhold a band number"],
          ["Level-appropriate vocabulary", "Met", "Vocabulary is chosen for naturalness and speakability, not for rarity"],
        ],
      ),
      table(
        "User experience quality",
        ["Check", "Verdict", "Evidence"],
        [
          ["A learner always knows what to do next", "Met", "The 17-stage path, the recommended-next-lesson card and previous/next lesson navigation"],
          ["Practice reflects the real test", "Met", "Preparation and speaking timers match the exam; the mock test follows the exam sequence"],
          ["Feedback is actionable", "Met", "Every criterion returns strengths, problems, improvements and a next-practice action"],
          ["Progress is visible", "Met", "Dashboard with skills, streak, weak areas, recommended lesson and band-range meters"],
          ["Mobile first-class", "Met", "One-column layouts, thumb-sized controls, no horizontal scroll, timers always reachable"],
          ["Loading and empty states exist", "Met", "Route-level loading, error and not-found pages, plus empty states for filters and search"],
        ],
      ),
      table(
        "Design quality",
        ["Check", "Verdict", "Evidence"],
        [
          ["Reads as a coaching product, not a template", "Met", "Typography-led pages, paper palette, one accent colour, no dashboard clichés"],
          ["Strong hierarchy", "Met", "Serif headings, sentence-case labels, consistent spacing scale, eyebrow labels for context"],
          ["Accessible contrast and focus", "Met", "Token pairs chosen for contrast; visible focus states throughout"],
          ["Subtle, purposeful motion", "Met", "One fade-and-rise on entry, disabled for reduced-motion users"],
          ["Visual clichés avoided", "Met", "No neon, glassmorphism, robot imagery, oversized radii or gradient soup"],
        ],
      ),
      table(
        "Technical quality",
        ["Check", "Verdict", "Evidence"],
        [
          ["Type safety", "Met", "Strict TypeScript across the app; the content schema is compile-checked"],
          ["Content validation", "Met", "npm run validate:content plus a dev-mode validateContent() helper"],
          ["Error handling and fallbacks", "Met", "API validation with 400s, rate limiting, AI fallback to local evaluation, error boundary"],
          ["No hardcoded secrets", "Met", "Keys arrive through server-side environment variables only; .env.example documents them"],
          ["Accessibility", "Met", "Landmarks, skip link, labelled controls, keyboard-complete flows, Bangla script handling"],
          ["SEO", "Met", "Per-page metadata, canonical site URL, sitemap, robots, descriptive titles"],
          ["Performance", "Met", "Static rendering for content routes, no heavy libraries, small shared JavaScript footprint"],
          ["Maintainability", "Met", "Content, logic and presentation separated; one renderer per block type; documented conventions"],
        ],
      ),
      callout(
        "tip",
        "Two honest limitations",
        "First, automated evaluation cannot hear pronunciation — it measures what can be counted, and it says so on the page rather than guessing. Second, progress is per-device by design; a learner who switches phones starts a fresh streak until the optional export feature ships.",
      ),
    ],
  },

];
