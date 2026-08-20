"use client";

import { useEffect, useRef, useState } from "react";
import { useChatbot } from "./ChatbotContext";
import { SavageIcon } from "./SavageIcon";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

export function Chatbot() {
  const { isOpen, toggleChat, unitId } = useChatbot();

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        style={{ background: "var(--color-part1-accent)" }}
        aria-label={isOpen ? "Close reading companion" : "Open reading companion"}
      >
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "var(--color-part1-accent)", opacity: 0.6 }}
          />
        )}
        <span className="relative">{isOpen ? <span className="text-white text-xl">✕</span> : <SavageIcon />}</span>
      </button>

      {/* Keyed by unitId so moving to a new chapter/checkpoint remounts the
          panel with fresh state, instead of an effect resetting it — the
          conversation never carries context (or spoiler risk) from a unit
          the student has moved past. */}
      {isOpen && <ChatPanel key={unitId} unitId={unitId} />}
    </>
  );
}

function ChatPanel({ unitId }: { unitId: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { sender: "user" as const, text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId, messages: next }),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as { response: string };
      setMessages((m) => [...m, { sender: "ai", text: data.response }]);
    } catch {
      setError("Sorry, the companion couldn't respond right now. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-24 right-5 z-40 w-[92vw] max-w-sm h-[65vh] rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] shadow-2xl flex flex-col overflow-hidden">
      <div className="px-4 py-3 text-white text-sm font-semibold" style={{ background: "var(--color-part1-accent)" }}>
        Reading Companion
        <div className="text-xs font-normal opacity-80">Ask me about what you&apos;ve read so far</div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <p className="text-sm text-[var(--color-muted)]">
            Stuck on something in this chapter? Ask me — I won&apos;t just hand you the answer, but I&apos;ll help you think it through.
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm rounded-xl px-3 py-2 max-w-[85%] ${
              m.sender === "user"
                ? "ml-auto bg-[var(--color-part1-accent-soft)] text-[var(--color-part1-ink)]"
                : "bg-white border border-[var(--color-border)]"
            }`}
          >
            {m.text}
          </div>
        ))}
        {loading && <p className="text-xs text-[var(--color-muted)]">Thinking…</p>}
        {error && <p className="text-xs text-red-600">{error}</p>}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-[var(--color-border)] p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question…"
          className="flex-1 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2"
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
          style={{ background: "var(--color-part1-accent)" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
