import { CardSet } from '../types';

export const IntoTheCosmos: CardSet = {
  id: 28,
  heroes: [
    {
      id: 208,
      name: "Adam Warlock",
      team: 1,
      cards: [
        {
          name: "Transmute Matter",
          hc: 1,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 2 Shards" },
              ": Halve the cost of a Hero in the HQ this turn. ",
              { italic: "(Round the cost up.)" }
            ]
          ]
        },
        {
          name: "Regenerative Cocoon",
          hc: 4,
          rarity: 1,
          cost: 4,
          abilities: [
            [
              "To play this, you must discard a card."
            ],
            [
              "When you draw a new hand of cards at the end of this turn, draw two extra cards."
            ]
          ]
        },
        {
          name: "Soulblast",
          hc: 1,
          rarity: 2,
          cost: 5,
          abilities: [
            [
              "Gain 2 ",
              { rule: 1 },
              "."
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 66, text: "Burn 4 Shards" },
              ": Defeat a Villain."
            ]
          ]
        },
        {
          name: "Manifest the Soul Gem",
          hc: 3,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "Gain 4 ",
              { rule: 1 },
              "."
            ],
            [
              { team: 1 },
              { team: 1 },
              ": ",
              { keyword: 66, text: "Burn 8 Shards" },
              ": Defeat the Mastermind once. Then reveal the top card of the Villain Deck. If it's a Master Strike, then Adam Warlock is corrupted by power. At the start of next turn, add the ",
              { rule: 3, text: "Magus Mastermind" },
              " to the game with one random Tactic. ",
              { italic: "(If he has never been in this game.)" },
            ]
          ]
        },

      ]
    },
    {
      id: 209,
      name: "Captain Mar-Vell",
      team: 1,
      cards: [
        {
          name: "Cosmic Awareness",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "If you would get ",
              { icon: 1 },
              " from ",
              { keyword: 41 },
              " this turn, gain that many ",
              { rule: 1 },
              " instead."
            ],
            [
              { keyword: 41, text: "Danger Sense 1" }
            ],
            [
              { hc: 3 },
              ": Instead, same effect with ",
              { keyword: 41, text: "Danger Sense 2" },
              "."
            ]
          ]
        },
        {
          name: "Kree Genetics",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "If you gained any ",
              { rule: 1 },
              " this turn, draw a card."
            ]
          ]
        },
        {
          name: "Channel the Nega-Bands",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            [
              { team: 1 },
              ": Reveal the top card of your deck. If it costs 1 or more, gain a ",
              { rule: 1, text: "Shard" },
              ". If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Protector of the Universe",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 4" }
            ],
            [
              "If you gained any ",
              { rule: 1 },
              " this turn before playing this card, ",
              { keyword: 41, text: "Danger Sense 7" },
              " instead."
            ],
          ]
        },

      ]
    },
    {
      id: 210,
      name: "Moondragon",
      team: 1,
      cards: [
        {
          name: "Peaceful Meditation",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When you draw a new hand of cards at the end of this turn, if you didn't fight anything this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Psionic Warning",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 2" }
            ],
            [
              { hc: 2 },
              ": If this revealed any Scheme Twists, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Psychokinetic Blast",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 4" }
            ],
            [
              { team: 1 },
              ": If this revealed at least two Master Strikes, you may shuffle the Villain Deck."
            ]
          ]
        },
        {
          name: "Lunar Dragon Form",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 1" }
            ],
            [
              "If this revealed a Scheme Twist, you get ",
              { bold: "+3" },
              { icon: 1 },
              " and you may shuffle the Villain Deck."
            ],
          ]
        },

      ]
    },
    {
      id: 211,
      name: "Nebula",
      team: 12,
      cards: [
        {
          name: "Ruthless Cyborg",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Whenever you take any number of ",
              { rule: 1 },
              " from a Villain, Mastermind, or other player this turn, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Galactic Rogue",
          hc: 2,
          rarity: 1,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "A Villain gains a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 2 },
              { hc: 5 },
              ": Take a ",
              { rule: 1, text: "Shard" },
              " from a Villain."
            ]
          ]
        },
        {
          name: "Illusion Device",
          hc: 5,
          rarity: 2,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 5 },
              ": Choose another player. Unless that player reveals a ",
              { hc: 1 },
              " Hero, take one of their ",
              { rule: 1 },
              " or “rescue“ a Bystander from their Victory Pile."
            ]
          ]
        },
        {
          name: "Daring Raid",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          recruit: "0+",
          abilities: [
            [
              "Whenever you take any number of ",
              { rule: 1 },
              " from a Villain, Mastermind, or other player this turn, you get ",
              { bold: "+3" },
              { icon: 2 },
              "."
            ],
          ]
        },

      ]
    },
    {
      id: 212,
      name: "Nova",
      filterName: "Nova (ItC)",
      team: 1,
      cards: [
        {
          name: "Draw From the Worldmind",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "0+",
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " or ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Electromagnetic Wave",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "Choose one: You get ",
              { bold: "+2" },
              { icon: 2 },
              ", or you gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 3 },
              ": Instead, do both."
            ]
          ]
        },
        {
          name: "Declare Galactic Threat",
          hc: 5,
          rarity: 2,
          cost: 6,
          abilities: [
            [
              "A Villain gains ",
              { keyword: 6 },
              " ",
              { hc: 5 },
              " this turn. ",
              { italic: "(It loses any previous Cosmic Threat abilities and penalties it had.)" }
            ],
            "If there were no Villains in the city, draw two cards instead."
          ]
        },
        {
          name: "Mobilize the Nova Corps",
          hc: 3,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "Choose one: Draw three cards or a Mastermind gains ",
              { keyword: 6 },
              " ",
              { hc: 3 },
              " this turn. ",
              { italic: "(It loses any previous Cosmic Threat abilities and penalties it had.)" }
            ],
          ]
        },

      ]
    },
    {
      id: 213,
      name: "Phyla-Vell",
      team: 12,
      cards: [
        {
          name: "Channel Cosmic Power",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Quantum Sword",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you have at least 4 ",
              { rule: 1 },
              ", you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Martyr",
          hc: 4,
          rarity: 2,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "If any player would gain a Wound, you may discard this card and gain 2 ",
              { rule: 1 },
              " instead."
            ]
          ]
        },
        {
          name: "Avatar of Oblivion",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            [
              "You may KO a card from your hand or discard pile. If you do, gain 2 ",
              { rule: 1 },
              "."
            ],
            [
              "Then, if you have at least 8 ",
              { rule: 1 },
              ", you get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 214,
      name: "Quasar",
      team: 1,
      cards: [
        {
          name: "Manipulate Gravitons",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 1 },
              ": Whenever you recruit a Hero from the HQ this turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Cosmic Champion",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 66, text: "Burn a Shards" },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "The Quantum Bands",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "1",
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 2 Shards" },
              ": You man KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "The Star Brand",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Whenever you defeat a Villain or Mastermind this turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 4 Shards" },
              ": You get ",
              { bold: "+7" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 215,
      name: "Ronan the Accuser",
      team: 0,
      cards: [
        {
          name: "Universal Weapon",
          hc: 5,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 2 Shards" },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Rally Kree Warriors",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Whenever you rescue a Bystander this turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 4 },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Accuse Enemies of the Empire",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              { keyword: 68 },
              { hc: 5 },
              ". Each player that wins rescues a Bystander. If the Mastermind wins, it captures a Bystander."
            ]
          ]
        },
        {
          name: "Seek the Infinity Gems",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              { keyword: 68 },
              { hc: 4 },
              ". Each other player that loses must lose a ",
              { rule: 1, text: "Shard" },
              ". Each player that wins gains 2 ",
              { rule: 1 },
              ". If the Mastermind wins, a Villain gains 2 ",
              { rule: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 216,
      name: "Yondu",
      team: 12,
      cards: [
        {
          name: "Whistling Arrow",
          hc: 3,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 3 },
              ": ",
              { keyword: 66, text: "Burn any number of Shards" },
              ": Defeat a Villain with printed VP equal to the number of Shards you burned. ",
              { italic: "(This can't affect a Villain with 0 VP or no printed VP.)" }
            ]
          ]
        },
        {
          name: "Interstellar Hunter",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 2" }
            ],
            [
              { hc: 1 },
              ": If this revealed any Master Strikes, draw a card."
            ]
          ]
        },
        {
          name: "Anticipate Their Movements",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 3" }
            ],
            [
              { team: 12 },
              ": You may do the Fight effect of a Henchman Villain revealed this way. ",
              { italic: "(Don't defeat it.)" }
            ]
          ]
        },
        {
          name: "Space Pirate",
          hc: 5,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Choose one: Gain a Hero from the HQ for free, or gain a ",
              { rule: 1, text: "Shard" },
              " for each empty city space."
            ],
            [
              { team: 12 },
              { team: 12 },
              { team: 12 },
              ": Do both."
            ]
          ]
        },

      ]
    },
  ],
  masterminds: [
    {
      id: 71,
      name: "Beyonder, The",
      tacticName: "Beyonder",
      vAttack: "21",
      vp: 7,
      cards: [
        {
          name: "The Beyonder",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " for cards that cost 5 or more."
            ],
            [
              { bold: "Always Leads" },
              ": From Beyond"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a card that costs 5 or more or gains a Wound. Then put this Strike under an HQ space ",
              { italic: "(that doesn't already have a Strike)" },
              ", pulling that space into a Pocket Dimension. To recruit a card from a Pocket Dimension, you must also pay ",
              { bold: "1" },
              { icon: 1 },
              " for each Pocket Dimension in play."
            ]
          ]
        },
        {
          name: "Epic Beyonder",
          vAttack: "24",
          vAttackAsterisk: true,
          epic: true,
          abilities: [
            [
              { keyword: 6 },
              " for cards that cost 6 or more."
            ],
            [
              { bold: "Always Leads" },
              ": From Beyond"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a card that costs 6 or more or gains a Wound. Then put this Strike under an HQ space ",
              { italic: "(that doesn't already have a Strike)" },
              ", pulling that space into a Pocket Dimension. To recruit a card from a Pocket Dimension, you must also pay ",
              { bold: "1" },
              { icon: 1 },
              " for each Pocket Dimension in play."
            ]
          ]
        },
        {
          name: "Playthings of a Petulant God",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and KOs a card from their hand or discard pile with the same card name as any card in a Pocket Dimension."
            ]
          ]
        },
        {
          name: "Dimensional Collapse",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Destroy an HQ space that's in a Pocket Dimension. ",
              { italic: "(That space doesn't refill.)" },
              " To mark this, turn the Hero there face down. The Pocket Dimension card stays in play."
            ]
          ]
        },
        {
          name: "Pull Earth Into The Beyond",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue four Bystanders. Put this card above the Sewers, pulling it into a Pocket Dimension. To fight a Villain there, you must also pay ",
              { bold: "1" },
              { icon: 1 },
              " for each Pocket Dimension in play."
            ]
          ]
        },
        {
          name: "Create the Secret Wars",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose a team ",
              { italic: "(e.g. " },
              { team: 2 },
              { italic: "," },
              { team: 1 },
              { italic: "," },
              { team: 4 },
              { italic: "," },
              { team: 12 },
              { italic: ", etc.)" },
              ". ",
              { keyword: 68 },
              " for that team icon, with Evil selecting from 4 cards from the Hero Deck. Each other player that loses gains a Wound. If you win, the player of your choice gains a Hero from a Pocket Dimension."
            ]
          ]
        }
      ]
    },
    {
      id: 72,
      name: "Grandmaster, The",
      tacticName: "Grandmaster",
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "The Grandmaster",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Elders of the Universe"
            ],
            [
              { bold: "Master Strike" },
              ": Reveal the top card of the Hero Deck then put it back. ",
              { keyword: 68 },
              " for that card's color(s). Each player that loses gains a Wound. If the Grandmaster wins, he gains a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Epic Grandmaster",
          vAttack: "11",
          epic: true,
          abilities: [
            [
              "Evil adds ",
              { bold: "+2" },
              " to its final total in every ",
              { keyword: 68 },
              " caused by any card."
            ],
            [
              { bold: "Always Leads" },
              ": Elders of the Universe"
            ],
            [
              { bold: "Master Strike" },
              ": Reveal the top card of the Hero Deck then put it back. ",
              { keyword: 68 },
              " for that card's color(s). Each player that loses gains a Wound. If the Grandmaster wins, he gains 2 ",
              { rule: 1 },
              "."
            ]
          ]
        },
        {
          name: "Deal With Death",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 1 },
              ", with Evil selecting from 4 cards from the Hero Deck. Each other player that loses must KO a non-grey Hero from their discard pile. If you win, you may gain a non-grey Hero from the KO pile. If the Grandmaster wins, he gains a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Galactic Marathon",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 2 },
              ", with Evil selecting from 4 cards from the Hero Deck. Each other player that loses must discard down to four cards. If you win, draw two cards. If the Grandmaster wins, he gains 2 ",
              { rule: 1 },
              "."
            ]
          ]
        },
        {
          name: "Cheat Against Thanos",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 3 },
              ", with Evil selecting from 4 cards from the Hero Deck. Each other player that loses must KO half the Bystanders ",
              { italic: "(round up)" },
              " from their Victory Pile. If you win, rescue three Bystanders. If the Grandmaster Wins, he gains 3 ",
              { rule: 1 },
              "."
            ]
          ]
        },
        {
          name: "Match Offenders vs. Defenders",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 4 },
              ", with Evil selecting from 4 cards from the Hero Deck. Each other player that loses must gain a 0-cost card from the KO pile. If you win, reveal the top four cards of your deck, KO any number of them, and put the rest back in any order. If the Grandmaster wins, he gains 4 ",
              { rule: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 73,
      name: "Magus",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Magus",
          vAttack: "9+",
          abilities: [
            [
              "Magus gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain in the city that has any ",
              { rule: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Universal Church of Truth"
            ],
            [
              { bold: "Master Strike" },
              ": If there are already any Villains with ",
              { rule: 1 },
              " in the city, each player gains a Wound. Then this Strike enters the city as a “Cosmic Wraith“ Villain with ",
              { bold: "4" },
              { icon: 1 },
              " worth 4VP. Then put a ",
              { rule: 1, text: "Shard" },
              " on each Villain in the city."
            ]
          ]
        },
        {
          name: "Epic Magus",
          vAttack: "11+",
          epic: true,
          abilities: [
            [
              "Magus gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Villain in the city that has any ",
              { rule: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Universal Church of Truth"
            ],
            [
              { bold: "Master Strike" },
              ": If there are already any Villains in the city with ",
              { rule: 1 },
              ", each player gains a Wound to the top of their deck. Then this Strike enters the city as a “Cosmic Wraith“ Villain with ",
              { bold: "6" },
              { icon: 1 },
              " worth 6VP. Then put a ",
              { rule: 1, text: "Shard" },
              " on each Villain in the city."
            ]
          ]
        },
        {
          name: "Dark Side of Adam Warlock",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Magus gains a ",
              { rule: 1, text: "Shard" },
              ". Then Magus takes a ",
              { rule: 1, text: "Shard" },
              " from each other player that does not reveal a ",
              { hc: 1 },
              " Hero."
            ]
          ]
        },
        {
          name: "Seize Cosmic Power",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Magus takes a ",
              { rule: 1, text: "Shard" },
              " from each Villain in the city. Then the Villain with the highest ",
              { icon: 1 },
              " gains a ",
              { rule: 1, text: "Shard" },
              "."

            ]
          ]
        },
        {
          name: "Conjured Shade of Thanos",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. This Tactic enters the city as a Villain. Then each Villain in the city gains a ",
              { rule: 1, text: "Shard" },
              ". ",
              { italic: "(You win when the Mastermind has no more Tactics stacked under it.)" }
            ]
          ]
        },
        {
          name: "Resurrected as the Child Magus",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Until the start of your next turn, Magus can only be fought with ",
              { icon: 2 },
              " instead of ",
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 35,
      name: "Sidera Maris, Bridge Builders",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { italic: "(After this enters the city)" },
              " If there's a Villain on the Bridge, that Villain and this Henchman each gain a ",
              { rule: 1, text: "Shard" },
              ". Otherwise, move this to the Bridge."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
    {
      id: 36,
      name: "Universal Church of Truth",
      vAttack: "2",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Ambush" },
              ": Each Henchman Villain in the city gains a ",
              { rule: 1, text: "Shard" },
              ". If Magus is the Mastermind, one Cosmic Wraith also gains a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { bold: "Fight" },
              ": ",
              { keyword: 66, text: "Burn 2 Shards" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 90,
      name: "Elders of the Universe",
      cards: [
        {
          name: "The Runner",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 2 },
              ". Each player that loses must discard a card. If Evil wins, the Runner gains a ",
              { rule: 1, text: "Shard" },
              " for each card discarded this way, and he pushes forward two extra spaces."
            ]
          ]
        },
        {
          name: "The Trader",
          qtd: 2,
          vp: "2",
          vAttack: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 5 },
              ". Each player that loses must reveal their hand and trade a non-grey card from their hand with a card in the HQ that costs the same or less. If Evil wins, the Trader gains a ",
              { rule: 1, text: "Shard" },
              " for each trade that occurred."
            ]
          ]
        },
        {
          name: "The Champion of the Universe",
          qtd: 2,
          vp: "5",
          vAttack: "7",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 4 },
              ". Each player that loses must give this Villain one of their ",
              { rule: 1 },
              " or gain a Wound."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "The Collector",
          qtd: 2,
          vp: "4",
          vAttack: "6",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 68 },
              " ",
              { hc: 1 },
              ". Each player that loses gives the Collector one of these things that he doesn't have yet: A ",
              { rule: 1, text: "Shard" },
              ", a Bystander from their Victory Pile, a ",
              { hc: 4 },
              " Hero, a ",
              { hc: 2 },
              " Hero, a ",
              { hc: 1 },
              " Hero, a ",
              { hc: 5 },
              " Hero, or a ",
              { hc: 3 },
              " Hero ",
              { italic: "(from hand or discard pile)" },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": The player of your choice gains one of the captured Heroes. Put the rest on the bottom of the Hero Deck."
            ]
          ]
        }
      ]
    },
    {
      id: 91,
      name: "Celestials",
      cards: [
        {
          name: "Nezarr, The Calculator",
          qtd: 2,
          vp: "4",
          vAttack: "11",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 1 },
              " or ",
              { hc: 5 },
            ],
            [
              {
                bold: "Fight"
              },
              ": Nezarr grants you a ",
              { keyword: 67 },
              ": For the rest of the game, while it's your turn, the Mastermind gets ",
              { bold: "-" },
              { icon: 1 },
              " equal to a fifth of its printed ",
              { icon: 1 },
              ". ",
              { italic: "(round down the loss)" }
            ],
            [
              {
                bold: "Escape"
              },
              ": The Mastermind gains ",
              { rule: 1 },
              " equal to a fifth of its printed ",
              { icon: 1 },
              { italic: " (rounded down)." }
            ]
          ]
        },
        {
          name: "Gammenon, The Gatherer",
          qtd: 2,
          vp: "3",
          vAttack: "10",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 4 },
              " or ",
              { hc: 2 },
            ],
            [
              {
                bold: "Fight"
              },
              ": Gammenon grants you a ",
              { keyword: 67 },
              ": For the rest of the game, whenever you fight a Villain, rescue a Bystander."
            ],
            [
              {
                bold: "Escape"
              },
              ": Three Villains in the city each capture a Bystander."
            ]
          ]
        },
        {
          name: "Exitar, The Exterminator",
          qtd: 2,
          vp: "5",
          vAttack: "12",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 5 },
              " or ",
              { hc: 3 },
            ],
            [
              {
                bold: "Fight"
              },
              ": Exitar grants you a ",
              { keyword: 67 },
              ": For the rest of the game, once during each of your turns, you may fight a Henchman from your Victory Pile. Spend the normal ",
              { icon: 1 },
              " then do the Henchman's Fight effect, KO it, and rescue a Bystander."
            ],
            [
              {
                bold: "Escape"
              },
              ": KO 5 Henchmen from the Villain Deck then shuffle it."
            ]
          ]
        },
        {
          name: "Arishem, The Judge",
          qtd: 1,
          vp: "5",
          vAttack: "13",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 3 },
              " or ",
              { hc: 4 },
            ],
            [
              {
                bold: "Fight"
              },
              ": Arishem grants you a ",
              { keyword: 67 },
              ": For the rest of the game, once during each of your turns, you may put a card from the HQ on the bottom of the Hero Deck."
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { italic: "(After the normal Escape KO)" },
              " Put each Hero that costs 5 or more from the HQ on the bottom of the Hero Deck."
            ]
          ]
        },
        {
          name: "Tiamut, The Dreaming Celestial",
          qtd: 1,
          vp: "6",
          vAttack: "14",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 2 },
              " or ",
              { hc: 1 },
            ],
            [
              {
                bold: "Fight"
              },
              ": Tiamut grants you a ",
              { keyword: 67 },
              ": Your hand size is one more for the rest of the game."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player's hand size is one less for the rest of the game."
            ]
          ]
        }
      ]
    },
    {
      id: 92,
      name: "From Beyond",
      cards: [
        {
          name: "The Mapmakers",
          qtd: 3,
          vp: "3",
          vAttack: "7",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 5 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "The Shaper of Worlds",
          qtd: 2,
          vp: "5",
          vAttack: "10",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 3 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": Create a “New Reality“ space that stays above the Shaper of Worlds. It always contains a Hero, like an HQ space. Players can recruit from it."
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose a player to gain that Hero."
            ],
            [
              {
                bold: "Escape"
              },
              ": After the normal Escape KO, destroy the New Reality space and destroy an HQ space. KO those Heroes. ",
              { italic: "(It doesn't refill. Any “Pocket Dimension“ stays in play.)" }
            ]
          ]
        },
        {
          name: "Kubik",
          qtd: 2,
          vp: "5",
          vAttack: "11",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 2 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": Each player must reveal two cards with the same non-zero cost or gain a Wound."
            ],
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Kosmos",
          qtd: 1,
          vp: "6",
          vAttack: "13",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 6 },
              " ",
              { hc: 1 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Take another turn after this one. Don't play a card from the Villain Deck at the start of that turn. For the rest of the game, players take turns in the opposite order around the table."
            ]
          ]
        }
      ]
    },
    {
      id: 93,
      name: "Black Order of Thanos",
      cards: [
        {
          name: "Corvus Glaive",
          qtd: 2,
          vp: "4",
          vAttack: "5+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 41, text: "Danger Sense 3" },
              ", helping all Black Order Villains and the Mastermind. Corvus Glaive captures a Bystander revealed this way."
            ]
          ]
        },
        {
          name: "Black Dwarf",
          qtd: 2,
          vp: "3",
          vAttack: "4+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 41, text: "Danger Sense 2" },
              ", helping all Black Order Villains and the Mastermind. Play a Master Strike revealed this way."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Supergiant",
          qtd: 2,
          vp: "5",
          vAttack: "6+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 41, text: "Danger Sense 1" },
              ", helping all Black Order Villains and the Mastermind. Play a Villain revealed this way."
            ],
            [
              {
                bold: "Fight"
              },
              ": You may KO a card from your discard pile."
            ]
          ]
        },
        {
          name: "Proxima Midnight",
          qtd: 1,
          vp: "5",
          vAttack: "7+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 41, text: "Danger Sense 2" },
              ", helping all Black Order Villains and the Mastermind. Play a Scheme Twist revealed this way."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals an ",
              { hc: 2 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Ebony Maw",
          qtd: 1,
          vp: "5",
          vAttack: "6+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Choose Villain, Master Strike, or Scheme Twist. Then ",
              { keyword: 41, text: "Danger Sense 3" },
              ", helping all Black Order Villains and the Mastermind. Play all the cards you revealed this way of the type you chose."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 130,
      name: "Contest of Champions, The",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Add an extra Hero. Put 11 random cards from the Hero Deck face up in a “Contest Row.“"
            ],
            [
              { bold: "Twist 1-4" },
              ": KO the leftmost card in the Contest Row, then ",
              { keyword: 68 },
              " for that cards color(s). Each player that loses discards a card. If the Mastermind wins, put a Wound next to this Scheme as an “Evil Triumph.“"
            ],
            [
              { bold: "Twist 5-8" },
              ": Same effect, but in the Contest, Evil selects from 4 cards from the Hero Deck."
            ],
            [
              { bold: "Twist 9-11" },
              ": Same effect, but in the Contest, Evil selects from 6 cards from the Hero Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 6 Evil Triumphs."
            ],
          ]
        },
      ]
    },
    {
      id: 131,
      name: "Turn the Soul of Adam Warlock",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 14 Twists ",
              { italic: "(using 3 Wounds to represent extra Scheme Twists)" },
              ". Put 14 Adam Warlock Hero cards in a face up stack, ordered from lowest-cost on top, to highest-cost on the bottom."
            ],
            [
              { bold: "Twist" },
              ": Set aside the top card of the Adam Warlock stack. This turn you may “Purify“ it by spending ",
              { icon: 1 },
              " equal to double its cost. If you do, choose a player to gain that card, then you rescue a Bystander, and you may KO one of your Heroes. If you don't do this by the end of your turn, put that Adam Warlock card into a “Soul's Corruption“ stack next to the Scheme."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 8 Souls Corruptions."
            ],
          ]
        },
      ]
    },
    {
      id: 132,
      name: "Destroy the Nova Corps",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Exactly one Hero must be a Nova Hero. 1 player: 5 Heroes. Each player's starting deck adds 2 Wounds, 1 S.H.I.E.L.D. Officer, and a Nova card that costs 2."
            ],
            [
              { bold: "Special Rules" },
              ": All S.H.I.E.L.D. Officers and a Nova Heroes count as “Nova Centurions.“"
            ],
            [
              { bold: "Twist 1-5" },
              ": Each player must reveal their hand and discard a Nova Centurion. Each player that discarded this way gains a ",
              { rule: 1, text: "Shard" },
              ". Each player that didn't discard this way must KO a card from the S.H.I.E.L.D. Officer Stack."
            ],
            [
              { bold: "Twist 6-9" },
              ": Each player must KO a Nova Centurion from the S.H.I.E.L.D. Officer Stack or from their hand or discard pile."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 KO'd Nova Centurions per player."
            ],
          ]
        },
      ]
    },
    {
      id: 133,
      name: "Annihilation: Conquest",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Add an extra Hero."
            ],
            [
              { bold: "Twist" },
              ": Put this Twist next to the Scheme as a “Phalanx Conquest.“ The highest-cost Hero from the HQ enters the city as a “Phalanx-Infected“ Villain."
            ],
            [
              { bold: "Special Rules" },
              ": Each “Phalanx-Infected“ Villain has ",
              { icon: 1 },
              " equal to its cost, ",
              { bold: "+1" },
              { icon: 1 },
              " for each two Phalanx Conquests. If you fight one, choose a player to gain it as a Hero."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 6 Phalanx-Infected in the city and/or Escape Pile, or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
  ]
}