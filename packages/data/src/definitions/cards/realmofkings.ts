import { CardSetDef } from '../cardTypes';

export const RealmOfKings: CardSetDef = {
  id: 29,
  heroes: [
    {
      id: 217,
      name: "Black Bolt",
      filterName: "Black Bolt (RoK)",
      team: 22,
      cards: [
        {
          name: "Break the Silence",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You may KO one of your cards with no rules text."
            ],
            { divider: true },
            [
              { hc: 3 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Worldess Murmur",
          hc: 3,
          rarity: 1,
          cost: 5,
          recruit: "1",
          attack: "3",
          abilities: [
            [

            ]
          ]
        },
        {
          name: "Declaration of War",
          hc: 5,
          rarity: 2,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { team: 22 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to reveal the top two cards of your deck. Put each of those cards with no rules text into your hand and put the rest back in any order."
            ]
          ]
        },
        {
          name: "The King's Speech",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              "Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to choose “Speak“ or “Don't Speak“ then reveal the top 3 cards of your deck:"
            ],
            { 
              points: [
                [
                  { bold: "Speak" },
                  ": Put all of them with rules text into your hand."
                ],
                [
                  { bold: "Don't Speak" },
                  ": You may KO any number of them with no rules text."
                ],
              ]
            },
            "Put the rest back in any order."
          ]
        }
      ]
    },
    {
      id: 218,
      name: "Medusa",
      team: 22,
      cards: [
        {
          name: "Queen of the Inhumans",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": Gain the ",
              { keyword: 70 },
              "."
            ],
            { divider: true },
            [
              "Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Splitting Hairs",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": Draw a card and gain the ",
              { keyword: 70 },
              "."
            ],
            { divider: true },
            [
              { hc: 2 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to draw a card."
            ]
          ]
        },
        {
          name: "Royal Command",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": Gain the ",
              { keyword: 70 },
              "."
            ],
            { divider: true },
            [
              { team: 22 },
              ": Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to KO one of your cards."
            ]
          ]
        },
        {
          name: "Headstrong",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": Draw two cards and gain the ",
              { keyword: 70 },
              "."
            ],
            { divider: true },
            [
              "Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to draw two cards."
            ]
          ]
        }
      ]
    },
    {
      id: 219,
      name: "Crystal",
      team: 22,
      cards: [
        {
          name: "Earth, Air, Fire, and Water",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              { hc: 2 },
              { hc: 1 },
              { hc: 3 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Master the Four Elements",
          hc: 2,
          rarity: 1,
          cost: 4,
          recruit: "1",
          abilities: [
            [
              "Choose ",
              { hc: 4 },
              ", ",
              { hc: 2 },
              ", ",
              { hc: 1 },
              ", or ",
              { hc: 3 },
              ". This card is only that Hero Class this turn."
            ],
            "Draw a card."
          ]
        },
        {
          name: "Elemental Princess",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You may KO one of your cards that isn't ",
              { hc: 4 },
              ", ",
              { hc: 2 },
              ", ",
              { hc: 1 },
              ", or ",
              { hc: 3 },
              "."
            ],
            { divider: true },
            [
              "Gain the ",
              { keyword: 70 },
              ". If you already have it, you may spend it to make this card ",
              { hc: 4 },
              ", ",
              { hc: 2 },
              ", ",
              { hc: 1 },
              ", and ",
              { hc: 3 },
              " this turn."
            ]
          ]
        },
        {
          name: "Weave Four Into One",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You may gain a ",
              { hc: 4 },
              ", ",
              { hc: 2 },
              ", ",
              { hc: 1 },
              ", or ",
              { hc: 3 },
              " Hero from the HQ that costs 4 or less. ",
              { italic: "(after refilling the HQ)" }
            ],
            { divider: true },
            [
              "Reveal the top four cards of your deck. Put a ",
              { hc: 4 },
              " Hero, a ",
              { hc: 2 },
              " Hero, a ",
              { hc: 1 },
              " Hero, and a ",
              { hc: 3 },
              " Hero from among them into your hand. Put the rest back in any order."
            ]
          ]
        }
      ]
    },
    {
      id: 220,
      name: "Karnak",
      team: 22,
      cards: [
        {
          name: "Brilliant Strategist",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            { divider: true },
            [
              { hc: 1 },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Find Fatal Flaw",
          hc: 2,
          rarity: 1,
          cost: 4,
          recruit: "0+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            { divider: true },
            [
              { rule: 12, text: "Choose a Villain Group" },
              ". You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Villain in your Victory Pile from that Group."
            ]
          ]
        },
        {
          name: "Shatter the Weak Point",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
            { divider: true },
            [
              { rule: 12, text: "Choose a Villain Group" },
              ". You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain in your Victory Pile from that Group."
            ]
          ]
        },
        {
          name: "Seek the Center",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You get ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ],
            { divider: true },
            [
              "Whenever you play a card this turn, including this one, you may first use that card's “When Recruited“ ability."
            ]
          ]
        }
      ]
    },
    {
      id: 221,
      name: "Gorgon",
      team: 22,
      cards: [
        {
          name: "Lockjaw, Inhuman's Best Friend",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You may ",
              { keyword: 1 },
              " a 0-cost Hero from your hand."
            ],
            { divider: true },
            [
              { hc: 1 },
              ": You may ",
              { keyword: 1 },
              " another card from your hand."
            ]
          ]
        },
        {
          name: "Stomping Shockwave",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": ",
              { keyword: 25, text: "Sewers Abomination" },
              " ",
              { italic: "(after refilling HQ)" }
            ],
            { divider: true },
            [
              { hc: 4 },
              ": ",
              { keyword: 25, text: "Streets Abomination" }
            ]
          ]
        },
        {
          name: "Trample Underhoof",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "1+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": You may KO one of your cards with no ",
              { icon: 1 },
              " icon."
            ],
            { divider: true },
            [
              { keyword: 25, text: "Highest Abomination" }
            ]
          ]
        },
        {
          name: "Lead the Inhuman Elite",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              { keyword: 69, text: "When Recruited" },
              ": ",
              { keyword: 25, text: "Bridge Abomination" },
              " ",
              { italic: "(after refilling HQ)" }
            ],
            { divider: true },
            { keyword: 1 },
            [
              { team: 22 },
              ": ",
              { keyword: 25, text: "Rooftops Abomination" }
            ]
          ]
        }
      ]
    },

  ],
  masterminds: [
    {
      id: 74,
      name: "Maximus the Mad",
      tacticName: "Maximus",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Maximus the Mad",
          vAttack: "8+",
          abilities: [
            { keyword: 25, text: "Highest Abomination" },
            [
              { bold: "Always Leads" },
              ": Inhuman Rebellion"
            ],
            [
              { bold: "Master Strike" },
              ": Reveal one of Maximus' remaining Mastermind Tactics at random. Use its Fight effect, then shuffle it back into those Tactics."
            ]
          ]
        },
        {
          name: "Epic Maximus the Mad",
          vAttack: "9+",
          epic: true,
          abilities: [
            { keyword: 25, text: "Double Highest Abomination" },
            [
              { bold: "Always Leads" },
              ": Inhuman Rebellion"
            ],
            [
              { bold: "Master Strike" },
              ": Reveal two different Tactics at random from Maximus' remaining Mastrmind Tactics. Then use each of those fight effects in the order that you revealed them. Then shuffle them back into those Tactics."
            ]
          ]
        },
        {
          name: "Echo-Tech Chorus Sentries",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each player KOs one of their ",
              { hc: 5 },
              " or ",
              { team: 22 },
              " Heroes or gains a Wound."
            ]
          ]
        },
        {
          name: "Sieve of Secrets",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each player reveals the top 6 cards of their deck, discards all the non-grey Heroes revealed, and puts the rest back in any order."
            ]
          ]
        },
        {
          name: "Seize the Inhuman Throne",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each player discards down to 4 cards. Maximus gains the ",
              { keyword: 70 },
              ". If he already has it, he spends it and each player discards down to 3 cards."
            ]
          ]
        },
        {
          name: "Terrigen Bomb",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put each Hero from the HQ that doesn't have a printed ",
              { icon: 1 },
              " of 2 or more on the bottom of the Hero Deck. Maximus gains the ",
              { keyword: 70 },
              ". If he already had it, he spends it and each player KOs one of their non-grey Heroes with an ",
              { icon: 1 },
              " icon."
            ]
          ]
        }
      ]
    },
    {
      id: 75,
      name: "Emperor Vulcan of the Shi'ar",
      tacticName: "Vulcan",
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Emperor Vulcan of the Shi'ar",
          vAttack: "10+",
          abilities: [
            [
              "Vulcan gets ",
              { bold: "+3" },
              { icon: 1 },
              " while he has the ",
              { keyword: 70 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Shi'ar Imperial Elite"
            ],
            [
              { bold: "Master Strike" },
              ": Each player that doesn't have the ",
              { keyword: 70 },
              " gains a Wound. Then Vulcan gains the ",
              { keyword: 70 },
              "."
            ]
          ]
        },
        {
          name: "Epic Emperor Vulcan",
          vAttack: "12+",
          epic: true,
          abilities: [
            [
              "Vulcan gets ",
              { bold: "+5" },
              { icon: 1 },
              " while he has the ",
              { keyword: 70 },
              ". He starts with the ",
              { keyword: 70 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Shi'ar Imperial Elite"
            ],
            [
              { bold: "Master Strike" },
              ": Each player that doesn't have the ",
              { keyword: 70 },
              " gains a Wound to the top of their deck. Then Vulcan gains the ",
              { keyword: 70 },
              "."
            ]
          ]
        },
        {
          name: "Blast Every Form of Energy",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If you have the ",
              { keyword: 70 },
              ", you may KO a card you played this turn, and you may KO a card from your discard pile."
            ],
            [
              "Then Vulcan gains the ",
              { keyword: 70 },
              "."
            ]
          ]
        },
        {
          name: "Vast Wealth of the Shi'ar",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If you have the ",
              { keyword: 70 },
              ", you get ",
              { bold: "+4" },
              { icon: 2 },
              "."
            ],
            [
              "Then Vulcan gains the ",
              { keyword: 70 },
              "."
            ]
          ]
        },
        {
          name: "Contempt for Weakness",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If Vulcan has the ",
              { keyword: 70 },
              ", each other player discards each of their cards that costs 2 or less."
            ],
            [
              "Then you gain the ",
              { keyword: 70 },
              "."
            ]
          ]
        },
        {
          name: "Solar Cage",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If Vulcan has the ",
              { keyword: 70 },
              ", each other player shuffles a Wound from the Wound Stack and a non-grey Hero from their hand into their deck."
            ],
            [
              "Then you gain the ",
              { keyword: 70 },
              "."
            ]
          ]
        }
      ]
    },
  ],
  villains: [
    {
      id: 94,
      name: "Inhuman Rebellion",
      cards: [
        {
          name: "Lineage",
          qtd: 2,
          vp: "2",
          vAttack: "3+",
          abilities: [
            { keyword: 25 },
            [
              {
                bold: "Fight"
              },
              ": Rescue Bystanders equal to the printed ",
              { icon: 1 },
              " of the Hero in the HQ space under Lineage."
            ]
          ]
        },
        {
          name: "Omega",
          qtd: 2,
          vp: "3",
          vAttack: "4+",
          abilities: [
            { keyword: 25 },
            [
              {
                bold: "Fight"
              },
              ": Choose “Alpha“ or “Omega.“ Then reveal the top card of your deck:"
            ],
            { 
              points: [
                [
                  { bold: "Alpha" },
                  ": If that card costs 0, KO it."
                ],
                [
                  { bold: "Omega" },
                  ": If that card costs 1 or more, draw it."
                ]
              ]
            }
          ]
        },
        {
          name: "Lash",
          qtd: 2,
          vp: "4",
          vAttack: "5+",
          abilities: [
            { keyword: 25 },
            [
              {
                bold: "Ambush"
              },
              ": Choose a Hero from the HQ that doesn't have a printed ",
              { icon: 1 },
              " of 2 or more. Put it on the bottom of the Hero Deck."
            ],
            [
              {
                bold: "Fight"
              },
              ": Gain a Hero from the HQ with no ",
              { icon: 1 },
              " icon that costs 4 or less."
            ]
          ]
        },
        {
          name: "The Unspoken",
          qtd: 2,
          vp: "5",
          vAttack: "5+",
          abilities: [
            { keyword: 25, text: "Double Abomination" },
            [
              {
                bold: "Ambush"
              },
              ": Choose a Hero from the HQ that doesn't have a printed ",
              { icon: 1 },
              " of 2 or more. Put it on the bottom of the Hero Deck. If there were no such Heroes, then each player gains a Wound instead."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes with no ",
              { icon: 1 },
              " icon."
            ]
          ]
        }
      ]
    },
    {
      id: 95,
      name: "Shi'ar Imperial Elite",
      cards: [
        {
          name: "Plutonia",
          qtd: 2,
          vp: "2",
          vAttack: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              "While the Mastermind has the ",
              { keyword: 70 },
              ", you must spend ",
              { icon: 2 },
              " to fight Plutonia instead of ",
              { icon: 1 },
              "."
            ],
            [
              {
                bold: "Ambush"
              },
              ": The Mastermind gains the ",
              { keyword: 70 },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": You gain the ",
              { keyword: 70 },
              ". If you already have it, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Starbolt",
          qtd: 2,
          vp: "3",
          vAttack: "4+",
          abilities: [
            [
              "While the Mastermind has the ",
              { keyword: 70 },
              ", Starbolt gets ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              {
                bold: "Ambush"
              },
              ": The Mastermind gains the ",
              { keyword: 70 },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": You gain the ",
              { keyword: 70 },
              ". If you already have it, you may KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Mentor",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": The Mastermind gains the ",
              { keyword: 70 },
              ". If they already have it, each player discards a card."
            ],
            [
              {
                bold: "Fight"
              },
              ": You gain the ",
              { keyword: 70 },
              ". If you already have it, draw two cards."
            ]
          ]
        },
        {
          name: "Gladiator",
          qtd: 2,
          vp: "5",
          vAttack: "7",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": The Mastermind gains the ",
              { keyword: 70 },
              ". If they already have it, each player gains a Wound."
            ],
            [
              {
                bold: "Fight"
              },
              ": You gain the ",
              { keyword: 70 },
              ". If you already have it, you may KO a card from your discard pile."
            ],
            [
              {
                bold: "Escape"
              },
              ": Repeat the Ambush effect."
            ],
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 134,
      name: "Ruin the Perfect Wedding",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Set aside two extra Heroes to get married. Prepare each Wedding Hero into a seperate 14-card stack, ordered by cost with the lowest cost on top."
            ],
            [
              { bold: "Twist 1" },
              ": Put one Wedding Hero Stack above the rightmost city space “at the altar.“ Gain its top card."
            ],
            [
              { bold: "Twist 2" },
              ": Put the other Wedding Hero Stack above the Mastermind space “at the door.“ Gain its top card."
            ],
            [
              { bold: "Twist 3-7" },
              ": Gain the top card of either Wedding Hero Stack. Then KO two cards from the top of each Wedding Hero Stack that has a Villain or Mastermind in the space immediately below it. Then the leftmost Hero Stack “walks down the aisle,“ moving one space to the right."
            ],
            [
              { bold: "Twist 8-11" },
              ": KO two cards from the top of each Wedding Hero Stack."
            ],
            [
              { bold: "Evil Wins" },
              ": When either Wedding Hero Stack is KO'd."
            ],
          ]
        },
      ]
    },
    {
      id: 135,
      name: "War of Kings",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists."
            ],
            [
              { bold: "Twist 1-8" },
              ": Stack this Twist next to the Scheme as a “Battlefront.“ This turn, you may pay ",
              { bold: "1" },
              { icon: 2 },
              " per Battlefront to supply the war:"
            ],
            { 
              points: [
                [
                  { bold: "If you pay" },
                  ": You gain the ",
                  { keyword: 70 },
                  ". You may KO one of your cards."
                ],
                [
                  { bold: "If you don't pay by the end of turn" },
                  ": Right after you draw a new hand, stack a card from the S.H.I.E.L.D. Officer Stack next to the Scheme as a “Victorious General.“ The Mastermind gains the ",
                  { keyword: 70 },
                  ". If they aleady have it, you gain a Wound."
                ]
              ] 
            },
            [
              { bold: "Twist 9-11" },
              ": Same effect, but with two Victorious Generals."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 6 Victorious Generals."
            ],
          ]
        },
      ]
    },
    {
      id: 136,
      name: "Tornado of Terrigen Mists",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists. Each player puts a small object above the sewers to represent themself."
            ],
            [
              { bold: "Special Rules" },
              ": You can't fight Villains outside the city space where you are. ",
              { italic: "(You can still recruit from all HQ spaces and fight the Mastermind.)" },
              " During your turn, you can spend ",
              { bold: "1" },
              { icon: 1 },
              " any number of times to move yourself one space left or right."
            ],
            [
              { bold: "Twist 1" },
              ": Put this Tornado Scheme card above the Sewers."
            ],
            [
              { bold: "Twist 2-5" },
              ": Each player in the Tornado space gains a Wound. Then move this Tornado card and each Villain simultaneously one space to the left. ",
              { italic: "(A Villain on the Bridge escapes.)" }
            ],
            [
              { bold: "Twist 6-9" },
              ": Same effect, but move them all to the right, if possible. ",
              { italic: "(A Villain in the Sewers doesn't move.)" }
            ],
            [
              { bold: "Twist 10" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 137,
      name: "Devolve with Xerogen Crystals",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Add Twists equal to the number of players plus 3. Add an extra Henchman Group of 10 cards as “Xerogen Experiments.“"
            ],
            [
              { bold: "Special Rules" },
              ": All Xerogen Experiments also have ",
              { keyword: 25 },
              "."
            ],
            [
              { bold: "Twist" },
              ": Choose a Hero in the HQ that doesn't have a printed ",
              { icon: 1 },
              " of 2 or more. Put it on the bottom of the Hero Deck. Then play two cards from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
  ]
}