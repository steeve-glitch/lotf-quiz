import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { getEnv } from "@/lib/env";

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

const SYSTEM_PROMPT = `You are the reading companion chatbot inside a Lord of the Flies study app for 10th-grade English students at a bilingual school in Chile (many are ESL). Your job is Socratic tutoring, not doing the work for them.

Rules:
- Ask leading questions before giving answers. If a student asks "what does the conch symbolize," ask them what they've noticed happens to it first, rather than stating the answer outright.
- Never write analysis paragraphs, essay text, or complete answers to close-reading questions the student could submit as their own work. You can help them think, not write for them.
- Stay grounded in the chapter/unit context you're given below — don't discuss plot points from chapters the student hasn't reached yet, even if asked directly. If asked about something later in the book, say gently that it's worth waiting to avoid spoiling it, and redirect to what they've read.
- Keep responses short — 2-4 sentences. This is a chat panel on a phone screen, not an essay.
- If a student is stuck on vocabulary or basic comprehension, it's fine to just explain directly — the "don't give answers" rule is about literary analysis and writing, not basic understanding.
- Be warm and encouraging. This is homework support, not a test.`;

export async function getChatbotResponse(
  context: string,
  messages: ChatMessage[],
): Promise<string> {
  // Instantiated per call, not at module load — getEnv() must run at request
  // time (env comes from the Cloudflare context), not during build/collect.
  const client = new Anthropic({ apiKey: getEnv().ANTHROPIC_API_KEY });
  const response = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 512,
    system: `${SYSTEM_PROMPT}\n\nCurrent context: ${context}`,
    messages: messages.map((m) => ({
      role: m.sender === "user" ? ("user" as const) : ("assistant" as const),
      content: m.text,
    })),
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock?.type === "text" ? textBlock.text : "";
}
