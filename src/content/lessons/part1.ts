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
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * Part 1 is where most Bangladeshi learners lose easy marks: the answer is
 * correct but too short, and it starts with "Actually…". These five lessons
 * fix the shape of the answer first, then the sentences inside it.
 */
export const part1Lessons: Lesson[] = [
  {
    slug: "how-part-1-works",
    track: "part1",
    order: 1,
    title: "How Part 1 works — and what a good answer looks like",
    banglaTitle: "Part 1 কীভাবে কাজ করে",
    summary:
      "Four to five minutes, familiar topics, two or three questions each. The trap is not difficulty — it is answering too briefly.",
    level: 1,
    minutes: 8,
    goals: [
      "Understand the rhythm of a Part 1 exchange",
      "Recognise the difference between a one-line answer and a developed one",
      "Stop the two habits that cost marks immediately: 'Actually…' and one-sentence answers",
    ],
    examUse: "Part 1 sets the examiner's first impression of your fluency — a short answer here makes the whole test feel weaker.",
    tags: ["part 1", "answering", "structure"],
    blocks: [
      prose("The structure of Part 1", [
        "The examiner introduces themselves, asks your name, where you are from, and then moves through two or three familiar topic areas. Each area gets two to four questions. The questions are deliberately easy: hobbies, food, weather, your neighbourhood, your daily routine. Difficulty is not the challenge here — length and natural delivery are.",
        "A Part 1 answer should last roughly 15 to 30 seconds. That is long enough to answer, explain and add one specific detail, and short enough that the examiner can move on. Most learners answer in five seconds, which reads as limited English rather than as efficiency.",
      ]),
      bangla(
        "Part 1-এর নিয়ম",
        [
          "প্রশ্ন সহজ, কিন্তু উত্তর ছোট হলে নম্বর কমে — কারণ পরীক্ষক আপনার ভাষার সীমা দেখতে পান না।",
          "প্রতিটি উত্তরে তিনটি অংশ রাখুন: সরাসরি উত্তর → কারণ → ছোট একটি বিস্তারিত। এতে ১৫–৩০ সেকেন্ড হয়ে যায়।",
          "প্রশ্ন মুখস্থ করবেন না। বিষয় পরিবর্তন হলে ঘাবড়াবেন না — একই কাঠামো নতুন বিষয়ে বসিয়ে দিলেই হয়।",
        ],
        "সরাসরি উত্তর + কারণ + ছোট বিস্তারিত = Part 1-এর নিরাপদ কাঠামো।",
      ),
      table(
        "Three answers to the same question",
        ["Version", "Example answer", "Verdict"],
        [
          [
            "One line",
            "“Yes, I like music.”",
            "Too short — no reason, no detail, nothing to assess.",
          ],
          [
            "Developed",
            "“Yes, quite a lot, mainly while I'm travelling. I usually listen to Bangla folk songs on the bus, which makes the journey feel shorter.”",
            "Good — 15 seconds, direct answer, reason, specific detail. This is the target shape.",
          ],
          [
            "Overlong",
            "“Yes, I love music, I have loved music since I was very small, my father used to play songs, we had a cassette player, and now I listen on my phone, and my cousin also sings, and when I was in school…”",
            "Too long, unstructured — it turns into a list and the examiner interrupts.",
          ],
        ],
      ),
      steps("Answering any Part 1 question, in four moves", [
        {
          title: "1. Answer directly",
          detail: "One short sentence: yes/no, or the fact asked for. Never open with 'Actually' or a preamble.",
        },
        {
          title: "2. Add a reason",
          detail: "'…mainly because…' or '…mostly since…'. Vary the reason every time — not everything is 'for my future'.",
        },
        {
          title: "3. Add one specific detail",
          detail: "A time, a place, a person, a frequency. 'On the bus', 'twice a week', 'with my cousin'.",
        },
        {
          title: "4. Stop",
          detail: "End your sentence rather than trailing off. A clean finish sounds confident even if the content was simple.",
        },
      ]),
      badBetter("The two habits to remove immediately", [
        fix(
          "“Actually, I think it is good.”",
          "“I'd say it's really useful, mainly because it saves me a lot of time.”",
          "'Actually' as an opener adds no meaning, and in Bangladeshi English it is heavily overused. Replace it with a real opinion phrase.",
        ),
        fix(
          "“Yes.” (and nothing else)",
          "“Yes, definitely — it's something I do every weekend with my family.”",
          "A one-word answer gives the examiner nothing to assess. Always complete the pattern.",
        ),
        fix(
          "“I am living in Dhaka since 2019.”",
          "“I've been living in Dhaka since 2019.”",
          "A situation continuing from the past into now takes the present perfect, not the present continuous.",
        ),
      ]),
      flow(
        ["Direct answer", "Reason", "Specific detail", "Stop cleanly"],
        {
          title: "The Part 1 answer engine",
          note: "Learn this once and it works for every Part 1 question you will ever be asked.",
        },
      ),
      quiz("Which answer is the right length?", [
        {
          question: "“Do you enjoy cooking?”",
          options: [
            "“Yes.”",
            "“Yes, quite a lot — I usually cook at weekends because it's cheaper than eating out, and I've got a few dishes I've practised enough to make without thinking.”",
            "“Yes, I enjoy cooking very much, I like to cook rice and fish and chicken and vegetables and sometimes I cook for my family and my friends also come sometimes when there is a holiday and we cook together…”",
          ],
          answer: 1,
          explain: "Direct answer, reason, and one concrete detail — roughly twenty seconds, then stop.",
        },
      ]),
      callout(
        "tip",
        "Vary your reason",
        "Listen to your own recording and count how many answers were justified with 'for my future'. Real speech gives real reasons: convenience, cost, family, habit, weather, timing. Specificity is what lifts a 6.0 to a 6.5.",
      ),
    ],
    practice: [
      "Answer five Part 1 questions using the four moves, and time each answer so it lands between 15 and 30 seconds.",
      "Record one answer twice: once briefly, once developed. Compare how much of your English the examiner can actually assess.",
    ],
  },

  {
    slug: "answering-yes-no-questions",
    track: "part1",
    order: 2,
    title: "Yes/No questions — Direct Answer + Reason + Small Detail",
    banglaTitle: "হ্যাঁ/না প্রশ্ন — সরাসরি উত্তর + কারণ + ছোট বিস্তারিত",
    summary:
      "The single most common Part 1 question type. One pattern answers almost all of them safely, and lets you sound natural rather than rehearsed.",
    level: 2,
    minutes: 9,
    goals: [
      "Apply the Direct Answer + Reason + Small Detail pattern reliably",
      "Avoid yes/no answers that contradict the question",
      "Use natural alternatives to a bare 'yes' or 'no'",
    ],
    examUse: "Around a third of Part 1 questions are yes/no. This pattern is the highest-value structure in the whole test.",
    tags: ["part 1", "yes-no", "patterns"],
    blocks: [
      bangla(
        "তিন ধাপের সূত্র",
        [
          "প্রথম বাক্যে সরাসরি উত্তর দিন — হ্যাঁ, না, বা কোনটি বেশি পছন্দ।",
          "দ্বিতীয় অংশে কারণ দিন: 'mainly because…', 'mostly since…' — শুধু 'because' নয়।",
          "তৃতীয় অংশে ছোট একটি নির্দিষ্ট তথ্য: কখন, কোথায়, কার সঙ্গে, কতবার। এই ছোট তথ্যটিই ৬.৫-এর পার্থক্য তৈরি করে।",
        ],
        "হ্যাঁ/না → কারণ → ছোট বিস্তারিত। তিন বাক্য, ১৫–২৫ সেকেন্ড।",
      ),
      patterns("The pattern, with variations", [
        {
          label: "Basic",
          template: "Yes, I do — mainly because ___. For example, ___.",
          example:
            "Yes, I do — mainly because it's relaxing. For example, I usually read for half an hour before sleeping.",
        },
        {
          label: "Soft no",
          template: "Not really, to be honest. I ___ instead, mostly because ___.",
          example:
            "Not really, to be honest. I walk instead, mostly because the bus takes longer than the walk.",
        },
        {
          label: "It depends",
          template: "It depends, really. If ___, then yes; otherwise ___.",
          example:
            "It depends, really. If I'm with friends, then yes; otherwise I'd rather stay at home.",
        },
        {
          label: "Strong preference",
          template: "Definitely — ___. I'd say ___ , actually.",
          example:
            "Definitely — I've done it since school. I'd say it's the one hobby I've never given up.",
        },
      ]),
      examples("Yes/No questions with developed answers", [
        {
          text: "“Do you like your neighbourhood?” — “Yes, quite a lot, mainly because everything I need is within walking distance. There's a market and a clinic about five minutes away.”",
          note: "Reason plus two concrete references.",
        },
        {
          text: "“Do you often use public transport?” — “Not as often as I used to. I take a rickshaw now, mostly because it's quicker for short trips.”",
          note: "A 'no'-flavoured answer that still develops fully.",
        },
        {
          text: "“Is your hometown a good place to live?” — “For families, yes — it's quiet and safe. For young people, though, it can feel limited, because there aren't many jobs.”",
          note: "A two-sided answer — very effective in Part 1 when the question invites it.",
        },
      ]),
      badBetter("Yes/No errors that cost marks", [
        fix(
          "“Do you like reading?” → “No, I don't like reading, I like reading.”",
          "“Not really — I find it hard to concentrate for that long. I usually listen to podcasts instead.”",
          "Contradicting yourself signals you are answering from habit rather than thought. Pick one position.",
        ),
        fix("“Yes, I like.”", "“Yes, I do.”", "Short answers still need the auxiliary verb. 'Yes, I like' is incomplete in English."),
        fix(
          "“Yes, because it is good, because I like it, because my friends are there.”",
          "“Yes — mostly because my friends are there, and we meet almost every Friday.”",
          "Repeating 'because' three times in ten seconds is the clearest sign of a limited range. Vary the connector and add detail instead.",
        ),
      ]),
      table(
        "Natural openers for a yes/no answer",
        ["Instead of", "Say"],
        [
          ["Actually, yes", "Yes, definitely / To be honest, yes / Yes, quite a lot"],
          ["I think yes", "I'd say yes / On the whole, yes"],
          ["No problem", "Not really / Not particularly / Not as much as I'd like"],
          ["Yes of course", "Yes, fairly often / Yes, every so often"],
        ],
      ),
      checklist("Before you move on", [
        "Is my first sentence a direct answer?",
        "Did I give a reason that is specific to the question?",
        "Did I add one concrete detail (time, place, person, frequency)?",
        "Did I avoid repeating 'because' more than once?",
      ]),
      callout(
        "tip",
        "Two-sided answers are allowed",
        "'It depends' is not a weak answer — it is a developed one, as long as you give the condition and both sides. Examiners reward the reasoning, not the firmness.",
      ),
    ],
    practice: [
      "Answer ten yes/no questions using only the Direct Answer + Reason + Small Detail pattern.",
      "Re-record three of them using 'not really', 'it depends' and 'definitely' as different openers.",
    ],
  },

  {
    slug: "answering-wh-questions",
    track: "part1",
    order: 3,
    title: "WH questions — What, Where, When, Who, Why, How",
    banglaTitle: "WH প্রশ্ন — কী, কোথায়, কখন, কে, কেন, কীভাবে",
    summary:
      "WH questions ask for information rather than agreement. Each type has a natural shape — and 'why' questions are the ones that decide your score.",
    level: 2,
    minutes: 9,
    goals: [
      "Answer What, Where and When questions with concrete detail",
      "Answer Why questions with a real explanation, not a filler",
      "Answer How questions with a process or a frequency",
    ],
    examUse: "WH questions dominate Part 1 and reappear in Part 3 at a higher level of abstraction.",
    tags: ["part 1", "wh questions", "why"],
    blocks: [
      prose("Each WH word wants a different kind of answer", [
        "A What question wants a thing, a category or a description. A Where question wants a location and, ideally, how far or how often. A When question wants a time pattern, not a single date. A Who question wants a person and their relationship to you. A How question usually wants a method or a frequency.",
        "The Why question is the one that decides your mark. It asks you to explain, and explaining is exactly what the examiner is assessing. A Why answer needs a real cause — a specific pressure, preference, habit or circumstance — rather than a circular restatement of the question.",
      ]),
      bangla(
        "প্রতিটি প্রশ্নের ধরন আলাদা",
        [
          "What = কী / কোন ধরনের। Where = কোথায়, আর কত দূরে বা কতবার। When = কখন, প্রতিদিন কিনা। Who = কে, আর আপনার সঙ্গে সম্পর্ক কী।",
          "How = কীভাবে বা কত ঘন ঘন। সবচেয়ে গুরুত্বপূর্ণ Why = কেন — এখানেই আসল কারণ দিতে হয়।",
          "Why প্রশ্নে 'কারণ এটা ভালো' ধরনের উত্তর দিলে নম্বর কমে; কারণ হতে হবে নির্দিষ্ট — সুবিধা, সময়, টাকা, অভ্যাস, পরিস্থিতি।",
        ],
        "Why প্রশ্নের উত্তরেই আপনার ব্যাখ্যা করার ক্ষমতা ধরা পড়ে — এখানে সময় দিন।",
      ),
      table(
        "The shape each WH word expects",
        ["Question", "What it wants", "Example"],
        [
          ["What do you do at weekends?", "Activity + frequency", "“I usually catch up on sleep, and on Saturday afternoons I play cricket with friends.”"],
          ["Where do you usually study?", "Place + why there", "“Mostly at home, in my room — the library near me closes early.”"],
          ["When do you feel most productive?", "Time pattern + cause", "“Early morning, before anyone else is awake. It's the only time it's quiet enough.”"],
          ["Who do you spend the most time with?", "Person + relationship", "“My cousin — we study together, so we end up meeting three or four times a week.”"],
          ["Why do people in your area prefer shopping online?", "Cause, not restatement", "“Mostly convenience — traffic makes going out a whole afternoon, so ordering is easier.”"],
          ["How do you usually travel around your city?", "Method + limitation", "“By rickshaw for short trips, and the bus if I'm going further, though it's slow in the morning.”"],
        ],
      ),
      examples("Why answers, good and bad", [
        {
          text: "Question: “Why do you enjoy your job?” — “Because it is enjoyable.”",
          note: "Circular: it repeats the question without explaining anything.",
        },
        {
          text: "“Mostly because of the variety — I handle different clients every week, so I'm rarely doing the same thing twice.”",
          note: "A real cause with a specific mechanism.",
        },
        {
          text: "Question: “Why is your city so crowded?” — “Because there are a lot of people.”",
          note: "True but empty. It gives the examiner nothing to assess.",
        },
        {
          text: "“Mainly because so many people move here for work — there are far more jobs than in the towns, so the population grows every year.”",
          note: "Cause, mechanism, and a consequence — a Band 6.5-level Part 1 answer.",
        },
      ]),
      badBetter("Common WH question mistakes", [
        fix(
          "“Why do you like it?” → “Yes, I like it.”",
          "“I like it mainly because it's flexible — I can study at night, when I concentrate better.”",
          "Answer the question that was asked. 'Why' never wants a yes/no.",
        ),
        fix(
          "“Where do you live?” → “I live in Dhaka.”",
          "“I live in Mirpur, in the north of Dhaka — about forty minutes from the centre by bus.”",
          "A bare location is correct but thin. Add a relative position or a travel time.",
        ),
        fix(
          "“How often do you exercise?” → “I exercise.”",
          "“Twice a week, usually — and honestly, sometimes I skip it when work gets busy.”",
          "Frequency questions need a frequency. Admitting a limitation sounds natural, not weak.",
        ),
      ]),
      checklist("Answering a Why question in three layers", [
        "The immediate cause: 'because…' / 'mainly due to…'",
        "The mechanism: how exactly that cause produces the effect",
        "The limit or exception: 'although', 'except in winter', 'not for everyone'",
      ]),
      callout(
        "tip",
        "Never restate the question as the reason",
        "“Why do you like music?” → “Because I like it” gets you nowhere. Ask yourself: what would I say to a friend who genuinely wanted to know? Say that, in simple English.",
      ),
    ],
    practice: [
      "Answer eight WH questions, one of each type, using the shapes in the table.",
      "Record three Why answers and check that none of them restart the question's own words.",
    ],
  },

  {
    slug: "extending-short-answers",
    track: "part1",
    order: 4,
    title: "Extending answers — Answer → Reason → Example → Extra Detail",
    banglaTitle: "উত্তর বাড়ানোর সূত্র",
    summary:
      "A four-step extension pattern that turns a twenty-second answer into a full one without padding and without memorised phrases.",
    level: 3,
    minutes: 10,
    goals: [
      "Extend any answer naturally to 25–30 seconds",
      "Use an example rather than an adjective to prove your point",
      "Know when to stop extending",
    ],
    examUse: "Development is the difference between Band 6.0 and 6.5 in every part of the test.",
    tags: ["part 1", "extension", "development"],
    blocks: [
      bangla(
        "চার ধাপে উত্তর বড় করুন",
        [
          "১) সরাসরি উত্তর। ২) কারণ। ৩) উদাহরণ — বাস্তব ঘটনা, নাম বা সময়। ৪) অতিরিক্ত ছোট তথ্য বা বিপরীত দিক।",
          "উদাহরণ দেওয়া সবচেয়ে সহজ উপায়: 'For example, last year…', 'Usually, like on Fridays…'।",
          "কখন থামবেন: যখন প্রশ্নের উত্তর সম্পূর্ণ হয়ে যায় এবং নতুন তথ্য যোগ করার নেই। জোর করে লম্বা করলে repetition বাড়ে।",
        ],
        "Answer → Reason → Example → Extra detail — তারপর থামুন।",
      ),
      steps("Building the extension", [
        {
          title: "1. Answer",
          detail: "Direct and short. 'Yes, I do.' / 'It's my favourite.' Never start with a story.",
        },
        {
          title: "2. Reason",
          detail: "Rotate your connectors: mainly because, mostly since, largely due to, that's why.",
        },
        {
          title: "3. Example",
          detail:
            "One real instance: a time, a person, a place. General statements are weaker than one specific memory.",
        },
        {
          title: "4. Extra detail",
          detail:
            "Add a contrast, a limitation or a change over time: 'Though lately I've done less of it', 'It wasn't always like that'.",
        },
      ]),
      examples("The same answer at four lengths", [
        { text: "Answer: “I enjoy cooking.”", note: "6 seconds." },
        { text: "+ Reason: “I enjoy cooking, mainly because it's a way to switch off after work.”", note: "12 seconds." },
        {
          text: "+ Example: “There's a dish my mother taught me — I make it most Fridays and it takes about an hour, which is part of the point.”",
          note: "22 seconds.",
        },
        {
          text: "+ Extra detail: “I didn't cook at all when I was younger, though — I only started during the pandemic, when eating out wasn't an option.”",
          note: "30 seconds — a complete, developed answer with a change over time.",
        },
      ]),
      patterns("Extension frames you can reuse immediately", [
        { label: "Example", template: "For example, ___ / Like last ___, when ___ .", example: "Like last winter, when we couldn't travel, I spent the whole holiday reading." },
        { label: "Contrast", template: "That said, ___ .", example: "That said, I don't manage it every week." },
        { label: "Change over time", template: "I didn't ___ before, but ___ now.", example: "I didn't cycle before, but now it's my main way of getting around." },
        { label: "Comparison", template: "It's ___ than ___, mainly because ___ .", example: "It's cheaper than taking a rickshaw, mainly because I don't pay for fuel." },
        { label: "Condition", template: "If ___, I'd ___ .", example: "If I had more free time, I'd probably do it twice a week." },
      ]),
      badBetter("Extension gone wrong", [
        fix(
          "Extending with adjectives: “It is very very nice and good and beautiful.”",
          "Extending with an example: “It's peaceful — there's a park behind the building where people walk in the evening.”",
          "Adjectives repeat; examples inform. One example beats five adjectives.",
        ),
        fix(
          "Extending by listing: “I like rice, fish, chicken, vegetables, dal and many things.”",
          "Extending by explaining: “I eat mostly rice and fish, which is typical where I live, though I've started cooking more vegetables.”",
          "Lists add words but not meaning. Choose one item and say something about it.",
        ),
        fix(
          "Extending until the examiner interrupts every time.",
          "Finishing your pattern and stopping at 25–30 seconds.",
          "Being interrupted in Part 1 is normal, but consistently running long suggests you cannot judge length.",
        ),
      ]),
      quiz("Which step is missing?", [
        {
          question: "“I like it because it's relaxing. It's the only time I really switch off.”",
          options: ["Reason", "Example", "Extra detail"],
          answer: 1,
          explain: "There is a reason and a general statement, but no concrete instance — adding 'for example, on Sundays I…' would complete it.",
        },
      ]),
      callout(
        "tip",
        "One example is worth more than three reasons",
        "Learners often stack reasons: 'because it's useful, because it's good for my career, because it helps me'. Replace two of them with one concrete example and the answer becomes both shorter and stronger.",
      ),
    ],
    practice: [
      "Take five short answers you have already recorded and extend each one to 25–30 seconds.",
      "Answer three questions using a different extension frame each time: example, contrast, change over time.",
    ],
  },

  {
    slug: "part1-sentence-building",
    track: "part1",
    order: 5,
    title: "Sentence building — simple, compound and complex",
    banglaTitle: "বাক্য গঠন — সরল, যুক্ত ও জটিল",
    summary:
      "Grammatical range comes from mixing three sentence types, not from long sentences. Learn the twelve structures that raise your range safely.",
    level: 3,
    minutes: 11,
    goals: [
      "Distinguish simple, compound and complex sentences and use all three",
      "Join ideas with because, although, when, if and which",
      "Add comparison and frequency structures without breaking accuracy",
    ],
    examUse: "Grammatical range is scored directly — and it is the easiest criterion to demonstrate deliberately.",
    tags: ["part 1", "grammar", "range", "sentence structure"],
    blocks: [
      prose("Three sentence types, one strategy", [
        "A simple sentence has one clause: 'I walk to work.' A compound sentence joins two independent clauses with and, but, so or or: 'I walk to work, but I take a bus when it rains.' A complex sentence has a main clause plus a subordinate one: 'Although it takes longer, I prefer walking.'",
        "The examiners are listening for a mix. If every sentence is simple and short, your range looks limited. If every sentence is long and complex, your accuracy usually collapses. The reliable approach is two simple sentences, then one longer sentence that joins them.",
      ]),
      bangla(
        "তিন ধরনের বাক্য মিশিয়ে বলুন",
        [
          "সরল বাক্য: একটিই ধারণা — 'I walk to work.' সহজ, নিরাপদ, কিন্তু একটানা ব্যবহার করলে বৈচিত্র্য দেখা যায় না।",
          "যুক্ত বাক্য: and, but, so, or দিয়ে দুটি স্বাধীন বাক্য জোড়া — 'I walk to work, but I take a bus when it rains.'",
          "জটিল বাক্য: although, because, when, if, which দিয়ে একটি প্রধান আর একটি নির্ভরশীল অংশ — 'Although it takes longer, I prefer walking.'",
          "ন্যূনতম চাহিদা: প্রতি উত্তরে অন্তত একটি জটিল বাক্য — এতে range দেখানো যায় অথচ নিয়ন্ত্রণ থাকে।",
        ],
        "সহজ বাক্য + যুক্ত বাক্য + একটি জটিল বাক্য = নিরাপদ range।",
      ),
      table(
        "The twelve structures worth owning", 
        ["Purpose", "Structure", "Example"],
        [
          ["Reason", "because / since + clause", "I take the bus because it's cheaper than a rickshaw."],
          ["Contrast", "although / even though + clause", "Even though it's noisy, I like living there."],
          ["Condition", "if / unless + clause", "If it rains, I'll study at home."],
          ["Time", "when / while / after + clause", "When I was younger, I played football every evening."],
          ["Relation", "which / who / where", "I live near a market, which is convenient."],
          ["Result", "so / which means", "The library closes early, so I study at home."],
          ["Comparison", "as … as / more … than", "It's not as busy as the city centre."],
          ["Frequency", "twice a week / every other day", "I play cricket twice a week."],
          ["Purpose", "to + verb / so that", "I keep notes so that I can revise quickly."],
          ["Addition", "and / also / on top of that", "It's cheap, and on top of that it's quick."],
          ["Preference", "prefer A to B / would rather", "I'd rather walk than wait for a bus."],
          ["Concession", "That said / though", "That said, it isn't always reliable."],
        ],
      ),
      examples("Mixing sentence types in one answer", [
        {
          text: "“I live in Mirpur. It's quite crowded. Although the traffic is bad, everything I need is nearby, which is why I haven't moved.”",
          note: "Two simple sentences then one complex sentence — a very safe mix.",
        },
        {
          text: "“I usually study in the evening, but if I have an early class I switch to the morning. I focus better then, mainly because it's quiet.”",
          note: "Compound, then complex with a reason.",
        },
        {
          text: "“I've played cricket since I was about eight, and I still play twice a week. It's not as competitive as it used to be, though I enjoy it more now.”",
          note: "Frequency, comparison and concession in three sentences.",
        },
      ]),
      badBetter("Sentence-level errors and their fixes", [
        fix(
          "“I like it but because it is near.”",
          "“I like it because it's near.”",
          "Use 'but' for contrast and 'because' for cause — not both in the same slot.",
        ),
        fix(
          "“Because the traffic is bad.” (as a full answer)",
          "“I don't drive, because the traffic is bad.”",
          "A subordinate clause cannot stand alone; it needs a main clause in front of it.",
        ),
        fix(
          "“I am living here since five years and I like it and it is good and my friends are here and…”",
          "“I've lived here for five years, and I like it — mainly because my friends are nearby.”",
          "Chained 'and' clauses flatten your range. Use one contrast or reason instead, and check the tense.",
        ),
      ]),
      checklist("Range check after any recording", [
        "Did I use a complex sentence with because, although, when, if or which?",
        "Did I vary sentence length, or were all sentences the same shape?",
        "Did I use a comparison or a frequency expression?",
        "Did any sentence collapse because it was too long to control?",
      ]),
      callout(
        "tip",
        "One complex sentence per answer is enough",
        "Adding more does not add marks if accuracy drops. Learn five connectors well, use one or two per answer, and keep the rest of your speech short and correct.",
      ),
    ],
    practice: [
      "Write five pairs of simple sentences about your daily life, then join each pair with a different connector.",
      "Record a 45-second answer and mark every sentence type you used: simple, compound or complex.",
    ],
  },
];
