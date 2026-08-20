import { Chapter } from "../types";

export const CH_10: Chapter = {
  id: "ch-10",
  number: 10,
  title: "The Shell and the Glasses",
  part: 3,
  summary:
    "Ralph and Piggy, badly shaken, try to make sense of what happened at Castle Rock. Ralph says it plainly, once, to Piggy: \"That was murder.\" Piggy, panicking, insists over and over that it was an accident, that it doesn't count the same way for them, that they need to just forget it. Only a handful remain in Ralph's camp now: Piggy, Sam and Eric, and the littluns. That night, Jack's tribe — now fully organized around fear and loyalty to Jack as something closer to a tyrant than a chief — raids the diminished camp in the dark. It isn't food or weapons they're after. They come for one specific thing: Piggy's glasses, the only tool left on the island that can start a fire. In the chaos of the raid, Piggy is hit again. By morning, what's left of Ralph's group realizes the glasses are gone — and with them, any way to light a fire at all.",
  quote: {
    text: "It was an accident, and that's that.",
    context:
      "Piggy, insisting to Ralph, more than once, in the raw aftermath of Castle Rock. He needs it to be true more than he actually believes it.",
  },
  vocabulary: [
    { word: "complicity", definition: "The state of being involved with others in an activity that is unlawful or morally wrong.", context: "What Ralph and Piggy are quietly avoiding naming when Piggy insists, again and again, that it was only an accident." },
    { word: "surreptitious", definition: "Kept secret, especially because it would not be approved of; done stealthily.", context: "How the raid on Ralph's camp is carried out — a deliberate night attack, not an open confrontation." },
    { word: "gnawing", definition: "Persistently painful or worrying (often describing guilt, doubt, or hunger).", context: "The kind of guilt Ralph and Piggy are each trying, and failing, to talk themselves out of feeling." },
    { word: "callous", definition: "Showing or having an insensitivity to the feelings of others.", context: "How Jack's tribe behaves during the raid — taking exactly what they need and leaving Piggy hurt without a second thought." },
  ],
  closeReading: [
    {
      passage:
        "Ralph says it once, plainly: \"That was murder.\" Piggy panics, and instead insists — three separate times — that it was an accident, that Simon \"asked for it\" by crawling out of the dark, and that they need to just forget it.",
      question: "What does this rationalizing reveal about how people cope with having taken part in something they can't fully justify?",
      options: [
        {
          text: "It shows that admitting full responsibility can feel unbearable, so people construct a smaller, more survivable version of events — even when, as the chapter itself makes clear, that version isn't quite true.",
          isCorrect: true,
          feedback:
            "Exactly. Golding doesn't let the reader believe Ralph and Piggy's version either — the previous chapter showed them in the circle. This is a very human, very understandable form of self-protection, and Golding doesn't pretend it's the same as innocence.",
        },
        {
          text: "It shows that Ralph and Piggy genuinely weren't involved and are correct to feel innocent.",
          isCorrect: false,
          feedback: "Re-read the end of the previous chapter — both of them were in the circle when it happened. This is denial, not an accurate account.",
        },
        {
          text: "It's simply a way of moving the plot forward with no deeper significance.",
          isCorrect: false,
          feedback: "This moment is doing real psychological work — it's showing exactly how ordinary people live with having done something terrible.",
        },
      ],
      insight:
        "Golding never has anyone in the book state outright, \"Ralph and Piggy killed Simon.\" But he never lets the reader forget it either. The gap between what's said and what happened is the whole point of this scene.",
    },
    {
      passage:
        "Jack's tribe raids Ralph's camp at night specifically for Piggy's glasses — not food, not weapons, not the conch.",
      question: "What does the choice of what to steal reveal about what Jack's tribe actually needs and values?",
      options: [
        {
          text: "It shows that even a tribe that has rejected reason and order still depends completely on one practical tool that reason built — they can hunt and posture, but they still need fire, and they're willing to take it by force rather than solve the problem themselves.",
          isCorrect: true,
          feedback:
            "Right. This is a quietly damning detail — Jack's tribe hasn't actually escaped needing what civilization provides. They've just decided to take it violently instead of earning or making it themselves.",
        },
        {
          text: "It shows that Jack's tribe wanted to hurt Piggy specifically and the glasses were incidental.",
          isCorrect: false,
          feedback: "The glasses themselves — their function, not just their owner — are clearly the target here. Piggy being hurt is a consequence of the raid, not its stated purpose.",
        },
        {
          text: "It's a random detail with no larger significance.",
          isCorrect: false,
          feedback: "Of all the things they could have taken, this specific choice says a great deal about what Jack's tribe still can't provide for itself.",
        },
      ],
      insight:
        "Notice the irony: the raid is proof that Jack's \"savagery\" was never a full rejection of civilization's tools — only of its rules.",
    },
  ],
  symbolUpdates: [
    { symbol: "glasses", status: "Stolen in a violent night raid", note: "Ralph's group has no way to make fire anymore. The one working tool of reason left on the island is gone." },
    { symbol: "fire", status: "Impossible without the glasses", note: "What's left of Ralph's group is now completely unable to light a signal fire." },
    { symbol: "conch", status: "Still held, meaning less by the day", note: "Ralph's group is down to a handful of boys — the conch survives, but its authority barely extends past them." },
  ],
  characterUpdates: [
    { character: "ralph", position: 25, note: "Shaken and guilt-ridden, trying to rationalize his own role in what happened at Castle Rock." },
    { character: "jack", position: -75, note: "Rules his tribe now through fear and force — the raid is his decision, carried out on his authority alone." },
    { character: "piggy", position: 20, note: "Physically hurt again in the raid, and quietly avoiding the full truth of the night before, same as Ralph." },
    { character: "roger", position: -85, note: "Fully complicit in the raid — whatever restraint he had in Chapter 4 is long gone." },
  ],
  reflection: {
    question:
      "Ralph and Piggy tell themselves a smaller, easier version of what happened rather than face it directly. Do you think that kind of self-protection is understandable, or does it matter that it isn't quite honest?",
    samples: [
      "I think it's very human — I don't think anyone could fully sit with something like that immediately, so some denial might just be how people survive it.",
      "I think it still matters, even if it's understandable — the story doesn't let them off the hook just because they've found a way to feel better about it.",
    ],
  },
  trivia: [
    {
      question: "What item does Jack steal from Ralph's tribe during the night?",
      options: ["The conch", "Piggy's glasses", "Their spears", "The fire logs"],
      correctAnswer: 1,
      category: "Fire & Rescue",
      difficulty: "medium",
    },
    {
      question: "What event directly leads to the permanent loss of Piggy's glasses, essential for lighting the fire?",
      options: ["A coordinated attack on Ralph's group", "Piggy drops them in the lagoon", "Jack trades them for meat", "A storm sweeps them away"],
      correctAnswer: 0,
      category: "Fire & Rescue",
      difficulty: "hard",
    },
  ],
};
