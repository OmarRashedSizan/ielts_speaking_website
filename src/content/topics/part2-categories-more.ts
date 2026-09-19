import type { Part2Category } from "../schema";
import { cat, fix, vocab } from "../content-builders";

const v = vocab;

/** Additional Part 2 categories — music, technology, food, childhood,
 *  memories, conversations and celebrations. */
export const part2CategoriesMore: Part2Category[] = [
  cat({
    slug: "music-songs",
    title: "Music and songs",
    banglaTitle: "সংগীত ও গান",
    shape: "media",
    summary: "A song, an artist, a concert — music cue cards reward describing a mood and a memory, not a discography.",
    ideaLens: {
      label: "What?",
      prompts: [
        "What is the song or artist, and how did you discover it?",
        "When do you listen to it?",
        "What is it about, or how does it sound?",
        "What does it remind you of?",
        "Why does it matter to you?",
      ],
    },
    storyAdvice: [
      "Attach a time and place to the song: where you were when you first heard it.",
      "Describe the effect on you rather than the music theory: it calms me, it wakes me up, it reminds me of a person.",
      "Mention who introduced it to you — that always adds a person and a story.",
    ],
    vocabulary: [
      v("calming", "adjective", "শান্তিদায়ক", "The instrumental parts are really calming."),
      v("bring back memories", "phrase", "স্মৃতি ফিরিয়ে আনা", "That song brings back memories of school."),
      v("lyrics", "noun", "গানের কথা", "The lyrics are simple but honest."),
      v("grow on you", "phrase", "ধীরে ধীরে ভালো লাগা", "It grew on me after a few listens."),
      v("on repeat", "phrase", "বারবার শোনা", "I had it on repeat for a whole week."),
    ],
    structures: [
      { template: "The song I’d like to talk about is ___ , which ___ introduced me to.", example: "The song I’d like to talk about is…, which my cousin introduced me to." },
      { template: "I usually listen to it when ___ , because ___ .", example: "I usually listen to it when I’m travelling, because it makes long bus journeys bearable." },
      { template: "What it reminds me of is ___ .", example: "What it reminds me of is my last year at school." },
    ],
    cueCards: [
      {
        prompt: "Describe a song or piece of music that means something to you.",
        bullets: ["what it is", "when you first heard it", "when you usually listen to it", "and explain why it means something to you"],
        prepNotes: ["soft rock song", "cousin showed me", "2019, school", "bus journeys", "calming", "reminds me of exams", "still on repeat", "sing badly"],
        band6: "I want to talk about a song I like. My cousin showed me this song in 2019. I usually listen to it when I am travelling. I like it because the music is soft and it makes me calm. It reminds me of my school days.",
        band65: "The song I’d like to talk about is a soft rock track my cousin played me back in 2019 — I didn’t like it at first, but it grew on me over a few weeks and now it’s probably the song I’ve played most. I usually put it on during long bus journeys; there’s something about the rhythm that makes sitting in traffic tolerable. It reminds me of that whole year at school, which was stressful but also quite simple, and I think that’s why I keep going back to it.",
        whyItWorks: [
          "A small honest detail (didn’t like it at first) makes it sound real",
          "Context for listening (buses, traffic) — natural vocabulary, easy to produce",
          "Links the music to a period of life, which answers the 'why' convincingly",
          "Uses 'grew on me' and 'keep going back to it' — natural spoken collocations",
        ],
      },
    ],
    corrections: [
      fix("“I am listening this song from long time.”", "“I’ve been listening to this song for a long time.”", "'Listen to'; present perfect continuous with 'for'."),
      fix("“The song is very much nice.”", "“It’s a really nice song.”", "Avoid 'very much' before adjectives."),
      fix("“It gives me relax.”", "“It helps me relax.”", "'Relax' is a verb; use 'helps me relax'."),
    ],
    practiceCards: [
      "Describe a singer or band you like.",
      "Describe a time you heard live music.",
      "Describe music you listen to while studying or working.",
      "Describe a song that reminds you of a person.",
    ],
  }),
  cat({
    slug: "technology-gadgets",
    title: "Technology and gadgets",
    banglaTitle: "প্রযুক্তি ও যন্ত্র",
    shape: "object",
    summary: "A device, an app, an invention — describe usefulness and effect, with one honest drawback.",
    ideaLens: {
      label: "What?",
      prompts: [
        "What is the device or app, and how did you get it?",
        "What do you use it for?",
        "How has it changed your routine?",
        "What is the drawback?",
        "Would you recommend it, and to whom?",
      ],
    },
    storyAdvice: [
      "Say what you did before you had it — the before/after contrast is where the language is.",
      "Include one drawback. Balanced answers read as mature and give you contrast structures.",
      "Use the app or device in a specific scenario (a payment, a class, a missed train).",
    ],
    vocabulary: [
      v("come in handy", "phrase", "কাজে আসা", "The offline maps came in handy."),
      v("save time", "phrase", "সময় বাঁচানো", "It saves me at least an hour a week."),
      v("rely on", "phrasal verb", "নির্ভর করা", "I rely on it for almost everything."),
      v("glitch", "noun", "ছোট সমস্যা", "There was a glitch during the payment."),
      v("outdated", "adjective", "পুরোনো হয়ে যাওয়া", "It’s a bit outdated now."),
    ],
    structures: [
      { template: "The device I’d like to talk about is ___ , which I ___ .", example: "The device I’d like to talk about is my laptop, which I bought in my second year." },
      { template: "Before I had it, ___ ; now I ___ .", example: "Before I had it, I queued at the bank; now I do everything from my phone." },
      { template: "The only drawback is ___ .", example: "The only drawback is that I’m never really offline." },
    ],
    cueCards: [
      {
        prompt: "Describe a piece of technology you find useful.",
        bullets: ["what it is", "how you got it", "how you use it", "and explain why you find it useful"],
        prepNotes: ["laptop", "bought 2022", "assignments + classes", "before: library only", "saves time", "battery issue", "would recommend", "used daily"],
        band6: "I want to talk about my laptop. I bought it in 2022. I use it for my studies, like writing assignments and attending online classes. It is useful because I can do my work at home and I don’t need to go to the library.",
        band65: "The piece of technology I’d like to talk about is my laptop, which I bought about three years ago with money I’d saved from tutoring. I use it for everything academic — assignments, online classes, and research — but it also replaced a lot of trips I used to make. Before I had it, I had to go to the university library for anything longer than an hour of work. The only drawback is the battery, which barely lasts two hours now, so I’ve effectively got a desktop that I occasionally carry around.",
        whyItWorks: [
          "How it was bought (saved from tutoring) — a story in four words",
          "Before/after contrast, which is exactly the structure that earns range marks",
          "A drawback with a specific number (two hours) and a joke that lands naturally",
          "Ends on a concrete limitation rather than a generic 'it is very useful'",
        ],
      },
    ],
    corrections: [
      fix("“It is very useful for me always.”", "“It’s really useful for me.”", "Avoid stacking adverbs at the end of the sentence."),
      fix("“I am using it since two years.”", "“I’ve been using it for two years.”", "Present perfect continuous + 'for'."),
      fix("“My phone has become slow from last month.”", "“My phone has been slow since last month.”", "Use 'since' with a point in time."),
    ],
    practiceCards: [
      "Describe an app you use often.",
      "Describe something you bought that was worth the money.",
      "Describe a device you could not live without.",
      "Describe a piece of technology that has changed how you study.",
    ],
  }),
  cat({
    slug: "food-meals",
    title: "Food and meals",
    banglaTitle: "খাবার ও ভোজ",
    shape: "experience",
    summary: "A favourite meal, a meal you cooked, a restaurant — food stories are easy because everyone has them.",
    ideaLens: {
      label: "What?",
      prompts: [
        "What is the dish or meal, and what is in it?",
        "When do you usually eat it, or where did you eat it?",
        "Who makes it or who you ate with?",
        "What makes it special?",
        "Would you eat it again, or cook it yourself?",
      ],
    },
    storyAdvice: [
      "Describe taste, smell and texture with simple words — it reads as sensory detail rather than memorised vocabulary.",
      "Anchor a meal to an occasion. 'Biryani is only for Eid' says more than any adjective.",
      "Say who cooks it. Every food story has a person behind it.",
    ],
    vocabulary: [
      v("home-cooked", "adjective", "ঘরে রান্না", "Nothing beats home-cooked food."),
      v("rich", "adjective", "ভারী/গরম মসলাযুক্ত", "Biryani is quite rich, so I can’t eat much."),
      v("a staple", "noun", "প্রধান খাবার", "Rice is a staple here."),
      v("treat", "noun", "বিশেষ আনন্দ", "We have it as a treat, not every week."),
      v("go together well", "phrase", "ভালো মানানো", "The curry and rice go together well."),
    ],
    structures: [
      { template: "The meal I’d like to talk about is ___ , which ___ .", example: "The meal I’d like to talk about is biryani, which we only have on special occasions." },
      { template: "It’s made with ___ , and it takes ___ to cook.", example: "It’s made with rice, mutton and a lot of spices, and it takes about two hours." },
      { template: "What makes it special is ___ , not ___ .", example: "What makes it special is the occasion, not the taste alone." },
    ],
    cueCards: [
      {
        prompt: "Describe a meal you particularly enjoyed.",
        bullets: ["what the meal was", "where and when you ate it", "who you were with", "and explain why you enjoyed it"],
        prepNotes: ["biryani", "Eid, at home", "whole family", "aunt cooked 2 hours", "rich, spicy", "ate too much", "felt sleepy after", "once a year"],
        band6: "I want to talk about a meal I enjoyed. It was biryani on Eid day. My aunt cooked it at home. All my family were there. I enjoyed it because the food was very tasty and we were all together.",
        band65: "The meal I’d like to talk about is biryani we had at home last Eid. My aunt made it — it takes her about two hours, and she refuses to let anyone help, which is part of the ritual. The whole family was there: cousins, uncles, a very loud dining table. I enjoyed it partly because the food was genuinely excellent, but mostly because it only happens a few times a year, so it still feels like an event rather than a meal.",
        whyItWorks: [
          "A small character detail about the aunt — impossible to fake, sounds authentic",
          "Sensory and social detail rather than adjectives alone",
          "The 'why' distinguishes the food from the occasion, showing real thought",
          "Natural collocations: part of the ritual, feels like an event",
        ],
      },
    ],
    corrections: [
      fix("“The food was so much delicious.”", "“The food was delicious.”", "'So much' does not modify adjectives; 'so' alone or nothing at all."),
      fix("“I ate too much food so I was feel sleepy.”", "“I ate too much, so I felt sleepy.”", "Past simple 'felt'; do not use two verbs in one clause."),
      fix("“My aunt cooked the biryani by herself only.”", "“My aunt cooked the biryani herself.”", "'By herself only' is redundant."),
    ],
    practiceCards: [
      "Describe a meal you cooked for others.",
      "Describe a restaurant or food stall you like.",
      "Describe food from your country that visitors should try.",
      "Describe a meal that reminded you of your childhood.",
    ],
  }),
  cat({
    slug: "childhood-memories",
    title: "Childhood and memories",
    banglaTitle: "শৈশব ও স্মৃতি",
    shape: "experience",
    summary: "Games, school days, a childhood place — past routines and 'used to' make these cards flow easily.",
    ideaLens: {
      label: "When?",
      prompts: [
        "What is the memory, and roughly when was it?",
        "Who was involved?",
        "What used to happen — routines are easier than single events",
        "What detail do you still remember clearly?",
        "How does it feel to remember it now?",
      ],
    },
    storyAdvice: [
      "Use 'used to' for childhood routines — it signals grammatical range instantly.",
      "Give one pin-sharp sensory detail: the sound, the smell, the colour of something.",
      "End by comparing then and now: 'these days I couldn’t do that'.",
    ],
    vocabulary: [
      v("used to", "phrase", "অভ্যস্ত ছিল", "I used to spend every afternoon outside."),
      v("carefree", "adjective", "নির্ভাবন", "It felt carefree."),
      v("vividly", "adverb", "স্পষ্টভাবে", "I remember it vividly."),
      v("look back", "phrasal verb", "ফিরে দেখা", "Looking back, we were very lucky."),
      v("grown-up", "adjective", "প্রাপ্তবয়স্ক", "It all seemed so grown-up at the time."),
    ],
    structures: [
      { template: "When I was about ___ , I used to ___ .", example: "When I was about eight, I used to play cricket every afternoon." },
      { template: "I still remember ___ , even though ___ .", example: "I still remember the smell of rain on that field, even though the rest is vague." },
      { template: "Looking back, ___ , whereas now ___ .", example: "Looking back, we had no money and no plans, whereas now everything is scheduled." },
    ],
    cueCards: [
      {
        prompt: "Describe a happy memory from your childhood.",
        bullets: ["what the memory is", "when it happened", "who was involved", "and explain why it makes you happy"],
        prepNotes: ["cricket after school", "age 8-12", "neighbourhood kids", "field behind house", "until dark", "mother calling", "no worries", "still remember"],
        band6: "I want to talk about playing cricket when I was a child. I was about ten years old. I played with the children in my area every afternoon. We played until it became dark. I was happy because I had no tension about anything.",
        band65: "One memory that still makes me happy is playing cricket after school when I was around ten. There was a field behind our house, and every afternoon the same group of us would turn up — no arrangement, no messages, you just went and people appeared. We’d play until it got dark, and someone’s mother would eventually shout for them. Looking back, what makes it happy is how unplanned everything was; there was nothing to schedule and nothing to worry about.",
        whyItWorks: [
          "Routine rather than one event — easier to extend for two minutes",
          "Vivid, ordinary details (someone’s mother shouting) sound completely genuine",
          "Ends with a comparison between then and now, which is development",
          "Refers to absent details honestly ('even though the rest is vague' style hedging)",
        ],
      },
    ],
    corrections: [
      fix("“I was used to play cricket every day.”", "“I used to play cricket every day.”", "'Used to + verb' for past habits; 'be used to' means something different."),
      fix("“We played until it becomes dark.”", "“We played until it got dark.”", "Keep the whole narrative in past tense."),
      fix("“I had no tension in that time.”", "“I had no worries at that time.”", "'Tension' is not used this way in English; 'worries' or 'stress'."),
    ],
    practiceCards: [
      "Describe a game you played as a child.",
      "Describe a place you went to often as a child.",
      "Describe a family tradition from your childhood.",
      "Describe something you were afraid of as a child.",
    ],
  }),
  cat({
    slug: "important-conversations",
    title: "Important conversations",
    banglaTitle: "গুরুত্বপূর্ণ কথোপকথন",
    shape: "event",
    summary: "A conversation that changed your mind — the most demanding cue card family, because you must reconstruct dialogue.",
    ideaLens: {
      label: "When?",
      prompts: [
        "Who did you talk to, and where?",
        "What was the situation before the conversation?",
        "What did they say that mattered?",
        "How did you react at the time?",
        "What changed afterwards?",
      ],
    },
    storyAdvice: [
      "Report one or two lines of what was said — reported speech adds range and realism.",
      "Say what you believed before the conversation. The contrast is the story.",
      "Finish with what you do differently now.",
    ],
    vocabulary: [
      v("point of view", "noun", "দৃষ্টিভঙ্গি", "He explained his point of view calmly."),
      v("change my mind", "phrase", "মন পরিবর্তন", "It genuinely changed my mind."),
      v("advice", "noun", "পরামর্শ", "His advice was simple."),
      v("take something seriously", "phrase", "গুরুত্ব দেওয়া", "I started taking it seriously."),
      v("reflect on", "phrasal verb", "ভাবনা করা", "I reflected on it for days."),
    ],
    structures: [
      { template: "The conversation I’d like to talk about was with ___ , about ___ .", example: "The conversation I’d like to talk about was with a teacher, about my exam results." },
      { template: "He said ___ , which I hadn’t considered.", example: "He said that repeating the year wasn’t a failure, which I hadn’t considered at all." },
      { template: "Since then, I ___ .", example: "Since then, I’ve stopped comparing my progress with other people’s." },
    ],
    cueCards: [
      {
        prompt: "Describe a conversation that changed your mind about something.",
        bullets: ["who you spoke to", "what the situation was", "what you talked about", "and explain how it changed your mind"],
        prepNotes: ["English teacher", "after failing test", "thought I was bad at English", "said: practice speaking, not grammar", "sceptical", "tried speaking daily", "improved", "now advise others"],
        band6: "I want to talk about a conversation with my English teacher after I got a bad result. I thought I was not good at English. She told me the problem was that I never spoke. I started to practise speaking every day and my English improved.",
        band65: "A conversation that genuinely changed my mind was with my English teacher, just after I’d done badly in a test. At that point I’d decided I was simply bad at English — I’d based that on years of grammar exercises. She said something I hadn’t expected: that my grammar was fine, but I never spoke, so the language had nowhere to go. I was sceptical at first, but I started talking to myself for ten minutes a day, which felt ridiculous. Six months later my marks had changed, and more importantly so had my attitude.",
        whyItWorks: [
          "Sets up the old belief, then the challenge — a real narrative arc",
          "Reported speech ('she said that my grammar was fine') adds grammatical range",
          "Includes honest scepticism, which sounds like a person, not a textbook",
          "Ends with a measurable change and a shift in attitude",
        ],
      },
    ],
    corrections: [
      fix("“He told me that I should to change.”", "“He told me that I should change.”", "'Should' takes the bare verb."),
      fix("“We discussed about my future.”", "“We discussed my future.”", "'Discuss' takes no preposition."),
      fix("“After that conversation I am thinking differently.”", "“After that conversation I started thinking differently.”", "Use past simple for the change point."),
    ],
    practiceCards: [
      "Describe a piece of advice someone gave you.",
      "Describe a conversation with someone older than you.",
      "Describe a talk that made you feel better.",
      "Describe a discussion you had about an important subject.",
    ],
  }),
  cat({
    slug: "celebrations-culture",
    title: "Celebrations and culture",
    banglaTitle: "উৎসব ও সংস্কৃতি",
    shape: "event",
    summary: "Festivals, national days, cultural events — describe atmosphere and participation rather than history.",
    ideaLens: {
      label: "What?",
      prompts: [
        "What is the celebration, and when does it happen?",
        "What do people do — clothes, food, activities?",
        "What did you do personally?",
        "What is everyone’s mood like?",
        "Why does it matter to your community?",
      ],
    },
    storyAdvice: [
      "Describe the transformation of a normal place: on that day, the same street becomes something else.",
      "Say what you personally did, even if it was small (buying sweets, helping cook).",
      "End on community meaning: why this festival exists culturally, in one sentence.",
    ],
    vocabulary: [
      v("come alive", "phrase", "প্রাণ ফিরে পাওয়া", "The streets come alive during Boishakh."),
      v("traditional", "adjective", "ঐতিহ্যবাহী", "People wear traditional clothes."),
      v("get together", "phrasal verb", "একত্র হওয়া", "The whole extended family gets together."),
      v("fireworks", "noun", "আতশবাজি", "There were fireworks in the evening."),
      v("dress up", "phrasal verb", "সাজগোজ করা", "Children dress up for it."),
    ],
    structures: [
      { template: "___ takes place in ___ , and it’s celebrated by ___ .", example: "Pohela Boishakh takes place in mid-April, and it’s celebrated all over the country." },
      { template: "On that day, ___ becomes ___ .", example: "On that day, our ordinary street becomes a market." },
      { template: "What I enjoy most is ___ , because ___ .", example: "What I enjoy most is the food, because it only appears once a year." },
    ],
    cueCards: [
      {
        prompt: "Describe a festival or celebration in your country.",
        bullets: ["what it is", "when it takes place", "what people do", "and explain why it is important"],
        prepNotes: ["Pohela Boishakh", "14 April", "new clothes, panta-ilish", "music, processions", "markets and fairs", "family time", "everyone together", "cultural identity"],
        band6: "I want to talk about Pohela Boishakh. It is our new year and it happens in April. People wear traditional clothes and eat special food like panta with fish. There are also music programmes. It is important because it is our culture.",
        band65: "I’d like to talk about Pohela Boishakh, which is the Bengali new year and falls in mid-April. On that day, people wear traditional clothes — white saris and panjabis mostly — and the food is very specific: panta rice with fried fish, which people genuinely look forward to all year. There are music programmes and processions, and even ordinary streets turn into fairs. I think it matters because it’s one of the few days when the whole country is doing the same thing, which is rare.",
        whyItWorks: [
          "Cultural specifics rather than generic description (panta with fried fish, white saris)",
          "A line about how the ordinary becomes special — strong vocabulary, simple grammar",
          "Reasons are social rather than personal, which suits Part 2 cultural cards",
          "Closes with a real observation about the country, not a memorised conclusion",
        ],
      },
    ],
    corrections: [
      fix("“We celebrate it with great pomp and show.”", "“We celebrate it on a big scale.”", "'Pomp and show' is a memorised Indian-English phrase; use natural wording."),
      fix("“Many peoples come to the fair.”", "“A lot of people come to the fair.”", "'People' is already plural; no 's'."),
      fix("“It is celebrated in 14 April.”", "“It’s celebrated on 14 April.”", "Use 'on' with dates."),
    ],
    practiceCards: [
      "Describe a national day in your country.",
      "Describe a festival you celebrated away from home.",
      "Describe a cultural event you took part in.",
      "Describe a celebration that involves food.",
    ],
  }),
];
