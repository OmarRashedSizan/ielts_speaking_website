import type { Part3QuestionType } from "../schema";
import { fix, qtype } from "../content-builders";

/** Second half of the Part 3 question-type bank: solutions, agreement,
 *  importance, preference, hypothetical, society, government and technology. */
export const part3TypesMore: Part3QuestionType[] = [
  qtype({
    slug: "solutions",
    order: 11,
    title: "Solution questions",
    banglaTitle: "সমাধান নিয়ে প্রশ্ন",
    sampleQuestion: "How can governments reduce air pollution in cities?",
    meaning:
      "Propose realistic measures and evaluate them. The examiner is listening for conditionals and modal verbs.",
    examinerExpects: [
      "Two feasible solutions, ideally at different levels (individual, policy)",
      "Who should act — government, business, individuals",
      "An evaluation of difficulty or effectiveness",
      "Conditional and modal language: would, could, should, if…",
    ],
    ideaTechnique: {
      name: "Level + measure + feasibility",
      steps: [
        "Name the level: individual, local, national, international.",
        "State the measure clearly: regulation, investment, education, incentive.",
        "Explain how it works.",
        "Evaluate: will it be difficult, expensive or unpopular?",
      ],
    },
    structures: [
      {
        name: "Two levels + evaluation",
        outline: "At government level, ___ . At individual level, ___ . The difficulty is ___ .",
        when: "Policy and social questions",
      },
      {
        name: "Solution + condition",
        outline: "If governments invested in ___ , ___ would ___ .",
        when: "When you want to show conditional range",
      },
    ],
    patterns: [
      "One solution would be…",
      "governments could…",
      "individuals can…",
      "if they invested in…",
      "the challenge is that…",
    ],
    worked: {
      question: "How can governments reduce air pollution in cities?",
      breakdown: [
        {
          label: "Measure 1",
          text: "Invest in public transport so that cars become optional rather than necessary.",
        },
        {
          label: "Measure 2",
          text: "Regulate what is allowed: older vehicles, fuel standards, industrial emissions.",
        },
        {
          label: "Individual level",
          text: "Change commuting habits — but only if the alternative actually exists.",
        },
        {
          label: "Feasibility",
          text: "The problem isn't knowing what to do, it's political will and cost.",
        },
      ],
      band6:
        "Governments can reduce air pollution in many ways. They can improve public transport so people use buses and trains more. They can also stop old cars and make rules for factories. But this needs money and many countries do not have enough money.",
      band65:
        "I think there are two main approaches. First, make the alternative real — if public transport were frequent and reliable, a lot of people would leave the car at home voluntarily, so investment in buses and the metro would probably do more than any campaign. Second, regulate the worst offenders: older vehicles, low-quality fuel and unregulated factories. Individuals can change their habits too, but only if the alternative exists; telling people to use buses when there aren't any isn't a policy. The real obstacle isn't knowledge, it's political will and cost. For example, the bus lanes that were painted in my city a few years ago are now the only part of the road that moves at rush hour.",
    },
    bangla: [
      "সমাধান বলার সময় স্তর আলাদা করুন — সরকার, ব্যবসা, ব্যক্তি। প্রতিটির জন্য আলাদা বাক্য।",
      "শর্ত ও সম্ভাবনার ভাষা ব্যবহার করুন: would, could, if they invested…",
      "সমাধানের বাস্তবতা নিয়েও কথা বলুন — 'the real obstacle is…' বাক্যটি 6.5-এর বৈশিষ্ট্য।",
    ],
    corrections: [
      fix(
        "Government should to take steps.",
        "Governments should take steps.",
        "Modals take the bare verb; use the plural 'governments'.",
      ),
      fix(
        "If they will invest, pollution will reduce.",
        "If they invested, pollution would reduce.",
        "Keep one conditional pattern consistent; do not use 'will' after 'if'.",
      ),
    ],
    practice: [
      "How can schools encourage students to read more?",
      "How can people reduce food waste at home?",
      "What can be done to reduce traffic in your city?",
      "How can young people be encouraged to stay in their hometowns?",
    ],
  }),
  qtype({
    slug: "agree-disagree",
    order: 12,
    title: "Agree / disagree questions",
    banglaTitle: "একমত বা দ্বিমত",
    sampleQuestion: "Some people say technology has made us less social. Do you agree?",
    meaning:
      "You must respond to a specific claim. Partial agreement is usually the strongest answer at Band 6–6.5.",
    examinerExpects: [
      "A direct response to the claim, not a new topic",
      "Reasoning that engages with the claim's wording",
      "A concession or partial agreement",
      "A clear final position",
    ],
    ideaTechnique: {
      name: "Agree with limits",
      steps: [
        "Decide: fully agree, partly agree, or disagree — and say which.",
        "Use the main word of the claim in your answer ('less social' — do I accept that?).",
        "Give your strongest reason.",
        "State where you'd draw the line, then close with your position.",
      ],
    },
    structures: [
      {
        name: "Partial agreement",
        outline: "To some extent I agree — ___ . But I'd add that ___ .",
        when: "The strongest, safest structure",
      },
      {
        name: "Disagreement with respect",
        outline: "I see the argument, but I don't quite agree, because ___ .",
        when: "When you genuinely disagree",
      },
    ],
    patterns: [
      "To some extent…",
      "I'd agree up to a point…",
      "I see why people say that, but…",
      "where I'd disagree is…",
      "overall, though, I'd say…",
    ],
    worked: {
      question: "Some people say technology has made us less social. Do you agree?",
      breakdown: [
        {
          label: "Position",
          text: "Partly — the shape of socialising has changed rather than the amount.",
        },
        {
          label: "Engagement",
          text: "If 'social' means face-to-face time, then yes, there's less of it.",
        },
        {
          label: "Reason",
          text: "But the same technology keeps families in touch across countries, which wasn't possible before.",
        },
        {
          label: "Close",
          text: "So I'd say we're differently social rather than less social.",
        },
      ],
      band6:
        "I agree with this to some extent. Technology has made people less social because they always look at their phones. For example, in a restaurant, everyone is on the phone. But technology is also good because we can talk with family who live abroad.",
      band65:
        "I agree up to a point, but I'd frame it differently — I think we're differently social rather than less social. If you mean face-to-face time, then yes, it has clearly dropped: you can watch a whole family at dinner, each looking at a screen. Where I'd disagree is the assumption that the alternative was better for everyone; for families spread across countries, video calls are the only reason they talk at all. So the amount hasn't fallen so much as the form has changed.",
    },
    bangla: [
      "সম্পূর্ণ একমত হওয়ার দরকার নেই — 'To some extent I agree' বললে আপনি বেশি গভীরে যেতে পারবেন।",
      "প্রশ্নের মূল শব্দটি ব্যবহার করে উত্তর শুরু করুন — এতে বোঝা যায় আপনি প্রশ্নটি ধরেছেন।",
      "শেষে স্পষ্ট অবস্থান দিন: 'overall, I'd say…'",
    ],
    corrections: [
      fix("I am fully agree with this view.", "I completely agree with that view.", "No 'am' with 'agree'."),
      fix(
        "I don't agree with this statement because I think it is wrong.",
        "I don't agree, mainly because the claim assumes something that isn't quite true.",
        "Explain the disagreement instead of labelling it 'wrong'.",
      ),
    ],
    practice: [
      "Some people say it is better to start work immediately after school rather than going to university. Do you agree?",
      "'Children should not have mobile phones.' Do you agree?",
      "Some say exams cause more harm than good. Do you agree?",
      "'Reading books is better than watching films.' Do you agree?",
    ],
  }),
  qtype({
    slug: "importance",
    order: 13,
    title: "Importance questions",
    banglaTitle: "গুরুত্ব নিয়ে প্রশ্ন",
    sampleQuestion: "How important is it for children to learn about the environment at school?",
    meaning:
      "You must explain why something matters, and to whom — importance questions are answered with consequences, not adjectives.",
    examinerExpects: [
      "A clear evaluation of importance (very, somewhat, depends)",
      "Reasons connected to consequences",
      "A distinction between importance for individuals and for society",
      "No inflated language ('it is the most important thing in the world')",
    ],
    ideaTechnique: {
      name: "Consequence ladder",
      steps: [
        "State how important it is, and for whom.",
        "Explain a personal consequence: habits, choices, wellbeing.",
        "Explain a social consequence: future workforce, public health, awareness.",
        "Add a limitation: it matters, but not more than something else.",
      ],
    },
    structures: [
      {
        name: "For individuals + for society",
        outline: "For individuals, ___ . At a wider level, ___ .",
        when: "Social value questions",
      },
      {
        name: "Importance + limitation",
        outline: "I'd say it's important because ___ , though it shouldn't come at the expense of ___ .",
        when: "When you want balance",
      },
    ],
    patterns: [
      "I'd say it matters quite a lot because…",
      "for society, the effect is…",
      "it shapes…",
      "though it shouldn't come at the expense of…",
      "in the long run…",
    ],
    worked: {
      question: "How important is it for children to learn about the environment at school?",
      breakdown: [
        {
          label: "Evaluation",
          text: "Fairly important — more for the habits than for the facts.",
        },
        {
          label: "Individual consequence",
          text: "Children who learn it tend to carry those habits home, which affects whole families.",
        },
        {
          label: "Social consequence",
          text: "A generation that understands the subject will make different choices as voters and consumers.",
        },
        {
          label: "Limitation",
          text: "It shouldn't crowd out basic literacy; better built into other subjects.",
        },
      ],
      band6:
        "I think it is very important for children to learn about the environment. They will know about pollution and climate change. If they learn this from small age, they will take care of the environment when they grow up.",
      band65:
        "I'd say it matters quite a lot, though maybe less for the facts and more for the habits. In practice, children who study these topics bring the behaviour home — they're the ones reminding their parents to switch things off, which changes whole households. At a wider level, a generation that understands the subject will make different choices as voters and consumers in twenty years' time. Where I'd be careful is expecting it to replace other basics; it works better built into science and geography than as a separate subject. For example, the students who took that class at my old school now run a small recycling project themselves.",
    },
    bangla: [
      "গুরুত্ব বোঝাতে 'very important' বলে থামবেন না — কার জন্য গুরুত্বপূর্ণ এবং ফলাফল কী, সেটি বলুন।",
      "ব্যক্তিগত ও সামাজিক — দুই স্তরে ফলাফল বলুন।",
      "একটি সীমাবদ্ধতা যোগ করুন ('though it shouldn't come at the expense of…')।",
    ],
    corrections: [
      fix(
        "It is much important for children.",
        "It's very important for children.",
        "'Much' does not modify adjectives in affirmative sentences.",
      ),
      fix(
        "If they learn, so they will care.",
        "If they learn about it, they will care.",
        "Do not pair 'if' with 'so'.",
      ),
    ],
    practice: [
      "How important is it for people to learn a second language?",
      "How important are traditions in modern life?",
      "Is it important for young people to do physical exercise?",
      "How important is it for employees to enjoy their work?",
    ],
  }),
  qtype({
    slug: "preference",
    order: 14,
    title: "Preference questions",
    banglaTitle: "পছন্দ জানতে চাওয়া প্রশ্ন",
    sampleQuestion: "Do you think it is better to buy things online or in shops?",
    meaning:
      "Choose an option and justify it, while showing that you understand the trade-offs.",
    examinerExpects: [
      "A clear preference, not 'both are good'",
      "Two supporting reasons",
      "One drawback of your own preference",
      "A condition where the preference would change",
    ],
    ideaTechnique: {
      name: "Prefer → why → exception",
      steps: [
        "Choose immediately and commit to it.",
        "Give one practical and one personal reason.",
        "Acknowledge the weakness of your own choice.",
        "Add the condition that would change your answer.",
      ],
    },
    structures: [
      {
        name: "Preference + reason + exception",
        outline:
          "I'd rather ___ , mainly because ___ . The only thing is ___ , and if ___ I'd probably choose the other.",
        when: "Most preference questions",
      },
      {
        name: "Comparison + position",
        outline: "They're different in ___ respect. Overall I prefer ___ because ___ .",
        when: "When the options are hard to compare directly",
      },
    ],
    patterns: ["I'd rather…", "I prefer A to B…", "the main advantage of A is…", "the only thing is…", "unless…"],
    worked: {
      question: "Do you think it is better to buy things online or in shops?",
      breakdown: [
        { label: "Preference", text: "For most things, in shops — though I use both." },
        {
          label: "Reason 1",
          text: "You can check quality and size; returning things online is a hassle.",
        },
        { label: "Reason 2", text: "Buying locally supports small shops, which matters in my area." },
        { label: "Exception", text: "Anything hard to find or much cheaper online I'll order — books, mostly." },
      ],
      band6:
        "I think buying online is better for many things. It is easy and you can get many choices. You also save time because you don't need to travel. But sometimes the product is not good and then it is difficult to return.",
      band65:
        "For most things I'd rather buy in shops, mainly because I can check the quality — with clothes especially, sizes online are basically guesswork, and returning things takes a week. There's also a local side to it: if everyone orders everything, the small shops in my area simply disappear. The exception is anything hard to find; I order books online because no shop nearby stocks them.",
    },
    bangla: [
      "পছন্দের প্রশ্নে স্পষ্টভাবে একটি পক্ষ বেছে নিন। 'Both are good' বললে আপনি কোনো development দেখাতে পারবেন না।",
      "নিজের পছন্দের দুর্বলতাও বলুন — এতে উত্তর ভারসাম্যপূর্ণ ও পরিণত শোনায়।",
      "শর্ত দিন: 'unless…', 'if it's urgent…' — এতে conditional range বোঝা যায়।",
    ],
    corrections: [
      fix(
        "I am preferring online shopping than shops.",
        "I prefer shopping online to shopping in shops.",
        "Use 'prefer A to B'; no continuous form for a preference.",
      ),
      fix(
        "Both are better.",
        "Both have advantages, but on balance I'd choose…",
        "'Both are better' is contradictory — commit to a preference.",
      ),
    ],
    practice: [
      "Is it better to study alone or in a group?",
      "Would you rather live alone or with family?",
      "Is it better to work for a company or be self-employed?",
      "Do you prefer to plan things or to be spontaneous?",
    ],
  }),
  qtype({
    slug: "hypothetical",
    order: 15,
    title: "Hypothetical questions",
    banglaTitle: "কাল্পনিক প্রশ্ন (যদি…)",
    sampleQuestion: "If you could change one thing about your city, what would it be?",
    meaning:
      "Imaginary situations need the second conditional and a concrete, specific answer rather than a general wish.",
    examinerExpects: [
      "Correct conditional forms (If + past, would + verb)",
      "A specific choice, not 'make everything better'",
      "A reason and an expected consequence",
      "Maybe one obstacle that explains why it hasn't happened",
    ],
    ideaTechnique: {
      name: "Specific choice + chain of effects",
      steps: [
        "Choose one concrete change — a place, a rule, a service.",
        "Give the reason you chose it; a personal experience is fine.",
        "Describe the effect chain: what would happen next.",
        "Add the obstacle: why it hasn't been done.",
      ],
    },
    structures: [
      {
        name: "If I could…, I would…",
        outline: "If I could ___ , I'd ___ , because ___ . The effect would be ___ .",
        when: "Most hypothetical questions",
      },
      {
        name: "Change + reason + obstacle",
        outline: "The one thing I'd change is ___ . I'd choose it because ___ , though ___ .",
        when: "When the question asks about your city, school or country",
      },
    ],
    patterns: [
      "If I could…",
      "I'd probably…",
      "that would mean…",
      "it would lead to…",
      "the problem is that…",
    ],
    worked: {
      question: "If you could change one thing about your city, what would it be?",
      breakdown: [
        {
          label: "Choice",
          text: "More usable footpaths and green space — a walking city rather than a driving one.",
        },
        {
          label: "Reason",
          text: "People don't walk because walking isn't safe, so every trip becomes a car journey.",
        },
        {
          label: "Effect chain",
          text: "If pavements were clear, short trips would be walkable, which would reduce traffic and improve health.",
        },
        {
          label: "Obstacle",
          text: "The obstacle is enforcement; the rules exist but hardly anyone follows them.",
        },
      ],
      band6:
        "If I could change one thing in my city, I would make the roads cleaner and wider. This is because there is too much traffic. If the roads are better, people will reach their office quickly and they will not be late.",
      band65:
        "If I could change one thing, I'd redesign the footpaths and add more green space — essentially make it a city you can walk in. At the moment walking isn't really an option, because the pavements are blocked or broken, so even a five-minute trip becomes a rickshaw ride. If that were fixed, more short journeys would happen on foot, which would ease the traffic and improve how people feel day to day. The strange thing is the rules already exist; it's enforcement that's missing.",
    },
    bangla: [
      "কাল্পনিক প্রশ্নে 'If + past simple, would + verb' ব্যবহার করুন — 'If I will change…' ভুল।",
      "একটি নির্দিষ্ট পরিবর্তন বেছে নিন, বিমূর্ত নয়; তারপর তার ফলাফলের শিকল ব্যাখ্যা করুন।",
      "কেন এখনো হয়নি — এই বাক্যটি যোগ করলে উত্তর খুব শক্তিশালী হয়।",
    ],
    corrections: [
      fix(
        "If I would be a king, I will change everything.",
        "If I were in charge, I'd change a few specific things.",
        "Second conditional: 'If I were…, I'd…'.",
      ),
      fix(
        "If I can change, I will make it better.",
        "If I could change one thing, I'd make the footpaths usable.",
        "Use 'could / would' for hypotheticals; and be specific.",
      ),
    ],
    practice: [
      "If you could live anywhere in the world, where would you choose and why?",
      "If you could meet any person, who would it be?",
      "If you had to give up one thing for a year, what would it be?",
      "If you could change your school system, what would you change?",
    ],
  }),
  qtype({
    slug: "society-level",
    order: 16,
    title: "Society-level questions",
    banglaTitle: "সমাজ নিয়ে প্রশ্ন",
    sampleQuestion: "How has the role of the family changed in modern society?",
    meaning:
      "You must generalise responsibly about groups of people, using hedged language and avoiding sweeping claims.",
    examinerExpects: [
      "General statements that admit exceptions",
      "Hedging: tends to, in many cases, generally speaking",
      "A structural reason for the change or pattern",
      "Awareness of variation between city and village",
    ],
    ideaTechnique: {
      name: "Generalise carefully",
      steps: [
        "Start with a generalisation you can defend: 'In cities, families tend to…'",
        "Give the structural reason: work patterns, migration, education, cost.",
        "Add the exception immediately: 'although in rural areas it's different'.",
        "Say what you think this means for the future.",
      ],
    },
    structures: [
      {
        name: "General + reason + exception",
        outline: "Generally speaking, ___ . This is largely because ___ , though ___ .",
        when: "Society-level questions",
      },
      {
        name: "Change + consequence + judgement",
        outline: "___ has shifted, which means ___ . I'd say that's a mixed picture.",
        when: "When you want to evaluate",
      },
    ],
    patterns: [
      "Generally speaking…",
      "tends to…",
      "in many cases…",
      "that applies more to cities than…",
      "the exception is…",
    ],
    worked: {
      question: "How has the role of the family changed in modern society?",
      breakdown: [
        {
          label: "General statement",
          text: "Families are smaller and more geographically spread than they used to be.",
        },
        {
          label: "Reason",
          text: "Work and study take people away, so the everyday support system changed shape.",
        },
        {
          label: "Exception",
          text: "In rural areas and among older generations, the extended family still works much as before.",
        },
        {
          label: "Judgement",
          text: "Independence has grown, but something informal — daily help — has been lost.",
        },
      ],
      band6:
        "The role of family has changed a lot in modern society. Before, families lived together and helped each other. Now people move to other cities for work or study. So the family is smaller and people meet less. I think this is both good and bad.",
      band65:
        "Broadly speaking, families are smaller and more spread out than they were a generation ago, mainly because work and education pull people away from where they grew up. That changes the everyday support system — childcare, care for elderly parents, even small things like someone bringing food when you're ill used to happen automatically. That said, this applies far more to cities than to villages, and in many extended families nothing much has changed at all. My own view is that independence has increased, but something informal and useful has been lost. In my own extended family, my grandparents lived in one house with three sons; now we're spread across two cities.",
    },
    bangla: [
      "সমাজ নিয়ে বলার সময় সাধারণীকরণ করুন, কিন্তু ব্যতিক্রমও স্বীকার করুন: 'generally speaking… although in villages…'",
      "কাঠামোগত কারণ দিন (কাজ, শিক্ষা, অভিবাসন) — শুধু ব্যক্তিগত মত নয়।",
      "শেষে মূল্যায়ন দিন: লাভ কী, ক্ষতি কী।",
    ],
    corrections: [
      fix(
        "All people are now not caring their parents.",
        "Many people now live far from their parents, so caring for them looks different.",
        "Avoid absolute statements; give the mechanism instead.",
      ),
      fix(
        "Society is becoming very much selfish.",
        "People tend to be more independent, which can look like selfishness from outside.",
        "Hedge properly; avoid sweeping moral judgements.",
      ),
    ],
    practice: [
      "How has the role of women in the workplace changed in your country?",
      "How has entertainment changed for ordinary families?",
      "How do people treat older people in your society?",
      "Has the idea of community changed in cities?",
    ],
  }),
  qtype({
    slug: "individual-vs-society",
    order: 17,
    title: "Individual vs society questions",
    banglaTitle: "ব্যক্তি বনাম সমাজ",
    sampleQuestion: "Whose responsibility is it to protect the environment — individuals or the government?",
    meaning:
      "You must weigh two sides and come to a position, rather than sitting on the fence.",
    examinerExpects: [
      "Both sides presented fairly",
      "A clear position at the end",
      "An explanation of how the two levels interact",
      "Language of balance: on the one hand, whereas, on balance",
    ],
    ideaTechnique: {
      name: "Both sides + interaction + position",
      steps: [
        "Give the individual side its strongest form: habits, demand, choices.",
        "Give the institutional side: regulation, infrastructure, scale.",
        "Explain the interaction: individuals can't act without infrastructure.",
        "State your position clearly and briefly.",
      ],
    },
    structures: [
      {
        name: "On the one hand / on the other hand",
        outline: "On the one hand, ___ . On the other hand, ___ . On balance, ___ .",
        when: "The classic balanced structure",
      },
      {
        name: "Interaction + position",
        outline: "Both matter, but they're not equally powerful: ___ . So I'd put more weight on ___ .",
        when: "When you want to show real analysis",
      },
    ],
    patterns: [
      "On the one hand…",
      "on the other hand…",
      "on balance…",
      "ultimately…",
      "it's hard for individuals to… without…",
    ],
    worked: {
      question: "Whose responsibility is it to protect the environment — individuals or the government?",
      breakdown: [
        {
          label: "Individual side",
          text: "Change starts with habits — consumption, waste, transport choices.",
        },
        {
          label: "Institutional side",
          text: "Only governments can build infrastructure, regulate industries and set standards.",
        },
        {
          label: "Interaction",
          text: "Individuals can't choose a bus that doesn't run; behaviour follows infrastructure.",
        },
        {
          label: "Position",
          text: "So I'd put the primary responsibility on government, with individuals pushing from below.",
        },
      ],
      band6:
        "I think both individuals and government have responsibility. Individuals can save water and not throw rubbish in the street. But government has more power. They can make laws, build transport and stop factories from polluting. So government should do more.",
      band65:
        "Both, obviously, but I don't think they're equally powerful. On the individual side, habits matter — what people buy, how they travel, whether they waste food — and those choices add up across a city. On the other hand, only governments can build the infrastructure and set the rules: you can't choose the bus if there's no bus, and one factory can undo a million careful households. So I'd put the primary responsibility on government, with individuals applying pressure and setting the example. For example, bins arrived in my area before the habit did — people only started using them properly once there were fines.",
    },
    bangla: [
      "দুই পক্ষ দিয়ে শুরু করুন, কিন্তু শেষ করতে হবে একটি স্পষ্ট অবস্থানে। মাঝখানে বসে থাকলে development কমে যায়।",
      "দুই পক্ষ কীভাবে একে অন্যের উপর নির্ভর করে, সেটি বলুন — এই অংশটাই 6.5-এর প্রমাণ।",
      "'On balance, I'd say…' — উপসংহারের সহজ ফ্রেম।",
    ],
    corrections: [
      fix(
        "Both government and people should do the needful.",
        "Both should act, but the government has to lead.",
        "'Do the needful' is not natural English.",
      ),
      fix(
        "Government alone can do it, common people cannot do anything.",
        "Individuals can change habits, but they can't create infrastructure on their own.",
        "Avoid absolutes; explain the limitation precisely.",
      ),
    ],
    practice: [
      "Who should be responsible for looking after elderly people?",
      "Should parents or schools be responsible for teaching good behaviour?",
      "Whose job is it to reduce traffic in cities?",
      "Who benefits most from public spending on education?",
    ],
  }),
  qtype({
    slug: "government-questions",
    order: 18,
    title: "Government and policy questions",
    banglaTitle: "সরকার ও নীতি নিয়ে প্রশ্ন",
    sampleQuestion: "Should the government spend more money on public libraries?",
    meaning:
      "Policy questions require you to reason about priorities, funding and trade-offs — not just say 'yes, it's good'.",
    examinerExpects: [
      "A clear view on the policy",
      "Awareness of cost and competing priorities",
      "Practical reasoning: who benefits, what would change",
      "Appropriate caution — policies have unintended effects",
    ],
    ideaTechnique: {
      name: "Priority + cost + condition",
      steps: [
        "Say whether you'd prioritise it, and for whom.",
        "Name what it competes with: hospitals, roads, schools.",
        "Explain the realistic scale — a small local investment or big structural spending.",
        "Suggest a condition for it to work.",
      ],
    },
    structures: [
      {
        name: "Priority + trade-off",
        outline: "I'd support spending on ___ , though it has to be weighed against ___ .",
        when: "Budget and policy questions",
      },
      {
        name: "Condition + mechanism",
        outline: "It would be worth it if ___ , because ___ .",
        when: "When the policy depends on how it is implemented",
      },
    ],
    patterns: [
      "I'd support…",
      "it has to be weighed against…",
      "the funding has to come from somewhere…",
      "it would be worth it if…",
      "in practice, though…",
    ],
    worked: {
      question: "Should the government spend more money on public libraries?",
      breakdown: [
        {
          label: "Position",
          text: "Yes, but modestly — libraries do work that nothing else replaces.",
        },
        {
          label: "Trade-off",
          text: "The money competes with hospitals and roads, so it can't be unlimited.",
        },
        {
          label: "Mechanism",
          text: "A quiet study space matters most for students who have no quiet space at home.",
        },
        {
          label: "Condition",
          text: "It works if libraries stay open in the evenings and offer more than books.",
        },
      ],
      band6:
        "I think government should spend more on libraries. Libraries help students who cannot buy books. They can study there also. But government has many problems like roads and hospitals, so they cannot spend too much.",
      band65:
        "I'd support it, though I'd argue for targeted spending rather than a big expansion. The thing libraries do that nothing else replaces is quiet space — for students who share a room at home, a library is often the only place they can concentrate. But it has to be weighed against hospitals and roads, which are more urgent for most people, so realistically it's about maintaining and improving what already exists. It only pays off if the libraries stay open in the evenings, when students actually need them. For example, the public library near us is packed in the evenings, and that only works because the city pays for two staff members.",
    },
    bangla: [
      "নীতি নিয়ে বলার সময় খরচ ও অগ্রাধিকারের কথা বলুন — সব দাবি একই টাকা থেকে মেটাতে হয়।",
      "এই নীতির ফলে কার উপকার হবে, সেটি নির্দিষ্ট করুন: ছাত্র, শ্রমিক, কৃষক।",
      "শর্ত দিন: 'it would work if…' — এতে বিশ্লেষণ আসে।",
    ],
    corrections: [
      fix(
        "Government should give more facilities.",
        "The government should fund more facilities.",
        "'Give facilities' is a direct translation; use 'fund', 'provide' or 'invest in'.",
      ),
      fix(
        "They should spend money in education.",
        "They should spend money on education.",
        "Spend money 'on' something.",
      ),
    ],
    practice: [
      "Should governments fund public transport more than roads?",
      "Should university education be free?",
      "Should governments ban advertising aimed at children?",
      "How should governments support small businesses?",
    ],
  }),
  qtype({
    slug: "technology-questions",
    order: 19,
    title: "Technology questions",
    banglaTitle: "প্রযুক্তি নিয়ে প্রশ্ন",
    sampleQuestion: "How has technology changed the way people learn?",
    meaning:
      "Technology questions are usually change questions with a judgement attached — so combine the two structures.",
    examinerExpects: [
      "A description of what changed, not just 'technology is good'",
      "Both a benefit and a real cost",
      "An example from your own experience",
      "A hedged judgement about whether it is progress",
    ],
    ideaTechnique: {
      name: "Before → After → Cost",
      steps: [
        "Describe the 'before' honestly: what learning looked like ten years ago.",
        "Describe the 'after': what is different now.",
        "Name the cost: distraction, inequality, loss of depth.",
        "Judge with hedging: 'on balance, probably positive, though…'",
      ],
    },
    structures: [
      {
        name: "Change + cost + judgement",
        outline: "___ has changed completely: ___ . The downside is ___ . On balance, ___ .",
        when: "Technology change questions",
      },
      {
        name: "Benefit + example + condition",
        outline: "It helps most with ___ , for example ___ , though only if ___ .",
        when: "When you want a conditional close",
      },
    ],
    patterns: [
      "It's changed completely…",
      "whereas before…",
      "the downside is…",
      "on balance…",
      "it depends heavily on…",
    ],
    worked: {
      question: "How has technology changed the way people learn?",
      breakdown: [
        {
          label: "Before",
          text: "Learning meant physical classes, borrowed notes and libraries with opening hours.",
        },
        {
          label: "After",
          text: "Now anything can be looked up instantly, and classes can be recorded and rewatched.",
        },
        {
          label: "Cost",
          text: "Concentration suffers, and access still divides students by internet quality.",
        },
        {
          label: "Judgement",
          text: "On balance positive — but the skill now is deciding what is worth learning.",
        },
      ],
      band6:
        "Technology has changed learning a lot. Before, students went to classes and used library books. Now they can study online and watch videos. It is helpful because they can learn anytime. But sometimes they get distracted by social media.",
      band65:
        "It's changed completely, really. Ten years ago learning meant being in the room — borrowed notes, library opening hours, and whatever the teacher happened to say that day. Now everything's recorded and searchable, so you can revisit a lecture as many times as you need, which genuinely helps when a topic is hard. The downside is that the same device provides endless distraction, and access isn't equal — a student with slow internet is learning under a completely different set of conditions. On balance I'd say it's positive, but the important skill has shifted from finding information to deciding what's worth learning.",
    },
    bangla: [
      "প্রযুক্তির প্রশ্নে আগে-পরে তুলনা করুন, তারপর অসুবিধা বলুন, শেষে মূল্যায়ন দিন।",
      "নিজের অভিজ্ঞতা থেকে একটি উদাহরণ দিন — অনলাইন ক্লাস, ভিডিও, মোবাইল পেমেন্ট।",
      "'On balance, I'd say…' দিয়ে শেষ করলে উত্তর পূর্ণ শোনায়।",
    ],
    corrections: [
      fix(
        "Technology is making students lazy now a days.",
        "Technology can make students less focused these days.",
        "'Nowadays' is one word; use a measured verb.",
      ),
      fix(
        "It helps us in many purposes.",
        "It helps us in a few different ways.",
        "'Purposes' doesn't fit here; 'ways' is natural.",
      ),
    ],
    practice: [
      "Has technology made life easier or more complicated?",
      "How might artificial intelligence affect jobs in your country?",
      "Has technology changed how families communicate?",
      "Do you think schools should rely more on technology?",
    ],
  }),
];
