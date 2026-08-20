import { CharacterInfo } from "./types";

export const CHARACTERS: CharacterInfo[] = [
  {
    id: "ralph",
    name: "Ralph",
    description:
      "Elected leader, holder of the conch. Believes in rules, the fire, and rescue — and watches, chapter by chapter, how little that belief is worth to a frightened group of boys.",
  },
  {
    id: "jack",
    name: "Jack Merridew",
    description:
      "Head boy of the choir, obsessed first with hunting and then with power. Offers the group meat, face paint, and the release of not having to behave — and they take it.",
  },
  {
    id: "piggy",
    name: "Piggy",
    description:
      "Asthmatic, overweight, the only one who thinks like an adult. Never trusted by the group despite (or because of) always being right. His glasses are the only way to make fire.",
  },
  {
    id: "simon",
    name: "Simon",
    description:
      "Quiet, prone to fainting, and the only boy who understands what the beast actually is before anyone else does. Golding's clearest Christ-figure — and treated accordingly.",
  },
  {
    id: "roger",
    name: "Roger",
    description:
      "Says almost nothing for the first half of the book. What he becomes once there is no one left to stop him is the novel's clearest answer to \"what is human nature, really.\"",
  },
];

export const CHARACTER_MAP: Record<string, CharacterInfo> = Object.fromEntries(
  CHARACTERS.map((c) => [c.id, c]),
);
