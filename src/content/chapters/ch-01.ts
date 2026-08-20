import { Chapter } from "../types";

export const CH_01: Chapter = {
  id: "ch-01",
  number: 1,
  title: "The Sound of the Shell",
  part: 1,
  summary:
    "A plane carrying a group of British boys crashes on an uninhabited tropical island, with no adult survivors. Ralph and Piggy meet on the beach and find a large shell — a conch. Ralph blows it to call the other survivors together. At the assembly, the boys establish that blowing the conch summons a meeting and holding it means the right to speak. They vote for a leader: Ralph, not Jack, wins — mostly because of the conch itself, and because Jack was already disliked as head of the choir. Jack's choir become the hunters. Ralph, Jack, and Simon explore the island and confirm it's an island with no adults on it. On the way back, they find a piglet caught in the undergrowth — Jack raises his knife to kill it, and can't.",
  quote: {
    text: "Sucks to your ass-mar!",
    context:
      "Jack's response on learning that Piggy has asthma — the first moment in the book where a boy is mocked for something he can't control. It sets up exactly how this group will treat weakness for the rest of the novel.",
  },
  vocabulary: [
    {
      word: "conch",
      definition: "A large spiral seashell, used here as a rallying horn and a symbol of the right to speak.",
      spanishGloss: "caracola",
      context:
        "Piggy spots it in the lagoon and tells Ralph how to blow it. Everything the boys build in Chapter 1 — the assembly, the election, the idea of taking turns — happens because of this shell.",
    },
    {
      word: "littluns",
      definition: "The younger boys, roughly ages six to eight, as the older boys start calling them.",
      spanishGloss: "los pequeños",
      context:
        "Nobody assigned this word — the boys invent it themselves in Chapter 1 as soon as they need a way to talk about \"the little ones\" as a group, separate from themselves.",
    },
    {
      word: "biguns",
      definition: "The older boys, roughly twelve and up — the counterpart to \"littluns.\"",
      spanishGloss: "los grandes",
      context: "Ralph, Jack, Piggy, and Simon are all biguns. Age turns out to matter a great deal on this island.",
    },
    {
      word: "creepers",
      definition: "Thick, tangled vines and undergrowth.",
      spanishGloss: "enredaderas",
      context:
        "The piglet Jack can't kill is caught in creepers when they find it — the jungle itself keeps getting in the way of the boys' plans, and not always by accident.",
    },
    {
      word: "specs",
      definition: "British slang for glasses (spectacles).",
      spanishGloss: "los lentes / las gafas",
      context: "Piggy's specs come up constantly from here on — keep an eye on how other boys talk about them.",
    },
  ],
  closeReading: [
    {
      passage:
        "The election scene: the boys vote by raised hands. Golding tells us the vote for Jack is \"unanimous\" among the choir, but Ralph still wins — because, as the narrator says, Ralph is the one holding the conch, and \"there was a stillness about Ralph... his size, and attractive appearance.\"",
      question: "What does Golding achieve by making the conch — not merit, not friendship — the deciding factor in who becomes chief?",
      options: [
        {
          text: "It shows that leadership on the island is decided by symbols and first impressions, not by who is actually most capable — Piggy, who is clearly the smartest, is never seriously considered.",
          isCorrect: true,
          feedback:
            "Right — and this matters for everything after. A leadership built on a symbol (the conch) rather than genuine authority is fragile, and the novel spends the rest of its pages testing exactly how fragile.",
        },
        {
          text: "It shows that the boys are naturally fair and democratic, choosing the best leader for the job.",
          isCorrect: false,
          feedback:
            "Look again at why Ralph wins — the text is explicit that it's about the conch and his appearance, not a considered judgment of ability.",
        },
        {
          text: "It shows that Jack was never interested in leading in the first place.",
          isCorrect: false,
          feedback:
            "Jack is visibly furious about losing — this isn't indifference, and that fury is worth tracking through the next few chapters.",
        },
      ],
      insight:
        "Ralph immediately tries to soften the loss by giving Jack \"control\" of the choir/hunters — a compromise that keeps Jack from open rebellion for now, but also hands him his own separate group with its own separate purpose. That split — Ralph's group vs. Jack's — is the seed of everything that goes wrong.",
    },
    {
      passage:
        "On the mountain, Jack finds a piglet trapped in the creepers, raises his knife — and freezes. Golding writes that the pause was \"because of the enormity of the knife descending and cutting into living flesh; because of the unbearable blood.\"",
      question: "Why does Golding include a moment where Jack fails to kill, rather than starting him off already comfortable with violence?",
      options: [
        {
          text: "So that Jack's later transformation into someone who hunts, kills, and eventually hunts other boys reads as a real change we watch happen, not a fixed trait he had all along.",
          isCorrect: true,
          feedback:
            "Exactly. If Jack were violent from page one, the novel would just be describing a bad kid. By showing him unable to kill in Chapter 1, Golding makes the descent a process — which is the actual argument of the book: this could happen to anyone.",
        },
        {
          text: "To show that Jack is fundamentally a kind person who would never really hurt anyone.",
          isCorrect: false,
          feedback: "Track what Jack does by Chapter 4 and Chapter 9 before settling on this reading.",
        },
        {
          text: "It's a minor detail with no real significance to the rest of the novel.",
          isCorrect: false,
          feedback:
            "This is one of the most-cited moments in the book precisely because of how much it sets up — worth taking seriously.",
        },
      ],
      insight:
        "Jack's own explanation afterward is that he was just \"choosing a place\" to strike — a small, telling lie to himself. Watch for this pattern: characters narrating their own actions in ways that make them easier to live with.",
    },
  ],
  symbolUpdates: [
    { symbol: "conch", status: "Found — becomes the rule of order", note: "Piggy spots it; Ralph learns to blow it; it becomes the reason he's elected chief." },
    { symbol: "glasses", status: "Introduced", note: "Piggy's specs are mentioned repeatedly — not yet used for fire, but Golding is already pointing at them." },
    { symbol: "beast", status: "Not yet mentioned", note: "No beast talk yet — that starts next chapter." },
  ],
  characterUpdates: [
    { character: "ralph", position: 70, note: "Elected chief on the strength of the conch and his looks, not a track record." },
    { character: "jack", position: 40, note: "Loses the vote, furious but contained. Can't bring himself to kill the piglet." },
    { character: "piggy", position: 60, note: "Smartest person on the island; mocked immediately for his weight, asthma, and glasses." },
    { character: "simon", position: 65, note: "Quiet presence on the exploration; barely speaks yet." },
    { character: "roger", position: 50, note: "Not yet distinguished from the other choir boys." },
  ],
  paragraphBuilder: {
    focus: "How does Golding use the election scene to establish that appearance and symbols, not ability, determine power on the island?",
    steps: [
      {
        id: "claim",
        label: "Claim",
        instruction: "State your argument about what the election scene reveals.",
        guidedOptions: [
          "Golding uses the election scene to show that leadership on the island is granted by symbol and surface impression rather than earned competence.",
          "Golding uses the election scene to establish a fragile hierarchy that depends entirely on the conch's continued authority.",
        ],
        placeholder: "Golding uses the election scene to...",
      },
      {
        id: "technique",
        label: "Technique",
        instruction: "Name the literary technique at work.",
        guidedOptions: ["Characterization through physical description", "Symbolism (the conch)", "Irony (the \"best\" leader isn't chosen)"],
        placeholder: "Golding achieves this through...",
      },
      {
        id: "evidence",
        label: "Evidence",
        instruction: "Quote or closely paraphrase the moment that supports your claim.",
        guidedOptions: [
          "\"there was a stillness about Ralph... his size, and attractive appearance\"",
          "Piggy — clearly the most capable thinker — is never even considered as a candidate.",
        ],
        placeholder: "For example, when...",
      },
      {
        id: "effect",
        label: "Effect",
        instruction: "Explain what this technique does for the reader.",
        guidedOptions: [
          "It plants an early doubt about whether this leadership will hold under pressure.",
          "It makes the reader complicit — we, too, are drawn to Ralph's description before we know anything about his judgment.",
        ],
        placeholder: "This makes the reader...",
      },
      {
        id: "significance",
        label: "Significance",
        instruction: "Connect this to the novel's larger argument about civilization and human nature.",
        guidedOptions: [
          "This foreshadows how easily the boys' entire social order will collapse once its symbols lose their power.",
          "This is Golding's first move in arguing that civilization is a thin, symbolic agreement — not something deeply rooted in human character.",
        ],
        placeholder: "This matters because...",
      },
    ],
    modelParagraph:
      "In the election scene, Golding uses symbolism and characterization to show that power on the island is granted by appearance, not earned through ability. When the boys vote, the narrator notes \"there was a stillness about Ralph... his size, and attractive appearance,\" while Piggy — visibly the sharpest thinker among them — is never considered. This detail makes the reader briefly complicit in the same shallow judgment the boys are making, before we have any real evidence of Ralph's leadership. The effect is a quiet warning: an order built on symbol and surface, rather than substance, is exactly the kind of order that won't survive contact with real pressure. This sets up the novel's larger argument — that civilization, for Golding, is a thin and symbolic agreement rather than something rooted deeply in human character.",
  },
  reflection: {
    question:
      "If you and your classmates were suddenly stranded somewhere with no adults, do you think a vote like this — decided by who \"seems\" like a leader — is actually how it would go? Why or why not?",
    samples: [
      "I think it's realistic — people do judge quickly based on confidence and appearance, especially under stress when there's no time to \"prove\" anything.",
      "I think it's less realistic now than in 1954 — most of us have grown up being told to look past first impressions, so I'd expect more debate.",
    ],
  },
  trivia: [
    {
      question: "What does the conch shell symbolize in the novel?",
      options: ["Order and civilization", "Fear and chaos", "Ralph's power", "The beast"],
      correctAnswer: 0,
      category: "Symbolism",
      difficulty: "easy",
    },
    {
      question: "Who is elected leader at the beginning of the novel?",
      options: ["Jack", "Piggy", "Simon", "Ralph"],
      correctAnswer: 3,
      category: "Leadership",
      difficulty: "easy",
    },
    {
      question: "What is Piggy's real first name?",
      options: ["Simon", "Peter", "Ralph", "We never learn his first name"],
      correctAnswer: 3,
      category: "Characters",
      difficulty: "easy",
    },
    {
      question: "Who is the leader of the choir boys?",
      options: ["Ralph", "Jack", "Roger", "Simon"],
      correctAnswer: 1,
      category: "Characters",
      difficulty: "easy",
    },
  ],
};
