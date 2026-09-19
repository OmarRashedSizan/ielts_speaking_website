import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  examples,
  fix,
  flow,
  noteGrid,
  patterns,
  phraseBank,
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * Part 3 is a discussion, not a memory test. These lessons supply the sentence
 * toolkit and the six architectures that make abstract questions answerable.
 */
export const part3Lessons: Lesson[] = [
  {
    slug: "how-part-3-works",
    track: "part3",
    order: 1,
    title: "How Part 3 works — the discussion",
    banglaTitle: "Part 3 কীভাবে কাজ করে",
    summary:
      "Four to five minutes of abstract questions connected to your cue card. Why answers need structure here more than anywhere else.",
    level: 3,
    minutes: 9,
    goals: [
      "Understand how Part 3 questions relate to Part 2",
      "Distinguish between describing (Part 2) and reasoning (Part 3)",
      "Avoid the two traps: personal anecdotes and one-line opinions",
    ],
    examUse: "Part 3 is where Band 6.5 becomes reachable — it rewards reasoning, comparison and speculation.",
    tags: ["part 3", "discussion", "reasoning"],
    blocks: [
      prose("The same topic, one level higher", [
        "If your Part 2 cue card was about a person who helped you, Part 3 might ask why people help strangers, whether volunteering is valued in your country, or how governments could encourage it. The topic stays close; the level of abstraction rises. You are no longer describing your experience — you are explaining how people, society or governments behave.",
        "This is the part where learners who have memorised answers become visible. A rehearsed family story cannot answer 'Is volunteering more common among older people?'. What works instead is a small set of architectures — opinion, comparison, cause and effect, problem and solution — that can be applied to an unfamiliar question in seconds.",
      ]),
      bangla(
        "Part 3 আসলে কী চায়",
        [
          "Part 2-এ আপনি নিজের অভিজ্ঞতা বর্ণনা করেন; Part 3-এ প্রশ্ন আসে সমাজ, মানুষ, সরকার আর ভবিষ্যৎ নিয়ে — অর্থাৎ আপনার মত ও ব্যাখ্যা দরকার।",
          "এখানে লম্বা চার-পাঁচটি বাক্য ভালো, আর প্রতিটি উত্তরে থাকা দরকার: মত → কারণ → উদাহরণ বা তুলনা → ছোট উপসংহার।",
          "দুটি ভুল সবচেয়ে ক্ষতিকর: (১) শুধু 'Yes, I think so' বলে থেমে যাওয়া, (২) সারা উত্তর নিজের গল্পে সীমাবদ্ধ রাখা।",
        ],
        "Part 3 = মত + কারণ + উদাহরণ/তুলনা + উপসংহার।",
      ),
      table(
        "Part 2 vs Part 3 questions",
        ["Part 2 cue card", "A Part 3 question on the same theme"],
        [
          ["Describe a person who helped you.", "Why do some people help strangers while others don't?"],
          ["Describe a place you like to visit.", "What makes a public space successful?"],
          ["Describe an object you value.", "Why do people attach meaning to possessions?"],
          ["Describe a difficult experience.", "How do people usually cope with pressure?"],
        ],
      ),
      steps("The four moves of a Part 3 answer", [
        { title: "1. Take a position", detail: "'I'd say…', 'On the whole, I think…', 'For most people, I'd guess…'" },
        { title: "2. Give the reason", detail: "Not a personal feeling — a general mechanism: cost, time, culture, incentives, education." },
        { title: "3. Ground it", detail: "One example, comparison or observation: 'In my area, for example…', 'Compared with ten years ago…'" },
        { title: "4. Close briefly", detail: "A one-sentence summary or an acknowledgement that it is not that simple." },
      ]),
      examples("One-line answers vs developed ones", [
        {
          text: "Q: “Do you think people work harder today than in the past?” — “Yes, I think so.”",
          note: "No position, no reason, nothing to assess. This is the most common Part 3 failure.",
        },
        {
          text: "“In some ways, yes — though I'm not sure it's harder, honestly. The pressure is different: people used to finish at six, whereas now they answer messages at midnight. So it's more about never switching off than about longer hours.”",
          note: "Position, mechanism, comparison with the past, and a closing distinction.",
        },
        {
          text: "Q: “Should governments spend money on public libraries?” — “Yes, they should.”",
          note: "Correct but unassessable — and it wastes the easiest question type in Part 3.",
        },
        {
          text: "“I'd say yes, mainly because libraries are one of the few places that don't require you to buy anything. If you look at students from poorer families, a library is often the only quiet space they have with internet access.”",
          note: "Position, reason, and a specific observation about who benefits.",
        },
      ]),
      badBetter("Part 3 habits to remove", [
        fix(
          "Answering every question with a personal story.",
          "Answering at the level asked — about people or society — and using a personal example only as evidence.",
          "Part 3 is not a request for your biography. One short personal reference is fine; a whole answer about your family is a level mismatch.",
        ),
        fix(
          "Using absolute statements: “Everyone thinks that”, “That is completely impossible”.",
          "Hedged statements: “Most people I know…”, “It's unlikely in practice, though not impossible.”",
          "Part 3 rewards balanced reasoning. Absolutes are easy to challenge and usually inaccurate.",
        ),
        fix(
          "Answering in one sentence and waiting.",
          "Using the four moves — position, reason, grounding, close — for every question.",
          "You cannot demonstrate range in eight words. Structure is the fastest fix in Part 3.",
        ),
      ]),
      quiz("Part 3 fundamentals", [
        {
          question: "Your cue card was about a favourite meal. Which Part 3 question is most likely?",
          options: [
            "What did you eat yesterday?",
            "Why do food traditions matter in a culture?",
            "Do you like cooking?",
          ],
          answer: 1,
          explain: "Part 3 moves from the personal topic to a societal question about the same subject.",
        },
        {
          question: "How long should a strong Part 3 answer be?",
          options: ["One sentence", "Roughly 20–40 seconds", "Two full minutes"],
          answer: 1,
          explain:
            "Part 3 questions are usually 20–40 seconds each — developed, but not a long turn like Part 2.",
        },
      ]),
      callout(
        "tip",
        "Expect the examiner to push back",
        "A follow-up like 'But isn't that expensive?' is not criticism — it is an invitation to reason further. Answer with 'That's true, though…' and develop the tension rather than abandoning your position.",
      ),
    ],
    practice: [
      "Answer five Part 3 questions using all four moves, timing each answer at 25–40 seconds.",
      "Take one Part 2 story and write three Part 3 questions that a real examiner might ask about its theme.",
    ],
  },

  {
    slug: "part3-sentence-toolkit",
    track: "part3",
    order: 2,
    title: "The Part 3 sentence toolkit",
    banglaTitle: "Part 3-এর বাক্য টুলকিট",
    summary:
      "Fourteen sentence functions — opinion, reason, explanation, example, contrast, comparison, cause, effect, advantage, disadvantage, past vs present, future, conditional and balanced — with patterns for each.",
    level: 4,
    minutes: 12,
    goals: [
      "Recognise which sentence function a question needs",
      "Use at least six of the fourteen functions across a Part 3 discussion",
      "Move between functions without pausing",
    ],
    examUse: "This toolkit is the practical core of Part 3: it converts abstract questions into sentences you can assemble quickly.",
    tags: ["part 3", "sentences", "functions"],
    blocks: [
      bangla(
        "চোদ্দটি বাক্য-ধরন",
        [
          "Part 3-এ প্রশ্ন যতই কঠিন হোক, উত্তর সবসময় এই কয়েকটি কাজের একটি: মত দেওয়া, কারণ বলা, ব্যাখ্যা করা, উদাহরণ দেওয়া, বিপরীত বলা, তুলনা করা, কারণ-ফলাফল দেখানো, ভালো-খারাপ দিক বলা, অতীত-বর্তমান মেলানো, ভবিষ্যৎ বলার, শর্ত দেওয়া, বা ভারসাম্যপূর্ণ মত দেওয়া।",
          "কৌশল: প্রশ্ন শুনে প্রথমে ঠিক করুন কোন ধরনের উত্তর দরকার — তারপর সেই বাক্য-ধরন বেছে নিন। এতে চিন্তা কম হয়, বলার গতি বাড়ে।",
          "একই ধরনের বাক্য বারবার ব্যবহার করবেন না — একটা আলোচনায় অন্তত ছয় ধরণের ব্যবহার করলেই range স্পষ্ট হয়।",
        ],
        "প্রশ্ন → কাজটি চিনুন → সেই বাক্য-ধরন ব্যবহার করুন।",
      ),
      phraseBank("Fourteen functions with patterns", [
        {
          label: "1. Opinion",
          note: "Every Part 3 answer starts here, but the opinion must be specific enough to develop.",
          items: [
            "I'd say…",
            "On the whole, I think…",
            "For most people, I'd guess…",
            "My feeling is that…",
            "If I had to choose, I'd say…",
          ],
        },
        {
          label: "2. Reason",
          note: "Rotate your connectors so the reason never sounds forced.",
          items: [
            "mainly because…",
            "largely due to…",
            "which is largely because…",
            "one reason is that…",
            "that tends to happen because…",
          ],
        },
        {
          label: "3. Explanation (mechanism)",
          note: "Explain how the cause produces the effect — this is what separates 6.5 from 6.0.",
          items: [
            "so what happens is…",
            "the way it works in practice is…",
            "which means that…",
            "as a result, people tend to…",
          ],
        },
        {
          label: "4. Example",
          items: [
            "For example, …",
            "Take ___ , for instance…",
            "In my area, for example…",
            "I've seen this with…",
          ],
        },
        {
          label: "5. Contrast",
          items: ["Although…", "That said, …", "On the other hand, …", "Whereas…", "It's not always the case, though…"],
        },
        {
          label: "6. Comparison",
          items: [
            "Compared with ___ , …",
            "It's far more ___ than…",
            "It isn't as ___ as…",
            "There's a big difference between ___ and ___ .",
          ],
        },
        {
          label: "7. Cause",
          items: ["This is mostly caused by…", "It comes down to…", "The main driver is…", "A lot of it is because…"],
        },
        {
          label: "8. Effect",
          items: ["The effect is that…", "As a result, …", "Which means that…", "One consequence is…"],
        },
        {
          label: "9. Advantage",
          items: ["The obvious benefit is…", "What's good about it is…", "It's useful because…"],
        },
        {
          label: "10. Disadvantage",
          items: ["The downside is…", "What worries me is…", "The problem with that is…", "It can backfire, though…"],
        },
        {
          label: "11. Past vs present",
          note: "Very common: examiners love change questions.",
          items: [
            "It used to be…",
            "That's changed a lot — now…",
            "Twenty years ago, people would…",
            "Back then it was…, whereas now…",
          ],
        },
        {
          label: "12. Future",
          items: ["I'd expect…", "It'll probably…", "It might well…", "Looking ahead, I imagine…"],
        },
        {
          label: "13. Conditional",
          items: ["If governments invested…", "If that happened, people would…", "Unless something changes, …"],
        },
        {
          label: "14. Balanced close",
          items: [
            "So it's a mix, really.",
            "Both sides have a point.",
            "It depends on the person, I suppose.",
            "I can see it going either way.",
          ],
        },
      ]),
      table(
        "Which function fits which question",
        ["Question type", "Functions to combine"],
        [
          ["Why do people…?", "Cause → explanation → example"],
          ["Is X better than Y?", "Comparison → advantage → balanced close"],
          ["Has this changed?", "Past vs present → cause → consequence"],
          ["What will happen?", "Future → conditional → hedged close"],
          ["What should be done?", "Problem → solution → conditional"],
          ["Do you agree?", "Opinion → contrast → balanced close"],
        ],
      ),
      examples("One answer using six functions", [
        {
          text: "“I'd say it's mostly a good thing. Compared with ten years ago, far more people study online, mainly because it's cheaper and they can keep working. That said, the downside is that it's easy to drop out, so you need a lot of self-discipline. If governments regulated the providers a bit more, I think it'd be more reliable.”",
          note: "Opinion, comparison, cause, contrast, disadvantage and conditional in one 35-second answer.",
        },
      ]),
      badBetter("Toolkit errors", [
        fix(
          "Using only opinion and reason: “I think it's good because it's good because people like it.”",
          "Rotating functions: opinion → comparison → cause → disadvantage → conditional.",
          "Two functions repeated across four answers is what caps Part 3 at 6.0.",
        ),
        fix(
          "Starting every answer with 'I think'.",
          "Varying openers: 'I'd say', 'For most people', 'It depends, really', 'My feeling is'.",
          "Repeated openers are noticeable and reduce your range score even when the content is good.",
        ),
        fix(
          "Using written connectors: 'Moreover, furthermore, in addition'.",
          "Spoken equivalents: 'On top of that', 'And another thing', 'That said'.",
          "Written connectors sound rehearsed in speech. Use the spoken set.",
        ),
      ]),
      callout(
        "tip",
        "Three functions per answer",
        "Position, reason and one of the rest — that trio covers almost any Part 3 question in 30 seconds. Add a fourth only if the question is unusually broad.",
      ),
    ],
    practice: [
      "Answer one question using each of the fourteen functions, one function per answer.",
      "Record a three-question Part 3 set and count how many distinct functions you used.",
    ],
  },

  {
    slug: "part3-answer-architecture",
    track: "part3",
    order: 3,
    title: "Six answer architectures for Part 3",
    banglaTitle: "Part 3-এর ছয়টি আর্কিটেকচার",
    summary:
      "Opinion-Reason-Example, Compare-Contrast, Cause-Effect, Problem-Solution, Past-Present-Future and Balanced Discussion — with a rule for choosing one in three seconds.",
    level: 4,
    minutes: 12,
    goals: [
      "Choose an architecture within three seconds of hearing a question",
      "Structure a 30-second Part 3 answer with two or three moves inside it",
      "Know which architecture suits which question type",
    ],
    examUse: "Architecture removes hesitation: you are not deciding what to say next, you are filling in a known shape.",
    tags: ["part 3", "architecture", "structure"],
    blocks: [
      flow(
        [
          "Hear the question",
          "Identify the type (why / compare / change / solution / opinion)",
          "Pick one of six architectures",
          "Speak the moves in order",
        ],
        {
          title: "Three seconds to choose",
          note: "Through practice the choice becomes automatic. Until then, use the table below and rehearse it aloud.",
        },
      ),
      table(
        "The six architectures",
        ["Architecture", "Moves", "Best for"],
        [
          [
            "1. Opinion → Reason → Example",
            "State position → give the mechanism → ground it with one instance",
            "Why questions, importance questions, agree/disagree",
          ],
          [
            "2. Compare → Contrast → Conclude",
            "Describe side A → describe side B → say which matters more and why",
            "Comparison, individual vs society, city vs village",
          ],
          [
            "3. Cause → Effect → Consequence",
            "Explain the driver → describe the immediate effect → extend to a longer-term consequence",
            "Causes, effects, change over time",
          ],
          [
            "4. Problem → Solution → Condition",
            "Name the problem → propose a realistic fix → state what must be true for it to work",
            "Problems, solutions, government questions",
          ],
          [
            "5. Past → Present → Future",
            "What it used to be → what it is now → where it is heading",
            "Change questions, generational questions, technology",
          ],
          [
            "6. Balanced Discussion",
            "Present the strongest case on one side → the strongest case on the other → give a qualified position",
            "Advantages and disadvantages, agree/disagree, hypothetical policy",
          ],
        ],
      ),
      bangla(
        "ছয়টি আর্কিটেকচার — কখন কোনটি",
        [
          "‘কেন’ বা ‘কতটা গুরুত্বপূর্ণ’ প্রশ্নে: মত → কারণ → উদাহরণ।",
          "তুলনার প্রশ্নে (শহর বনাম গ্রাম, ব্যক্তি বনাম সমাজ): দিক ১ → দিক ২ → কোনটি বেশি গুরুত্বপূর্ণ ও কেন।",
          "‘পরিবর্তন’ প্রশ্নে: অতীত → বর্তমান → ভবিষ্যৎ। সরকার বা সমাধানের প্রশ্নে: সমস্যা → সমাধান → শর্ত।",
          "একই উত্তর দু-দিক দেখিয়ে শেষ করলে সেটি সবচেয়ে শক্তিশালী হয়: 'So it's a mix, really.'",
        ],
        "প্রশ্নের ধরন চিনলেই আর্কিটেকচার নিজে থেকে ঠিক হয়ে যায়।",
      ),
      examples("The same topic through three architectures", [
        {
          text: "Topic: remote work. Cause-Effect: “It started with better internet and cheaper laptops, so companies realised they didn't need the office — which means cities may become less central for white-collar jobs.”",
          note: "Cause → effect → longer-term consequence.",
        },
        {
          text: "Topic: remote work. Compare-Contrast: “For employees it's mostly freedom, whereas for managers it's mostly lost control. I'd say the balance depends on the job.”",
          note: "Two sides, then a qualified conclusion.",
        },
        {
          text: "Topic: remote work. Problem-Solution: “The problem is isolation, especially for new graduates. One fix is scheduled in-person days, though that only works if the whole team agrees to come in.”",
          note: "Problem → solution → the condition that makes it work.",
        },
      ]),
      noteGrid("Choosing under pressure", [
        { label: "“Why does…?”", detail: "Architecture 1 (Opinion → Reason → Example) — the question is asking for a mechanism." },
        { label: "“Is X better than Y?”", detail: "Architecture 2 (Compare → Contrast → Conclude)." },
        { label: "“Has this changed?”", detail: "Architecture 5 (Past → Present → Future)." },
        { label: "“What causes this?”", detail: "Architecture 3 (Cause → Effect → Consequence)." },
        { label: "“What should be done?”", detail: "Architecture 4 (Problem → Solution → Condition)." },
        { label: "“Do you agree?”", detail: "Architecture 6 (Balanced Discussion) — then commit to a qualified position." },
      ]),
      badBetter("Architecture failures", [
        fix(
          "Starting with a long-winded intro: “That is a very interesting question, and there are many aspects…”",
          "Starting with the position or the first move: “I'd say it's mostly positive, mainly because…”",
          "Fifteen seconds spent introducing is fifteen seconds not spent on content — and the examiner is timing.",
        ),
        fix(
          "Giving two examples and no conclusion.",
          "One example, then a closing sentence that answers the question again.",
          "A closing sentence is what makes an answer feel complete rather than cut off mid-flow.",
        ),
        fix(
          "Using the Balanced architecture for a factual 'why' question.",
          "Matching the architecture to the question type.",
          "Balanced answers are strong for agree/disagree, but they look evasive when the question asked for a mechanism.",
        ),
      ]),
      quiz("Pick the architecture", [
        {
          question: "“Should governments invest more in public transport?”",
          options: ["Cause → Effect", "Problem → Solution → Condition", "Past → Present → Future"],
          answer: 1,
          explain: "It is a solution question: name the problem, propose the investment, then state the condition for success.",
        },
        {
          question: "“How has family life changed in your country?”",
          options: ["Past → Present → Future", "Opinion → Reason → Example", "Balanced Discussion"],
          answer: 0,
          explain: "A change question maps directly onto the past-present-future architecture.",
        },
      ]),
      checklist("Architecture drill", [
        "Listen to a Part 3 question, state the architecture out loud within three seconds",
        "Answer using only that architecture's moves",
        "Repeat with a different architecture on the same topic",
        "Compare which one produced more content and better control",
      ]),
      callout(
        "tip",
        "Memorise the moves, not the sentences",
        "The six architectures are six lists of two or three words: 'opinion, reason, example'; 'cause, effect, consequence'. That is all you need to carry into the test — the content will be different every time, and that is the point.",
      ),
    ],
    practice: [
      "Take six Part 3 questions and assign an architecture to each before answering.",
      "Answer one question four times using four different architectures, and compare the results.",
    ],
  },
];
