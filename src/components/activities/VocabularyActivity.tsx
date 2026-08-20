import { VocabTerm } from "@/content/types";

export function VocabularyActivity({ terms }: { terms: VocabTerm[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {terms.map((t) => (
        <div key={t.word} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
          <span className="font-display text-lg">{t.word}</span>
          <p className="text-base mt-1">{t.definition}</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">{t.context}</p>
        </div>
      ))}
    </div>
  );
}
