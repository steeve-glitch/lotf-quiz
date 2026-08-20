import { Chapter } from "../types";

export const CH_02: Chapter = {
  id: "ch-02",
  number: 2,
  title: "Fire on the Mountain",
  part: 1,
  summary:
    "Ralph calls a second assembly and lays out rules: only the conch-holder speaks, and — his most famous line — \"we're not savages, we're English, and the English are best at everything.\" A small littlun with a mulberry-colored birthmark stands up, terrified, and says he saw a \"beastie\" — a snake-thing — in the trees at night. The older boys mostly laugh it off, though the fear doesn't really go away. Ralph proposes building a signal fire on the mountain so a passing ship might spot the smoke. They use Piggy's glasses to concentrate sunlight and light it — over Piggy's objections, since he needs them to see. The fire catches beautifully, then catches too well: it spreads out of control down the mountainside. In the chaos, no one can find the littlun with the mulberry mark again. Golding never confirms it outright, but the implication is that he burned to death, and nobody is willing to say so out loud.",
  quote: {
    text: "We're not savages. We're English, and the English are best at everything. So we've got to do the right things.",
    context:
      "Ralph, laying out why the boys should follow rules — treating \"English\" and \"civilized\" as the same thing. The rest of the novel is Golding methodically taking this assumption apart.",
  },
  vocabulary: [
    {
      word: "assembly",
      definition: "A formal meeting where everyone gathers to discuss something together.",
      context: "The conch calls an assembly. What starts as an orderly system for meetings will get harder and harder to hold together as fear takes over.",
    },
    {
      word: "beastie",
      definition: "A child's word for a frightening, imagined monster.",
      context:
        "The littlun's own word for what he saw — small and almost cute-sounding, which makes it land harder how seriously the fear spreads through the rest of the assembly.",
    },
    {
      word: "smother",
      definition: "To cover something completely, cutting off its air — here, used about the fire and the smoke.",
      context: "The fire that's meant to save them ends up doing damage before it does any good — this word shows up as it gets out of hand.",
    },
    {
      word: "mulberry",
      definition: "A dark purplish-red color, like the fruit.",
      context:
        "The littlun who disappears is identified only by \"the boy with the mulberry-coloured birthmark\" — he's never actually given a name. That absence is deliberate.",
    },
    {
      word: "scar",
      definition: "A mark left by damage that has mostly healed — here, the raw trail the crashed plane tore through the jungle.",
      context: "Golding calls it \"the scar\" throughout this chapter — the boys' first, most literal wound on the island, long before anything happens to one of them.",
    },
    {
      word: "swathe",
      definition: "A broad strip or band of something, especially one cut or cleared through a larger area.",
      context: "Used for both the plane's crash-path and, later in the chapter, the creepers torn up as the signal fire tears through the mountainside — destruction repeating itself in the same word.",
    },
    {
      word: "sapling",
      definition: "A young, slender tree.",
      context: "The saplings crowding up through the old scar are exactly what the out-of-control fire ends up burning — new growth undone almost as soon as it starts.",
    },
  ],
  closeReading: [
    {
      passage:
        "When the littlun describes the \"beastie,\" the older boys laugh — but Golding notes the assembly grows uneasy, and even Ralph, trying to reassure everyone, can't quite manage a confident denial.",
      question: "What does Golding achieve by having the boys' fear of the beast begin here, in Chapter 2, rather than after something frightening actually happens?",
      options: [
        {
          text: "It shows that the fear was never really about evidence — it exists first, and events later get read through it, not the other way around.",
          isCorrect: true,
          feedback:
            "Exactly. This is Golding setting up one of the novel's key ideas: fear doesn't need a real cause to spread and take over a group — it just needs a story and an audience that's ready to believe it.",
        },
        {
          text: "It shows that the beast is definitely real and will appear later in the novel exactly as described.",
          isCorrect: false,
          feedback:
            "Hold that thought loosely — what the \"beast\" turns out to actually be is more complicated, and more interesting, than a literal monster.",
        },
        {
          text: "It has no real function — it's just a scary detail to keep readers interested.",
          isCorrect: false,
          feedback: "This scene is doing real thematic work — track how often \"the beast\" comes back and what it's used to justify each time.",
        },
      ],
      insight:
        "Notice who the fear belongs to first: a littlun, dismissed by the older boys as too young to be taken seriously. Watch whether that stays true as more of the group starts to feel it too.",
    },
    {
      passage:
        "The fire is lit using Piggy's glasses — the only tool on the island capable of it — while Piggy himself protests that he needs them to see. Nobody really listens.",
      question: "Why is it significant that the one act of real, practical progress this chapter (fire) depends on taking something away from the one character who thinks clearly (Piggy)?",
      options: [
        {
          text: "It sets up a pattern in how the group treats Piggy: quick to use what he knows or has, slow to actually listen to him.",
          isCorrect: true,
          feedback:
            "Right. Piggy is useful and expendable at the same time, in the group's eyes — his mind and his glasses matter, but he himself doesn't seem to.",
        },
        {
          text: "It shows that Piggy is generous and happy to help the group whenever he can.",
          isCorrect: false,
          feedback: "Reread the scene — Piggy explicitly protests. This isn't willing generosity, it's being overruled.",
        },
        {
          text: "It's a minor practical detail about how fire works, without any deeper implication.",
          isCorrect: false,
          feedback: "Golding rarely includes a detail this specific without using it again — keep watching what happens to the glasses.",
        },
      ],
      insight:
        "The fire that's supposed to represent hope and rescue causes the novel's first death within the same chapter it's created. Hope and disaster arrive together.",
    },
  ],
  symbolUpdates: [
    { symbol: "fire", status: "Lit — immediately gets out of control", note: "Built for rescue; burns half the mountain and likely kills the littlun with the mulberry mark on its first night." },
    { symbol: "glasses", status: "Taken from Piggy to light the fire", note: "Useful to the group, costly to Piggy — he has to hand them over even though he protests." },
    { symbol: "beast", status: "First mentioned — as a littlun's story", note: "Not yet taken seriously by the biguns, but the fear has entered the group and won't leave." },
    { symbol: "conch", status: "Still holding — used to run the assembly", note: "Rules are still respected, for now." },
  ],
  characterUpdates: [
    { character: "ralph", position: 65, note: "Tries to project confidence about the beast but can't fully dismiss it himself." },
    { character: "jack", position: 45, note: "Loudly promises to hunt and kill the beast if it exists — his first move toward defining himself through violence." },
    { character: "piggy", position: 55, note: "Overruled about his own glasses; his practical value is used without his consent." },
    { character: "simon", position: 65, note: "Says little, but doesn't join in mocking the littlun's fear." },
    { character: "roger", position: 48, note: "Still in the background." },
  ],
  reflection: {
    question:
      "Ralph says being \"English\" and being \"civilized\" are basically the same thing. Do you think people still sometimes assume their own group/culture is naturally more \"civilized\" than others? What's the danger in that assumption?",
    samples: [
      "Yes — I think it's easy for any group to assume their own way of doing things is the 'normal' or 'right' one, and that assumption can make people careless about how they treat outsiders.",
      "I think this assumption is dangerous because it makes people believe bad behavior 'couldn't happen to us' — which is exactly the trap the boys fall into.",
    ],
  },
  trivia: [
    {
      question: "What is the purpose of the signal fire?",
      options: ["To cook food", "To attract passing ships", "To scare the beast", "To keep warm at night"],
      correctAnswer: 1,
      category: "Fire & Rescue",
      difficulty: "easy",
    },
    {
      question: "What object does the group use to light the signal fire?",
      options: ["Matches from the wreckage", "Piggy's glasses", "Flint stones", "A magnifying glass Jack finds"],
      correctAnswer: 1,
      category: "Symbolism",
      difficulty: "easy",
    },
    {
      question: "Which character insists on the importance of rules and rescue?",
      options: ["Jack", "Roger", "Ralph", "Maurice"],
      correctAnswer: 2,
      category: "Leadership",
      difficulty: "easy",
    },
    {
      question: "What does the littlun with the mulberry-colored birthmark claim to have seen?",
      options: ["A ship", "A snake-thing / \"beastie\"", "Another survivor", "A fire on the mountain"],
      correctAnswer: 1,
      category: "The Beast",
      difficulty: "easy",
    },
    {
      question: "Who is initially put in charge of maintaining the signal fire?",
      options: ["Ralph", "Piggy", "Jack and the choir", "Simon"],
      correctAnswer: 2,
      category: "Leadership",
      difficulty: "easy",
    },
    {
      question: "What was the boys' primary goal when they first landed on the island?",
      options: ["Being rescued", "Finding food", "Exploring the mountain", "Building a raft"],
      correctAnswer: 0,
      category: "Fire & Rescue",
      difficulty: "medium",
    },
  ],
};
