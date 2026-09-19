import type { Part3QuestionType } from "../schema";
import { fix, qtype } from "../content-builders";

/** Part 3 question types, in recommended teaching order. Each entry gives the
 *  meaning of the question, what the examiner expects, an idea-generation
 *  technique, the best structures, patterns, and a worked Band 6 / 6.5 model. */
export const part3Types: Part3QuestionType[] = [
  qtype({
    slug: "why-questions",
    order: 1,
    title: "Why questions",
    banglaTitle: "কারণ জানতে চাওয়া প্রশ্ন",
    sampleQuestion: "Why do people in your country prefer to live in cities?",
    meaning:
      "The examiner wants a cause or a motive, and expects you to separate the main reason from a secondary one.",
    examinerExpects: [
      "A clear main reason, not a list of vague causes",
      "An explanation of why that reason operates",
      "One concrete example or observation",
      "Ideally a small qualification (it isn't true for everyone)",
    ],
    ideaTechnique: {
      name: "Two-layer cause",
      steps: [
        "Ask: what is the most obvious reason? Say it plainly — work, education, money, family.",
        "Ask: what does that reason lead to? Add a consequence sentence.",
        "Ask: who does this not apply to? Add a qualification so you sound thoughtful.",
        "Attach one example: a friend, a relative, or something you see in your own area.",
      ],
    },
    structures: [
      {
        name: "Reason + explanation + example",
        outline: "The main reason is ___ . What that means is ___ . For example, ___ .",
        when: "Default structure — safe for any why question",
      },
      {
        name: "Cause + effect + qualification",
        outline: "___ , because ___ . As a result, ___ , although ___ .",
        when: "When the question contains 'always' or 'everyone'",
      },
    ],
    patterns: [
      "The main reason is that…",
      "This is largely because…",
      "As a result…",
      "For example, in my own area…",
      "That said, it doesn't apply to everyone…",
    ],
    worked: {
      question: "Why do people in your country prefer to live in cities?",
      breakdown: [
        {
          label: "Opinion",
          text: "I think it's mostly about work — there simply aren't enough jobs in smaller towns.",
        },
        {
          label: "Reason → explanation",
          text: "What that means is that even people who prefer village life end up moving, because they need income.",
        },
        {
          label: "Example",
          text: "My cousin moved to Dhaka two years ago; she misses home, but her field only exists here.",
        },
        {
          label: "Qualification",
          text: "That said, I don't think it's permanent for everyone — a lot of people plan to return.",
        },
      ],
      band6:
        "I think people prefer cities because there are more jobs. In cities, people can find work easily and also there are good schools and hospitals. Many young people move to the city for study and then they stay there.",
      band65:
        "I'd say the main reason is work — there are far more opportunities in cities, so even people who prefer their hometown often end up moving. What that means is that the decision is rarely about preference; it's about income. My cousin, for example, moved to Dhaka two years ago and she genuinely misses home, but her field basically doesn't exist in our town. That said, I don't think it's permanent for everyone; plenty of people plan to go back once they've saved enough.",
    },
    bangla: [
      "Why প্রশ্নে পরীক্ষক একটি পরিষ্কার মূল কারণ চান, দীর্ঘ তালিকা নয়। প্রথম বাক্যেই মূল কারণ বলুন, তারপর ব্যাখ্যা দিন।",
      "একটি নির্দিষ্ট উদাহরণ (আপনার চেনা কেউ) যোগ করলেই উত্তর ব্যক্তিগত ও বিশ্বাসযোগ্য হয় — শুনতে মুখস্থ মনে হয় না।",
      "শেষে 'That said, …' দিয়ে ব্যতিক্রম যোগ করলে উত্তর পরিণত শোনায়।",
    ],
    corrections: [
      fix(
        "Because of this reason people are going to city.",
        "That's the main reason people move to the city.",
        "Do not combine 'because of' and 'reason'; and avoid the continuous form for a general habit.",
      ),
      fix(
        "It is because many many facilities are there.",
        "It's because of the facilities — hospitals, schools and jobs.",
        "Name the facilities instead of repeating 'many'.",
      ),
    ],
    practice: [
      "Why do many young people in your country want to study abroad?",
      "Why do people prefer to shop online these days?",
      "Why do some people dislike city life?",
      "Why has interest in traditional music declined?",
    ],
  }),
  qtype({
    slug: "opinion-questions",
    order: 2,
    title: "Opinion questions",
    banglaTitle: "মতামত জানতে চাওয়া প্রশ্ন",
    sampleQuestion: "Do you think children should learn a foreign language at primary school?",
    meaning:
      "You are asked to take a position and justify it. Examiners want a clear stance with support — not a description of the issue.",
    examinerExpects: [
      "A position stated in the first sentence",
      "A reason that is developed, not just mentioned",
      "An example or observation supporting the position",
      "A small concession showing you can see the other side",
    ],
    ideaTechnique: {
      name: "Position first",
      steps: [
        "Decide instantly: yes, no, or 'broadly yes, with one exception'.",
        "Choose the strongest single reason — do not list three.",
        "Add why that reason matters (the 'so what?' step).",
        "Add one concession: 'though it depends on…'",
      ],
    },
    structures: [
      {
        name: "Opinion + reason + example",
        outline: "I'd say ___ . The main reason is ___ . For instance, ___ .",
        when: "Short, safe, and enough for 40 seconds",
      },
      {
        name: "Opinion + reason + explanation + example",
        outline: "I think ___ , mainly because ___ . What that means is ___ . A good example is ___ .",
        when: "When you want a full 60-second answer",
      },
    ],
    patterns: [
      "I'd say…",
      "The main reason is…",
      "What that means is…",
      "For instance…",
      "That said, I can see why…",
    ],
    worked: {
      question: "Do you think children should learn a foreign language at primary school?",
      breakdown: [
        { label: "Position", text: "Broadly yes, though it depends on how it's taught." },
        {
          label: "Reason",
          text: "Young children pick up pronunciation much more easily than teenagers do.",
        },
        {
          label: "Explanation",
          text: "What that means is they're less self-conscious, so they're willing to make mistakes and keep talking.",
        },
        {
          label: "Concession",
          text: "That said, it only works if there are trained teachers; otherwise it becomes memorising vocabulary in a class of sixty.",
        },
      ],
      band6:
        "Yes, I think children should learn a foreign language. Small children learn languages easily because their brain is fresh. In my country, many schools teach English from a small age and the students learn well.",
      band65:
        "Broadly yes, though it really depends on how it's taught. The main reason is pronunciation — young children pick up sounds far more easily than teenagers, and honestly they're less embarrassed about making mistakes. What that means is they keep talking instead of going quiet, which matters more than grammar at that age. That said, it only works with trained teachers; in a class of sixty with a textbook, it turns into memorising word lists, which achieves very little.",
    },
    bangla: [
      "মতামতের প্রশ্নে প্রথম বাক্যেই অবস্থান স্পষ্ট করুন। 'I think it is good.' বলে থেমে যাবেন না — কারণ ও ব্যাখ্যা দিন।",
      "একটি concession (বিপরীত দিক) যোগ করা মানে আপনি পরিণতভাবে ভাবতে পারেন — এটাই ৬ থেকে ৬.৫-এর পথ।",
      "উত্তর প্রশ্নের সঙ্গে সম্পর্কিত রাখুন: প্রশ্ন 'children' হলে উদাহরণও শিশুদের নিয়ে দিন।",
    ],
    corrections: [
      fix("I am agree with this statement.", "I agree with that.", "'Agree' is a verb — no 'am'."),
      fix(
        "In my opinion I think it is good.",
        "In my opinion, it's a good idea.",
        "Choose one opinion marker, not two.",
      ),
      fix(
        "Children should not learn foreign language because they will be confused.",
        "I'm not sure they should learn a foreign language that early, because they're still learning to read in two languages.",
        "Support the opinion with a specific, reasoned claim rather than a vague worry.",
      ),
    ],
    practice: [
      "Should students be allowed to choose their own subjects at school?",
      "Do you think it is better to live with your parents or alone?",
      "Is it important for people to learn history?",
      "Do you think exams are a good way to measure ability?",
    ],
  }),
  qtype({
    slug: "comparison-questions",
    order: 3,
    title: "Comparison questions",
    banglaTitle: "তুলনার প্রশ্ন",
    sampleQuestion: "How is life in the countryside different from life in the city?",
    meaning:
      "Two things are compared; the examiner wants at least two dimensions of difference, not just one.",
    examinerExpects: [
      "Two or three clear points of difference",
      "Comparison language (compared with, whereas, not as … as)",
      "A brief evaluation — which is better, and for whom",
      "Avoidance of absolute claims ('villages are always peaceful')",
    ],
    ideaTechnique: {
      name: "Two-dimension comparison",
      steps: [
        "Pick two dimensions: pace of life, cost, opportunities, community, environment.",
        "For each one, say what A is like and what B is like.",
        "Link them with 'whereas' or 'compared with'.",
        "Finish with a personal position: which suits you, and why.",
      ],
    },
    structures: [
      {
        name: "Point-by-point comparison",
        outline: "___ is ___ , whereas ___ . Another difference is ___ .",
        when: "Most comparison questions",
      },
      {
        name: "Personal conclusion",
        outline: "Compared with ___ , ___ . I'd say ___ , mainly because ___ .",
        when: "When the question asks which you prefer",
      },
    ],
    patterns: [
      "Compared with…",
      "whereas…",
      "on the other hand…",
      "not as … as…",
      "much more / less … than…",
    ],
    worked: {
      question: "How is life in the countryside different from life in the city?",
      breakdown: [
        {
          label: "Dimension 1",
          text: "The pace — rural life moves more slowly, whereas in the city everything is scheduled.",
        },
        {
          label: "Dimension 2",
          text: "Community — people know each other in a village, whereas city neighbourhoods are anonymous.",
        },
        {
          label: "Dimension 3 / evaluation",
          text: "Opportunities go the other way: cities have jobs and universities, which is why young people move.",
        },
        {
          label: "Position",
          text: "Personally I'd rather live in a village and work remotely, though that isn't possible for everyone.",
        },
      ],
      band6:
        "Life in the countryside is different from city life. In the village it is quiet and people know each other. In the city there are more jobs and facilities but it is crowded. I think city life is better for young people because of jobs.",
      band65:
        "They're different in a few ways. The pace of life is one: rural life moves slowly, whereas in the city everything's scheduled — transport, work, even meals. Community is the other: people in a village know each other's families, whereas in city areas you can live in a building for years and barely speak to anyone. Opportunities go the other direction, though — universities and jobs are mostly in the cities, which is exactly why so many young people move. Personally I'd prefer the quiet, but realistically I need the opportunities.",
    },
    bangla: [
      "তুলনার প্রশ্নে একটির বেশি মাত্রা (dimension) বলুন — শুধু 'শহর ব্যস্ত, গ্রাম শান্ত' বললে উত্তর ছোট থেকে যায়।",
      "whereas, compared with, not as … as — এই শব্দগুলো ব্যবহার করলেই grammatical range বাড়ে।",
      "শেষে নিজের অবস্থান জানান: 'Personally I'd prefer…'।",
    ],
    corrections: [
      fix(
        "City is more better than village.",
        "The city is better than a village in some ways.",
        "No 'more' together with '-er'; and use 'the city' with an article.",
      ),
      fix(
        "Comparing with village, city has more facilities.",
        "Compared with villages, cities have more facilities.",
        "Use the past participle form 'compared with'.",
      ),
    ],
    practice: [
      "How is studying online different from studying in a classroom?",
      "How are young people's jobs different from their parents' jobs?",
      "How is shopping today different from shopping ten years ago?",
      "Which is better for children: playing outside or playing computer games?",
    ],
  }),
  qtype({
    slug: "past-vs-present",
    order: 4,
    title: "Past vs present questions",
    banglaTitle: "আগে বনাম এখন",
    sampleQuestion: "Have people's eating habits changed in your country?",
    meaning:
      "You need to describe a change accurately — what used to be true, what is true now, and why it shifted.",
    examinerExpects: [
      "A clear 'before' description using used to / past simple",
      "A 'now' description using present simple or present perfect",
      "A reason for the change",
      "Appropriate hedging — not all changes apply to everyone",
    ],
    ideaTechnique: {
      name: "Then → Now → Why",
      steps: [
        "Say what the situation was ten or twenty years ago (use 'used to').",
        "Say what it is now, and who it applies to.",
        "Give the driver of change: technology, income, education, urbanisation.",
        "Add whether you consider it progress.",
      ],
    },
    structures: [
      {
        name: "Past + present + reason",
        outline: "In the past, ___ , whereas now ___ . The main reason is ___ .",
        when: "Practically every change question",
      },
      {
        name: "Then + now + who it affects",
        outline: "People used to ___ . These days ___ , especially for ___ .",
        when: "When the change affects different groups differently",
      },
    ],
    patterns: [
      "used to…",
      "in the past…",
      "whereas nowadays…",
      "these days…",
      "that's largely because…",
      "which is different from…",
    ],
    worked: {
      question: "Have people's eating habits changed in your country?",
      breakdown: [
        {
          label: "Past",
          text: "Home-cooked food was the default — rice, dal, vegetables, mostly cooked at home.",
        },
        {
          label: "Present",
          text: "Now people order in far more, and younger people in cities eat out several times a week.",
        },
        {
          label: "Reason",
          text: "Partly time — commutes are longer — and partly delivery apps, which removed almost all the effort.",
        },
        {
          label: "Evaluation",
          text: "It's convenient, but the home-cooked habit is worth keeping.",
        },
      ],
      band6:
        "Yes, eating habits have changed. Before, people used to eat home-cooked food every day. Now many people eat outside or order food. I think this is because people are busier now and they don't have time to cook.",
      band65:
        "Quite a lot, yes. My mother's generation ate home-cooked food almost every day — rice, dal, vegetables, whatever was in the market. These days, especially among younger people in cities, eating out or ordering in is completely normal. I think it's partly time — commutes are longer than they used to be — and partly the delivery apps, which removed most of the effort. It's convenient, no question, but I'd say something is lost when nobody cooks. For example, my father walked to his office in fifteen minutes; the same trip takes me about an hour now.",
    },
    bangla: [
      "পরিবর্তন বোঝাতে 'used to' আর 'now / these days' জোড়া লাগান — এতেই দুই যুগের তুলনা তৈরি হয়।",
      "কারণ বলুন: সময়, প্রযুক্তি, আয়, শহরায়ন। কারণ ছাড়া উত্তর অসম্পূর্ণ।",
      "শেষে মূল্যায়ন দিন — 'I think that's mostly positive' বা 'something is lost'।",
    ],
    corrections: [
      fix(
        "Before people are eating only home food.",
        "Before, people used to eat home-cooked food.",
        "Do not use the continuous form for past generalisations; use 'used to'.",
      ),
      fix(
        "Nowadays people has changed.",
        "Nowadays attitudes have changed.",
        "'People' is plural → 'have'; better still, name what actually changed.",
      ),
    ],
    practice: [
      "Have family relationships changed in your country?",
      "Has the way people communicate changed in the last ten years?",
      "Have young people's career expectations changed?",
      "Has the environment in your area changed since you were a child?",
    ],
  }),
  qtype({
    slug: "future-prediction",
    order: 5,
    title: "Future prediction questions",
    banglaTitle: "ভবিষ্যৎ সম্পর্কে অনুমান",
    sampleQuestion: "How do you think work will change in the next twenty years?",
    meaning:
      "You are asked to speculate. The examiner does not want facts — they want hedged, reasoned prediction language.",
    examinerExpects: [
      "Prediction language: likely to, will probably, might, could",
      "A reason or a mechanism behind the prediction",
      "A conditional element — 'if this continues…'",
      "Hedging, because nobody knows the future",
    ],
    ideaTechnique: {
      name: "Trend + mechanism + condition",
      steps: [
        "Identify a trend that already exists — do not invent the future from nothing.",
        "Explain what is driving the trend.",
        "Predict what happens if it continues.",
        "Add a condition or a counter-trend: unless, if, depending on.",
      ],
    },
    structures: [
      {
        name: "Trend + prediction + condition",
        outline: "___ is already happening, so I'd expect ___ . If that continues, ___ .",
        when: "Most prediction questions",
      },
      {
        name: "Two-sided prediction",
        outline: "I think it's likely that ___ , though it might ___ instead if ___ .",
        when: "When the future is genuinely uncertain",
      },
    ],
    patterns: [
      "is likely to…",
      "will probably…",
      "could well…",
      "if that continues…",
      "I'd expect…",
      "it's hard to say, but…",
    ],
    worked: {
      question: "How do you think work will change in the next twenty years?",
      breakdown: [
        {
          label: "Trend",
          text: "Remote work is already normal in some sectors, and it's spreading.",
        },
        {
          label: "Prediction",
          text: "I'd expect more people to work from anywhere, so living near your office may matter less.",
        },
        {
          label: "Mechanism",
          text: "Companies save on offices and employees save on commuting — both sides gain.",
        },
        {
          label: "Condition",
          text: "Unless the cost of living pushes people back to cities, or employers insist on presence.",
        },
      ],
      band6:
        "I think work will change a lot in the future. Many people will work from home because of technology. Offices will be smaller. This is good for people because they will not need to travel. But some people will lose jobs because of computers.",
      band65:
        "I think remote work is likely to become much more common, simply because it already suits both sides — companies spend less on offices and employees lose two hours of commuting. If that continues, I'd expect the idea of living near your workplace to fade, and cities might spread out a bit. That said, I don't think offices will disappear; a lot of work is genuinely collaborative, and new employees learn far faster in person. So probably a hybrid, rather than a full replacement. For example, my cousin's company has already halved its office space and lets people choose two days at home.",
    },
    bangla: [
      "ভবিষ্যৎ নিয়ে নিশ্চিত শোনাবেন না। likely, probably, might, could — এই শব্দগুলো ব্যবহার করুন।",
      "পূর্বাভাসের পেছনে একটি কারণ বা প্রক্রিয়া দিন ('companies save money, so…')।",
      "একটি শর্ত যোগ করুন: 'if that continues…', 'unless…' — এতে range বোঝা যায়।",
    ],
    corrections: [
      fix(
        "People will definitely work from home in future.",
        "People will probably work from home more in the future.",
        "'Definitely' is over-confident for a prediction; also say 'in the future'.",
      ),
      fix(
        "If technology will improve, life will be easy.",
        "If technology improves, life will become easier.",
        "Use the present simple after 'if'.",
      ),
    ],
    practice: [
      "How will education change in the next twenty years?",
      "Will people read fewer books in the future?",
      "How might transport in your city change?",
      "Do you think family structures will change in the future?",
    ],
  }),
  qtype({
    slug: "advantages",
    order: 6,
    title: "Advantage questions",
    banglaTitle: "সুবিধা জানতে চাওয়া প্রশ্ন",
    sampleQuestion: "What are the advantages of studying abroad?",
    meaning:
      "The examiner wants concrete benefits attached to specific people or situations, not vague positivity.",
    examinerExpects: [
      "Two clearly different advantages",
      "A reason why each one is an advantage",
      "Ideally, who benefits most",
      "Language that links benefit to consequence (which means, so, as a result)",
    ],
    ideaTechnique: {
      name: "Benefit → for whom → consequence",
      steps: [
        "Think of a benefit: skills, money, exposure, independence, health, time.",
        "Say who gains from it specifically — students, families, small businesses.",
        "Say what that leads to: the consequence sentence.",
        "If you have time, add one drawback to show balance.",
      ],
    },
    structures: [
      {
        name: "Two advantages + example",
        outline: "One major advantage is ___ . Another is ___ . For example, ___ .",
        when: "Direct advantage questions",
      },
      {
        name: "Advantage + consequence + drawback",
        outline: "The main benefit is ___ , which means ___ . The downside, though, is ___ .",
        when: "When you want a balanced 60-second answer",
      },
    ],
    patterns: [
      "One major advantage is…",
      "which means…",
      "another benefit is…",
      "particularly for…",
      "the downside, though, is…",
    ],
    worked: {
      question: "What are the advantages of studying abroad?",
      breakdown: [
        {
          label: "Advantage 1",
          text: "Exposure — you have to function in the language all day, so progress accelerates.",
        },
        {
          label: "Consequence",
          text: "That usually means better job prospects when you return, especially with international companies.",
        },
        {
          label: "Advantage 2",
          text: "Independence — managing money, housing and paperwork alone changes how you see yourself.",
        },
        {
          label: "Drawback",
          text: "The cost is the obvious one, and for many families it's simply not possible.",
        },
      ],
      band6:
        "There are many advantages of studying abroad. Students can learn new culture and improve their English. They also get a good degree, so they can get a better job. But it is expensive for many families.",
      band65:
        "I'd say there are two big advantages. The first is exposure — you have to use the language all day, every day, so progress is much faster than in a classroom back home. That usually translates into better job prospects, particularly with international companies. The second is independence: managing rent, paperwork and food on your own changes how you see yourself. The obvious drawback is cost, which rules it out for a lot of families. For instance, a friend of mine studied in Malaysia and had to handle rent, paperwork and cooking alone — she says that was the real education.",
    },
    bangla: [
      "সুবিধা বলার সময় 'ভালো হয়' বলে থামবেন না — কার জন্য ভালো, আর তার ফলাফল কী, সেটা বলুন।",
      "দুইটি ভিন্ন ধরনের সুবিধা বলুন: একটি ব্যক্তিগত, একটি সামাজিক বা অর্থনৈতিক।",
      "শেষে একটি drawback যোগ করলে উত্তর পরিণত শোনায়।",
    ],
    corrections: [
      fix(
        "There are many many advantages of it.",
        "There are a couple of clear advantages.",
        "Avoid repeating 'many'; be specific about the number.",
      ),
      fix(
        "It is beneficial for improve English.",
        "It's good for improving your English.",
        "Use 'beneficial for + -ing' or simplify to 'good for improving'.",
      ),
    ],
    practice: [
      "What are the advantages of living in a city?",
      "What are the advantages of learning a musical instrument?",
      "What are the benefits of public transport?",
      "What are the advantages of working from home?",
    ],
  }),
  qtype({
    slug: "disadvantages",
    order: 7,
    title: "Disadvantage questions",
    banglaTitle: "অসুবিধা জানতে চাওয়া প্রশ্ন",
    sampleQuestion: "What are the disadvantages of children using smartphones?",
    meaning:
      "Criticism must be specific and measured. The examiner wants clear drawbacks, not moral panic.",
    examinerExpects: [
      "Two distinct drawbacks",
      "Evidence or mechanism — what actually happens",
      "Avoidance of exaggeration ('all children are addicted')",
      "A balanced close where appropriate",
    ],
    ideaTechnique: {
      name: "Effect → mechanism → who is affected",
      steps: [
        "Choose a real effect: health, concentration, relationships, cost, safety.",
        "Explain the mechanism — how the effect actually happens.",
        "Say who suffers most: small children, elderly people, small businesses.",
        "Add a counterweight: it's manageable with boundaries.",
      ],
    },
    structures: [
      {
        name: "Drawback + mechanism + who",
        outline: "One problem is ___ , because ___ . It affects ___ most.",
        when: "Direct drawback questions",
      },
      {
        name: "Drawback + drawback + balance",
        outline: "___ , and on top of that ___ . That said, ___ .",
        when: "When you want to avoid sounding entirely negative",
      },
    ],
    patterns: [
      "One possible drawback is…",
      "because it…",
      "which mainly affects…",
      "on top of that…",
      "that said, it's manageable if…",
    ],
    worked: {
      question: "What are the disadvantages of children using smartphones?",
      breakdown: [
        {
          label: "Drawback 1",
          text: "Concentration — constant notifications make deep focus harder.",
        },
        {
          label: "Mechanism",
          text: "It's not just the phone; it's the interruption pattern the brain gets used to.",
        },
        {
          label: "Drawback 2 / who",
          text: "Sleep and social skills suffer most for younger children, whose routines are still forming.",
        },
        {
          label: "Balance",
          text: "That said, this is manageable with clear rules rather than banning phones entirely.",
        },
      ],
      band6:
        "Smartphones have some disadvantages for children. Children spend too much time on the phone and they do not study. Also it is not good for their eyes and they become lazy. I think parents should control them.",
      band65:
        "The biggest issue, I'd say, is concentration — constant notifications train children to expect interruptions, so deep focus gets harder. On top of that, sleep suffers; a lot of children I know are scrolling in bed at midnight. It affects younger children most, because their routines are still forming. That said, I don't think banning phones is realistic; boundaries — no phones in the bedroom, for example — seem to work better.",
    },
    bangla: [
      "সামান্য ভাষায় সমালোচনা করুন: 'one possible drawback', 'it can'. 'All children are addicted' বললে অতিরঞ্জিত শোনায়।",
      "প্রক্রিয়া ব্যাখ্যা করুন — কীভাবে ক্ষতি হয়। শুধু 'খারাপ' বললে grammar ও development দুটোই দুর্বল থাকে।",
      "শেষে সমাধান বা ভারসাম্য যোগ করলে উত্তর পূর্ণ হয়।",
    ],
    corrections: [
      fix(
        "It is very harmful for children's.",
        "It can be harmful for children.",
        "No apostrophe for a plural; add 'can' for measured language.",
      ),
      fix(
        "Children is becoming addicted.",
        "Children are becoming addicted.",
        "'Children' is plural → 'are'.",
      ),
    ],
    practice: [
      "What are the disadvantages of studying online?",
      "What are the drawbacks of living in a big city?",
      "What problems can tourism cause for a place?",
      "What are the disadvantages of working long hours?",
    ],
  }),
  qtype({
    slug: "causes",
    order: 8,
    title: "Cause questions",
    banglaTitle: "কারণ বিশ্লেষণ",
    sampleQuestion: "What causes traffic congestion in large cities?",
    meaning:
      "You must analyse systematically — main cause, contributing causes, and why the problem persists.",
    examinerExpects: [
      "A primary cause, clearly separated from secondary ones",
      "Mechanism: how the cause produces the problem",
      "An example from your own context",
      "Avoidance of 'the government is useless' style platitudes",
    ],
    ideaTechnique: {
      name: "Main cause + contributing causes",
      steps: [
        "Find the structural cause (population, growth, policy) rather than a symptom.",
        "Add one contributing cause: cost, behaviour, infrastructure.",
        "Explain the interaction: why one cause makes the other worse.",
        "Give a local example you have personally observed.",
      ],
    },
    structures: [
      {
        name: "Main cause + contributing cause",
        outline: "The main cause is ___ . Part of it is also ___ .",
        when: "Analysis questions",
      },
      {
        name: "Cause + effect chain",
        outline: "___ , which leads to ___ , and that's why ___ .",
        when: "When you want to show depth",
      },
    ],
    patterns: [
      "The main cause is…",
      "a contributing factor is…",
      "which leads to…",
      "in my area, for example…",
      "it's partly down to…",
    ],
    worked: {
      question: "What causes traffic congestion in large cities?",
      breakdown: [
        {
          label: "Main cause",
          text: "Population density — more people and vehicles on roads designed for far fewer.",
        },
        {
          label: "Contributing cause",
          text: "Public transport isn't good enough to be a real alternative, so people buy cars.",
        },
        {
          label: "Interaction",
          text: "Each car makes buses slower, which pushes more people into cars.",
        },
        {
          label: "Local example",
          text: "In Dhaka, a route that takes twenty minutes at 7am takes an hour by 10am.",
        },
      ],
      band6:
        "Traffic congestion has many causes. The main cause is too many people and too many cars. The roads are not wide and there are not enough buses. Also people do not follow traffic rules, so the jams become worse.",
      band65:
        "I think the main cause is simply density — cities grow faster than the roads do, so there are more vehicles than the infrastructure was designed for. A contributing factor is public transport: if buses were reliable, fewer people would buy cars, but because buses get stuck in the same jams, owning a car starts to look rational. In Dhaka you can feel this — the same route takes twenty minutes at seven in the morning and about an hour by ten.",
    },
    bangla: [
      "কারণ বলার সময় গঠনগত কারণ (জনসংখ্যা, নীতি) আর আচরণগত কারণ (নিয়ম না মানা) আলাদা করুন।",
      "কারণগুলো কীভাবে একে অন্যকে আরও খারাপ করে, সেটি ব্যাখ্যা করলেই উত্তর গভীর হয়।",
      "নিজের শহরের একটি ছোট উদাহরণ দিন — development দেখানোর সবচেয়ে সহজ উপায়।",
    ],
    corrections: [
      fix(
        "The reason is because there are many cars.",
        "The reason is that there are too many cars.",
        "Choose one: 'the reason is that' or 'because'.",
      ),
      fix(
        "It is happened because of over population.",
        "It happens because of overpopulation.",
        "No 'is' with 'happened'; 'overpopulation' is one word.",
      ),
    ],
    practice: [
      "What causes young people to leave your hometown?",
      "What causes stress in students' lives?",
      "Why do some small businesses fail?",
      "What causes people to waste food?",
    ],
  }),
  qtype({
    slug: "effects",
    order: 9,
    title: "Effect questions",
    banglaTitle: "প্রভাব জানতে চাওয়া প্রশ্ন",
    sampleQuestion: "What effects does social media have on teenagers?",
    meaning:
      "Explain consequences — and distinguish short-term effects from long-term ones where you can.",
    examinerExpects: [
      "Both a positive and a negative effect where relevant",
      "Clear effect language: as a result, which leads to, the consequence is",
      "Who is affected and how seriously",
      "A sense of scale — a small effect versus a structural one",
    ],
    ideaTechnique: {
      name: "Short-term vs long-term",
      steps: [
        "Name one immediate effect — how people behave this week.",
        "Name one long-term effect — how a generation changes.",
        "Link them with 'over time' or 'in the long run'.",
        "Decide which one matters more, and say so.",
      ],
    },
    structures: [
      {
        name: "Short-term + long-term",
        outline: "In the short term, ___ . Over time, though, ___ .",
        when: "Social and technology questions",
      },
      {
        name: "Effect + example + evaluation",
        outline: "As a result, ___ . You can see this when ___ . Overall, I'd say ___ .",
        when: "When you want a clear close",
      },
    ],
    patterns: [
      "As a result…",
      "which leads to…",
      "in the long run…",
      "over time…",
      "the consequence is that…",
    ],
    worked: {
      question: "What effects does social media have on teenagers?",
      breakdown: [
        {
          label: "Immediate effect",
          text: "Constant comparison — how everyone else's life looks.",
        },
        {
          label: "Consequence",
          text: "That can affect confidence, especially for people already unsure of themselves.",
        },
        {
          label: "Positive effect",
          text: "On the other hand, it gives isolated teenagers access to communities they'd never find locally.",
        },
        {
          label: "Evaluation",
          text: "Overall, the effect depends far more on how it's used than on the platform itself.",
        },
      ],
      band6:
        "Social media has good and bad effects on teenagers. It helps them to keep in touch with friends and learn new things. But also it can make them addicted and they compare themselves with others, which is not good for their confidence.",
      band65:
        "There are effects in both directions. In the short term, the biggest one is comparison — teenagers see the edited version of everyone else's life and measure themselves against it, which can affect confidence quite badly. Over time, though, I'd say the effect depends more on how it's used: for a teenager in a small town who's interested in something unusual, social media can be the only place to find people like them. So it's less about the platform and more about the pattern of use. For example, my younger cousin spends hours comparing her photos with other people's, and it clearly affects her mood.",
    },
    bangla: [
      "প্রভাব বলার সময় ভালো ও খারাপ — দুই দিকই বলুন, তবে মিশিয়ে ফেলবেন না; আলাদা করে বলুন।",
      "স্বল্পমেয়াদি ও দীর্ঘমেয়াদি প্রভাব আলাদা করলে উত্তরে গভীরতা আসে।",
      "শেষে নিজের মূল্যায়ন দিন: 'I'd say it depends more on…'",
    ],
    corrections: [
      fix(
        "It has a bad effect to teenagers.",
        "It has a negative effect on teenagers.",
        "'Effect on' + person.",
      ),
      fix(
        "They are affecting negatively.",
        "It affects them negatively.",
        "Keep subject and object clear; avoid a floating adverb.",
      ),
    ],
    practice: [
      "What effects has the internet had on how people learn?",
      "What are the effects of a growing population on cities?",
      "What effect does advertising have on children?",
      "How does tourism affect local culture?",
    ],
  }),
  qtype({
    slug: "problems",
    order: 10,
    title: "Problem questions",
    banglaTitle: "সমস্যা নিয়ে প্রশ্ন",
    sampleQuestion: "What problems can arise when families live far apart?",
    meaning:
      "Identify problems precisely, and show you understand the human side rather than listing abstract issues.",
    examinerExpects: [
      "Two clear problems, ideally different in type",
      "Who is affected",
      "A realistic tone — not every family living apart is unhappy",
      "A small consequence or example",
    ],
    ideaTechnique: {
      name: "Practical + emotional problems",
      steps: [
        "Name a practical problem: care, travel costs, emergencies, childcare.",
        "Name an emotional or social problem: loneliness, weaker bonds, loss of tradition.",
        "Say who feels it most — elderly parents, children, the person who moved.",
        "Add whether it can be managed.",
      ],
    },
    structures: [
      {
        name: "Practical + emotional",
        outline: "One practical problem is ___ . There's also an emotional side: ___ .",
        when: "Most social problem questions",
      },
      {
        name: "Problem + effect + mitigation",
        outline: "___ , which means ___ . In some families this is solved by ___ .",
        when: "When you want to end constructively",
      },
    ],
    patterns: [
      "One problem is…",
      "there's also the emotional side…",
      "which means…",
      "it's harder for…",
      "though some families manage this by…",
    ],
    worked: {
      question: "What problems can arise when families live far apart?",
      breakdown: [
        {
          label: "Practical",
          text: "Care during illness or emergencies — somebody has to travel, and it's usually sudden.",
        },
        {
          label: "Emotional",
          text: "Children grow up not really knowing their grandparents or cousins, which weakens a whole layer of support.",
        },
        {
          label: "Who",
          text: "The elderly usually feel it most, since they're the least able to travel.",
        },
        {
          label: "Mitigation",
          text: "Video calls help, but they don't replace being in the same room.",
        },
      ],
      band6:
        "When families live far apart, there are problems. If someone becomes sick, it is difficult to go quickly. Children also do not meet their grandparents often, so the relationship becomes weak. Technology helps, but it is not same as meeting.",
      band65:
        "There are two sides to it. Practically, emergencies become expensive and stressful — if an elderly parent falls ill, someone has to drop everything and travel, often at short notice. Emotionally, children grow up without really knowing their grandparents or cousins, which removes a layer of support families used to take for granted. It's hardest for the older generation, since they can't travel easily. Video calls help a bit, but they're not the same as sitting in the same room. In my own family, my grandparents see us twice a year at most, and phone calls don't really replace that.",
    },
    bangla: [
      "সমস্যা বলার সময় ব্যবহারিক (খরচ, যাতায়াত) ও আবেগঘন (একাকীত্ব, সম্পর্ক) — দুই ধরনের সমস্যা আলাদা করে বলুন।",
      "কার সবচেয়ে বেশি ক্ষতি হয় সেটি নির্দিষ্ট করুন: বৃদ্ধ, শিশু, কর্মজীবী।",
      "শেষে একটি সমাধান বা ব্যবস্থাপনার কথা বললে উত্তর পূর্ণ হয়।",
    ],
    corrections: [
      fix(
        "They face many problems like tension and suffer.",
        "They face real problems — practical ones like travel and emotional ones like loneliness.",
        "Avoid abstract nouns without content; give examples.",
      ),
      fix(
        "Problem is occurring when somebody ill.",
        "Problems come up when someone falls ill.",
        "Natural phrasing: 'problems come up', 'someone falls ill'.",
      ),
    ],
    practice: [
      "What problems do students face when they move to a new city?",
      "What problems can too much tourism create?",
      "What problems arise when people work too many hours?",
      "What problems do small shops face today?",
    ],
  }),
];
