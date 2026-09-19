/**
 * Rule-based speaking evaluator.
 *
 * Deliberately NOT a "Band 6.5" oracle. Given what a text transcript can
 * honestly reveal (fluency proxies, vocabulary range, grammar patterns,
 * structure), it returns per-criterion Strengths / Problems / How to improve
 * plus three next practice actions — the same shape an AI provider would
 * return, so the LLM path in /api/evaluate is a drop-in replacement.
 *
 * The grammar rules are derived from the mistake library content, so every
 * rule that fires can be linked to a lesson explaining it.
 */
import { mistakes } from "@/content/mistakes";
import type { MistakeEntry } from "@/content/schema";
import { countWords, sentenceSplit, unique } from "@/lib/utils";

export type CriterionId =
  | "fluency"
  | "vocabulary"
  | "grammar"
  | "pronunciation"
  | "development";

export interface CriterionFeedback {
  id: CriterionId;
  label: string;
  verdict: "strength" | "steady" | "priority";
  strengths: string[];
  problems: string[];
  improvements: string[];
  /** Short drills the learner can run today. */
  drills: string[];
}

export interface EvaluationResult {
  /** Honest statement about what this feedback can and cannot measure. */
  method: "rules" | "ai";
  disclaimer: string;
  metrics: {
    words: number;
    sentences: number;
    wordsPerMinute: number;
    secondsSpoken: number;
    uniqueContentWords: number;
    typeTokenRatio: number;
    fillerCount: number;
    connectorCount: number;
    complexSentenceRatio: number;
  };
  criteria: CriterionFeedback[];
  detectedMistakes: { id: string; wrong: string; right: string; why: string }[];
  nextPractice: string[];
}

export interface EvaluateInput {
  transcript: string;
  secondsSpoken: number;
  part: 1 | 2 | 3;
  question?: string;
}

const FILLERS = [
  "um", "umm", "uh", "uhh", "er", "erm", "hmm", "like", "you know",
  "actually", "basically", "মানে",
];

const CONNECTORS = [
  "because", "so", "although", "though", "however", "for example", "for instance",
  "in addition", "also", "but", "while", "whereas", "on the other hand", "as a result",
  "that's why", "which means", "in my opinion", "in my view", "to be honest",
  "first of all", "apart from that", "as well as", "and then",
];

const COMPLEX_MARKERS = [
  "because", "although", "though", "which", "who", "that", "when", "while",
  "if", "so that", "even though", "as soon as", "since", "unless", "after", "before",
];

const BLAND_WORDS: Record<string, string[]> = {
  good: ["enjoyable", "worthwhile", "helpful", "well-organised", "satisfying"],
  nice: ["pleasant", "welcoming", "tidy", "friendly"],
  bad: ["disappointing", "stressful", "poorly organised", "inconvenient"],
  very: ["really", "particularly", "especially", "genuinely"],
  beautiful: ["peaceful", "scenic", "lively", "attractive"],
  big: ["sizeable", "spacious", "significant"],
  thing: ["aspect", "factor", "detail", "habit"],
  "a lot of": ["plenty of", "a good number of", "loads of (informal)"],
  "very good": ["excellent", "impressive", "really strong"],
};

const TENSE_MARKERS = {
  past: ["yesterday", "last ", "ago", "in 20", "when I was", "back then"],
  presentPerfect: ["have been", "has been", "have had", "since ", "for the last"],
  future: ["will ", "going to", "plan to", "hope to", "in the future", "next year"],
};

function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}'\s-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function detectMistakes(transcript: string): MistakeEntry[] {
  const lower = transcript.toLowerCase();
  const hits: MistakeEntry[] = [];
  for (const entry of mistakes) {
    if (!entry.detect) continue;
    try {
      const pattern = new RegExp(entry.detect, "i");
      if (pattern.test(lower)) hits.push(entry);
    } catch {
      // A malformed rule must never break evaluation.
    }
  }
  return hits.slice(0, 6);
}

function bandVerdict(value: number, steady: number, priority: number): CriterionFeedback["verdict"] {
  if (value >= steady) return "strength";
  if (value >= priority) return "steady";
  return "priority";
}

export function evaluateAnswer(input: EvaluateInput): EvaluationResult {
  const transcript = input.transcript.trim();
  const sentenceList = sentenceSplit(transcript);
  const wordList = words(transcript);
  const wordCount = countWords(transcript);
  const contentWords = wordList.filter((word) => word.length > 3);
  const uniqueContent = unique(contentWords);
  const seconds = Math.max(1, Math.round(input.secondsSpoken));
  const minutes = seconds / 60;
  const wpm = wordCount > 0 ? Math.round(wordCount / Math.max(minutes, 0.4)) : 0;
  const lower = transcript.toLowerCase();

  const fillerCount = FILLERS.reduce((count, filler) => {
    const matches = lower.match(new RegExp(`\\b${filler}\\b`, "g"));
    return count + (matches?.length ?? 0);
  }, 0);
  const connectorCount = CONNECTORS.reduce((count, connector) => {
    const matches = lower.match(new RegExp(connector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"));
    return count + (matches?.length ?? 0);
  }, 0);
  const complexSentences = sentenceList.filter((sentence) =>
    COMPLEX_MARKERS.some((marker) => sentence.toLowerCase().includes(marker)),
  ).length;
  const complexRatio = sentenceList.length
    ? complexSentences / sentenceList.length
    : 0;
  const typeTokenRatio = contentWords.length
    ? uniqueContent.length / contentWords.length
    : 0;

  const detected = detectMistakes(transcript);
  const repeatedOpeners = sentenceList.filter((sentence) =>
    /^(actually|yes|no|i think|i like)\b/i.test(sentence.trim()),
  ).length;

  const blandUsed = Object.entries(BLAND_WORDS).filter(([word]) =>
    new RegExp(`\\b${word}\\b`, "i").test(transcript),
  );

  /* ------------------------------ Fluency -------------------------------- */
  const fluency: CriterionFeedback = {
    id: "fluency",
    label: "Fluency & Coherence",
    verdict: "steady",
    strengths: [],
    problems: [],
    improvements: [],
    drills: [],
  };

  const targetSeconds = input.part === 1 ? 25 : input.part === 2 ? 110 : 45;
  if (seconds >= targetSeconds) {
    fluency.strengths.push(
      `You spoke for about ${seconds}s — comfortably above the ${targetSeconds}s a strong Part ${input.part} answer usually needs.`,
    );
  } else {
    fluency.problems.push(
      `Your answer lasted about ${seconds}s. A developed Part ${input.part} answer normally needs roughly ${targetSeconds}s.`,
    );
    fluency.improvements.push(
      "Add one more layer to your answer using the pattern: answer → reason → example → extra detail.",
    );
  }
  if (wordCount >= 40) {
    fluency.strengths.push(
      `You produced ${wordCount} words, so you are not stuck in one-line answers any more.`,
    );
  } else {
    fluency.problems.push(
      `Only ${wordCount} words. Length is not the goal, but a very short answer signals you ran out of language.`,
    );
    fluency.improvements.push("Prepare two idea seeds per topic so you always have a second thing to say.");
  }
  if (wpm > 0 && wpm < 90) {
    fluency.problems.push(
      `Your estimated speaking rate is ${wpm} words/minute, which suggests long pauses or very slow delivery.`,
    );
    fluency.improvements.push(
      "Practise reading your answer aloud twice, then saying it without reading. Aim to sound unhurried but continuous.",
    );
  } else if (wpm >= 110 && wpm <= 180) {
    fluency.strengths.push(`A natural pace at roughly ${wpm} words/minute.`);
  } else if (wpm > 180) {
    fluency.problems.push(
      `You spoke at about ${wpm} words/minute — fast enough that linking words and endings may blur.`,
    );
    fluency.improvements.push("Chunk your answer: pause briefly at the end of each idea instead of between words.");
  }
  if (fillerCount > Math.max(3, wordCount / 40)) {
    fluency.problems.push(
      `I counted ${fillerCount} filler uses (actually / basically / like / um). Overusing them is one of the clearest fluency signals learners give away.`,
    );
    fluency.improvements.push(
      "Replace fillers with short, purposeful thinking phrases: “Well, let me think…” — one per answer is plenty.",
    );
  } else if (fillerCount > 0) {
    fluency.strengths.push(`Fillers were under control (${fillerCount} uses).`);
  }
  if (repeatedOpeners > 1) {
    fluency.problems.push(
      `You opened ${repeatedOpeners} sentences the same way. Repeated openers make answers sound memorised.`,
    );
    fluency.improvements.push("Vary your openers: “To be honest…”, “For me…”, “One reason is…”, “Looking back…”.");
  }
  if (connectorCount >= 3) {
    fluency.strengths.push(`You linked ideas with ${connectorCount} connecting words — exactly what Coherence rewards.`);
  } else {
    fluency.improvements.push(
      "Add two linking words where the ideas change: because, although, so, however, for example.",
    );
  }
  fluency.drills.push(
    input.part === 2
      ? "Re-record the same cue card and aim for 1:45 of continuous speech."
      : "Answer the same question twice, adding one extra detail the second time.",
  );
  fluency.verdict = bandVerdict(
    (seconds >= targetSeconds ? 2 : 0) + (wpm >= 100 ? 1 : 0) + (connectorCount >= 3 ? 1 : 0) - (fillerCount > 5 ? 1 : 0),
    3,
    2,
  );

  /* ----------------------------- Vocabulary ------------------------------ */
  const vocabulary: CriterionFeedback = {
    id: "vocabulary",
    label: "Lexical Resource",
    verdict: "steady",
    strengths: [],
    problems: [],
    improvements: [],
    drills: [],
  };
  if (typeTokenRatio >= 0.62) {
    vocabulary.strengths.push(
      `Good variety: ${uniqueContent.length} different content words out of ${contentWords.length} — you are not repeating the same vocabulary.`,
    );
  } else {
    vocabulary.problems.push(
      `Vocabulary repetition is high (${uniqueContent.length} different content words). This is the classic “I only have good, nice, a lot” problem.`,
    );
    vocabulary.improvements.push(
      "Learn two alternatives per overused word and use them in your next answer.",
    );
  }
  if (blandUsed.length > 0) {
    const examples = blandUsed
      .slice(0, 3)
      .map(([word, upgrades]) => `“${word}” → ${upgrades.slice(0, 3).join(" / ")}`)
      .join("; ");
    vocabulary.problems.push(`Basic word choices detected: ${examples}.`);
    vocabulary.improvements.push(
      "Natural collocations beat rare words: “a peaceful place” scores better than “a pulchritudinous place”.",
    );
  }
  if (/\b(so much|too much|very much)\b/i.test(lower)) {
    vocabulary.improvements.push(
      "Notice where you use “very/too much”. Bangla অনেক often translates into these; English prefers one stronger word.",
    );
  }
  vocabulary.drills.push(
    "Choose three bland words from this answer and replace each with a natural collocation on the next attempt.",
  );
  vocabulary.verdict = bandVerdict(
    (typeTokenRatio >= 0.62 ? 2 : 1) + (blandUsed.length === 0 ? 1 : 0),
    3,
    2,
  );

  /* ------------------------------- Grammar ------------------------------- */
  const grammar: CriterionFeedback = {
    id: "grammar",
    label: "Grammatical Range & Accuracy",
    verdict: "steady",
    strengths: [],
    problems: [],
    improvements: [],
    drills: [],
  };
  if (complexRatio >= 0.3) {
    grammar.strengths.push(
      `You used complex structures in about ${Math.round(complexRatio * 100)}% of your sentences (because, although, which, when…).`,
    );
  } else {
    grammar.problems.push(
      "Almost all of your sentences are simple. Band 6+ wants at least some complex sentences that still stay accurate.",
    );
    grammar.improvements.push(
      "Join two of your short sentences with “because” or “although”, then say the whole sentence without stopping.",
    );
  }
  if (detected.length > 0) {
    for (const mistake of detected.slice(0, 4)) {
      grammar.problems.push(`Likely slip: “${mistake.wrong}” → “${mistake.right}” (${mistake.topic.toLowerCase()}).`);
      grammar.improvements.push(mistake.why);
    }
  }
  const hasPast = TENSE_MARKERS.past.some((marker) => lower.includes(marker));
  const hasPresentPerfect = TENSE_MARKERS.presentPerfect.some((marker) => lower.includes(marker));
  if (hasPast && !hasPresentPerfect && input.part !== 1) {
    grammar.improvements.push(
      "You described the past only in past simple. Add one present-perfect sentence for contrast: “I have been there three times since then.”",
    );
  }
  if (!/\./.test(transcript) && transcript.length > 0) {
    grammar.improvements.push(
      "Your answer reads as one long run-on. Speak in finished sentences; your transcript should show full stops.",
    );
  }
  grammar.drills.push(
    "Say the same idea three ways: present simple, past simple, present perfect.",
  );
  grammar.verdict = bandVerdict(
    (complexRatio >= 0.3 ? 2 : 1) + (detected.length === 0 ? 1 : 0),
    3,
    2,
  );

  /* --------------------------- Pronunciation ----------------------------- */
  const pronunciation: CriterionFeedback = {
    id: "pronunciation",
    label: "Pronunciation",
    verdict: "steady",
    strengths: [],
    problems: [],
    improvements: [],
    drills: [],
  };
  pronunciation.problems.push(
    "Pronunciation cannot be judged from text. Use this section as a checklist and self-record instead of guessing.",
  );
  if (/\b\w+ed\b/i.test(transcript)) {
    pronunciation.improvements.push(
      "Check your -ed endings: “worked” = /t/, “played” = /d/, “wanted” = /ɪd/. Dropping them sounds like a tense mistake.",
    );
  }
  if (/\b\w+s\b/i.test(transcript)) {
    pronunciation.improvements.push(
      "Keep final -s clear on plurals and third-person verbs (“books”, “he works”). Bangla speakers often drop final consonants.",
    );
  }
  pronunciation.improvements.push(
    "Mark the stressed word in each sentence, then repeat. Stress carries meaning more than individual sounds.",
  );
  pronunciation.drills.push(
    "Record 60 seconds of your answer and listen only for word endings and sentence stress.",
  );
  pronunciation.strengths.push(
    "Your transcript is readable, which means your grammar and vocabulary are not blocking understanding.",
  );

  /* --------------------------- Development ------------------------------- */
  const development: CriterionFeedback = {
    id: "development",
    label: "Idea Development",
    verdict: "steady",
    strengths: [],
    problems: [],
    improvements: [],
    drills: [],
  };
  const hasReason = /\b(because|since|the reason|that's why|so that)\b/i.test(lower);
  const hasExample = /\b(for example|for instance|once|one time|last (year|month|week)|when i was)\b/i.test(lower);
  const hasFeeling = /\b(i felt|it felt|i was (really )?(happy|nervous|excited|relaxed|surprised|tired)|enjoyed)\b/i.test(lower);
  const hasResult = /\b(in the end|as a result|so now|after that|which is why|these days)\b/i.test(lower);

  if (hasReason) development.strengths.push("You explained a reason — the single most important development move.");
  else {
    development.problems.push("No clear reason appeared in the answer.");
    development.improvements.push("After your first sentence, add “because …”. It takes two seconds and doubles your content.");
  }
  if (hasExample) development.strengths.push("You supported the answer with a specific example.");
  else development.improvements.push("Add one concrete detail: a time, a place, a person or a number.");

  if (hasFeeling) development.strengths.push("You included feelings, which makes the answer sound personal instead of memorised.");
  else development.improvements.push(
    input.part === 1 ? "Add one feeling word (“I find it relaxing…”)." : "Add how you felt about it — examiners hear authenticity in feelings.",
  );

  if (hasResult && input.part !== 1) development.strengths.push("You closed the idea with a result or outcome.");
  else if (input.part !== 1) development.improvements.push("Finish with a result: “that’s why I still …” — it gives your story a shape.");

  development.drills.push(
    input.part === 3
      ? "Answer again with the structure: opinion → reason → example → qualification."
      : "Answer again with: answer → reason → detail → feeling.",
  );
  development.verdict = bandVerdict(
    [hasReason, hasExample, hasFeeling, hasResult].filter(Boolean).length,
    3,
    2,
  );

  /* ----------------------------- Next practice --------------------------- */
  const priority = [fluency, vocabulary, grammar, development].sort(
    (a, b) => verdictScore(a.verdict) - verdictScore(b.verdict),
  );
  const nextPractice = [
    `Redo this same question and fix: ${priority[0]?.improvements[0] ?? "add one more developing sentence."}`,
    priority[1]?.drills[0] ?? "Record a 60-second answer and re-listen for repeated words.",
    detected[0] ? `Then review the mistake “${detected[0].wrong}” in the mistake library before your next session.` : "Then move to the next question type in Part 3 practice.",
  ];

  const result: EvaluationResult = {
    method: "rules",
    disclaimer:
      "This feedback analyses your transcript and timing, not your voice. It cannot award an IELTS band — no tool can guarantee a band score. Use it to find specific habits to fix.",
    metrics: {
      words: wordCount,
      sentences: sentenceList.length,
      wordsPerMinute: wpm,
      secondsSpoken: seconds,
      uniqueContentWords: uniqueContent.length,
      typeTokenRatio: Math.round(typeTokenRatio * 100) / 100,
      fillerCount,
      connectorCount,
      complexSentenceRatio: Math.round(complexRatio * 100) / 100,
    },
    criteria: [fluency, vocabulary, grammar, pronunciation, development],
    detectedMistakes: detected.map((mistake) => ({
      id: mistake.id,
      wrong: mistake.wrong,
      right: mistake.right,
      why: mistake.why,
    })),
    nextPractice,
  };

  return result;
}

function verdictScore(verdict: CriterionFeedback["verdict"]): number {
  return verdict === "priority" ? 0 : verdict === "steady" ? 1 : 2;
}
