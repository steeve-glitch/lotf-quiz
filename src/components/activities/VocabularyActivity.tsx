"use client";

import { useState } from "react";
import { VocabTerm } from "@/content/types";

export function VocabularyActivity({ terms }: { terms: VocabTerm[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {terms.map((t) => (
        <TermCard key={t.word} term={t} />
      ))}
    </div>
  );
}

function TermCard({ term }: { term: VocabTerm }) {
  const [showGloss, setShowGloss] = useState(false);
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg">{term.word}</span>
        <button
          onClick={() => setShowGloss((v) => !v)}
          className="text-xs font-semibold underline"
          style={{ color: "var(--color-part1-accent)" }}
        >
          {showGloss ? "hide" : "en español"}
        </button>
      </div>
      <p className="text-sm mt-1">{term.definition}</p>
      {showGloss && (
        <p className="text-sm mt-1 italic text-[var(--color-part1-accent)]">{term.spanishGloss}</p>
      )}
      <p className="text-xs text-[var(--color-muted)] mt-2">{term.context}</p>
    </div>
  );
}
