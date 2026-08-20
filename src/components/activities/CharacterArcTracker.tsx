import { CharacterArcPoint } from "@/content/types";
import { CHARACTER_MAP } from "@/content/characters";

const SAVAGE_RED: [number, number, number] = [178, 50, 30];
const NEUTRAL: [number, number, number] = [139, 133, 119]; // matches --color-muted — reads as genuinely neutral, not a third competing hue
const CIVIL_GREEN: [number, number, number] = [27, 122, 107];

// Savagery (-100) → red, Civilization (+100) → green, through a desaturated
// neutral at 0 rather than a saturated amber — red-to-amber-to-green muddies
// into brown in the middle and never reads as clearly "predominantly" either
// color. Going through grey keeps both poles vivid and makes the badge/dot
// only look colored once a character has actually moved toward an extreme.
function colorForPosition(position: number): string {
  const t = (position + 100) / 200; // 0 = savagery, 1 = civilization
  const [t0, c0, t1, c1]: [number, [number, number, number], number, [number, number, number]] =
    t <= 0.5 ? [0, SAVAGE_RED, 0.5, NEUTRAL] : [0.5, NEUTRAL, 1, CIVIL_GREEN];
  const localT = (t - t0) / (t1 - t0);
  const rgb = c0.map((v, i) => Math.round(v + (c1[i] - v) * localT));
  return `rgb(${rgb.join(",")})`;
}

export function CharacterArcTracker({ updates }: { updates: CharacterArcPoint[] }) {
  return (
    <div className="space-y-4">
      {updates.map((u) => {
        const info = CHARACTER_MAP[u.character];
        const pct = ((u.position + 100) / 200) * 100;
        const color = colorForPosition(u.position);
        return (
          <div
            key={u.character}
            className="rounded-lg border border-[var(--color-border)] bg-white p-3.5 border-l-[6px]"
            style={{ borderLeftColor: color }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-display text-base">{info.name}</span>
              <span
                className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                style={{ background: color }}
              >
                {u.position <= -34 ? "Savage" : u.position >= 34 ? "Civilized" : "In between"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b2321e] shrink-0">
                Savagery
              </span>
              <div
                className="relative h-2.5 rounded-full flex-1"
                style={{ background: "linear-gradient(90deg, #b2321e 0%, #8b8577 50%, #1b7a6b 100%)" }}
              >
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-white shadow-md"
                  style={{ left: `calc(${pct}% - 8px)`, background: color }}
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1b7a6b] shrink-0">
                Civilization
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-2.5">{u.note}</p>
          </div>
        );
      })}
    </div>
  );
}
