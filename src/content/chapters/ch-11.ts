import { Chapter } from "../types";

export const CH_11: Chapter = {
  id: "ch-11",
  number: 11,
  title: "Castle Rock",
  part: 3,
  summary:
    "What's left of Ralph's group — Ralph, Piggy, Sam, and Eric — decide there's no choice left but to go to Castle Rock themselves and demand the glasses back. Piggy, even now, insists on bringing the conch, still believing, almost alone, that it means something. At Castle Rock, Jack's tribe is openly hostile from the moment they arrive. Sam and Eric are seized and forced into the tribe against their will. Jack and Ralph fight directly. Then, from above, Roger — positioned at a lever built into the rock — deliberately dislodges a massive boulder. It crushes Piggy instantly, and the conch, still in his hands, shatters into pieces in the same instant. Ralph, alone now, flees into the forest as what remains of the tribe — including Sam and Eric, forced along with them — begins hunting him with sharpened spears, no longer as a former friend, but as prey.",
  quote: {
    text: "Which is better — to have rules and agree, or to hunt and kill?",
    context:
      "Piggy, shouting over the tribe's jeering, moments before Roger releases the boulder — still trying, to the very end, to win the argument with reason rather than force.",
  },
  vocabulary: [
    { word: "precarious", definition: "Not securely held or in position; dangerously likely to fall or collapse.", context: "Both the physical position of the group at Castle Rock's edge, and the state of whatever's left of the old order." },
    { word: "obstinate", definition: "Stubbornly refusing to change one's opinion or course of action.", context: "Piggy, bringing the conch to Castle Rock even now — his last act of faith in a system almost no one else believes in anymore." },
    { word: "relentless", definition: "Oppressively constant; not stopping or yielding.", context: "The word that describes the tribe's pursuit of Ralph once the hunt for him begins." },
    { word: "savage", definition: "(as used deliberately by Golding) Uncivilized; wild; without the restraints of the group Ralph tried to build.", context: "The word Ralph used of the whole group back in Chapter 10 — worth sitting with here, at the moment the word stops being an accusation and becomes a simple description." },
  ],
  closeReading: [
    {
      passage:
        "Piggy insists on bringing the conch to Castle Rock, even though almost no one there has respected it in chapters — and dies still holding it, still trying to reason with the tribe.",
      question: "What does Piggy's insistence on bringing the conch, even now, reveal about his character?",
      options: [
        {
          text: "It shows a kind of tragic, unwavering faith — Piggy has staked everything on the idea that reason and rules matter, and he holds to that even in a situation where it's clearly no longer protecting him.",
          isCorrect: true,
          feedback:
            "Exactly. This is Piggy at his most fully realized — not naive, exactly, but committed to a set of values so completely that he can't abandon them even when abandoning them might be the only thing that could save him.",
        },
        {
          text: "It shows that Piggy doesn't understand how dangerous the situation has become.",
          isCorrect: false,
          feedback: "Piggy is shown as clear-eyed about the danger throughout this chapter — this isn't confusion, it's conviction.",
        },
        {
          text: "It's a minor detail with no bearing on Piggy's character.",
          isCorrect: false,
          feedback: "This is arguably the single most defining moment of who Piggy is in the entire novel — worth much closer attention.",
        },
      ],
      insight:
        "Piggy has been mocked for his glasses, his weight, his voice, his caution — and he still walks toward Castle Rock holding the conch. Whatever else is true of him, he never once stops believing in the rules.",
    },
    {
      passage:
        "The conch shatters into fragments in the exact same instant that the boulder kills Piggy.",
      question: "Why does Golding pair these two events — Piggy's death and the conch's destruction — in the same moment?",
      options: [
        {
          text: "It makes the symbolism unmissable: Piggy was the conch's last true believer, and the object and the person who gave it meaning are destroyed together, ending both at once.",
          isCorrect: true,
          feedback:
            "Right — this is Golding at his most direct. He wants the reader to feel, physically, that order and its last defender end in the same breath.",
        },
        {
          text: "It's simply a coincidence of the physical scene, since Piggy happened to be holding the conch.",
          isCorrect: false,
          feedback: "Golding is a deliberate writer — this pairing is one of the most carefully constructed symbolic moments in the whole novel.",
        },
        {
          text: "It shows that Roger was specifically trying to destroy the conch, not hurt Piggy.",
          isCorrect: false,
          feedback: "The text presents this as aimed at Piggy — the conch's destruction is a consequence, but a symbolically loaded one.",
        },
      ],
      insight:
        "After this moment, no one on the island ever mentions the conch again. Its authority doesn't fade slowly — it ends, completely, in a single instant.",
    },
  ],
  symbolUpdates: [
    { symbol: "conch", status: "Destroyed — shattered in the same instant as Piggy's death", note: "Order's last physical symbol is gone, along with the person who believed in it most." },
    { symbol: "glasses", status: "Still with Jack's tribe", note: "The reason the group came to Castle Rock in the first place — never recovered." },
    { symbol: "beast", status: "No longer needed as a device", note: "Fear no longer requires an invented beast — Ralph himself has become what the tribe hunts." },
  ],
  characterUpdates: [
    { character: "ralph", position: 30, note: "Fights for the glasses and the conch, loses everything, and is now hunted by the group he used to lead — but never becomes a hunter himself." },
    { character: "jack", position: -85, note: "Rules Castle Rock as an outright tyrant, openly hostile, presiding over Piggy's death without hesitation." },
    { character: "piggy", position: 65, note: "His last recorded words argue for reason over violence. He dies moments later, still holding the conch, without another word. His convictions never waver." },
    { character: "roger", position: -100, note: "Deliberately dislodges the boulder that kills Piggy — the moment every trace of restraint from Chapter 4 is finally, completely gone." },
  ],
  reflection: {
    question:
      "Piggy never stops believing in rules and reason, even in a situation where they clearly aren't protecting him anymore. Do you think that kind of unwavering conviction is admirable, naive, or both at once?",
    samples: [
      "I think it's both — it's genuinely admirable that he never gives up on his values, but it's also true that his convictions couldn't save him in the end.",
      "I find it kind of heroic, honestly — everyone else adapts to the violence around them, and Piggy just... doesn't, all the way to the end.",
    ],
  },
  trivia: [
    {
      question: "Who is responsible for rolling the boulder that kills Piggy?",
      options: ["Jack", "Roger", "Maurice", "Ralph"],
      correctAnswer: 1,
      category: "Characters",
      difficulty: "medium",
    },
    {
      question: "What happens to the conch when Piggy dies?",
      options: ["It shatters", "Jack keeps it as a trophy", "Ralph hides it", "It falls into the sea"],
      correctAnswer: 0,
      category: "The Beast",
      difficulty: "easy",
    },
    {
      question: "What does Piggy hold up as he tries to make the tribe listen to him at Castle Rock?",
      options: ["A spear", "The conch", "His broken glasses", "A white flag"],
      correctAnswer: 1,
      category: "Quotes",
      difficulty: "medium",
    },
  ],
};
