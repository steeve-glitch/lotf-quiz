import { CharacterArcPoint } from "@/content/types";
import { CHARACTER_MAP } from "@/content/characters";

export function CharacterArcTracker({ updates }: { updates: CharacterArcPoint[] }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-[10px] uppercase tracking-wide text-[var(--color-muted)] font-semibold px-1">
        <span>Savagery</span>
        <span>Civilization</span>
      </div>
      {updates.map((u) => {
        const info = CHARACTER_MAP[u.character];
        const pct = ((u.position + 100) / 200) * 100;
        return (
          <div key={u.character} className="rounded-lg border border-[var(--color-border)] bg-white p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm">{info.name}</span>
            </div>
            <div className="relative h-2 rounded-full bg-neutral-200">
              <div
                className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border-2 border-white shadow"
                style={{ left: `calc(${pct}% - 7px)`, background: "var(--color-part1-accent)" }}
              />
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-2">{u.note}</p>
          </div>
        );
      })}
    </div>
  );
}
