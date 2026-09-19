import { NextResponse } from "next/server";
import { search } from "@/lib/search/engine";
import { getSearchIndex } from "@/lib/search";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim() ?? "";

  if (query.length < 2) {
    return NextResponse.json({ query, results: [], hint: "Type at least 2 characters." });
  }
  if (query.length > 120) {
    return NextResponse.json(
      { query, results: [], hint: "Query too long — try fewer words." },
      { status: 400 },
    );
  }

  const results = search(getSearchIndex(), query, 30).map((result) => ({
    id: result.id,
    kind: result.kind,
    title: result.title,
    subtitle: result.subtitle,
    href: result.href,
    snippet: result.snippet,
    part: result.part,
  }));

  return NextResponse.json({ query, count: results.length, results });
}
