import type { Track } from "./schema";

/**
 * Learning tracks. Order here drives navigation, the Learn hub and the
 * recommended sequence. Part 0 = general strategy.
 */
export const tracks: Track[] = [
  {
    id: "overview",
    code: "00",
    order: 1,
    title: "Speaking Overview",
    banglaTitle: "পরীক্ষার পরিচিতি",
    blurb:
      "What Part 1, 2 and 3 actually test, how the examiner scores you, and how to use this platform.",
    part: 0,
  },
  {
    id: "part1",
    code: "01",
    order: 2,
    title: "Part 1",
    banglaTitle: "পার্ট ১",
    blurb:
      "Answer structure, YES/NO and WH questions, answer extension, and the Part 1 sentence-building system.",
    part: 1,
  },
  {
    id: "part2",
    code: "02",
    order: 3,
    title: "Part 2",
    banglaTitle: "পার্ট ২",
    blurb:
      "Idea generation, the universal story engine, sentence engineering and the 1-minute preparation system.",
    part: 2,
  },
  {
    id: "part3",
    code: "03",
    order: 4,
    title: "Part 3",
    banglaTitle: "পার্ট ৩",
    blurb:
      "The sentence toolkit, six answer architectures and eighteen question types you must recognise instantly.",
    part: 3,
  },
  {
    id: "strategy",
    code: "04",
    order: 5,
    title: "Idea Engine",
    banglaTitle: "আইডিয়া জেনারেশন",
    blurb:
      "What to do when your mind goes blank, and how to stop translating from Bangla in your head.",
    part: 0,
  },
  {
    id: "grammar",
    code: "05",
    order: 6,
    title: "Grammar for Speaking",
    banglaTitle: "স্পিকিং গ্রামার",
    blurb:
      "The grammar that actually appears in Band 6–6.5 answers — taught as speaking tools, not theory.",
    part: 0,
  },
  {
    id: "vocabulary",
    code: "06",
    order: 7,
    title: "Vocabulary",
    banglaTitle: "ভোকাবুলারি",
    blurb:
      "Useful, natural, topic-based language. No memorising of 'Band 9 words' you cannot pronounce.",
    part: 0,
  },
  {
    id: "fluency",
    code: "07",
    order: 8,
    title: "Fluency",
    banglaTitle: "ফ্লুয়েন্সি",
    blurb:
      "Thinking while speaking, natural fillers, self-correction, and keeping the answer moving.",
    part: 0,
  },
  {
    id: "pronunciation",
    code: "08",
    order: 9,
    title: "Pronunciation",
    banglaTitle: "উচ্চারণ",
    blurb:
      "Intelligibility first: stress, word endings, connected speech and the sounds Bangla speakers mix up.",
    part: 0,
  },
  {
    id: "exam",
    code: "09",
    order: 10,
    title: "Exam Skills",
    banglaTitle: "পরীক্ষার কৌশল",
    blurb:
      "Band 6 vs 6.5 characteristics, honest self-evaluation, mock test strategy and exam-day routine.",
    part: 0,
  },
];

export const trackById = (id: string): Track | undefined =>
  tracks.find((track) => track.id === id);

export const TOTAL_TRACKS = tracks.length;
