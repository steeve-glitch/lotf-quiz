import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { getChatbotResponse, type ChatMessage } from "@/lib/ai/llm-service";
import { CHAPTER_MAP } from "@/content/chapters";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  unitId: z.string(),
  messages: z.array(
    z.object({
      sender: z.enum(["user", "ai"]),
      text: z.string().min(1).max(2000),
    }),
  ).max(30),
});

// Context is built server-side from the unitId, never taken from the client —
// this keeps the tutoring behavior (no spoilers, grounded in the right
// chapter) consistent regardless of what the client sends.
function buildContext(unitId: string): string {
  if (unitId === "pre-reading") {
    return "The student is on the pre-reading hub, before starting Chapter 1. They have not read any of the novel yet — only background on William Golding and the novel's context.";
  }
  const chapter = CHAPTER_MAP[unitId];
  if (!chapter) {
    return `The student is working on unit "${unitId}".`;
  }
  return `The student is on Chapter ${chapter.number}: "${chapter.title}". Summary of what they've read so far in this chapter: ${chapter.summary}`;
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 422 });
  }

  const context = buildContext(parsed.data.unitId);

  try {
    const response = await getChatbotResponse(context, parsed.data.messages as ChatMessage[]);
    return NextResponse.json({ response });
  } catch (err) {
    console.error("[api/chat] error:", err);
    return NextResponse.json({ error: "The AI service is unavailable right now." }, { status: 502 });
  }
}
