import { CharacterArcPoint } from "@/content/types";
import { CHARACTER_MAP } from "@/content/characters";

// Savagery (-100) → red, Civilization (+100) → green. Interpolated linearly
// through a muted amber midpoint so 0 doesn't read as a flat, meaningless grey.
function colorForPosition(position: number): string {
  const t = (position + 100) / 200; // 0 = savagery, 1 = civilization
  const stops: [number, [number, number, number]][] = [
    [0, [178, 50, 30]], // savagery red
    [0.5, [201, 105, 31]], // amber midpoint
    [1, [27, 122, 107]], // civilization green
  ];
  let [t0, c0] = stops[0];
  let [t1, c1] = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (t >= stops[i][0] && t <= stops[i + 1][0]) {
      [t0, c0] = stops[i];
      [t1, c1] = stops[i + 1];
      break;
    }
  }
  const span = t1 - t0 || 1;
  const localT = (t - t0) / span;
  const rgb = c0.map((v, i) => Math.round(v + (c1[i] - v) * localT));
  return `rgb(${rgb.join(",")})`;
}

export function CharacterArcTracker({ updates }: { updates: CharacterArcPoint[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-bold text-[#b2321e]">
          <span className="h-2 w-2 rounded-full bg-[#b2321e]" /> Savagery
        </span>
        <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-bold text-[#1b7a6b]">
          Civilization <span className="h-2 w-2 rounded-full bg-[#1b7a6b]" />
        </span>
      </div>
      {updates.map((u) => {
        const info = CHARACTER_MAP[u.character];
        const pct = ((u.position + 100) / 200) * 100;
        const color = colorForPosition(u.position);
        return (
          <div key={u.character} className="rounded-lg border border-[var(--color-border)] bg-white p-3.5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-display text-base">{info.name}</span>
              <span
                className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                style={{ background: color }}
              >
                {u.position <= -34 ? "Savage" : u.position >= 34 ? "Civilized" : "In between"}
              </span>
            </div>
            <div
              className="relative h-2.5 rounded-full"
              style={{
                background: "linear-gradient(90deg, #b2321e 0%, #c9691f 50%, #1b7a6b 100%)",
              }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white shadow-md"
                style={{ left: `calc(${pct}% - 8px)`, background: color }}
              />
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-2.5">{u.note}</p>
          </div>
        );
      })}
    </div>
  );
}
