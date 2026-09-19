/**
 * Optional AI evaluation provider.
 *
 * Design rules:
 *  - Never required. If no key is configured the rule engine answers instead.
 *  - Never returns a single mystifying band score; it must return the same
 *    structured Strengths / Problems / How to improve shape as the rule engine.
 *  - Output is validated with zod before it reaches the learner, so a
 *    hallucinated or malformed model response cannot break the UI.
 */
import { z } from "zod";
import type { EvaluationResult } from "./evaluate";

const CriterionSchema = z.object({
  id: z.enum(["fluency", "vocabulary", "grammar", "pronunciation", "development"]),
  label: z.string().min(2).max(60),
  verdict: z.enum(["strength", "steady", "priority"]),
  strengths: z.array(z.string().min(3).max(400)).max(6).default([]),
  problems: z.array(z.string().min(3).max(400)).max(6).default([]),
  improvements: z.array(z.string().min(3).max(400)).max(6).default([]),
  drills: z.array(z.string().min(3).max(400)).max(4).default([]),
});

const AiResponseSchema = z.object({
  criteria: z.array(CriterionSchema).min(4).max(5),
  nextPractice: z.array(z.string().min(3).max(300)).min(1).max(4),
});

const SYSTEM_PROMPT = `You are an IELTS Speaking teacher for Bangladeshi learners targeting Band 6.0-6.5.
You will receive a written transcript of a learner's spoken answer plus timing.
Rules:
- Never state a band score. Never claim the answer "guarantees" a band.
- Be specific: quote the learner's own words when pointing out a problem.
- Prefer natural, achievable English over flashy vocabulary.
- Explain problems in the learner's language level: simple, direct English.
- For pronunciation, only give guidance that can be self-checked (word endings, stress), because you cannot hear the audio.
Return ONLY JSON in this shape:
{"criteria":[{"id":"fluency|vocabulary|grammar|pronunciation|development","label":"...","verdict":"strength|steady|priority","strengths":["..."],"problems":["..."],"improvements":["..."],"drills":["..."]}],"nextPractice":["...","...","..."]}`;

interface AiInput {
  transcript: string;
  secondsSpoken: number;
  part: 1 | 2 | 3;
  question?: string;
}

export async function requestAiEvaluation(
  input: AiInput,
): Promise<Omit<EvaluationResult, "method" | "metrics" | "detectedMistakes" | "disclaimer"> | null> {
  const provider = process.env.AI_PROVIDER?.trim();
  const apiKey = process.env.AI_API_KEY?.trim();
  if (!provider || !apiKey) return null;

  const userPrompt = [
    `Part: ${input.part}`,
    input.question ? `Question: ${input.question}` : "",
    `Speaking time: ${input.secondsSpoken} seconds`,
    `Transcript:\n${input.transcript}`,
  ]
    .filter(Boolean)
    .join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const response = await fetch(
      provider === "anthropic"
        ? "https://api.anthropic.com/v1/messages"
        : "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        signal: controller.signal,
        headers:
          provider === "anthropic"
            ? {
                "content-type": "application/json",
                "x-api-key": apiKey,
                "anthropic-version": "2023-06-01",
              }
            : {
                "content-type": "application/json",
                authorization: `Bearer ${apiKey}`,
              },
        body:
          provider === "anthropic"
            ? JSON.stringify({
                model: process.env.AI_MODEL ?? "claude-3-5-haiku-latest",
                max_tokens: 1400,
                system: SYSTEM_PROMPT,
                messages: [{ role: "user", content: userPrompt }],
              })
            : JSON.stringify({
                model: process.env.AI_MODEL ?? "gpt-4o-mini",
                response_format: { type: "json_object" },
                messages: [
                  { role: "system", content: SYSTEM_PROMPT },
                  { role: "user", content: userPrompt },
                ],
              }),
      },
    );

    if (!response.ok) return null;
    const data = (await response.json()) as Record<string, unknown>;
    const text =
      provider === "anthropic"
        ? ((data.content as { text?: string }[] | undefined)?.[0]?.text ?? "")
        : ((data.choices as { message?: { content?: string } }[] | undefined)?.[0]?.message
            ?.content ?? "");

    const json = JSON.parse(extractJson(text)) as unknown;
    const parsed = AiResponseSchema.parse(json);
    return { criteria: parsed.criteria, nextPractice: parsed.nextPractice };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function extractJson(text: string): string {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("no json");
  return text.slice(start, end + 1);
}
