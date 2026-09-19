import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  examples,
  fix,
  flow,
  patterns,
  phraseBank,
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * Fluency is not speed. It is keeping going, repairing yourself and linking
 * ideas — three habits that can be practised in ten minutes a day.
 */
export const fluencyLessons: Lesson[] = [
  {
    slug: "what-fluency-means",
    track: "fluency",
    order: 1,
    title: "What fluency actually means",
    banglaTitle: "ফ্লুয়েন্সি আসলে কী",
    summary:
      "Fluency is not speed. It is keeping going, linking ideas and repairing yourself — three habits you can practise in ten minutes a day.",
    level: 2,
    minutes: 8,
    goals: [
      "Define fluency in the way examiners measure it",
      "Identify what creates your own pauses",
      "Practise the three habits that raise fluency",
    ],
    examUse: "Fluency & Coherence is 25% of your speaking score.",
    tags: ["fluency", "method", "pauses"],
    blocks: [
      bangla(
        "ফ্লুয়েন্সি মানে দ্রুত নয়",
        [
          "পরীক্ষক গতি মাপেন না, মাপেন ধারাবাহিকতা: আপনি কি আটকে না গিয়ে এগিয়ে যেতে পারেন, কারণ-ফলাফল জুড়তে পারেন, আর ভুল হলে নিজেই ঠিক করতে পারেন।",
          "বাংলাদেশি শিক্ষার্থীদের পজ বাড়ার তিনটি বড় কারণ: মাথায় অনুবাদ করা, শব্দ খোঁজা, আর ভুল হওয়ার ভয়ে থেমে যাওয়া।",
          "সমাধান: থেমে যাওয়ার বদলে ছোট বাক্যে এগিয়ে যাওয়া, আর 'what I mean is' জাতীয় বাক্যাংশ দিয়ে নিজে থেকে সংশোধন করা।",
        ],
        "Fluency = keeping going + linking ideas + repairing yourself. Speed is not part of the definition.",
      ),
      table(
        "What counts against fluency — and what does not",
        ["Counts against", "Does not count against"],
        [
          ["Silences longer than three seconds", "Pausing between ideas"],
          ["Restarting sentences repeatedly", "One self-correction with 'what I mean is'"],
          ["One-word answers", "Short sentences used deliberately"],
          ["Repeating the question instead of answering", "Filling time with a thinking phrase"],
        ],
      ),
      steps("The three habits to practise", [
        {
          title: "1. Keep the first sentence ready",
          detail:
            "Before you speak, decide the opening: 'I'd say…' or 'For me, it's mainly…'. A ready first sentence removes the pause at the start.",
        },
        {
          title: "2. Extend with 'which means'",
          detail:
            "Instead of stopping after a reason, add: '…which means I don't need to leave early.' This single connector buys ten seconds of content.",
        },
        {
          title: "3. Repair instead of restarting",
          detail:
            "If a sentence collapses, add 'what I mean is…' and continue. One quick repair is normal speech; a restart costs fluency.",
        },
      ]),
      flow(["Answer", "Reason", "Which means…", "Concrete detail"], {
        title: "The four-step engine behind every fluent answer",
        note: "If you always know what comes next, silence rarely happens.",
      }),
      examples("Hesitation vs fluency, same answer", [
        {
          text: "“I like… um… it is… good… because… many things… good.”",
          note: "Five pauses, no structure. Fluency suffers even though the words are correct.",
        },
        {
          text: "“I like living here, mainly because everything is close by, which means I don't waste time travelling. For example, the market is five minutes away.”",
          note: "Same content, structured — almost no pauses and more content.",
        },
      ]),
      badBetter("Three fluency habits to break", [
        fix(
          "Stopping mid-sentence to search for the perfect word.",
          "Reformulating: 'I mean, it's quite quiet — not completely, but compared with the main road.'",
          "A precise paraphrase counts for vocabulary and keeps fluency intact.",
        ),
        fix(
          "Saying 'hmm' five times while planning the whole sentence.",
          "Saying one thinking phrase, then starting with a simple structure.",
          "Fluency comes from structure, not from planning perfect sentences.",
        ),
        fix(
          "Restarting every sentence you get wrong.",
          "Finishing simply, then correcting once: '…and what I mean is he's reliable.'",
          "Restarts fragment the answer; one repair keeps it whole.",
        ),
      ]),
      quiz("Is this a fluency problem?", [
        {
          question: "You pause two seconds between your idea and your example.",
          options: ["Yes, this is a fluency penalty", "No, this is natural", "Only in Part 2"],
          answer: 1,
          explain: "Pausing between ideas is normal speech. Only long silences in the middle of an idea hurt.",
        },
        {
          question: "You say 'actually' nine times in one answer.",
          options: ["Fluency problem", "Coherence and repetition problem", "No problem"],
          answer: 1,
          explain: "The answer keeps flowing, so fluency is fine — but repetition counts against lexical resource.",
        },
      ]),
      callout(
        "tip",
        "Track pauses, not speed",
        "Record a minute of speech and count silences longer than three seconds. Watching that number fall week by week is the most reliable fluency progress indicator you have.",
      ),
    ],
    practice: [
      "Speak for 60 seconds on a familiar topic without any silence longer than three seconds.",
      "Answer four Part 1 questions using 'which means' at least once in each.",
    ],
  },
  {
    slug: "thinking-while-speaking",
    track: "fluency",
    order: 2,
    title: "Thinking while speaking",
    banglaTitle: "বলতে বলতে ভাবা",
    summary:
      "How to plan your next idea while your mouth keeps going — the skill that separates a 6.0 pause pattern from a 6.5 one.",
    level: 3,
    minutes: 9,
    goals: [
      "Plan the next idea while speaking the current one",
      "Buy time with content rather than silence",
      "Stop composing whole sentences before speaking",
    ],
    examUse: "Most long pauses happen because learners plan a whole sentence before saying anything.",
    tags: ["fluency", "thinking", "pauses"],
    blocks: [
      bangla(
        "মূল কৌশল",
        [
          "যারা আটকে যান, তারা সাধারণত পুরো বাক্য মাথায় বানানোর চেষ্টা করেন। যারা ভালো বলেন, তারা ছোট অংশে বলেন আর পরের অংশ ভাবতে থাকেন।",
          "ভালো বলার কৌশল: একটি অংশ বলুন, আর পরের অংশটি ভাবতে থাকুন। এতে নীরবতা তৈরি হয় না।",
          "সময় কেনার সেরা উপায় কনটেন্ট যোগ করা: 'which is quite common here' বা 'especially in my area' — এই বাক্যাংশগুলো বলতে বলতে আপনি পরের আইডিয়া সাজাতে পারবেন।",
        ],
        "Speak a piece, plan the next piece. Buy time with content, not silence.",
      ),
      table(
        "Time-buying moves, ranked",
        ["Move", "Example", "Verdict"],
        [
          ["Material filler with content", "“I see this in my own area, actually —”", "Best: buys time and adds meaning"],
          ["Thinking phrase", "“That's an interesting question — let me think.”", "Good: honest, natural, short"],
          ["Reformulation", "“What I mean is…”", "Good: repairs and buys time"],
          ["Bangla filler", "“মানে…”", "Avoid: examiners notice immediately"],
          ["Long silence", "…", "Worst: it is exactly what fluency measures"],
        ],
      ),
      examples("Planning while speaking", [
        {
          text: "“Traffic is the biggest issue, and it's mainly a timing problem — everybody leaves at the same hour, especially in areas with offices.”",
          note: "The 'especially' clause was planned while the sentence was ending.",
        },
        {
          text: "“I'd say it's changed a lot, actually. Ten years ago, nobody — at least nobody I knew — ordered food online.”",
          note: "Two short chunks, each planned in the gap before it.",
        },
        {
          text: "“It's quieter than the centre, which suits me — though if I want shops, I walk ten minutes.”",
          note: "The concession was planned during 'which suits me'.",
        },
      ]),
      steps("The 5-4-3 method", [
        { title: "5 minutes", detail: "Speak on one topic for five minutes. Let it be messy; the goal is not to stop." },
        { title: "4 minutes", detail: "Same topic again in four minutes — you will cut repetition to fit." },
        { title: "3 minutes", detail: "Same topic in three minutes — now every sentence is deliberate." },
        { title: "Why it works", detail: "You practise retrieving ideas quickly rather than composing them perfectly." },
      ]),
      badBetter("Two habits that create pauses", [
        fix(
          "Planning the perfect sentence, then saying it silently to yourself first.",
          "Starting with a short, safe sentence and building on it out loud.",
          "You cannot plan and speak simultaneously at first, so plan less and speak more.",
        ),
        fix(
          "Looking for a word you learned last week but have never spoken.",
          "Using the simple word you own, then adding precision afterwards: 'it's useful — I mean really practical'.",
          "Retrieval beats recall under exam pressure. Choose words you have said aloud before.",
        ),
      ]),
      callout(
        "tip",
        "The one-sentence rule",
        "Never plan more than one sentence ahead. Speak a sentence, plan the next. That is how fluent speakers sound like they are thinking in real time — because they are.",
      ),
    ],
    practice: [
      "Do the 5-4-3 drill on one familiar topic, twice this week.",
      "Record a Part 3 answer and mark where you planned a whole sentence before speaking.",
    ],
  },
  {
    slug: "natural-fillers",
    track: "fluency",
    order: 3,
    title: "Natural fillers — sounding thoughtful, not stuck",
    banglaTitle: "স্বাভাবিক ফিলার",
    summary:
      "Well, let me think, I would say, to be honest and actually — how to use fillers like a speaker, and when they become a problem.",
    level: 2,
    minutes: 8,
    goals: [
      "Use five natural fillers accurately rather than randomly",
      "Know which fillers belong at the start, middle or end of answers",
      "Avoid overusing one filler until it becomes a repetition error",
    ],
    examUse: "A well-placed filler turns a hesitation into a thinking sound.",
    tags: ["fluency", "fillers", "natural English"],
    blocks: [
      bangla(
        "ফিলার কীভাবে কাজ করে",
        [
          "ফিলার সময় কেনার হাতিয়ার, কিন্তু সেটি অর্থপূর্ণ হতে হবে। 'Well…' বললে বোঝা যায় আপনি ভাবছেন; 'মানে' বললে বোঝা যায় আপনি অনুবাদ করছেন।",
          "প্রতিটি ফিলারের নিজের জায়গা আছে: শুরুতে 'Well', 'To be honest'; ভাবার সময় 'Let me think'; মত দিতে 'I'd say'।",
          "সাবধান: একটি ফিলার বারবার ব্যবহার করলে সেটি repetition-এর দোষ হয়ে দাঁড়ায় — 'actually' দিয়ে শুরু করা প্রতিটি বাক্য এর সবচেয়ে বড় উদাহরণ।",
        ],
        "Use a range of fillers, each in its natural position — then stop relying on them.",
      ),
      phraseBank("Fillers with a job to do", [
        {
          label: "Starting an answer",
          note: "Use one, not two. These signal that your answer is coming.",
          items: ["Well, …", "To be honest, …", "I'd say …", "For me, …", "In my case, …"],
        },
        {
          label: "Buying thinking time",
          note: "Best used when the question is hard, not in every answer.",
          items: ["That's an interesting question…", "Let me think about that for a second…", "I've never really thought about it, but…"],
        },
        {
          label: "Softening an opinion",
          items: ["I'd say…", "probably", "more or less", "to some extent", "as far as I can tell"],
        },
        {
          label: "Extending before stopping",
          note: "Use these to add one more sentence instead of ending the answer.",
          items: ["Actually, there's another thing —", "And on top of that,", "Which reminds me,"],
        },
      ]),
      examples("Fillers in natural positions", [
        { text: "“Well, I'd say it's changed quite a lot — mainly for the better.”", note: "Opening filler, then an opinion." },
        { text: "“That's an interesting question. Let me think… I'd probably keep the same area.”", note: "Two fillers used once each." },
        { text: "“To be honest, I don't enjoy it that much, though I do it anyway.”", note: "Honest filler plus contrast." },
        { text: "“Actually, there's another thing — the timing matters a lot.”", note: "Extension filler rather than a closing silence." },
      ]),
      badBetter("Fillers gone wrong", [
        fix(
          "“Actually, actually I think actually it's actually quite good.”",
          "“Actually, I think it's genuinely useful.”",
          "One filler is natural; four in a sentence is a repetition error and it dilutes your meaning.",
        ),
        fix(
          "“Ah… hmm… my city… hmm… is very good.”",
          "“Well, my city has both good and difficult sides.”",
          "Sound-based hesitation adds nothing. A filler with meaning buys the same time and sounds confident.",
        ),
        fix(
          "Filling every pause with 'you know' or 'like'.",
          "Filling pauses with content: 'especially in the mornings'.",
          "Content fillers are never penalised — they add development.",
        ),
      ]),
      quiz("Which filler fits?", [
        {
          question: "The examiner asks a difficult Part 3 question. Which is best?",
          options: [
            "“Actually, actually, actually…”",
            "“That's an interesting question — let me think for a second.”",
            "Silence until the answer is ready",
          ],
          answer: 1,
          explain: "One honest thinking phrase sounds thoughtful; repetition or silence sounds stuck.",
        },
      ]),
      callout(
        "tip",
        "Fillers are scaffolding, not structure",
        "Use them while you think, then take them away as your answer patterns become automatic. Learners who lean on fillers end up with fluent-sounding answers and no content.",
      ),
    ],
    practice: [
      "Answer five Part 3 questions, allowing yourself exactly one thinking phrase per answer.",
      "Record an answer, count the fillers, then re-record with half as many and more content instead.",
    ],
  },
  {
    slug: "self-correction",
    track: "fluency",
    order: 4,
    title: "Self-correction and reformulation",
    banglaTitle: "নিজের ভুল সংশোধন",
    summary:
      "How to fix a mistake mid-sentence without breaking fluency — and why reformulating is worth more than silence.",
    level: 3,
    minutes: 8,
    goals: [
      "Correct an error once, quickly, then continue",
      "Reformulate when a word will not come",
      "Know which errors are worth correcting and which are not",
    ],
    examUse: "Self-correction shows control — but repeated repairs damage fluency. Balance is the skill.",
    tags: ["fluency", "self-correction", "accuracy"],
    blocks: [
      bangla(
        "কখন সংশোধন করবেন",
        [
          "ছোট ভুল (article, preposition) সংশোধন না করে এগিয়ে যাওয়াই ভালো — থেমে সংশোধন করলে fluency নষ্ট হয়।",
          "বড় ভুল (কাল, ব্যক্তির রূপ, উল্টো অর্থ) একবার দ্রুত সংশোধন করলে বরং ভালো দেখায়: 'He go— sorry, he goes to work by bus.'",
          "শব্দ না এলে চুপ না থেকে রূপান্তর করুন: 'It's a kind of small shop — a kiosk, I suppose.'",
        ],
        "Correct meaning-changing errors once, quickly. Let small slips pass.",
      ),
      table(
        "Worth correcting vs better to ignore",
        ["Correct it", "Ignore it and keep going"],
        [
          ["A tense used wrongly through the whole story", "A missing article"],
          ["Agreement that changes meaning", "A slight preposition slip"],
          ["A word that means the opposite of what you intended", "A repeated adjective"],
          ["A sentence you cannot finish at all", "A mispronounced word you immediately reuse correctly"],
        ],
      ),
      examples("Self-correction, done well", [
        { text: "“He go— sorry, he goes to work by bus every day.”", note: "One-word repair, then continue." },
        { text: "“It's a kind of traditional — well, not traditional exactly, more like a family recipe.”", note: "Precision repair." },
        { text: "“I've visited — I visited Cox's Bazar in 2019.”", note: "Tense repair with a finished time." },
        { text: "“We were… what I mean is, we had been waiting for two hours.”", note: "Reformulation rather than restarting." },
      ]),
      patterns("Repair phrases", [
        { label: "Quick repair", template: "___ — sorry, ___", example: "I have went — sorry, I went" },
        { label: "Reformulation", template: "What I mean is ___ .", example: "What I mean is, I'd rather stay here." },
        { label: "Approximation", template: "It's a kind of ___ , I suppose.", example: "It's a kind of market, I suppose — smaller than a bazaar." },
        { label: "Abandon and restart", template: "Let me put that differently — ___ .", example: "Let me put that differently — it's cheaper, not necessarily better." },
      ]),
      badBetter("Over-correction and under-correction", [
        fix(
          "“I goed… no, went… no, I mean I go… actually, I went…”",
          "“I goed— sorry, I went there last year.”",
          "More than one repair in a sentence reads as loss of control. Fix once, then move on.",
        ),
        fix(
          "Never correcting a tense error that runs through the whole answer.",
          "Correcting it once, then using the right tense for the rest of the answer.",
          "One correction often fixes the pattern for the rest of the answer.",
        ),
        fix(
          "Stopping to apologise: “Sorry, my English is not good.”",
          "Correcting silently and continuing.",
          "Apologies distract from your content and never earn marks.",
        ),
      ]),
      callout(
        "tip",
        "The three-second rule",
        "If correcting takes more than three seconds, abandon the correction and continue with a simpler sentence. Meaning first, accuracy second.",
      ),
    ],
    practice: [
      "Record an answer, deliberately make one error, and practise repairing it in under two seconds.",
      "Listen to an old recording and mark which errors were worth correcting and which were not.",
    ],
  },
  {
    slug: "connecting-ideas",
    track: "fluency",
    order: 5,
    title: "Connecting ideas — coherence you can hear",
    banglaTitle: "আইডিয়া জোড়া লাগানো",
    summary:
      "Because and so are not enough. Learn the connector families that make a long answer sound organised rather than rambling.",
    level: 3,
    minutes: 9,
    goals: [
      "Use five connector families accurately",
      "Choose connectors by meaning, not by habit",
      "Structure a two-minute answer with signposts",
    ],
    examUse: "Coherence is half of the first criterion — and the fastest thing to improve in Part 2 and Part 3.",
    tags: ["fluency", "coherence", "connectors"],
    blocks: [
      bangla(
        "সংযোগকারী শব্দের পরিবার",
        [
          "একই ধরনের সংযোগকারী বারবার ব্যবহার করলে উত্তর তালিকায় পরিণত হয়। সংযোগকারীর কয়েকটি পরিবার আছে: কারণ, ফলাফল, বিপরীত, উদাহরণ, ক্রম।",
          "প্রতিটি পরিবার থেকে অন্তত দুটি করে জানা থাকলে ৬.৫-এর coherence দেখানো সহজ।",
          "signposting মানে শ্রোতাকে সংকেত দেওয়া: 'There are two reasons for this. The first is…' — এতে উত্তর সংগঠিত শোনায়।",
        ],
        "One connector per family, used by meaning, not by habit.",
      ),
      table(
        "Five connector families",
        ["Family", "Connectors", "Example"],
        [
          ["Cause", "because, since, as", "I avoid the main road because the traffic is unpredictable."],
          ["Result", "so, which means, as a result, that's why", "It's closer, which means I save an hour a day."],
          ["Contrast", "although, even though, whereas, that said", "Although it's cheaper, it takes twice as long."],
          ["Example", "for example, for instance, like", "For instance, my cousin moved there last year."],
          ["Sequence", "to start with, after that, eventually, in the end", "To start with, nobody knew what to do."],
        ],
      ),
      examples("Signposting a long answer", [
        {
          text: "“There are two reasons, I'd say. The first is money — flights are expensive. The second is timing, since most people can't take leave in December.”",
          note: "A Part 3 answer with an audible structure.",
        },
        {
          text: "“It's changed in a couple of ways. To start with, shopping moved online. After that, small shops started closing.”",
          note: "Sequence connectors carry the change question.",
        },
        {
          text: "“I'd say it's mostly positive. That said, there is a downside — people rely on it too much now.”",
          note: "Balanced close with 'that said'.",
        },
      ]),
      badBetter("Connector problems and fixes", [
        fix(
          "“I like it and it is good and the people are good and the food is good.”",
          "“I like it mostly for the food, though the people are a big part of it too.”",
          "Repeated 'and' chains simple sentences. One contrast adds structure and variety.",
        ),
        fix(
          "“Because the traffic is bad. Because many cars.”",
          "“It's because of the traffic — there are too many cars on narrow roads.”",
          "'Because' cannot stand alone in spoken answers; join it to a main clause.",
        ),
        fix(
          "“Moreover, furthermore, in addition, the cost is high.”",
          "“On top of that, the cost is high.”",
          "Written connectors like 'moreover' sound unnatural in speech. Use spoken equivalents.",
        ),
      ]),
      quiz("Choose the right connector", [
        {
          question: "“Public transport is cheaper, ___ it's often slower.” Which connector fits?",
          options: ["so", "whereas", "because"],
          answer: 1,
          explain: "'Whereas' signals contrast; 'so' would signal a result, and 'because' a cause.",
        },
      ]),
      callout(
        "tip",
        "Three connectors per answer is plenty",
        "One cause, one result and one contrast — that trio makes almost any answer sound organised without sounding rehearsed.",
      ),
    ],
    practice: [
      "Answer a Part 3 change question using three sequence connectors in order.",
      "Record a two-minute Part 2 answer and mark where a signpost would have helped.",
    ],
  },
];
