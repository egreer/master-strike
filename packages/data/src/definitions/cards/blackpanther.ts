import { CardSetDef } from '../cardTypes';

export const BlackPanther: CardSetDef = {
  id: 34,
  heroes: [
    {
      id: 245,
      name: "King Black Panther",
      team: 24,
      cards: [
        {
          name: "Unseen Protector",
          hc: 2,
          hc2: 1,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              { team: 24 },
              " ",
              { keyword: 83 },
              ": Rescue a Bystander."
            ],
            { divider: true },
            [
              "Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Vibranium Claws",
          hc: 2,
          hc2: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              " ",
              { keyword: 83 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            { divider: true },
            [
              { hc: 2 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Heart-Shaped Herb",
          hc: 4,
          hc2: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { hc: 1 },
              " ",
              { keyword: 83 },
              ": Look at the top card of your deck. Draw it or KO it."
            ],
            { divider: true },
            [
              { hc: 1 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already had it, you may spend it to look at the top card of your deck. Draw it or KO it."
            ]
          ]
        },
        {
          name: "Unite the Tribes of Wakanda",
          hc: 4,
          hc2: 3,
          rarity: 3,
          cost: 8,
          attack: "5+",
          recruit: "0+",
          abilities: [
            [
              { team: 24 },
              " ",
              { keyword: 83 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class you have."
            ],
            { divider: true },
            [
              { team: 24 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already had it, you may spend it to get ",
              { bold: "+1" },
              { icon: 2 },
              " and ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class you have."
            ]
          ]
        }
      ]
    },
    {
      id: 246,
      name: "Queen Storm of Wakanda",
      team: 24,
      cards: [
        {
          name: "Hurricane Winds",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ],
            [
              { hc: 1 },
              ": You get ",
              { keyword: 51 },
              " by ",
              { hc: 1 },
              "."
            ]
          ]
        },
        {
          name: "Torrential Downpour",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 3 },
              " ",
              { keyword: 83 },
              ": You get ",
              { keyword: 51 },
              " by ",
              { hc: 3 },
              "."
            ],
            { divider: true },
            [
              { hc: 3 },
              ": You get ",
              { keyword: 51 },
              " by ",
              { hc: 3 },
              "."
            ]
          ]
        },
        {
          name: "Forked Lightning",
          hc: 1,
          hc2: 3,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Wound Villains on the Rooftops and Bridge."
            ],
            [
              { hc: 1 },
              { hc: 3 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already had it, you may spend it to ",
              { rule: 15, text: "Wound the Mastermind" },
              " twice."
            ]
          ]
        },
        {
          name: "Thunderous Tempest",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "Choose up to three Heroes from the HQ. Put them on the bottom of the Hero Deck."
            ],
            [
              { team: 24 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already had it, you may spend it to get ",
              { keyword: 51 },
              " by ",
              { hc: 1 },
              ", then get ",
              { keyword: 51 },
              " by ",
              { hc: 3 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 247,
      name: "Princess Shuri",
      team: 24,
      cards: [
        {
          name: "Vibranium Experiments",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              { hc: 5 },
              " ",
              { keyword: 83 },
              ": Draw a card."
            ],
            { divider: true },
            "Draw a card.",
            [
              { hc: 5 },
              ": You get ",
              { keyword: 51 },
              " by ",
              { hc: 5 },
              "."
            ]
          ]
        },
        {
          name: "Kimoyo Beads",
          hc: 5,
          hc2: 3,
          rarity: 1,
          cost: 4,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { keyword: 51 },
              " by the color of your choice, getting ",
              { icon: 2 },
              " instead of ",
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Shock Net",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              "You may put a card from the HQ on the bottom of the Hero Deck."
            ],
            [
              { hc: 3 },
              ": Then you get ",
              { keyword: 51 },
              " by the color of your choice."
            ]
          ]
        },
        {
          name: "Become the Next Black Panther",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "3+",
          recruit: "3",
          abilities: [
            [
              { team: 24 },
              ": This turn, each card entering the HQ also has “",
              { keyword: 83 },
              ": If you have any cards that share a color with this, you get ",
              { bold: "+2" },
              { icon: 1 },
              ".“"
            ]
          ]
        }
      ]
    },
    {
      id: 248,
      name: "General Okoye",
      team: 24,
      cards: [
        {
          name: "To My Last Breath",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              " ",
              { keyword: 83 },
              ": Draw a card."
            ],
            { divider: true },
            [
              { hc: 2 },
              ": You may draw a card and get ",
              { bold: "+1" },
              { icon: 1 },
              ". If you do, gain a Wound."
            ]
          ]
        },
        {
          name: "Lead the Dora Milaje",
          hc: 4,
          hc2: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            "You may gain a S.H.I.E.L.D. Officer.",
            [
              { hc: 4 },
              ": Instead, you may KO a S.H.I.E.L.D. Officer or Wound from your hand or discard pile to get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Sovereign Bodyguard",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Once per turn, when a player gains a Wound, you may reveal this card to return that Wound to the Wound Stack, draw a card, and ",
              { rule: 15, text: "Wound a Villain" },
              "."
            ]
          ]
        },
        {
          name: "Direct the Agents of Wakanda",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              { team: 24 },
              ": You may KO a ",
              { team: 2 },
              " Hero or Wound from your hand or discard pile to get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 249,
      name: "White Wolf",
      team: 24,
      cards: [
        {
          name: "Secret Assignment",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 1},
              " ",
              { keyword: 83 },
              ": ",
              { rule: 15, text: "Wound the Mastermind" },
              "."
            ],
            { divider: true },
            [
              { hc: 1 },
              ": If any ",
              { rule: 15, text: "Villain or Mastermind has any Wounds" },
              ", you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Cloaking Tech Ambush",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 5},
              " ",
              { keyword: 83 },
              ": ",
              { rule: 15, text: "Wound a Villain" },
              "."
            ],
            { divider: true },
            [
              { hc: 5 },
              ": ",
              { rule: 15, text: "Wound a Villain" },
              "."
            ]
          ]
        },
        {
          name: "Command the Hatut Zeraze",
          hc: 1,
          hc2: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { team: 24 },
              " ",
              { keyword: 83 },
              ": You may KO one of your cards."
            ],
            { divider: true },
            [
              { team: 24 },
              ": If any ",
              { rule: 15, text: "Villain or Mastermind has any Wounds" },
              ", you may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Reflective Vibranium Armor",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              { hc: 5 },
              " ",
              { keyword: 83 },
              ": ",
              { rule: 15, text: "Wound each Villain and the Mastermind" },
              "."
            ],
            { divider: true },
            [
              "If a Master Strike would occur, you may reveal this card to KO that Strike and ",
              { rule: 15, text: "Wound the Mastermind" },
              " instead."
            ]
          ]
        }
      ]
    },

  ],
  masterminds: [
    {
      id: 85,
      name: "Killmonger",
      vp: 4,
      vAttack: "5",
      cards: [
        {
          name: "Killmonger",
          vAttackAsterisk: true,
          abilities: [
            [
              "While Killmonger has more than ",
              { bold: "0" },
              { icon: 1 },
              ", you cannot fight him. Instead, you may spend ",
              { icon: 1 },
              " equal to his ",
              { icon: 1 },
              " to ",
              { rule: 15, text: "Wound him" },
              " and get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Killmonger's League"
            ],
            [
              { bold: "Master Strike" },
              ": Each player must reveal 4 different Hero Classes or gain one of the ",
              { rule: 15, text: "Wounds on Killmonger" },
              ". Any player who can't do either must discard down to 4 cards."
            ]
          ]
        },
        {
          name: "Epic Killmonger",
          vAttack: "6",
          vAttackAsterisk: true,
          epic: true,
          abilities: [
            [
              "While Killmonger has more than ",
              { bold: "0" },
              { icon: 1 },
              ", you cannot fight him. Instead, you may spend ",
              { icon: 1 },
              " equal to his ",
              { icon: 1 },
              " to ",
              { rule: 15, text: "Wound him" },
              " and get ",
              { bold: "+1" },
              { icon: 2 },
              ". When you do fight him, each other player gains one of ",
              { rule: 15, text: "his Wounds" },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Killmonger's League"
            ],
            [
              { bold: "Master Strike" },
              ": Each player gains a Wound. Gain them from ",
              { rule: 15, text: "Killmonger's Wounds" },
              " if possible."
            ]
          ]
        },
        {
          name: "A Scar for Every Kill",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each non-Henchman Villain in your Victory Pile."
            ]
          ]
        },
        {
          name: "Rite of Challenge",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each player with no Killmonger Tactics in their Victory Pile gains a ",
              { rule: 15, text: "Wound that was on Killmonger" },
              ". ",
              { italic: "(You have this Tactic, so you won't gain a Wound.)" }
            ]
          ]
        },
        {
          name: "Throw from the Waterfall",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Draw two cards. Then each other player discards a card."
            ]
          ]
        },
        {
          name: "Altar of Resurrection",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The player on your left chooses a non-Henchman Villain from their Victory Pile. It enters the city with a ",
              { rule: 15, text: "Wound on it" },
              ". Then the player on your right does the same effect. ",
              { italic: "(In solo, you do both.)" }
            ]
          ]
        },
      ]
    },
    {
      id: 86,
      name: "Klaw",
      vp: 6,
      vAttack: "8",
      cards: [
        {
          name: "Klaw",
          vAttack: "8+",
          abilities: [
            [
              "Klaw is ",
              { keyword: 51, text: "Double Empowered" },
              " by the color(s) of his “Sonic Frequency“."
            ],
            [
              { bold: "Always Leads" },
              ": Enemies of Wakanda"
            ],
            [
              { bold: "Master Strike" },
              ": Put the top card of the Hero Deck next to Klaw as a “Sonic Frequency,“ putting any previous Frequency on the bottom of the Hero Deck. Each player must reveal a card that shares a color with it or gain a Wound."
            ]
          ]
        },
        {
          name: "Epic Klaw",
          vAttack: "10+",
          epic: true,
          abilities: [
            [
              "Klaw is ",
              { keyword: 51, text: "Quadruple Empowered" },
              " by the color(s) of his “Sonic Frequency“."
            ],
            [
              { bold: "Always Leads" },
              ": Enemies of Wakanda"
            ],
            [
              { bold: "Master Strike" },
              ": Put the top card of the Hero Deck next to Klaw as a “Sonic Frequency.“ Put any previous Frequency and each card from the HQ that does not share a color with the new Frequency on the bottom of the Hero Deck. Each player gains a Wound."
            ]
          ]
        },
        {
          name: "Cohesive Sound Construct",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. This Tactic enters the city as a Villain whose only ability is “Escape: This card becomes a Master Strike that takes effect immediately.“"
            ]
          ]
        },
        {
          name: "Convert Matter to Sound",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player simultaneously KOs one of their non-grey Heroes. Put one of those cards with the lowest cost next to Klaw as his new Sonic Frequency. Put any previous Frequency on the bottom of the Hero Deck.",
            ]
          ]
        },
        {
          name: "Ultrasonic Boom",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put the top card of the Hero Deck next to Klaw as a Sonic Frequency. Each other player must discard a card that shares a color with it. Put any previous Frequency on the bottom of the Hero Deck."
            ]
          ]
        },
        {
          name: "Cruelty Provokes Resistance",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Set aside all Heroes from the HQ that do not share any colors with Klaw's Sonic Frequency. Gain one of them. Put the rest on the bottom of the Hero Deck. Then refill the empty HQ spaces.",
            ]
          ]
        },
      ]
    }
  ],
  villains: [
    {
      id: 106,
      name: "Killmonger's League",
      cards: [
        {
          name: "Preyy",
          qtd: 2,
          vAttack: "3",
          vAttackAsterisk: true,
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals an ",
              { hc: 2 },
              " Hero or gains a ",
              { rule: 15, text: "Wound that was on a Mastermind or Villain" },
              "."
            ],
            [
              "While Preyy has more than ",
              { bold: "0" },
              { icon: 1 },
              ", you cannot fight him. Instead, you may spend ",
              { icon: 1 },
              " equal to his ",
              { icon: 1 },
              " to ",
              { rule: 15, text: "Wound him" },
              " and draw a card."
            ]
          ]
        },
        {
          name: "Malice",
          qtd: 2,
          vAttack: "4",
          vAttackAsterisk: true,
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Return a ",
              { rule: 15, text: "Wound from the Mastermind and from each Villain" },
              " to the Wound Stack."
            ],
            [
              "While Malice has more than ",
              { bold: "0" },
              { icon: 1 },
              ", you cannot fight her. Instead, you may spend ",
              { icon: 1 },
              " equal to her ",
              { icon: 1 },
              " to ",
              { rule: 15, text: "Wound her" },
              " and rescue a Bystander."
            ]
          ]
        },
        {
          name: "Baron Macabre",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": A Villain from your Victory Pile enters the city. ",
              { rule: 15, text: "Wound that Villain" },
              ". Then ",
              { rule: 15, text: "Wound Baron Macabre" },
              " a number of times equal to that Villain's VP."
            ]
          ]
        },
        {
          name: "Venomm",
          qtd: 2,
          vAttack: "9",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { rule: 15, text: "Wound Venomm" },
              ". Each player may discard a card to ",
              { rule: 15, text: "Wound Venomm" },
              " again."
            ],
            [
              {
                bold: "Escape"
              },
              ": Choose which players gain each of ",
              { rule: 15, text: "Venomm's Wounds" },
              ", dividing them as evenly as possible."
            ]
          ]
        },
      ]
    },
    {
      id: 107,
      name: "Enemies of Wakanda",
      cards: [
        {
          name: "Nightshade",
          qtd: 2,
          vAttack: "3+",
          vp: "2",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 5 },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each ",
              { hc: 5 },
              " Hero in the HQ."
            ],
          ]
        },
        {
          name: "Jakarra",
          qtd: 2,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 4 },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Tetu",
          qtd: 2,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 3 },
              "."
            ],
            [
              {
                bold: "Ambush"
              },
              ": Put a Hero from the HQ that isn't ",
              { keyword: 51, text: "Empowering" },
              " any Enemies of Wakanda on the bottom of the Hero Deck."
            ],
            [
              {
                bold: "Fight"
              },
              ": Same effect. ",
              { italic: "(Tetu isn't in the city.)" }
            ]
          ]
        },
        {
          name: "Zenzi",
          qtd: 1,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 2 },
              "."
            ],
            [
              {
                bold: "Ambush"
              },
              ": Zenzi captures a Bystander for each ",
              { hc: 2 },
              " Hero in the HQ."
            ]
          ]
        },
        {
          name: "Reverend Achebe",
          qtd: 1,
          vAttack: "6+",
          vp: "5",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 1 },
              "."
            ],
            [
              {
                bold: "Escape"
              },
              ": Reverend Achebe becomes a Scheme Twist that takes effect immediately."
            ]
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 158,
      name: "Seize the Wakandan Throne",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists.",
            ],
            [
              { bold: "Twist" },
              ": If the Mastermind has the ",
              { keyword: 70 },
              ", they spend it to stack this Twist next to the Scheme as a “Tribe of Wakanda Defeated.“ Otherwise: The Mastermind gains the ",
              { keyword: 70 },
              ", shuffle this Twist back into the Villain Deck, and then play a card from the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Whenever you fight the Mastermind, you gain the ",
              { keyword: 70 },
              "."
            ],
            [
              { bold: "Evil Wins" },
              ": When the 5 Tribes of Wakanda have been defeated."
            ],
          ]
        },
      ]
    },
    {
      id: 159,
      name: "Poison Lakes with Nanite Microbots",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Twists equal to 5 plus the number of players. 30 Wounds in the Wound Stack.",
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme as an “Infected Nanite.“ ",
              { rule: 15, text: "Wound the Mastermind" },
              ". Then for each Infected Nanite, Wound a Hero in the HQ, dividing these new Wounds as evenly as possible."
            ],
            [
              { bold: "Special Rules" },
              ": Whenever you recruit a Hero (or it leaves the HQ), pay ",
              { bold: "1" },
              { icon: 2 },
              " less for each wound on it and choose players to gain those Wounds, dividing them as evenly as possible. Whenever a Wound is KO'd from anywhere, return it to the bottom of the Wound Stack."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Wound Stack or Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 160,
      name: "Plunder Wakanda's Vibranium",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists, representing “Vibranium.“",
            ],
            [
              { bold: "Twist" },
              ": Put any Vibranium from the city into the Escape Pile. A Bystander enters the city as a ",
              { bold: "3" },
              { icon: 1 },
              " “Smuggler“ Villain with “Fight: Rescue this as a Bystander.“ Then the highest ",
              { icon: 1 },
              " Villain captures this Twist. Put the top card of the Hero Deck next to the Scheme as a “Vibranium Attunement,“ putting any previous Attunement on the bottom of the Hero Deck."
            ],
            [
              { bold: "Special Rules" },
              ": A Villain holding Vibranium is ",
              { keyword: 51 },
              " by the colors of the Vibranium Attunement. When you defeat them, put the Vibranium in your Victory Pile, worth 3VP."
            ],
            [
              { bold: "Evil Wins" },
              ": When 4 Vibranium are in the Escape Pile or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 161,
      name: "Provoke a Clash of Nations",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists.",
            ],
            [
              { bold: "Twist 1-8" },
              ": Without talking, all players simultaneously vote with a Fist, Palm, or 2 Fingers. Break ties at random. Then only you discard your hand and draw six cards. You must do the voted task below by the end of this turn or stack this Twist next to the Mastermind as an “International Crisis“."
            ],
            {
              points: [
                [
                  { bold: "Fist" },
                  ": “War“ - Defeat a non-Henchman Villain or Mastermind Tactic."
                ],
                [
                  { bold: "Palm" },
                  ": “Diplomacy“ - Play three Heroes that share a Hero Class."
                ],
                [
                  { bold: "Two Fingers" },
                  ": “Commerce“ - Recruit two Heroes from the HQ."
                ],
              ]
            },
            [
              { bold: "Twist 9-11" },
              ": Do all three tasks this turn or add an International Crisis."
            ],
            [
              { bold: "Evil Wins" },
              ": At 6 International Crises."
            ],
          ]
        },
      ]
    },
  ]
}