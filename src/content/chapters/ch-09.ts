import { Chapter } from "../types";

export const CH_09: Chapter = {
  id: "ch-09",
  number: 9,
  title: "A View to a Death",
  part: 2,
  summary:
    "A storm builds through the whole chapter, thick and electric, mirroring the pressure building in the group. Hungry and increasingly isolated, Ralph and Piggy decide to go to Jack's feast at Castle Rock that evening — drawn partly by the promise of meat, partly by some faint hope that things might still be mended. Meanwhile Simon, still weak from his encounter with the pig's head, makes his way up the mountain and finally sees the truth clearly: the \"beast\" is only the dead parachutist, his body and chute tangled and moved by the wind. Simon frees the tangled body and starts down the mountain in the dark and the storm, desperate to reach the others and tell them what he's found before anyone gets hurt over a lie. He stumbles, disoriented, straight into the middle of Jack's tribe's ritual dance — chanting, drumming, working themselves into a frenzy around their fire — at the exact moment thunder cracks overhead. Mistaken in the darkness and chaos for the beast itself, Simon is killed by the group in the chant's climax, the fear he was racing to end turning on him instead. Ralph and Piggy, who had joined the circle, are caught up in it too. Afterward, the storm breaks, and the rain and the tide carry Simon's body gently out to sea, lit by the faint glow of the ocean's own light.",
  quote: {
    text: "Kill the beast! Cut his throat! Spill his blood!",
    context:
      "The same chant first heard in Chapter 4 — but the words themselves have shifted along with everything else. It isn't \"the pig\" and \"her\" blood anymore. It's \"the beast,\" and \"his.\"",
  },
  vocabulary: [
    { word: "frenzy", definition: "A state of wild or uncontrolled activity or emotion.", context: "What the ritual dance becomes as the storm builds — the word Golding uses for the exact moment control disappears entirely." },
    { word: "phosphorescence", definition: "A faint glow produced by certain organisms, especially in the sea, without heat.", context: "The strange, quiet beauty of the description of Simon's body drifting out on the tide — light in the middle of the darkest chapter in the book." },
    { word: "chant", definition: "A repeated rhythmic phrase, typically simple, sung or shouted by a group.", context: "The hunters' words, which start as a hunting ritual and become something closer to a spell the group can't stop repeating." },
    { word: "delirious", definition: "In an acutely disturbed state of mind, often involving confusion and a loss of contact with reality.", context: "Simon's state as he stumbles down the mountain in the storm and dark, still recovering from his collapse at the pig's head." },
  ],
  closeReading: [
    {
      passage:
        "Simon arrives at the ritual, alone, exhausted, and desperate to tell the truth about the beast — at the exact moment the storm, the dark, and the chant's climax make him unrecognizable as anything but a threat.",
      question: "What does Golding achieve with the timing of Simon's arrival — bringing the one true thing anyone has said about the beast at the single worst possible moment to say it?",
      options: [
        {
          text: "It's the novel's harshest statement about how fear works — the truth doesn't get a fair hearing just because it's true; it arrives into whatever chaos already exists, and that chaos decides what happens to it.",
          isCorrect: true,
          feedback:
            "Exactly. This isn't random bad luck — it's Golding making his argument as directly and painfully as the plot allows. The group was never rejecting evidence. They were reacting to fear, and fear doesn't check its facts.",
        },
        {
          text: "It shows that Simon should have waited until morning to say anything.",
          isCorrect: false,
          feedback: "This reduces a deliberate, thematic choice to a simple planning mistake — Golding is making a much larger point about fear and timing than that.",
        },
        {
          text: "It's simply an unfortunate coincidence with no larger meaning.",
          isCorrect: false,
          feedback: "Very little in this novel is a coincidence — this scene is the culmination of everything the book has been building since Chapter 5.",
        },
      ],
      insight:
        "Compare this to Chapter 5, when Simon first tried and failed to explain that the beast might be \"only us.\" This chapter is that same failure, at full, fatal scale.",
    },
    {
      passage:
        "Immediately after the killing, the storm passes and Golding describes Simon's body drifting out on the tide in gentle, almost beautiful language — surrounded by the faint glow of phosphorescent sea creatures.",
      question: "What is the effect of following the most violent scene in the book with imagery this peaceful?",
      options: [
        {
          text: "It creates a jarring contrast that refuses to let the reader stay comfortable in either horror or beauty — the natural world moves on with an indifference that makes what just happened feel even harder to sit with.",
          isCorrect: true,
          feedback:
            "Right. Golding isn't offering comfort here — the beauty doesn't undo or excuse the violence. If anything, the island's calm indifference afterward makes the human cruelty stand out more starkly.",
        },
        {
          text: "It suggests that Simon's death wasn't really that serious in the end.",
          isCorrect: false,
          feedback: "The tone here is elegiac, not dismissive — this passage honors what was lost rather than minimizing it.",
        },
        {
          text: "It's simply a scenic description with no connection to what just happened.",
          isCorrect: false,
          feedback: "The placement — directly after Simon's death — is deliberate. Golding wants these two things sitting right next to each other.",
        },
      ],
      insight:
        "Some readers describe this as the closest thing to a burial Simon gets — the island itself, indifferent but beautiful, doing what the group could not: treating him with something like grace.",
    },
  ],
  symbolUpdates: [
    { symbol: "beast", status: "The truth is found — and dies with the one person who found it", note: "Simon discovers the \"beast\" is the dead parachutist. He is killed before he can tell anyone." },
    { symbol: "fire", status: "The tribe's wild feast-fire, not the signal fire", note: "This chapter's fire is for the ritual and the feast, not for rescue — a measure of how far priorities have shifted." },
    { symbol: "conch", status: "Absent — Ralph and Piggy are at Castle Rock, outside their own camp's order", note: "Even the boys still loyal to the conch have, for one night, stepped fully outside what it stands for." },
  ],
  characterUpdates: [
    { character: "ralph", position: 20, note: "Present in the circle when Simon is killed — caught up in the chant along with everyone else." },
    { character: "jack", position: -70, note: "Leads the ritual and the frenzy that kills Simon — the furthest point yet in his turn away from anything resembling the boy from Chapter 1." },
    { character: "piggy", position: 25, note: "Also present in the circle, also caught up in it — he will insist afterward that he and Ralph \"weren't really there,\" a claim the chapter itself doesn't support." },
    { character: "simon", position: 90, note: "Dies trying to bring the group the one true thing anyone has said about the beast. Killed by the fear he was racing to end." },
    { character: "roger", position: -80, note: "Fully immersed in the ritual's violence — nothing in him is holding back anymore." },
  ],
  paragraphBuilder: {
    focus: "Why does Golding follow Simon's violent death with such peaceful, elegiac imagery of his body drifting out to sea?",
    steps: [
      {
        id: "claim",
        label: "Claim",
        instruction: "State your argument about the effect of this contrast.",
        guidedOptions: [
          "Golding uses the peaceful description of Simon's body at sea to create a jarring contrast that makes the preceding violence impossible to look away from, rather than softening it.",
          "Golding uses the island's calm indifference after Simon's death to suggest that nature continues regardless of human cruelty, which makes that cruelty feel smaller and larger at once.",
        ],
        placeholder: "Golding uses this contrast to...",
      },
      {
        id: "technique",
        label: "Technique",
        instruction: "Name the literary technique at work.",
        guidedOptions: ["Juxtaposition (violence immediately followed by beauty)", "Imagery (phosphorescence, tide, light)", "Tone shift"],
        placeholder: "Golding achieves this through...",
      },
      {
        id: "evidence",
        label: "Evidence",
        instruction: "Quote or closely paraphrase the moment that supports your claim.",
        guidedOptions: [
          "The chant reaches its frenzied climax and Simon is killed by the group in the storm and dark.",
          "Immediately after, his body is described drifting gently out on the tide, surrounded by the sea's own faint light.",
        ],
        placeholder: "For example, when...",
      },
      {
        id: "effect",
        label: "Effect",
        instruction: "Explain what this technique does for the reader.",
        guidedOptions: [
          "It refuses to let the reader settle into either pure horror or pure beauty — both have to be held at once.",
          "It makes the human violence feel even starker, set against a natural world that carries on with total indifference.",
        ],
        placeholder: "This makes the reader...",
      },
      {
        id: "significance",
        label: "Significance",
        instruction: "Connect this to the novel's larger argument about civilization and human nature.",
        guidedOptions: [
          "This is the moment the novel's argument stops being theoretical — Simon, the character closest to moral clarity, is destroyed by exactly the fear-driven mob behavior the book has been warning about.",
          "The gentle treatment of Simon's body is the closest thing to grace or dignity he receives — offered by the island, not by the group that killed him.",
        ],
        placeholder: "This matters because...",
      },
    ],
    modelParagraph:
      "In this chapter, Golding juxtaposes Simon's violent death with the peaceful, elegiac image of his body drifting out to sea to create a contrast that refuses to let the reader settle into either horror or beauty alone. The chant reaches its frenzied climax and Simon is killed by the group in the storm and dark — and almost immediately after, his body is described drifting gently on the tide, lit by the sea's own faint phosphorescent glow. The effect is deeply unsettling: the natural world's calm indifference makes the preceding human cruelty stand out even more sharply, rather than softening it. This is the moment the novel's argument stops being theoretical. Simon, the character closest to moral clarity in the entire book, is destroyed by exactly the fear-driven mob behavior Golding has been building toward since Chapter 5 — and the only dignity he receives afterward comes from the indifferent island, not from the group that killed him.",
  },
  reflection: {
    question:
      "Simon dies trying to tell the truth at the worst possible moment to be believed. Do you think it matters whether something is true if the people hearing it aren't in any state to actually listen?",
    samples: [
      "I think truth still matters even when it isn't heard — but this chapter makes me think timing and trust matter just as much as being right.",
      "This is one of the saddest ideas in the book to me — that the person with the real answer never even got the chance to be wrong or right, just unheard.",
    ],
  },
  trivia: [
    {
      question: "What is the significance of Simon's encounter with the Lord of the Flies in the clearing?",
      options: ["He discovers the beast's true identity", "He decides to join Jack's tribe", "He finds a way off the island", "He befriends the pig"],
      correctAnswer: 0,
      category: "Characters",
      difficulty: "hard",
    },
    {
      question: "What happens to Simon when he tries to tell the others the truth about the beast?",
      options: ["He is ignored completely", "He is killed in a frenzied ritual", "He convinces Ralph immediately", "He is sent away by Jack"],
      correctAnswer: 1,
      category: "The Beast",
      difficulty: "medium",
    },
  ],
};
