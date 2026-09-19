import { NextResponse } from "next/server";
import { z } from "zod";
import { evaluateAnswer, type EvaluationResult } from "@/lib/practice/evaluate";
import { requestAiEvaluation } from "@/lib/practice/ai-provider";

export const runtime = "nodejs";

const BodySchema = z.object({
  transcript: z
    .string()
    .min(10, "Write or paste at least one sentence so the feedback has something to analyse.")
    .max(6000, "Transcript is too long — keep it to one answer."),
  secondsSpoken: z.number().min(3).max(600),
  part: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  question: z.string().max(400).optional(),
});

/**
 * Naive in-memory rate limit. Sufficient for a single-instance deployment and
 * deliberately simple: replace with Redis/Upstash when the app is scaled out.
 */
const hits = new Map<string, { count: number; resetAt: number }>();
const LIMIT = Number(process.env.EVALUATE_RATE_LIMIT ?? 12);
const WINDOW_MS = 60_000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (hits.size > 5000) hits.clear(); // memory guard
  return entry.count > LIMIT;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "local";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "You are evaluating very fast. Take a breath and try again in a minute." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = BodySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid request." },
      { status: 400 },
    );
  }

  const input = parsed.data;

  // Optional LLM path — falls back to the rule engine if unconfigured or failing.
  // Metrics, detected mistakes and the disclaimer always come from the local
  // engine, so the AI path can only replace the *judgement*, never the facts.
  const localResult = evaluateAnswer(input);
  const ai = await requestAiEvaluation(input).catch(() => null);
  const result: EvaluationResult =
    ai && ai.criteria.length >= 4
      ? {
          ...localResult,
          method: "ai",
          criteria: ai.criteria,
          nextPractice: ai.nextPractice,
        }
      : localResult;

  return NextResponse.json(result, {
    headers: { "cache-control": "no-store" },
  });
}
