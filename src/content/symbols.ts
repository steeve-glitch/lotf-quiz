import { SymbolInfo } from "./types";

export const SYMBOLS: SymbolInfo[] = [
  {
    id: "conch",
    name: "The Conch Shell",
    description:
      "Found by Ralph and Piggy on the beach in Chapter 1. Whoever holds it has the right to speak — a rule the boys invent because they still believe rules matter. Track what happens to that belief.",
  },
  {
    id: "fire",
    name: "The Signal Fire",
    description:
      "Their only real chance of rescue, and the clearest measure of how seriously the group still takes survival over the immediate pleasure of hunting, eating, and not working.",
  },
  {
    id: "glasses",
    name: "Piggy's Glasses",
    description:
      "The only way to light a fire on the island. Sight, technology, and reason concentrated in one fragile, replaceable-by-no-one object.",
  },
  {
    id: "beast",
    name: "The Beast",
    description:
      "What the littluns fear from the very first assembly — and what it turns out to actually be is the novel's central twist. Track how the \"beast\" changes from rumor to corpse to pig's head to something Simon realizes is inside all of them.",
  },
];

export const SYMBOL_MAP: Record<string, SymbolInfo> = Object.fromEntries(
  SYMBOLS.map((s) => [s.id, s]),
);
