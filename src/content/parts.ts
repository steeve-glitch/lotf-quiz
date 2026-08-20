import { Part, Checkpoint } from "./types";

export const PARTS: Part[] = [
  {
    id: 1,
    title: "Part One: Order",
    subtitle: "The election, the rules, the fire — and the first cracks",
    chapterIds: ["ch-01", "ch-02", "ch-03", "ch-04"],
  },
  {
    id: 2,
    title: "Part Two: Fracture",
    subtitle: "The beast, the hunt, and what happens on the mountain",
    chapterIds: ["ch-05", "ch-06", "ch-07", "ch-08", "ch-09"],
  },
  {
    id: 3,
    title: "Part Three: Collapse",
    subtitle: "Piggy, the manhunt, and the officer on the beach",
    chapterIds: ["ch-10", "ch-11", "ch-12"],
  },
];

export const CHECKPOINTS: Checkpoint[] = [
  {
    id: "checkpoint-1",
    afterPart: 1,
    title: "Descent Checkpoint I",
    intro:
      "Before you move into Part Two, take stock of Part One. This isn't new content — it's about what you noticed across four chapters, not any single one.",
    questions: [
      {
        question:
          "By the end of Chapter 4, what has actually happened to the signal fire — and what does that tell you about the group's priorities?",
        options: [
          {
            text: "It went out because Jack's hunters left their post to hunt a pig — the group is already choosing meat over rescue.",
            isCorrect: true,
            feedback:
              "Right. And it costs them: a ship passes while the fire is unattended. This is the first time the island's stakes become real and irreversible.",
          },
          {
            text: "It went out because it rained, which nobody could have prevented.",
            isCorrect: false,
            feedback:
              "Re-read the end of Chapter 4 — the fire dies because the boys assigned to it abandoned it to join the hunt. That's a choice, not weather.",
          },
          {
            text: "It's still burning strong — the real problem in Part One is food.",
            isCorrect: false,
            feedback:
              "The fire is very much not fine by the end of Chapter 4 — that's the chapter's central event.",
          },
        ],
      },
      {
        question:
          "Which best describes the shift in Jack across Part One?",
        options: [
          {
            text: "From a boy who can't bring himself to kill a pig, to a boy organizing hunts and painting his face to do it.",
            isCorrect: true,
            feedback:
              "Exactly — Chapter 1's hesitation and Chapter 4's mask are the same arc. The face paint matters: it's not just camouflage, it's permission.",
          },
          {
            text: "He starts as the group's most violent member and stays that way throughout.",
            isCorrect: false,
            feedback:
              "Look again at Chapter 1 — Jack actually freezes and can't kill the first pig they find. The change across Part One is the point.",
          },
          {
            text: "He becomes more interested in rescue as the chapters go on.",
            isCorrect: false,
            feedback: "The opposite is closer to true — his interest visibly shifts toward hunting, not rescue.",
          },
        ],
      },
    ],
  },
  {
    id: "checkpoint-2",
    afterPart: 2,
    title: "Descent Checkpoint II",
    intro:
      "Part Two ends with the novel's turning point. Before Part Three, make sure you can say clearly what happened on the mountain and the beach — and why.",
    questions: [
      {
        question: "What does Simon discover about the beast that no one else figures out?",
        options: [
          {
            text: "That the \"beast\" the littluns fear is a dead parachutist, and the real beast is something inside the boys themselves.",
            isCorrect: true,
            feedback:
              "Yes — and he's killed trying to tell them, in the middle of a ritual that has already stopped needing a real beast to justify itself.",
          },
          {
            text: "That the beast is Jack in disguise, trying to scare the littluns.",
            isCorrect: false,
            feedback: "Not what the text supports — go back to the mountain scene in Chapter 9.",
          },
          {
            text: "That there is no beast at all and everyone is imagining it.",
            isCorrect: false,
            feedback:
              "Partly right, but incomplete — there is a literal dead body on the mountain, which is what starts the rumor. Simon's real discovery is what he says about fear itself.",
          },
        ],
      },
    ],
  },
];
