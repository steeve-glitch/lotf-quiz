import { SymbolStatus } from "@/content/types";
import { SYMBOL_MAP } from "@/content/symbols";

export function SymbolTracker({ updates }: { updates: SymbolStatus[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {updates.map((u) => {
        const info = SYMBOL_MAP[u.symbol];
        return (
          <div key={u.symbol} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {info.name}
            </p>
            <p className="font-display text-lg mt-1" style={{ color: "var(--color-part1-accent)" }}>
              {u.status}
            </p>
            <p className="text-base text-[var(--color-ink)] mt-2">{u.note}</p>
          </div>
        );
      })}
    </div>
  );
}
