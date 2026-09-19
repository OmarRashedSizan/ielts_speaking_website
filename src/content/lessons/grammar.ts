import type { Lesson } from "../schema";
import {
  badBetter,
  bangla,
  callout,
  checklist,
  examples,
  fix,
  patterns,
  prose,
  quiz,
  steps,
  table,
} from "../builders";

/**
 * Grammar taught as a speaking tool. Every lesson ends with patterns a learner
 * can say tomorrow, and the errors come from real Bangladeshi learner answers.
 */
export const grammarLessons: Lesson[] = [
  {
    slug: "present-simple",
    track: "grammar",
    order: 1,
    title: "Present simple — habits, routines and facts",
    banglaTitle: "প্রেজেন্ট সিম্পল — অভ্যাস ও নিত্যদিনের কাজ",
    summary:
      "The tense that carries half of Part 1. The -s rule, frequency adverbs, and the three ways it appears in answers.",
    level: 2,
    minutes: 8,
    goals: [
      "Describe routines accurately with the -s ending",
      "Place frequency adverbs correctly",
      "Use the present simple for facts about your city and country",
    ],
    examUse: "Most Part 1 questions about home, work, food and hobbies are answered in the present simple.",
    tags: ["grammar", "tenses", "part 1"],
    blocks: [
      bangla(
        "কখন ব্যবহার করবেন",
        [
          "প্রতিদিনের কাজ, অভ্যাস, পছন্দ আর সাধারণ সত্য বোঝাতে present simple ব্যবহার হয়। যেমন: 'I go to college by bus', 'Dhaka gets very crowded in the evening'।",
          "গুরুত্বপূর্ণ নিয়ম: he, she, it বা একবচন নামের পরে ক্রিয়ার শেষে -s যোগ হয় — 'my brother works', 'she lives'।",
          "বাংলায় কাল বোঝাতে ক্রিয়া বদলায় না, তাই এই -s মনে রাখা কঠিন — ছোট ছোট বাক্য জোরে বলে অভ্যাস করুন।",
        ],
        "Habits and routines → present simple. He/she/it → add -s.",
      ),
      table(
        "Forms at a glance",
        ["Subject", "Positive", "Negative", "Question"],
        [
          ["I / you / we / they", "I walk to work.", "I don't walk to work.", "Do you walk to work?"],
          ["he / she / it", "She walks to work.", "She doesn't walk to work.", "Does she walk to work?"],
          ["Everyone / people", "People take the bus.", "People don't take the bus.", "Do people take the bus?"],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I usually get up around seven and have breakfast at home.", note: "Routine with a time detail." },
        { text: "My sister studies at Dhaka University, so she stays in a hostel.", note: "Third person -s twice." },
        { text: "Most people in my area take rickshaws for short trips.", note: "General fact, plural subject." },
        { text: "I don't really watch much television — I mostly listen to podcasts.", note: "Negative plus a preference." },
      ]),
      badBetter("The three mistakes that cost the most", [
        fix(
          "My brother go to college every day.",
          "My brother goes to college every day.",
          "Third person singular takes -s. In practice, say the -s deliberately until it is automatic.",
        ),
        fix(
          "People is very friendly in my hometown.",
          "People are very friendly in my hometown.",
          "'People' is plural — it takes 'are' and a plural verb.",
        ),
        fix(
          "I am going to the gym every day.",
          "I go to the gym every day.",
          "Habits take the present simple; the continuous form means 'right now' or 'these days, temporarily'.",
        ),
      ]),
      patterns("Three patterns worth owning", [
        { label: "Routine", template: "I usually ___ , and after that ___ .", example: "I usually study in the morning, and after that I help at home." },
        { label: "Frequency", template: "I ___ about twice a week / every other day.", example: "I play cricket about twice a week." },
        { label: "General fact", template: "Most people in my area ___ because ___ .", example: "Most people in my area take the bus because it's cheaper than a rickshaw." },
      ]),
      checklist("Frequency adverbs — where they go", [
        "Before the main verb: I always eat breakfast.",
        "After 'be': I'm usually tired on Sundays.",
        "In negatives, after don't: I don't often eat out.",
        "At the start for emphasis: Sometimes I walk home.",
      ]),
      callout(
        "tip",
        "Say the -s out loud",
        "Bangla does not change the verb for he/she, so the -s feels optional. Reading rules will not fix it; saying 'she works, he lives' twenty times will.",
      ),
    ],
    practice: [
      "Describe your typical weekday in five present simple sentences.",
      "Answer out loud: What do you usually do at weekends? What does your best friend do?",
    ],
  },
  {
    slug: "past-simple",
    track: "grammar",
    order: 2,
    title: "Past simple — telling stories accurately",
    banglaTitle: "পাস্ট সিম্পল — অতীতের গল্প বলা",
    summary:
      "The backbone of Part 2. Regular and irregular forms, the 'didn't + base verb' rule, and mixing past simple with past continuous.",
    level: 2,
    minutes: 9,
    goals: [
      "Tell a short story entirely in the past simple",
      "Avoid the 'didn't went' error permanently",
      "Use past continuous for background and past simple for main events",
    ],
    examUse: "Every experience, event and achievement cue card is answered with the past simple.",
    tags: ["grammar", "tenses", "part 2"],
    blocks: [
      bangla(
        "কখন ব্যবহার করবেন",
        [
          "শেষ হয়ে যাওয়া কাজ বা ঘটনা বোঝাতে past simple ব্যবহার হয়: 'I visited Cox's Bazar last year'। নির্দিষ্ট সময় থাকলে (last year, in 2020, yesterday) এই কালই ব্যবহার করবেন।",
          "সবচেয়ে বড় ভুল: didn't-এর পরে ক্রিয়ার past form বসানো ('didn't went')। didn't নিজেই অতীত বোঝায়, তাই এর পরে base form বসে।",
          "গল্পে পটভূমি বোঝাতে past continuous ('we were waiting'), আর মূল ঘটনার জন্য past simple ('the bus broke down') ব্যবহার করলে উত্তর স্বাভাবিক শোনায়।",
        ],
        "Finished past action → past simple. After didn't → base verb. Background → was/were + -ing.",
      ),
      table(
        "Regular and irregular forms you will actually use",
        ["Base", "Past", "Speaking example"],
        [
          ["go", "went", "We went to Sylhet for two days."],
          ["take", "took", "It took almost six hours by bus."],
          ["get", "got", "I got there just before sunset."],
          ["buy", "bought", "My father bought it for me."],
          ["meet", "met", "I met my cousin there, which was a surprise."],
          ["think", "thought", "I thought it would be boring, but it wasn't."],
        ],
      ),
      examples("A story in four sentences", [
        { text: "Last December we went to my uncle's house in Comilla.", note: "Setting with a time phrase." },
        { text: "While we were travelling, the bus stopped twice for no clear reason.", note: "Background with past continuous." },
        { text: "When we arrived, everyone had already started eating.", note: "Past perfect for the earlier event." },
        { text: "I didn't take many photos, which I regret now.", note: "Negative — base verb after didn't." },
      ]),
      badBetter("Three errors that ruin a story", [
        fix(
          "I didn't went to the market yesterday.",
          "I didn't go to the market yesterday.",
          "One past marker per clause. 'Did' already carries the past, so the verb stays in its base form.",
        ),
        fix(
          "We were reach the station at nine.",
          "We reached the station at nine.",
          "'Reach' is a main verb, not a continuous form. Use 'we were arriving' only if you mean during that moment.",
        ),
        fix(
          "When I reached, the exam already start.",
          "When I arrived, the exam had already started.",
          "For an event that happened before another past event, use the past perfect ('had started').",
        ),
      ]),
      patterns("Storytelling patterns", [
        { label: "Setting", template: "It was ___ , and we were ___ .", example: "It was last Eid, and we were at my grandmother's house." },
        { label: "Event", template: "Then ___ , which was ___ .", example: "Then the power went out, which was actually nice for once." },
        { label: "Result", template: "In the end, we ___ , and I've ___ ever since.", example: "In the end we stayed up talking, and I've remembered it ever since." },
      ]),
      callout(
        "tip",
        "Keep your story in one tense family",
        "Most learners lose accuracy by jumping between past and present mid-story. Decide: this happened in the past, so everything is past — except general truths, which can stay present.",
      ),
    ],
    practice: [
      "Tell the story of your last trip in six past simple sentences.",
      "Record a two-minute answer about a memorable day, using at least two past continuous sentences for background.",
    ],
  },
  {
    slug: "present-perfect",
    track: "grammar",
    order: 3,
    title: "Present perfect — experience, duration and results",
    banglaTitle: "প্রেজেন্ট পারফেক্ট — অভিজ্ঞতা ও সময়কাল",
    summary:
      "Why 'I am living here since 2019' is wrong, how to talk about experience with ever/never, and the for/since rule.",
    level: 3,
    minutes: 10,
    goals: [
      "Talk about life experience without saying when it happened",
      "Use for and since correctly",
      "Describe something that started in the past and continues now",
    ],
    examUse: "Part 1 questions about habits and Part 3 questions about change both need this tense.",
    tags: ["grammar", "tenses", "for and since"],
    blocks: [
      bangla(
        "কখন ব্যবহার করবেন",
        [
          "অভিজ্ঞতা বোঝাতে (কখন ঘটেছে তা না বললে): 'I have visited Cox's Bazar twice'। কিন্তু যদি সময় বলেন — 'I visited Cox's Bazar in 2019' — তাহলে past simple।",
          "অতীতে শুরু হয়ে এখনও চলছে: 'I have been living in Dhaka for six years'। এখানে 'for' = সময়ের পরিমাণ, 'since' = শুরুর সময়।",
          "বাংলায় 'আমি ২০১৯ থেকে ঢাকায় থাকি' — এখানেও ইংরেজিতে present perfect লাগে, present continuous নয়। এটাই বাংলাদেশি শিক্ষার্থীদের সবচেয়ে সাধারণ ভুল।",
        ],
        "No specific time → present perfect. Specific past time → past simple. Started then, continues now → have been + -ing.",
      ),
      table(
        "for vs since",
        ["Expression", "Use with", "Example"],
        [
          ["for six years", "a length of time", "I've been studying English for six years."],
          ["since 2019", "a point in time", "I've lived here since 2019."],
          ["since I was a child", "a clause", "I've known him since I was a child."],
          ["ever / never", "experience questions", "Have you ever been abroad? No, I've never travelled outside Bangladesh."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I've been living in this area for about eight years now.", note: "Duration that continues." },
        { text: "I've never tried skiing, though I'd like to.", note: "Experience with never." },
        { text: "My English has improved a lot since I started practising every day.", note: "since + clause." },
        { text: "I've just finished my exams, so I finally have some free time.", note: "Recent result with 'just'." },
      ]),
      badBetter("Fixing the most common Bangladeshi errors", [
        fix(
          "I am living in Dhaka since 2019.",
          "I've been living in Dhaka since 2019.",
          "A situation that continues from the past into the present takes the present perfect, never the present continuous.",
        ),
        fix(
          "I have visited Cox's Bazar in 2019.",
          "I visited Cox's Bazar in 2019.",
          "A finished time expression (in 2019, last year) forces the past simple. Present perfect cannot take a finished time.",
        ),
        fix(
          "I am knowing her for two years.",
          "I've known her for two years.",
          "State verbs (know, like, want, understand) are never continuous — and duration still needs the perfect.",
        ),
      ]),
      patterns("Three patterns worth owning", [
        { label: "Experience", template: "I've ___ a few times, and I'd say ___ .", example: "I've been there a few times, and I'd say the food is the best part." },
        { label: "Duration", template: "I've been ___ for ___ / since ___ .", example: "I've been playing cricket since I was about eight." },
        { label: "Recent change", template: "___ has changed a lot in recent years — ___ .", example: "Shopping has changed a lot in recent years — most people order online now." },
      ]),
      quiz("Which tense?", [
        {
          question: "Complete: “I ___ this laptop for three years and it still works.”",
          options: ["have used", "used", "am using"],
          answer: 0,
          explain: "Duration continuing to the present → present perfect with 'for'.",
        },
        {
          question: "Complete: “I ___ my first IELTS test last March.”",
          options: ["have taken", "took", "am taking"],
          answer: 1,
          explain: "A finished time ('last March') requires the past simple.",
        },
      ]),
      callout(
        "tip",
        "One question to decide the tense",
        "Ask: does the answer include a finished time — last year, in 2020, yesterday? If yes, past simple. If no, present perfect is usually right.",
      ),
    ],
    practice: [
      "Answer out loud: How long have you lived in your area? Have you ever been abroad?",
      "Write three sentences about yourself using for, since and ever, then say them aloud.",
    ],
  },
  {
    slug: "future-forms",
    track: "grammar",
    order: 4,
    title: "Future forms — plans, predictions and hopes",
    banglaTitle: "ভবিষ্যৎ কাল — পরিকল্পনা ও সম্ভাবনা",
    summary:
      "will, going to, would like to and might — chosen by meaning, with the Part 3 prediction language examiners expect.",
    level: 3,
    minutes: 9,
    goals: [
      "Choose between will and going to correctly",
      "Express hopes with would like to and hope to",
      "Hedge predictions with might, could and probably",
    ],
    examUse: "Part 1 questions about future plans and every Part 3 prediction question need this language.",
    tags: ["grammar", "tenses", "predictions"],
    blocks: [
      bangla(
        "কোনটি কখন",
        [
          "আগেই ঠিক করা পরিকল্পনা: 'I'm going to start a course next month।' তাৎক্ষণিক সিদ্ধান্ত বা অনুমান: 'I'll call you later।'",
          "ইচ্ছা ও আশা: 'I'd like to live abroad someday', 'I hope to finish my degree next year।'",
          "অনিশ্চিত পূর্বাভাস: 'People might work from home more', 'It could change over the next ten years।' নিশ্চিত শোনানোর দরকার নেই — বরং সৎ অনিশ্চয়তা ভালো নম্বর পায়।",
        ],
        "Plans → going to. Decisions/promises → will. Hopes → would like to. Predictions → might, could, probably.",
      ),
      table(
        "Choosing a form",
        ["Meaning", "Form", "Speaking example"],
        [
          ["Plan decided earlier", "going to", "I'm going to apply for a master's next year."],
          ["Instant decision", "will", "I'll send you the details tonight."],
          ["Hope or wish", "would like to / hope to", "I'd like to work in a bank eventually."],
          ["Uncertain prediction", "might / could / probably will", "Traffic might get worse before it gets better."],
          ["Certain arrangement", "present continuous", "I'm meeting my cousin on Friday."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "In the next couple of years I'm planning to finish my degree and find a job.", note: "Definite plan, going to." },
        { text: "If everything goes well, I'll probably move to another city.", note: "Conditional plan with 'probably'." },
        { text: "I'd like to learn driving at some point, but it isn't a priority.", note: "Hope with a limitation — sounds natural." },
        { text: "Cities might become quieter if remote work continues.", note: "Hedged prediction." },
      ]),
      badBetter("Errors to remove", [
        fix(
          "I will go to abroad for study after complete my graduation.",
          "I'm going to study abroad after I finish my degree.",
          "'Abroad' takes no preposition, and 'after' needs a clause or a noun, not a bare verb.",
        ),
        fix(
          "I hope I can able to do it.",
          "I hope I'll be able to do it.",
          "Never combine 'can' and 'able to'. 'Will be able to' is the future form.",
        ),
        fix(
          "It will definitely change everything in future.",
          "It'll probably change a lot in the future.",
          "Over-confident predictions sound unnatural; hedge, and remember 'in the future'.",
        ),
      ]),
      patterns("Future patterns for Part 3", [
        { label: "Trend + prediction", template: "___ is already happening, so I'd expect ___ .", example: "Remote work is already normal, so I'd expect offices to shrink." },
        { label: "Condition", template: "If ___ continues, ___ will probably ___ .", example: "If online learning continues, universities will probably offer more part-time courses." },
        { label: "Hedged guess", template: "It might ___ , though I'm not sure it will ___ .", example: "It might replace some jobs, though I'm not sure it will replace the whole sector." },
      ]),
      callout(
        "tip",
        "Hedging is a skill, not a weakness",
        "Examiners hear confidence in how you hedge: 'it might', 'it could well', 'I'd expect'. Saying 'it will definitely' about the future sounds less controlled, not more.",
      ),
    ],
    practice: [
      "Answer out loud: What are your plans for the next five years? How will your city change?",
      "Record three predictions about technology using might, could and probably.",
    ],
  },
  {
    slug: "modal-verbs",
    track: "grammar",
    order: 5,
    title: "Modal verbs — advice, obligation, possibility",
    banglaTitle: "মোডাল ভার্ব — উচিত, দরকার, সম্ভাবনা",
    summary:
      "should, must, have to, can, could and may — the Part 3 solution language, with the grammar error almost everyone makes.",
    level: 3,
    minutes: 9,
    goals: [
      "Give advice and suggestions naturally",
      "Express obligation and prohibition",
      "Use possibility modals for Part 3 speculation",
    ],
    examUse: "Solution questions, advantage questions and anything about government or individuals need modals.",
    tags: ["grammar", "modals", "part 3"],
    blocks: [
      bangla(
        "মোডাল কীভাবে কাজ করে",
        [
          "মোডালের পরে ক্রিয়ার base form বসে — 'should go', 'must take'। এর পরে 'to' বা past form বসে না।",
          "should = উচিত (পরামর্শ), must / have to = করতে হবে (বাধ্যবাধকতা), may / might / could = হতে পারে (সম্ভাবনা)।",
          "খেয়াল রাখুন: 'must not' মানে নিষেধ, আর 'don't have to' মানে বাধ্যবাধকতা নেই — দুটো আলাদা অর্থ।",
        ],
        "Modal + base verb. No 'to' after can/should/must. Many Part 3 answers are built on 'governments should…' and 'it might…'.",
      ),
      table(
        "Modals in speaking",
        ["Modal", "Meaning", "Speaking example"],
        [
          ["should / ought to", "advice", "Schools should teach basic budgeting."],
          ["must / have to", "obligation", "Students have to take at least one science subject."],
          ["mustn't / shouldn't", "prohibition", "People shouldn't leave rubbish on the streets."],
          ["can / could", "ability, suggestion", "Governments could invest in public transport."],
          ["may / might", "possibility", "That might reduce traffic over time."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I think parents should let children choose their own hobbies.", note: "Advice with 'should'." },
        { text: "Companies have to be responsible for how they treat staff.", note: "Obligation with 'have to'." },
        { text: "Governments could invest more in buses, which would help everyone.", note: "Suggestion with a consequence." },
        { text: "It might be difficult at first, but it'd probably work.", note: "Two hedges in one sentence." },
      ]),
      badBetter("The modal errors to remove", [
        fix("The government should to take steps.", "The government should take steps.", "Modals take the bare verb. 'To' only appears in 'have to' and 'ought to'."),
        fix("People must to follow the rules.", "People must follow the rules.", "Same rule: no 'to' after must. If you want 'to', use 'have to' instead."),
        fix("I can able to speak English well.", "I can speak English well.", "Choose one: 'can' or 'be able to'. Never both."),
      ]),
      patterns("Modal patterns for Part 3", [
        { label: "Advice", template: "I'd say ___ should ___ , because ___ .", example: "I'd say schools should teach it earlier, because habits form early." },
        { label: "Suggestion", template: "One solution would be to ___ , which would ___ .", example: "One solution would be to subsidise buses, which would make cars less necessary." },
        { label: "Possibility", template: "It might ___ , though it could also ___ .", example: "It might reduce costs, though it could also reduce quality." },
      ]),
      callout(
        "tip",
        "Modals are the fastest way to sound thoughtful",
        "Replacing 'People must…' with 'I'd say people should…' turns a demand into an opinion — and opinions are what Part 3 asks for.",
      ),
    ],
    practice: [
      "Give three pieces of advice about studying speaking, using should, could and might not.",
      "Answer out loud: What should governments do about traffic? using two different modals.",
    ],
  },

  {
    slug: "because-although",
    track: "grammar",
    order: 6,
    title: "because, although, so — linking ideas like a speaker",
    banglaTitle: "কারণ ও বিপরীত বোঝানোর সংযোগ",
    summary:
      "The difference between because, so, although and however — and the sentence patterns that make explanations sound organised.",
    level: 2,
    minutes: 8,
    goals: [
      "Explain causes without repeating 'because'",
      "Use although and however correctly for contrast",
      "Combine two clauses accurately in one sentence",
    ],
    examUse: "Every 'why' question in Part 1 and Part 3 is answered with this grammar.",
    tags: ["grammar", "connectors", "coherence"],
    blocks: [
      bangla(
        "পার্থক্য মনে রাখুন",
        [
          "because = কারণ। so = ফলাফল। although = বিপরীত দিক থাকলেও। however = তবে (নতুন বাক্যে)।",
          "একই বাক্যে 'because' এবং 'so' একসঙ্গে বসে না: 'Because it was raining, so we stayed home' ভুল। একটি বেছে নিন।",
          "'Although' এর পরেও 'but' বসে না: 'Although it was expensive, but I bought it' ভুল।",
        ],
        "One connector per clause pair: because/since + result, or although + contrast (no 'but').",
      ),
      table(
        "The connectors that raise coherence",
        ["Connector", "Function", "Example"],
        [
          ["because / since", "reason", "I walk to work because parking is impossible."],
          ["so / that's why", "result", "Parking is impossible, so I walk."],
          ["although / even though", "contrast", "Although it takes an hour, I prefer the bus."],
          ["whereas", "contrast between two things", "Trains are punctual, whereas buses are not."],
          ["which means", "consequence", "My office is close, which means I can walk."],
          ["that said", "concession after a point", "That said, it isn't cheap."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I like my area because everything is within walking distance.", note: "Standard reason." },
        { text: "Although the rent is high, I'd rather stay here than commute.", note: "Contrast without 'but'." },
        { text: "Buses are cheaper, whereas rickshaws are faster for short trips.", note: "Two-way comparison." },
        { text: "The market has grown a lot, which means prices are lower now.", note: "Consequence with 'which means'." },
      ]),
      badBetter("The double-connector trap", [
        fix(
          "Because it was raining, so I didn't go out.",
          "Because it was raining, I didn't go out.",
          "Bangla allows 'কারণ… তাই…' in one sentence. English does not. Choose one connector.",
        ),
        fix(
          "Although the food was good, but the service was slow.",
          "Although the food was good, the service was slow.",
          "Never pair 'although' with 'but'. The contrast is already in 'although'.",
        ),
        fix(
          "I like it because it is near because my friends live there.",
          "I like it because it's near, and most of my friends live there.",
          "Repeated 'because' creates a run-on. Vary: and, so, which means, that's why.",
        ),
      ]),
      patterns("Explanation patterns", [
        { label: "Reason + consequence", template: "___ , which means ___ .", example: "It's only ten minutes away, which means I never need a bus." },
        { label: "Contrast", template: "Even though ___ , I still ___ .", example: "Even though it's expensive, I still think it's worth it." },
        { label: "Balanced view", template: "___ , whereas ___ . On balance, ___ .", example: "Traffic is worse, whereas pollution has improved. On balance, I'd say it's better." },
      ]),
      callout(
        "tip",
        "Count your 'because's",
        "In a two-minute answer, three or more 'because' is a coherence problem, not a grammar one. Replace the second and third with 'so', 'which means' and 'that's why'.",
      ),
    ],
    practice: [
      "Answer four 'why' questions, each with a different connector.",
      "Record one Part 3 answer using because, whereas and that said in that order.",
    ],
  },
  {
    slug: "relative-clauses",
    track: "grammar",
    order: 7,
    title: "Relative clauses — adding detail inside one sentence",
    banglaTitle: "রিলেটিভ ক্লজ — এক বাক্যেই বিস্তারিত যোগ",
    summary:
      "who, which, where, that and whose — the fastest way to move from simple to complex sentences without losing control.",
    level: 3,
    minutes: 9,
    goals: [
      "Add detail with who / which / where",
      "Avoid the repeated-subject mistake",
      "Use defining and non-defining clauses naturally",
    ],
    examUse: "The single easiest way to show grammatical range in Part 2 and Part 3 answers.",
    tags: ["grammar", "complex sentences", "range"],
    blocks: [
      bangla(
        "কীভাবে ব্যবহার করবেন",
        [
          "relative clause দিয়ে দুটি ছোট বাক্য একসঙ্গে জোড়া লাগে, ফলে উত্তর বেশি পরিণত শোনায়: 'I have a friend. He lives in Sylhet.' → 'I have a friend who lives in Sylhet.'",
          "who = মানুষের জন্য, which = বস্তু বা বিষয়ের জন্য, where = স্থানের জন্য, whose = কারও অধিকার বা সম্পর্ক বোঝাতে।",
          "সবচেয়ে সাধারণ ভুল: who-এর পরে আবার subject বসানো — 'a friend who he lives in Sylhet' ভুল।",
        ],
        "who = people, which = things, where = places. Never repeat the subject after who/which.",
      ),
      table(
        "Pronouns and examples",
        ["Pronoun", "Refers to", "Speaking example"],
        [
          ["who", "people", "She's the cousin who helped me with maths."],
          ["which", "things, ideas", "It's a small shop which sells homemade sweets."],
          ["where", "places", "It's a park where families go on Fridays."],
          ["whose", "possession", "He's the teacher whose classes I never missed."],
          ["that", "people or things (defining only)", "That's the bus that goes to the university."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I live in an area which is fairly quiet, even though it's central.", note: "Non-defining detail." },
        { text: "My cousin, who studied in Malaysia, says it was the hardest and best year.", note: "Comma clause adding a person." },
        { text: "It's a small café where I usually study at weekends.", note: "'where' for a place." },
        { text: "I've got a friend whose father runs a bookshop, so I get discounts.", note: "Possession with 'whose'." },
      ]),
      badBetter("Two errors, one rule each", [
        fix("He is a person who he always helps others.", "He's someone who always helps others.", "After who/which, do not repeat the subject."),
        fix("I have a friend which lives in Sylhet.", "I have a friend who lives in Sylhet.", "Use 'who' for people, 'which' for things."),
        fix("It's a place where I like to go there.", "It's a place where I like to go.", "'Where' already means 'there'. One word, not both."),
      ]),
      patterns("Adding a clause mid-answer", [
        { label: "Person clause", template: "___ is someone who ___ .", example: "My aunt is someone who never seems rushed." },
        { label: "Thing clause", template: "It's a ___ which ___ .", example: "It's a habit which has saved me a lot of money." },
        { label: "Place clause", template: "It's a place where ___ .", example: "It's a place where everyone knows each other." },
      ]),
      callout(
        "tip",
        "One relative clause per answer is enough",
        "Speak in short sentences, then attach one relative clause to a sentence you are already confident in. That keeps accuracy while adding range.",
      ),
    ],
    practice: [
      "Describe three people you know using who and whose.",
      "Answer: Describe a place you go to often — include exactly one 'where' clause.",
    ],
  },
  {
    slug: "comparing-things",
    track: "grammar",
    order: 8,
    title: "Comparatives and superlatives — putting things side by side",
    banglaTitle: "তুলনামূলক ও সর্বোচ্চ ডিগ্রি",
    summary:
      "Compare cities, habits, generations and technologies — the single most useful grammar for Part 3.",
    level: 2,
    minutes: 8,
    goals: [
      "Form comparatives and superlatives without double-marking",
      "Use 'not as … as', 'much more', 'far less' for nuance",
      "Compare two things across two dimensions in one answer",
    ],
    examUse: "Comparison questions in Part 3, and 'why do people prefer X' questions in all three parts.",
    tags: ["grammar", "comparison", "part 3"],
    blocks: [
      bangla(
        "নিয়ম সংক্ষেপে",
        [
          "ছোট শব্দ: -er / -est (cheaper, the cheapest)। লম্বা শব্দ: more / the most (more expensive, the most important)।",
          "দুটো একসঙ্গে ব্যবহার করবেন না — 'more cheaper' ভুল, 'much cheaper' ঠিক।",
          "'not as … as' দিয়ে সমান না হওয়া বোঝানো যায়: 'Villages aren't as busy as cities.'",
        ],
        "Short adjectives: -er/-est. Long adjectives: more/most. Strengthen with much or far — never with 'more'.",
      ),
      table(
        "Useful comparisons for speaking",
        ["Structure", "Example", "Best used for"],
        [
          ["A is ___ -er than B", "Public transport is cheaper than driving.", "Simple factual comparison"],
          ["A is much / far ___ than B", "The city is far more crowded than it used to be.", "Strong comparison"],
          ["A isn't as ___ as B", "My town isn't as lively as Dhaka.", "Soft, polite comparison"],
          ["the ___ -est / the most ___", "It's the busiest market in my area.", "Superlatives with a place"],
          ["whereas / compared with", "Cities offer jobs, whereas villages are quieter.", "Two-dimension comparison"],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "Dhaka is much more crowded than my hometown, but it's far more convenient too.", note: "Two dimensions, both marked." },
        { text: "Studying online isn't as social as a classroom, though it's more flexible.", note: "Soft comparison plus a concession." },
        { text: "The cost of living is the biggest difference between the two cities.", note: "Superlative with a noun." },
        { text: "Things are easier than they used to be, mainly because of mobile payments.", note: "Time comparison." },
      ]),
      badBetter("Comparison errors and the fix", [
        fix("Dhaka is more bigger than my town.", "Dhaka is much bigger than my town.", "Use -er or more, never both. 'Much' and 'far' strengthen without breaking the rule."),
        fix("It is not as good like before.", "It isn't as good as before.", "The pattern is 'as + adjective + as'. 'Like' does not belong here."),
        fix("Village life is better than city in all ways.", "Village life is quieter, though the city is better for work.", "Absolute claims are easy to disagree with. Compare one dimension at a time."),
      ]),
      patterns("Comparison patterns", [
        { label: "Two dimensions", template: "___ is ___ , whereas ___ is ___ .", example: "Villages are quieter, whereas cities have far more opportunities." },
        { label: "Softening", template: "It's not as ___ as ___ , but it's ___ .", example: "It's not as exciting as the city, but it's much calmer." },
        { label: "Time", template: "___ is ___ than it used to be.", example: "Shopping is easier than it used to be." },
      ]),
      callout(
        "tip",
        "Comparison rescues opinion answers",
        "Comparison questions are obvious, but comparisons also rescue opinion questions: 'compared with ten years ago…' turns a simple opinion into a developed one.",
      ),
    ],
    practice: [
      "Compare your city with a city you have visited, using two dimensions.",
      "Answer out loud: How is life today different from your parents' time? using two comparatives.",
    ],
  },
  {
    slug: "conditionals",
    track: "grammar",
    order: 9,
    title: "Conditionals — if, would and hypothetical answers",
    banglaTitle: "শর্তমূলক বাক্য — if ও would",
    summary:
      "Zero, first and second conditionals taught as answer patterns: what you actually say when a query begins with 'If you could…'.",
    level: 3,
    minutes: 9,
    goals: [
      "Use the first conditional for real possibilities",
      "Use the second conditional for hypothetical questions",
      "Avoid the two errors almost every learner makes with 'if'",
    ],
    examUse: "Hypothetical questions appear in Part 3 and occasionally in Part 2 — this grammar is how they are answered.",
    tags: ["grammar", "conditionals", "hypothetical"],
    blocks: [
      bangla(
        "তিন ধরনের শর্ত",
        [
          "প্রকৃত সম্ভাবনা: 'If I get time, I'll practise tonight.' — if + present simple, তারপর will।",
          "কাল্পনিক বা অসম্ভব: 'If I could live anywhere, I'd choose Sylhet.' — if + past simple, তারপর would।",
          "সাধারণ সত্য: 'If you don't water plants, they die.' — দুই দিকেই present simple।",
          "সবচেয়ে বড় ভুল: 'If I will get time…' — if-এর পরে কখনও will বসে না।",
        ],
        "If + present → will (real). If + past → would (imaginary). Never 'if will'.",
      ),
      table(
        "Three conditionals, three uses",
        ["Type", "Form", "Speaking example"],
        [
          ["Real possibility", "If + present simple, will + verb", "If I pass this term, I'll start preparing for IELTS properly."],
          ["Hypothetical", "If + past simple, would + verb", "If I could change one thing, I'd fix the roads first."],
          ["General truth", "If + present simple, present simple", "If you study late, you remember less the next day."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "If I had more free time, I'd probably learn to play the guitar.", note: "Second conditional, imaginary." },
        { text: "If governments invested in buses, fewer people would drive.", note: "Hypothetical policy — perfect for Part 3 solutions." },
        { text: "If it rains tomorrow, I'll study at home instead.", note: "Real possibility." },
        { text: "I'd rather walk, unless it's really hot.", note: "Unless = if not." },
      ]),
      badBetter("The two conditionals errors", [
        fix("If I will get a good band, I will apply abroad.", "If I get a good band, I'll apply abroad.", "Never use 'will' in the if-clause."),
        fix("If I would be rich, I will travel everywhere.", "If I were rich, I'd travel everywhere.", "For imaginary situations use 'were' and 'would'."),
        fix("If I can change, I will make the roads better.", "If I could change one thing, I'd make the roads better.", "'If I could… I'd…' is the pattern examiners expect for hypothetical questions."),
      ]),
      patterns("Conditional patterns for answers", [
        { label: "Hypothetical", template: "If I could ___ , I'd ___ , mainly because ___ .", example: "If I could change one thing, I'd improve public transport, mainly because it affects everyone." },
        { label: "Policy", template: "If governments ___ , ___ would ___ .", example: "If governments subsidised buses, fewer people would use cars." },
        { label: "Unless", template: "I'd ___ unless ___ .", example: "I'd keep the same job unless something better appeared." },
      ]),
      callout(
        "tip",
        "Use 'if' questions as a gift",
        "Hypothetical questions are among the easiest to structure: state your choice, give a reason, describe the effect, then mention the obstacle. The grammar is fixed, so you can concentrate on content.",
      ),
    ],
    practice: [
      "Answer three hypothetical questions beginning 'If you could…' using the second conditional every time.",
      "Record a Part 3 answer that includes one first conditional and one second conditional.",
    ],
  },
  {
    slug: "passive-voice",
    track: "grammar",
    order: 10,
    title: "Passive voice — when the action matters more than the doer",
    banglaTitle: "প্যাসিভ ভয়েস — কাজটি বেশি গুরুত্বপূর্ণ হলে",
    summary:
      "How to use the passive in Part 3 discussions about laws, buildings, products and changes, plus when to avoid it.",
    level: 4,
    minutes: 8,
    goals: [
      "Form the passive accurately in present and past",
      "Use it for policies, buildings, products and processes",
      "Know when the active voice is the better choice",
    ],
    examUse: "Society-level Part 3 questions about rules, infrastructure and change.",
    tags: ["grammar", "passive", "part 3"],
    blocks: [
      bangla(
        "কখন প্যাসিভ",
        [
          "কাজটি কে করেছে সেটি না জানলে বা গুরুত্ব না থাকলে passive ব্যবহার হয়: 'The road was built last year.'",
          "গঠন: be + past participle। যেমন: 'is built', 'was built', 'has been built', 'should be built'।",
          "কিন্তু দৈনন্দিন গল্পে active ভালো: 'I built it' — speaker দায়িত্ব নিলে সেটাই স্বাভাবিক।",
        ],
        "be + past participle. Use it for rules, buildings, products and processes — not for your own stories.",
      ),
      table(
        "Passive across tenses",
        ["Tense", "Form", "Speaking example"],
        [
          ["Present simple", "is / are + V3", "These things are made locally."],
          ["Past simple", "was / were + V3", "The bridge was built in the nineties."],
          ["Present perfect", "has / have been + V3", "A lot has been done, but not enough."],
          ["Modal", "should be / must be + V3", "More should be invested in schools."],
          ["Future", "will be + V3", "It'll probably be replaced soon."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "A lot of money has been spent on the road, but it's still congested.", note: "Present perfect passive." },
        { text: "These products are made in small workshops nearby.", note: "Present simple passive." },
        { text: "If more were invested in buses, traffic would improve.", note: "Hypothetical passive — very useful in Part 3." },
        { text: "The old market was knocked down and replaced by a mall.", note: "Past passive in a narrative." },
      ]),
      badBetter("Passive errors and overuse", [
        fix("The road is build last year.", "The road was built last year.", "Passive needs the correct form of 'be' plus the past participle."),
        fix("I was gone to Cox's Bazar with my family.", "I went to Cox's Bazar with my family.", "Your own actions take the active voice."),
        fix("It is said that by many people that education is important.", "Many people say education is important.", "Do not chain two passive openings. Choose one and keep the sentence short."),
      ]),
      patterns("Passive patterns for Part 3", [
        { label: "Policy", template: "More should be ___ , because ___ .", example: "More should be invested in rural clinics, because people travel hours for treatment." },
        { label: "Change", template: "A lot has been ___ , though ___ .", example: "A lot has been built in the last decade, though the traffic hasn't improved." },
        { label: "Process", template: "It's ___ , usually by ___ .", example: "It's produced locally, usually by small family businesses." },
      ]),
      callout(
        "tip",
        "One passive per Part 3 answer",
        "Passive proves range, but a whole answer in the passive is heavy and vague. Use it once — for policy, products or construction — then return to active sentences.",
      ),
    ],
    practice: [
      "Describe a change in your area using three passive sentences.",
      "Answer: How should cities be improved? using 'should be' at least twice.",
    ],
  },

  {
    slug: "gerunds-infinitives",
    track: "grammar",
    order: 11,
    title: "Gerunds and infinitives — enjoy doing, want to do",
    banglaTitle: "জেরান্ড ও ইনফিনিটিভ",
    summary:
      "Why 'I enjoy to read' sounds wrong, which verbs take -ing, which take 'to', and how to stop guessing mid-sentence.",
    level: 3,
    minutes: 8,
    goals: [
      "Use -ing after enjoy, avoid, finish and prefer",
      "Use 'to + verb' after want, hope, plan and decide",
      "Avoid the 'to' omission that learners make most often",
    ],
    examUse: "Part 1 hobby questions and Part 3 preference questions are full of these structures.",
    tags: ["grammar", "gerund", "infinitive"],
    blocks: [
      bangla(
        "সহজ নিয়ম",
        [
          "কিছু ক্রিয়ার পরে -ing বসে: enjoy, avoid, finish, mind, suggest, keep. যেমন 'I enjoy reading', 'I avoid eating late'।",
          "কিছু ক্রিয়ার পরে to + verb বসে: want, hope, plan, decide, need, try. যেমন 'I want to improve'।",
          "অনুশীলনের সময় যদি সন্দেহ হয়, সহজ ক্রিয়া বেছে নিন: 'I like reading' বা 'I'd like to read' — দুটোই সঠিক, তবে 'enjoy to read' কখনও নয়।",
        ],
        "enjoy / avoid / finish / mind + -ing. want / hope / plan / decide + to + verb.",
      ),
      table(
        "Verbs and the form they take",
        ["Pattern", "Verbs", "Speaking example"],
        [
          ["verb + -ing", "enjoy, avoid, finish, mind, keep, suggest", "I enjoy cooking, especially at weekends."],
          ["verb + to + verb", "want, hope, plan, decide, need, try", "I hope to travel more next year."],
          ["verb + object + to", "want (someone), ask, tell, help", "My parents want me to finish my degree first."],
          ["preposition + -ing", "good at, interested in, instead of", "I'm interested in learning photography."],
          ["adjective + to", "hard, easy, important, difficult", "It's hard to find quiet places in Dhaka."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I enjoy cycling, though I don't do it as often as I'd like.", note: "Enjoy + -ing, with a natural limitation." },
        { text: "I'm planning to take a short course in accounting next year.", note: "Plan + to, with a time detail." },
        { text: "I avoid studying late because I remember nothing the next day.", note: "Avoid + -ing plus a reason." },
        { text: "It's not easy to practise speaking alone, but it's possible.", note: "Adjective + to." },
      ]),
      badBetter("The errors that sound worst", [
        fix("I enjoy to read books in the evening.", "I enjoy reading books in the evening.", "'Enjoy' always takes -ing. This is one of the most noticeable learner errors."),
        fix("I want improve my English.", "I want to improve my English.", "'Want' takes 'to + verb'. Missing 'to' is a quick fix worth drilling aloud."),
        fix("I am interested to learn photography.", "I'm interested in learning photography.", "The pattern is 'interested in + -ing'."),
      ]),
      patterns("Patterns for habits and plans", [
        { label: "Enjoy", template: "I enjoy ___ , especially when ___ .", example: "I enjoy walking, especially when the roads are empty." },
        { label: "Plan", template: "I'm planning to ___ , though I haven't ___ yet.", example: "I'm planning to move out, though I haven't decided where." },
        { label: "Difficulty", template: "It's difficult to ___ because ___ .", example: "It's difficult to save money because rents keep rising." },
      ]),
      callout(
        "tip",
        "Learn verbs in pairs, never alone",
        "Do not memorise 'enjoy' or 'avoid' as single words. Memorise 'enjoy reading' and 'avoid eating late' — the pattern is what your mouth remembers.",
      ),
    ],
    practice: [
      "Say five sentences about your habits using enjoy, avoid, keep, want to and plan to.",
      "Describe a hobby using at least two -ing forms and one 'to' form.",
    ],
  },
  {
    slug: "question-forms",
    track: "grammar",
    order: 12,
    title: "Question forms — asking back, clarifying and checking",
    banglaTitle: "প্রশ্ন গঠন — ফিরে প্রশ্ন করা ও স্পষ্ট করা",
    summary:
      "What to say when you do not understand, when you want to confirm, and how to ask a natural follow-up without losing your turn.",
    level: 3,
    minutes: 8,
    goals: [
      "Ask for repetition or clarification politely",
      "Use indirect questions accurately",
      "Buy time with a question rather than silence",
    ],
    examUse: "Clarifying is allowed and expected — knowing how costs you nothing and can save a whole answer.",
    tags: ["grammar", "questions", "clarification"],
    blocks: [
      bangla(
        "কেন এটা দরকার",
        [
          "প্রশ্ন না বুঝলে চুপ থাকা বা ভুল উত্তর দেওয়ার চেয়ে বিনয়ের সঙ্গে আবার জিজ্ঞেস করা ভালো — এতে কোনো নম্বর কমে না।",
          "সঠিক বাক্য: 'Sorry, could you repeat that?' / 'Do you mean ... ?' / 'Could you say that differently?'",
          "question tag দিয়েও স্বাভাবিক শোনানো যায়: 'So you mean the government, right?' — তবে খুব বেশি নয়।",
        ],
        "Ask once, politely, then answer. Repeating the question back is also a useful way to buy time.",
      ),
      table(
        "Clarifying and checking phrases",
        ["Situation", "Say this", "Why it works"],
        [
          ["You did not hear", "Sorry, could you repeat that?", "Polite, short, no marks lost."],
          ["You are unsure of the meaning", "Do you mean ___ , or ___ ?", "Checks the question and shows engagement."],
          ["You need time", "That's an interesting question — let me think for a second.", "Buys two seconds without silence."],
          ["You want to confirm", "So, you're asking about ___ , right?", "Demonstrates understanding of the question."],
          ["You want to expand", "Could I add something to that?", "Only if the examiner invites it — otherwise just continue."],
        ],
      ),
      examples("Indirect questions, used naturally", [
        { text: "Could you tell me what the topic is about?", note: "No inversion after 'could you tell me'." },
        { text: "I'm not sure I understood — is it about my city or about cities generally?", note: "Polite, specific, and it shows comprehension." },
        { text: "Do you want me to talk about one example, or the whole thing?", note: "Practical clarification — use sparingly." },
        { text: "You mean people my age, right?", note: "Tag question to confirm." },
      ]),
      badBetter("Question-form errors", [
        fix("Could you tell me what is the topic?", "Could you tell me what the topic is?", "In indirect questions the subject comes before the verb."),
        fix("Sorry, can you repeat again please?", "Sorry, could you repeat that?", "'Repeat' already means 'again'; use 'could' for politeness."),
        fix("What you are asking, I don't understand.", "I'm not sure what you're asking — could you say that differently?", "Word order matters, and short is better."),
      ]),
      patterns("Clarification patterns", [
        { label: "Repetition", template: "Sorry, could you repeat the ___ part?", example: "Sorry, could you repeat the last part?" },
        { label: "Checking", template: "Do you mean ___ ?", example: "Do you mean whether I'd prefer to live alone?" },
        { label: "Thinking", template: "That's an interesting question — I'd say ___ .", example: "That's an interesting question — I'd say it depends on the city." },
      ]),
      callout(
        "tip",
        "Ask once, then commit",
        "Asking for clarification once is fine. Asking three times uses time you need for answering. If you are still unsure, answer the version you understood and add 'or at least, that's how I see it'.",
      ),
    ],
    practice: [
      "Practise saying the four clarifying phrases aloud until they feel natural.",
      "Record yourself answering a question you 'did not hear', clarifying once, then answering fully.",
    ],
  },
  {
    slug: "articles",
    track: "grammar",
    order: 13,
    title: "Articles — a, an, the and nothing at all",
    banglaTitle: "আর্টিকেল — a, an, the এবং কিছুই না",
    summary:
      "Bangla has no articles, which is why they are the most frequently missed word class in Bangladeshi speaking answers. Here is a working rule set.",
    level: 4,
    minutes: 9,
    goals: [
      "Choose a/an for countable singular nouns",
      "Use 'the' when both speaker and listener know which thing",
      "Recognise the fixed expressions that take no article",
    ],
    examUse: "Articles appear in almost every sentence you speak — fixing them improves accuracy fast.",
    tags: ["grammar", "articles", "accuracy"],
    blocks: [
      bangla(
        "মূল নিয়ম",
        [
          "বাংলায় 'একটি' বা 'সেই' না লাগলেও ইংরেজিতে প্রায়ই article লাগে — কিন্তু সব জায়গায় নয়। তিনটি নিয়মে ৮০% কাজ হয়।",
          "১) গণনাযোগ্য একবচনে প্রথম উল্লেখে a/an: 'I bought a book.' ২) নির্দিষ্ট কিছু হলে the: 'The book was expensive.' ৩) সাধারণ কথা বা নির্দিষ্ট বাক্যাংশে article লাগে না: 'I go to school by bus'।",
          "শব্দ শুরু vowel sound দিয়ে হলে a-এর বদলে an: 'an engineer', 'an hour'। কিন্তু 'a university' — কারণ উচ্চারণ /juː/।",
        ],
        "a/an = one of many. the = the specific one. No article = general ideas and fixed phrases.",
      ),
      table(
        "The patterns people ask about most",
        ["Rule", "Examples", "Watch out for"],
        [
          ["a / an + singular countable", "a teacher, an engineer, a university", "Vowel letter ≠ vowel sound"],
          ["the + specific", "the market near my house, the bus I take", "Use 'the' after first mention"],
          ["No article + general plural", "I like books. Cars are expensive.", "Do not say 'the books' for general ideas"],
          ["No article + fixed phrases", "at home, by bus, to school, in bed, at work", "These are learned as whole chunks"],
          ["the + unique things", "the internet, the environment, the government", "Part 3 topics use these constantly"],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I'd like to be an engineer, mainly because my father is one.", note: "a/an with jobs." },
        { text: "The market near my house is always busy in the morning.", note: "'The' because it is specified." },
        { text: "I usually go to work by bus and come home at about seven.", note: "Two fixed phrases with no article." },
        { text: "The government should invest more in public transport.", note: "'The government' — a standard Part 3 phrase." },
      ]),
      badBetter("Article errors worth drilling", [
        fix("I want to be engineer in future.", "I want to be an engineer in the future.", "Singular countable nouns need an article: 'an engineer'."),
        fix("She is teacher in a school near my house.", "She's a teacher at a school near my house.", "Same rule, plus 'at a school' for a workplace."),
        fix("I go to the university by the bus every day.", "I go to university by bus every day.", "Fixed phrases drop 'the': by bus, at home, to school, in bed."),
      ]),
      patterns("Article patterns for answers", [
        { label: "Jobs and roles", template: "I'd like to be a / an ___ because ___ .", example: "I'd like to be an analyst, because I enjoy working with numbers." },
        { label: "Specific places", template: "The ___ near my ___ is ___ .", example: "The library near my house is quiet, which is why I study there." },
        { label: "General topics", template: "___ is / are important because ___ .", example: "Public transport is important because not everyone can afford a car." },
      ]),
      callout(
        "tip",
        "Fix articles last, not first",
        "Articles are frequent, so they feel urgent — but they rarely lower a band alone. Fix answer length, connectors and tenses first, then sweep for articles in your final revision.",
      ),
    ],
    practice: [
      "Read your last recording transcript and mark every missing a/an/the, then say the corrected sentences aloud.",
      "Describe your daily routine; every noun needs either an article or a reason it has none.",
    ],
  },
  {
    slug: "prepositions",
    track: "grammar",
    order: 14,
    title: "Prepositions — in, on, at, for, of, to",
    banglaTitle: "প্রিপোজিশন — in, on, at, for, of, to",
    summary:
      "The small words that cause the most errors: place, time, transport and the fixed pairs that come with verbs and adjectives.",
    level: 4,
    minutes: 9,
    goals: [
      "Use in / on / at for time and place correctly",
      "Learn the verb + preposition pairs learners usually miss",
      "Avoid translating Bangla prepositions directly",
    ],
    examUse: "Every answer contains at least three prepositions — accuracy here is easy marks.",
    tags: ["grammar", "prepositions", "accuracy"],
    blocks: [
      bangla(
        "যেসব জোড়া মুখস্থ করা দরকার",
        [
          "সময়: in (বছর, মাস, সকাল-বিকেল), on (দিন, তারিখ), at (সময়, রাত, দুপুর): 'in 2020', 'on Friday', 'at 9pm'।",
          "স্থান: in (শহর, দেশ, ঘরের ভিতরে), at (নির্দিষ্ট স্থান), on (পৃষ্ঠা, দেয়াল, যানবাহন): 'at the university', 'on the bus'।",
          "ক্রিয়ার সঙ্গে নির্দিষ্ট preposition: discuss something (about নয়), reach somewhere (to নয়), depend on, listen to, good at, married to।",
        ],
        "Learn prepositions in chunks: 'depend on', 'good at', 'at the weekend'.",
      ),
      table(
        "High-frequency patterns",
        ["Pattern", "Correct", "Common error"],
        [
          ["Reach a place", "We reached Dhaka at midnight.", "reached to Dhaka"],
          ["Discuss something", "We discussed the plan.", "discussed about the plan"],
          ["Good at / weak at", "I'm good at maths but weak at science.", "good in maths"],
          ["Married to", "She's married to a teacher.", "married with a teacher"],
          ["Listen to", "I listen to podcasts while walking.", "listen podcasts"],
          ["At the weekend", "I usually relax at the weekend.", "in the weekend"],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "I usually study in the morning and relax in the evening.", note: "Time prepositions with parts of the day." },
        { text: "I live in Mirpur, which is in the north of Dhaka.", note: "'in' for city and area." },
        { text: "It depends on the weather, honestly.", note: "depend on — fixed pair." },
        { text: "We arrived at the station just before the train left.", note: "'arrive at' for a point, 'arrive in' for a city." },
      ]),
      badBetter("The prepositions to memorise", [
        fix("We reached to Cox's Bazar in the morning.", "We reached Cox's Bazar in the morning.", "'Reach' is transitive — no 'to'."),
        fix("We discussed about the problem for an hour.", "We discussed the problem for an hour.", "'Discuss' takes a direct object. No 'about'."),
        fix("I am good in English but weak in mathematics.", "I'm good at English but weak at maths.", "The fixed pairs are 'good at' and 'weak at'."),
      ]),
      patterns("Preposition patterns for answers", [
        { label: "Place", template: "I live in ___ , which is ___ .", example: "I live in Mirpur, which is about ten kilometres north of the centre." },
        { label: "Time", template: "I usually ___ in the ___ / at the ___ .", example: "I usually study in the morning and swim at the weekend." },
        { label: "Dependence", template: "It depends on ___ .", example: "It depends on whether the buses run on time." },
      ]),
      callout(
        "tip",
        "Fix prepositions as chunks, not as rules",
        "When you correct yourself, correct the whole chunk aloud: 'depend on it', 'good at maths'. The rule fades; the chunk stays.",
      ),
    ],
    practice: [
      "Describe your journey to work using in, on, at and by correctly.",
      "Say five sentences using discuss, reach, depend on, good at and listen to.",
    ],
  },
  {
    slug: "subject-verb-agreement",
    track: "grammar",
    order: 15,
    title: "Subject–verb agreement — the error examiners notice most",
    banglaTitle: "সাবজেক্ট-ভার্ব মিল",
    summary:
      "People are, my brother goes, there is/are, and the tricky subjects that break agreement in fast speech.",
    level: 3,
    minutes: 9,
    goals: [
      "Match singular and plural subjects with the right verb form",
      "Handle 'people', 'everyone', 'there is/are' correctly",
      "Notice agreement errors in your own recordings within one listen",
    ],
    examUse: "Agreement errors are frequent and obvious; fixing them raises grammatical accuracy immediately.",
    tags: ["grammar", "accuracy", "agreement"],
    blocks: [
      bangla(
        "সহজ নিয়ম",
        [
          "একবচন subject → একবচন verb; বহুবচন subject → বহুবচন verb: 'My brother works', 'My brothers work'।",
          "'People' সবসময় বহুবচন: 'People are friendly' ('People is' নয়)। 'Everyone / everybody' একবচন: 'Everyone likes it'।",
          "'There is' + একবচন, 'There are' + বহুবচন: 'There are many shops', 'There is a park'।",
        ],
        "People are. My brother goes. There are many + plural. There is a + singular.",
      ),
      table(
        "Tricky subjects",
        ["Subject", "Verb form", "Example"],
        [
          ["People", "plural", "People in my area are quite helpful."],
          ["Everyone / everybody", "singular", "Everyone likes the new market."],
          ["Family", "singular (usually)", "My family lives nearby."],
          ["The number of students", "singular", "The number of students has increased."],
          ["A number of students", "plural", "A number of students have dropped out."],
          ["News / information / advice", "singular, uncountable", "The news was surprising."],
        ],
      ),
      examples("Speaking-ready sentences", [
        { text: "People in my neighbourhood are generally friendly, though it's a busy area.", note: "people + are." },
        { text: "My brother works in a bank and my sister studies accounting.", note: "Two third-person -s endings." },
        { text: "There are plenty of shops nearby, but not many hospitals.", note: "There are + plural." },
        { text: "The number of cars has grown, which is why the roads feel worse.", note: "Singular subject with 'has'." },
      ]),
      badBetter("The three agreement errors to remove", [
        fix("People is very friendly in my country.", "People are very friendly in my country.", "'People' is the plural of 'person' — it always takes a plural verb."),
        fix("There is many problems in my area.", "There are many problems in my area.", "Use 'there are' with plural nouns. Drill the pair aloud."),
        fix("My brother go to work by bus every day.", "My brother goes to work by bus every day.", "Third-person singular takes -s."),
      ]),
      patterns("Agreement in common patterns", [
        { label: "People", template: "People in ___ tend to ___ .", example: "People in my area tend to shop daily rather than weekly." },
        { label: "There are", template: "There are a few ___ , but not many ___ .", example: "There are a few parks, but not many playgrounds." },
        { label: "Everyone", template: "Everyone I know ___ .", example: "Everyone I know complains about the traffic." },
      ]),
      callout(
        "tip",
        "One listen for -s",
        "Play your last recording and listen only for missing or extra -s. Nothing else. Ten minutes of this, twice a week, fixes agreement faster than any grammar table.",
      ),
    ],
    practice: [
      "Describe your family in four sentences — check every verb ending.",
      "Say ten sentences beginning 'There are…' and 'People…' and listen for agreement.",
    ],
  },

];
