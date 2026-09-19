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
  table,
} from "../builders";

/**
 * Pronunciation for intelligibility, not for accent. Every lesson ends with a
 * short drill that needs no equipment beyond your own voice.
 */
export const pronunciationLessons: Lesson[] = [
  {
    slug: "intelligibility-not-accent",
    track: "pronunciation",
    order: 1,
    title: "Intelligibility, not accent",
    banglaTitle: "বোঝা যাওয়াই লক্ষ্য, accent নয়",
    summary:
      "What pronunciation actually measures, which four habits damage understanding, and how to set a realistic goal.",
    level: 2,
    minutes: 7,
    goals: [
      "Understand that accent is not penalised",
      "Name the four features that decide intelligibility",
      "Set a two-week pronunciation goal",
    ],
    examUse: "Pronunciation is 25% of your score, and most learners can gain here faster than they expect.",
    tags: ["pronunciation", "intelligibility", "accent"],
    blocks: [
      prose("What is really being assessed", [
        "The descriptors talk about how easy it is to understand you, and how effectively you use stress, rhythm and intonation. Nothing rewards sounding British or American — a clear Bangladeshi accent scores exactly the same as a clear British one.",
        "What damages intelligibility is different: word stress in the wrong place, missing final consonants, flat intonation, and speaking so fast that words merge. All four are fixable, and none require changing your accent.",
      ]),
      bangla(
        "লক্ষ্য ঠিক করুন",
        [
          "accent বদলানোর চেষ্টা করবেন না — লক্ষ্য হলো স্পষ্টতা। পরীক্ষক আপনার উচ্চারণ সহজে বুঝতে পারলেই সেটি ভালো pronunciation।",
          "সবচেয়ে বেশি ক্ষতি করে চারটি অভ্যাস: শব্দের জোর ভুল জায়গায় দেওয়া, শব্দের শেষ ব্যঞ্জন বাদ দেওয়া, সব বাক্য একই সুরে বলা, আর খুব দ্রুত বলা।",
          "দুই সপ্তাহেই পার্থক্য বোঝা যায়, যদি প্রতিদিন ৫–১০ মিনিট জোরে পড়েন এবং নিজের রেকর্ডিং শোনেন।",
        ],
        "Clear and steady beats fast and fancy. Accent is not the target; being understood is.",
      ),
      table(
        "The four features that decide intelligibility",
        ["Feature", "What it means", "Typical learner issue"],
        [
          ["Word stress", "Which syllable is strong", "deVELopment said as DEvelopment"],
          ["Final sounds", "Endings like -s, -t, -k, -ed", "Dropped, so 'books' sounds like 'book'"],
          ["Sentence stress", "Which words carry meaning", "Every word given equal weight, so nothing stands out"],
          ["Intonation", "Rising and falling melody", "Flat delivery, which sounds memorised or bored"],
        ],
      ),
      examples("Same sentence, two deliveries", [
        {
          text: "“I went to the market and bought some vegetables.” (all words the same length, flat)",
          note: "Hard to follow — no word stands out, and the sentence has no shape.",
        },
        {
          text: "“I WENT to the MARket and BOUGHT some VEGEtables.”",
          note: "Content words stressed, function words reduced — instantly easier to understand.",
        },
      ]),
      badBetter("Fixes that make the biggest difference", [
        fix(
          "Speaking fast to sound fluent.",
          "Speaking at a steady pace, with short pauses at idea boundaries.",
          "Clarity is what is scored. Speed reduces clarity and increases errors.",
        ),
        fix(
          "Pronouncing every word with equal stress.",
          "Stressing content words (nouns, verbs, adjectives) and reducing the rest.",
          "English is stress-timed: the beat falls on meaning-carrying words.",
        ),
        fix(
          "Avoiding words you cannot pronounce.",
          "Learning the pronunciation of your ten most-used topic words.",
          "Avoidance narrows your vocabulary. Ten well-pronounced words open up your answers.",
        ),
      ]),
      checklist("Your two-week pronunciation plan", [
        "Days 1–3: record yourself reading a paragraph and mark every word you stumble on",
        "Days 4–7: learn the stress pattern of twenty topic words",
        "Days 8–10: practise final consonants — books, worked, asked, changed",
        "Days 11–14: read the same paragraph daily and compare the first and last recordings",
      ]),
      callout(
        "tip",
        "Record, then listen for one thing only",
        "Listening to everything at once is overwhelming. Listen once for word stress, a second time for endings. Two passes, two findings, two fixes.",
      ),
    ],
    practice: [
      "Record this sentence: “I usually leave home at about eight and take the bus, which takes forty minutes in heavy traffic.”",
      "Mark the stressed syllable in ten topic words you use often and say them aloud.",
    ],
  },
  {
    slug: "word-stress",
    track: "pronunciation",
    order: 2,
    title: "Word stress — putting the beat in the right place",
    banglaTitle: "শব্দের জোর — সঠিক অংশে চাপ",
    summary:
      "Stress patterns for the words you actually use in answers, plus the suffixes that decide where the beat falls.",
    level: 3,
    minutes: 8,
    goals: [
      "Stress common two- and three-syllable words correctly",
      "Use suffix rules (-tion, -ity, -ic) to predict stress",
      "Avoid the stress errors that most often block understanding",
    ],
    examUse: "A misstressed word is often not recognised at all — this is pure intelligibility.",
    tags: ["pronunciation", "word stress"],
    blocks: [
      bangla(
        "কেন জরুরি",
        [
          "ইংরেজিতে শব্দের একটি অংশে জোর দেওয়া হয়। জোর ভুল জায়গায় পড়লে শব্দটি পরীক্ষক চিনতেই পারেন না।",
          "সহজ নিয়ম: -tion, -sion, -ity, -ic শেষ হলে জোর তার আগের অংশে পড়ে: inforMAtion, uniVERsity, ecoNOMic, deCIsion।",
          "প্রতিদিন তিনটি শব্দ বেছে নিয়ে জোরে বলুন — এই অভ্যাস কয়েক সপ্তাহেই পার্থক্য তৈরি করে।",
        ],
        "Stress the syllable before -tion, -sion, -ity, -ic. Drill three words a day out loud.",
      ),
      table(
        "Words that decide how good you sound",
        ["Word", "Stress", "Common error"],
        [
          ["development", "de-VEL-op-ment", "DE-velopment"],
          ["particular", "par-TIC-u-lar", "partic-U-lar"],
          ["university", "u-ni-VER-si-ty", "uni-vers-I-ty"],
          ["photography", "pho-TOG-ra-phy", "PHO-to-graphy"],
          ["economic", "e-co-NOM-ic", "E-co-nomic"],
          ["important", "im-POR-tant", "IM-portant"],
          ["environment", "en-VI-ron-ment", "EN-vironment"],
        ],
      ),
      examples("Stress changing meaning", [
        { text: "PREsent (noun, a gift) vs preSENT (verb, to give)", note: "Same spelling, different stress, different meaning." },
        { text: "REcord (noun) vs reCORD (verb)", note: "Stress position alone separates the noun and the verb." },
        { text: "IMport (noun) vs imPORT (verb)", note: "Common in Part 3 answers about trade or goods." },
      ]),
      patterns("Suffix stress rules", [
        { label: "-tion / -sion", template: "stress the syllable before", example: "inforMAtion, deCIsion, eduCAtion" },
        { label: "-ity", template: "stress the syllable before", example: "possIBility, activITY, opportunITY" },
        { label: "-ic", template: "stress the syllable before", example: "ecoNOMic, scienTIFic, specIFic" },
        { label: "-ise / -ize", template: "usually stress the first syllable", example: "REcognise, ORganise, MEMorise" },
      ]),
      badBetter("Stress errors to fix first", [
        fix("DEvelopment", "deVELopment", "The stress sits in the middle — and this word appears in almost every education answer."),
        fix("IMportant", "imPORtant", "The stress is on the second syllable. Pair it with 'particularly important' when practising."),
        fix("ENvironment", "enVIronment", "Very common in Part 3. Say it five times each practice session until it is automatic."),
      ]),
      callout(
        "tip",
        "Learn stress with the word",
        "When you write down a new word, mark the stressed syllable immediately — deVELopment, opporTUnity. A word learned without stress is only half learned.",
      ),
    ],
    practice: [
      "Say these aloud five times each: development, environment, university, opportunity, particular, important.",
      "Mark the stress in ten words from your last speaking answer and re-record it.",
    ],
  },
  {
    slug: "sentence-stress-and-chunking",
    track: "pronunciation",
    order: 3,
    title: "Sentence stress and chunking",
    banglaTitle: "বাক্যের জোর ও অংশ ভাগ করা",
    summary:
      "Making your meaning audible: which words to stress, where to pause, and why long unbroken sentences lose marks.",
    level: 3,
    minutes: 8,
    goals: [
      "Stress content words and reduce function words",
      "Pause at idea boundaries rather than at random",
      "Use stress to signal contrast",
    ],
    examUse: "Chunking is what makes a two-minute Part 2 answer easy to follow.",
    tags: ["pronunciation", "chunking", "sentence stress"],
    blocks: [
      bangla(
        "বাক্যে জোর কোথায়",
        [
          "বাক্যের সব শব্দ সমান জোরে বলা যায় না। বিশেষ্য, ক্রিয়া, বিশেষণ — এই শব্দগুলোতে জোর পড়ে; article, preposition, auxiliary দুর্বল থাকে।",
          "নিঃশ্বাস নেওয়ার জায়গা ঠিক করা জরুরি: প্রতিটি আইডিয়ার শেষে থামুন, বাক্যের মাঝখানে নয়।",
          "কনট্রাস্ট বোঝাতে জোর ব্যবহার করুন: 'I didn't say it's cheap, I said it's CHEAPER.'",
        ],
        "Stress content words, reduce function words, and pause where ideas end.",
      ),
      table(
        "Chunking an answer",
        ["Unchunked (hard to follow)", "Chunked (easy to follow)"],
        [
          [
            "“I usually go to the market on Friday with my mother and we buy vegetables and fish and then we come home and cook together.”",
            "“I usually go to the market on Friday / with my mother / and we buy vegetables and fish / then come home and cook together.”",
          ],
          [
            "“The main reason people move to cities is that there are more jobs and better universities so young people leave after school.”",
            "“The main reason people move to cities / is that there are more jobs / and better universities / so young people leave after school.”",
          ],
        ],
      ),
      examples("Stress signalling meaning", [
        { text: "I didn't SAY it was expensive — I said it was EXpensive.", note: "Stress on 'say' contrasts the two verbs." },
        { text: "Most people take the BUS, though I prefer the TRAIN.", note: "Stress marks the two options being compared." },
        { text: "It's not just cheaper — it's MUCH cheaper.", note: "Stress carries emphasis that adverbs alone cannot." },
      ]),
      patterns("Chunking patterns", [
        { label: "Idea + reason", template: "___ / because ___ .", example: "I prefer walking / because it's quicker than waiting for a bus." },
        { label: "Point + example", template: "___ / for example ___ .", example: "Prices have gone up / for example, rice costs almost double." },
        { label: "Contrast", template: "___ / whereas ___ .", example: "The city is convenient / whereas a village is much quieter." },
      ]),
      badBetter("Delivery habits to correct", [
        fix(
          "Running three ideas together with no pause.",
          "One short pause after each idea — about half a second.",
          "The examiner needs a moment to process what you said. Pausing is a listening service.",
        ),
        fix(
          "Stress falling on prepositions and articles.",
          "Stress on nouns, verbs and adjectives.",
          "English rhythm is built on content words; stressing everything means nothing stands out.",
        ),
        fix(
          "Pausing mid-phrase: “I usually go to the / market on Friday.”",
          "Pausing at the boundary: “I usually go to the market / on Friday.”",
          "Chunks must be meaningful: a pause in the middle of a phrase sounds like hesitation.",
        ),
      ]),
      callout(
        "tip",
        "Physically mark your pauses",
        "When you prepare a Part 2 answer, write slashes where you will pause. It feels mechanical once — after that it becomes natural.",
      ),
    ],
    practice: [
      "Take a paragraph, mark a slash at every idea boundary, then read it aloud with pauses.",
      "Record a one-minute answer and count how often you paused mid-phrase rather than between ideas.",
    ],
  },
  {
    slug: "connected-speech",
    track: "pronunciation",
    order: 4,
    title: "Connected speech — linking words naturally",
    banglaTitle: "সংযুক্ত উচ্চারণ — শব্দ জোড়া লাগানো",
    summary:
      "Linking and weak forms: why natural speech sounds like one long word, and how to link without losing clarity.",
    level: 4,
    minutes: 9,
    goals: [
      "Link words across boundaries (an_app, go_on)",
      "Use weak forms of common function words",
      "Contract naturally without losing clarity",
    ],
    examUse: "Connected speech is what makes you sound fluent rather than word-by-word.",
    tags: ["pronunciation", "connected speech", "linking"],
    blocks: [
      bangla(
        "কেন সংযুক্ত উচ্চারণ দরকার",
        [
          "শব্দ আলাদা আলাদা বলে গেলে উত্তর কৃত্রিম শোনায় এবং ধীর লাগে। স্বাভাবিক ইংরেজিতে শব্দ জোড়া লেগে যায়: 'an apple' শোনায় 'anapple'।",
          "দুর্বল রূপ (weak forms) জানা দরকার: to → /tə/, for → /fə/, and → /ən/, of → /əv/। এগুলো দ্রুত বললে বাক্য ছন্দ পায়।",
          "তবে স্পষ্টতার শর্ত: নাম, সংখ্যা, গুরুত্বপূর্ণ শব্দ কখনও গিলে ফেলবেন না।",
        ],
        "Link words, weaken function words, but keep names, numbers and key nouns crisp.",
      ),
      table(
        "Linking and weak forms",
        ["Feature", "Write it as", "Say it as"],
        [
          ["Consonant + vowel", "an apple", "an_apple (one word)"],
          ["Same consonant twice", "next time", "nex_time"],
          ["Weak 'to'", "I want to go", "I want_ə go"],
          ["Weak 'and'", "bread and butter", "bread_ən_butter"],
          ["Contraction", "I am going to", "I'm going to / I'm gonna (informal)"],
          ["Linking 'r'", "far away", "fa_r_away"],
        ],
      ),
      examples("Linked speech in context", [
        { text: "“I usually get_up at seven and have_an egg before I go_out.”", note: "Three links in one sentence." },
        { text: "“It's_a ten-minute walk, so it's not much_of_a problem.”", note: "Linking with weak forms." },
        { text: "“I'd_like to study abroad, but it depends_on funding.”", note: "Contracted form plus linking." },
      ]),
      badBetter("Linking mistakes", [
        fix(
          "Saying every word separately, like reading a list.",
          "Linking across word boundaries while keeping key words clear.",
          "Word-by-word speech is clear but slow and unnatural; examiners hear fluency suffer.",
        ),
        fix(
          "Swallowing the end of words while linking: “I wen_ to the marke_”.",
          "Link but keep final sounds: “I went_to the market.”",
          "Linking should join sounds, not delete them. Missing final consonants is the biggest intelligibility problem for Bangladeshi speakers.",
        ),
        fix(
          "Avoiding contractions entirely: “I am not going to be able to…”",
          "Using contractions in speech: “I'm not going to be able to…”",
          "Full forms everywhere sound stiff; contractions are the norm in spoken English.",
        ),
      ]),
      callout(
        "tip",
        "Practise with one sentence, five times",
        "Choose a sentence from your own answer, mark the links, and say it five times in a row — slow, then at normal speed. Five repetitions is enough for the pattern to stick.",
      ),
    ],
    practice: [
      "Say this with linking: “He's an old friend of mine. I'll be at work until eight.”",
      "Record one Part 1 answer, then listen for places where word-by-word delivery made it sound unnatural.",
    ],
  },
  {
    slug: "final-consonants-and-endings",
    track: "pronunciation",
    order: 5,
    title: "Final consonants and word endings",
    banglaTitle: "শেষের ব্যঞ্জন ও শব্দের সমাপ্তি",
    summary:
      "The single biggest intelligibility fix for Bangladeshi speakers: -s, -ed and final consonants, with drills that take two minutes.",
    level: 3,
    minutes: 9,
    goals: [
      "Pronounce final consonants clearly without adding a vowel",
      "Use the three -ed sounds correctly",
      "Distinguish plural -s sounds (/s/, /z/, /ɪz/)",
    ],
    examUse: "Dropped endings change grammar as well as sound — 'he work' instead of 'he works' costs accuracy too.",
    tags: ["pronunciation", "endings", "consonants"],
    blocks: [
      bangla(
        "কেন এটা সবচেয়ে জরুরি",
        [
          "বাংলা ভাষায় শব্দ প্রায়ই স্বরধ্বনিতে শেষ হয়, তাই ইংরেজির শেষ ব্যঞ্জন উচ্চারণ করতে কষ্ট হয়। ফলে 'he works' শোনা যায় 'he work', 'books' শোনা যায় 'book'।",
          "এতে দুই ধরনের ক্ষতি হয়: অর্থ বদলে যায় এবং ব্যাকরণ ভুল শোনায়।",
          "সমাধান: শেষ ব্যঞ্জন ছোট করে হলেও স্পষ্টভাবে বলুন, আর শেষে অতিরিক্ত স্বর যোগ করবেন না ('worked' কে 'work-ed' বলবেন না)।",
        ],
        "Make the ending audible, but do not add an extra vowel to it.",
      ),
      table(
        "The three -ed sounds",
        ["Sound", "When", "Examples"],
        [
          ["/t/", "after unvoiced sounds (k, p, s, sh, ch, f)", "worked, helped, passed, watched, laughed"],
          ["/d/", "after voiced sounds (b, g, v, z, m, n, l, vowels)", "played, lived, called, opened, arrived"],
          ["/ɪd/", "after t or d", "wanted, needed, decided, started, visited"],
        ],
      ),
      table(
        "Plural and third-person -s",
        ["Sound", "When", "Examples"],
        [
          ["/s/", "after unvoiced consonants", "books, shops, months"],
          ["/z/", "after voiced sounds and vowels", "dogs, jobs, keys, friends"],
          ["/ɪz/", "after s, z, sh, ch, x, ge", "buses, watches, classes, pages"],
        ],
      ),
      examples("Practise these aloud", [
        { text: "I worked there for two years and helped hundreds of students.", note: "/t/ twice." },
        { text: "We played cricket and watched the final on television.", note: "/d/ then /t/ in the same sentence." },
        { text: "She visited three cities and decided to stay in one.", note: "/ɪd/ twice." },
        { text: "There are three books, two pens and several watches on the table.", note: "Three different -s sounds." },
      ]),
      patterns("Minimal pairs to drill", [
        { label: "-t / -ed", template: "ask / asked", example: "I asked him, and he asked me back." },
        { label: "plural", template: "book / books, dog / dogs", example: "I read two books and walked two dogs." },
        { label: "final -k / -p", template: "work / worked, help / helped", example: "It worked because somebody helped." },
      ]),
      badBetter("Ending errors and the fix", [
        fix(
          "I work_ in a shop for six months.",
          "I worked in a shop for six months.",
          "The -ed must be audible, especially after /k/ — otherwise the past tense disappears entirely.",
        ),
        fix(
          "There were many student_ in the hall.",
          "There were many students in the hall.",
          "Plural -s carries grammar. Dropping it sounds like a different error, not a different accent.",
        ),
        fix(
          "He like_s to travel. (with an extra vowel)",
          "He likes to travel. (/s/, not /ɪz/)",
          "Only add /ɪz/ after s, z, sh, ch, x or ge. 'Likes' is one syllable.",
        ),
      ]),
      checklist("Two-minute daily drill", [
        "Read aloud: worked, asked, helped, watched, laughed (all /t/)",
        "Then: played, lived, called, arrived (all /d/)",
        "Then: wanted, needed, decided, visited (all /ɪd/)",
        "Then in a sentence: “He worked late, then visited his cousin and played cards.”",
      ]),
      callout(
        "tip",
        "Slow down on the endings",
        "Speaking slightly slower at the end of words is not a fluency problem — it is accuracy you can hear. Speed up the middle of the sentence instead.",
      ),
    ],
    practice: [
      "Record yourself reading the three -ed lists, then listen for extra vowels you added.",
      "Say ten plural nouns aloud and check which /s/ sound each one needs.",
    ],
  },
  {
    slug: "bangla-speaker-sounds",
    track: "pronunciation",
    order: 6,
    title: "Sounds Bangladeshi speakers mix up",
    banglaTitle: "বাংলাভাষীদের কঠিন কিছু ধ্বনি",
    summary:
      "v/w, s/ʃ, th, j/z and the vowel pairs — with practice word lists and clear rules for each.",
    level: 3,
    minutes: 9,
    goals: [
      "Distinguish /v/ and /w/ in common words",
      "Use /s/ rather than /ʃ/ at the start of school, science and student",
      "Pronounce /θ/ and /ð/ in the words that appear most in answers",
    ],
    examUse: "These sound pairs account for most misunderstandings between Bangladeshi speakers and examiners.",
    tags: ["pronunciation", "sounds", "bangla speakers"],
    blocks: [
      bangla(
        "কোন ধ্বনিগুলো কঠিন",
        [
          "/v/ এবং /w/: 'very' আর 'wery' — /v/ বলতে উপরের দাঁত নিচের ঠোঁটে হালকা ছোঁয়াতে হয়।",
          "s এবং শ: 'school', 'science', 'student' — এগুলো /s/ দিয়ে শুরু, বাংলা 'শ' দিয়ে নয়।",
          "th: /θ/ (think, three) আর /ð/ (this, those) — জিভ দাঁতের ফাঁকে হালকা রাখুন, 't' বা 'd' নয়।",
        ],
        "Six sounds: v/w, s/ʃ, th, j/z, and the vowel pairs ship/sheep and full/fool.",
      ),
      table(
        "Sound-by-sound practice lists",
        ["Pair", "Practice words", "Tip"],
        [
          ["/v/ vs /w/", "very / west, vest / west, vine / wine", "Top teeth touch bottom lip for /v/"],
          ["/s/ vs /ʃ/", "school, science, student / she, shop, short", "'School' and 'science' start with /s/"],
          ["/θ/ vs /t/", "think, three, both / tank, tree, boat", "Tongue lightly between the teeth"],
          ["/ð/ vs /d/", "this, those, mother / dis, dose, mudder", "Voiced th — buzz while the tongue is out"],
          ["/dʒ/ vs /z/", "job, general, age / zoo, zero, is", "'General' starts like 'job', not /z/"],
          ["/ɪ/ vs /iː/", "ship, live, fit / sheep, leave, feet", "Short and relaxed vs long and tense"],
        ],
      ),
      examples("Words you will actually say in the test", [
        { text: "I've lived here for a very long time, and I visit my parents most weekends.", note: "/v/ in lived, very, visit." },
        { text: "I studied science at school, which I think was a good decision.", note: "/s/ at the start of all three key words." },
        { text: "I think there are three main reasons for that.", note: "/θ/ twice, plus /ð/." },
        { text: "It's a huge advantage for young people starting out.", note: "/dʒ/ in advantage and young." },
      ]),
      patterns("Drill patterns", [
        { label: "v / w", template: "very / west — vest / west — vine / wine", example: "A very wet vest." },
        { label: "th", template: "think / three / both / this / those / mother", example: "I think both of those three mothers agree." },
        { label: "s / ʃ", template: "school / science / student / shop / short", example: "The student walked from school to the shop." },
      ]),
      badBetter("Sound habits to correct", [
        fix(
          "“I have a wery good wiew from my window.”",
          "“I have a very good view from my window.”",
          "Practise with a mirror: for /v/, the top teeth must touch the bottom lip.",
        ),
        fix(
          "“I study শcience at শchool.”",
          "“I study science at school.”",
          "Bangla 'শ' pulls the tongue back; /s/ keeps it forward and hissing.",
        ),
        fix(
          "“I tink dis is de best option.”",
          "“I think this is the best option.”",
          "These three words appear constantly. Drill them as a phrase: 'I think this is the best'.",
        ),
      ]),
      callout(
        "tip",
        "Choose six words, not six sounds",
        "Abstract sound practice does not stick. Choose six words you actually use — very, view, school, think, this, job — and say them in sentences every day for a week.",
      ),
    ],
    practice: [
      "Say these aloud ten times: very/west, think/sink, this/dis, school/shop.",
      "Record a 30-second answer and mark any word where you replaced /v/ with /w/ or /s/ with /ʃ/.",
    ],
  },
  {
    slug: "intonation",
    track: "pronunciation",
    order: 7,
    title: "Intonation — sounding interested, not flat",
    banglaTitle: "সুরের ওঠানামা — আগ্রহী শোনানো",
    summary:
      "Rising and falling patterns, why flat delivery costs marks, and how to sound engaged even when you are nervous.",
    level: 4,
    minutes: 8,
    goals: [
      "Use falling intonation for statements and lists",
      "Use rising intonation for questions and softening",
      "Avoid the flat monotone of reading aloud",
    ],
    examUse: "Flat delivery reads as memorised or uninterested, and it affects the pronunciation criterion directly.",
    tags: ["pronunciation", "intonation", "delivery"],
    blocks: [
      bangla(
        "সুর কেন গুরুত্বপূর্ণ",
        [
          "একই বাক্য সুর বদলে সম্পূর্ণ ভিন্ন অর্থ দিতে পারে। তালিকায় শেষ আইটেমের আগে সুর উপরে থাকে, শেষে নিচে নামে।",
          "সব বাক্য একই সুরে বললে মুখস্থ শোনায়, আর আগ্রহও কম মনে হয় — পরীক্ষকের কাছে এটি pronunciation-এর দুর্বলতা।",
          "yes/no প্রশ্নে সুর উপরে ওঠে, wh-প্রশ্নে নিচে নামে। নিজের উত্তরেও কখনও 'right?' ধরনের tag ব্যবহার করতে পারেন।",
        ],
        "Statements fall, yes/no questions rise, lists rise-then-fall at the end.",
      ),
      table(
        "Intonation patterns",
        ["Pattern", "Used for", "Example"],
        [
          ["Falling ↘", "Statements, wh-questions", "My family lives in Sylhet ↘ / Where do you live ↘"],
          ["Rising ↗", "Yes/no questions, checking", "Do you enjoy it ↗ / Is that right ↗"],
          ["Fall-rise ↘↗", "Hedging, uncertainty", "I'd say it's mostly positive ↘↗, though it depends"],
          ["Rise (mid-list), fall (end)", "Lists", "We bought rice ↗, vegetables ↗, and fish ↘"],
        ],
      ),
      examples("Contrasting delivery", [
        { text: "“I really enjoy it ↘, mainly because it's relaxing ↘.”", note: "Steady falls — confident, engaged." },
        { text: "“It's quite expensive ↗, though worth it ↘.”", note: "A rise on the concession, a fall on the conclusion." },
        { text: "“Do I like it? ↗ Yes, quite a lot ↘.”", note: "Repeating the question with a rise, then answering with a fall." },
      ]),
      badBetter("Delivery habits to correct", [
        fix(
          "Every sentence ending on the same flat note.",
          "Falling at the end of statements; rising for questions.",
          "Flat delivery is the clearest sign of a memorised or disengaged answer.",
        ),
        fix(
          "Rising at the end of statements: “I live in Dhaka ↗” (sounds unsure).",
          "Falling at the end: “I live in Dhaka ↘” (sounds confident).",
          "Rising statements sound like questions and weaken your position in Part 3.",
        ),
        fix(
          "Reading-style delivery: every word equally loud and long.",
          "Slight variation: stress key words, reduce the rest, pause between ideas.",
          "Intonation carries meaning; without it, listeners work harder and lose interest.",
        ),
      ]),
      checklist("Two-minute intonation drill", [
        "Read one paragraph marking ↘ at statement ends and ↗ for questions",
        "Say a four-item list with rises and a final fall",
        "Repeat your own Part 1 answer, deliberately varying the melody",
        "Record both versions and listen for which one sounds more natural",
      ]),
      callout(
        "tip",
        "Borrow emotion, not accent",
        "Think about how you would say the sentence to a friend — the interest, the surprise, the doubt. That natural melody is the intonation the examiner wants, in any accent.",
      ),
    ],
    practice: [
      "Say this with intonation: “We went to Sylhet, visited the tea gardens, and came back on Sunday.”",
      "Record a Part 3 answer twice — flat and varied — and compare.",
    ],
  },
];
