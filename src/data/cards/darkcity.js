export default {
  heroes: [
    {
      id: 16,
      name: "Angel",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Diving Catch",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "When a card effect causes you to discard this card, rescue a Bystander and draw two cards.",
            ]
          ]
        },
        {
          name: "High-Speed Chase",
          hc: 1,
          rarity: 1,
          cost: 3,
          abilities: [
            "Draw two cards, then discard a card."
          ]
        },
        {
          name: "Drop off a Friend",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You may discard a card. You get ",
              {
                bold: "+"
              },
              {
                icon: 1
              },
              " equal to that card's ",
              { icon: 3 },
              "."
            ]
          ]
        },
        {
          name: "Strength of Spirit",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Discard any number of cards. Draw that many cards."
            ]
          ]
        }
      ]
    },
    {
      id: 17,
      name: "Bishop",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Absorb Energies",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          recruit: "0+",
          abilities: [
            [
              "Whenever a card you own is KO'd this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Whatever the Cost",
          hc: 3,
          rarity: 1,
          cost: 2,
          abilities: [
            "Draw a card.",
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Concussive Blast",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              {
                hc: 3
              },
              {
                hc: 3
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Firepower from the Future",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Discard the top four cards of your deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to those cards' printed",
              { icon: 1 },
              ". "
            ],
            [
              {
                team: 4
              },
              ": KO any number of those cards."
            ]
          ]
        }
      ]
    },
    {
      id: 18,
      name: "Blade",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Night Hunter",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2",
          recruit: "0+",
          abilities: [
            [
              "Whenever you defeat a Villain in the Sewers or Rooftops this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Stalk the Prey",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
          ]
        },
        {
          name: "Nowhere to Hide",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Whenever you defeat a Villain in the Sewers or Rooftops this turn, draw two cards."
            ]
          ]
        },
        {
          name: "Vampiric Surge",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain in your Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 19,
      name: "Cable",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Disaster Survivalist",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When a Master Strike is played, before it takes effect, you may discard this card. If you do, draw three extra cards at the end of this turn."
            ]
          ]
        },
        {
          name: "Strike at the Heart of Evil ",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              " only when fighting Masterminds."
            ]
          ]
        },
        {
          name: "Rapid Response Force",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              {
                keyword: 1
              }
            ],
            [
              {
                team: 7
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each other",
              {
                team: 7
              },
              "Hero you played this turn."
            ]
          ]
        },
        {
          name: "Army of One",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "KO any number of cards from your hand. You get  ",
              { bold: "+1" },
              { icon: 1 },
              " for each card KO'd this way."
            ]
          ]
        }
      ]
    },
    {
      id: 20,
      name: "Colossus",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Draw Their Fire",
          hc: 4,
          rarity: 1,
          cost: 1,
          attack: "3",
          abilities: [
            [
              "You gain a Wound."
            ]
          ]
        },
        {
          name: "Invulnerability",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "If you would gain a Wound, you may discard this card instead. If you do, draw two cards."
            ]
          ]
        },
        {
          name: "Silent Statue",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              {
                hc: 4
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Russian Heavy Tank",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "If another player would gain a Wound, you may reveal this card to gain that Wound and draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 21,
      name: "Daredevil",
      filterName: "Daredevil (DC)",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Backflip",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When you play Backflip, the next Hero you recruit this turn goes on top of your deck."
            ]
          ]
        },
        {
          name: "Radar Sense",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If the card is that ",
              {
                icon: 3
              },
              ", you get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Blind Justice",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If the card is that ",
              {
                icon: 3
              },
              ", draw it."
            ]
          ]
        },
        {
          name: "The Man Without Fear ",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "7",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If the card is that ",
              {
                icon: 3
              },
              ", draw it and repeat this process."
            ]
          ]
        }
      ]
    },
    {
      id: 22,
      name: "Domino",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Lucky Break ",
          hc: 5,
          rarity: 1,
          cost: 1,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                team: 7
              },
              ": ",
              {
                keyword: 3
              },
              {
                bold: " 1"
              }
            ]
          ]
        },
        {
          name: "Ready for Anything",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              {
                keyword: 3
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Specialized Ammunition",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "You may discard a card from your hand. If that card had a ",
              {
                icon: 2
              },
              " icon, you get ",
              {
                bold: "+4"
              },
              {
                icon: 2
              },
              ". If that card had an ",
              {
                icon: 1
              },
              " icon, you get ",
              {
                bold: "+4"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Against All Odds",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              {
                keyword: 3
              },
              {
                bold: " 5"
              }
            ],
            [
              {
                team: 7
              },
              ": This card and each other Versatile ability you use for the rest of this turn produces both",
              {
                icon: 2
              },
              "and",
              {
                icon: 1
              },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 23,
      name: "Elektra",
      set: 3,
      team: 6,
      cards: [
        {
          name: "First Strike",
          hc: 1,
          rarity: 1,
          cost: 1,
          attack: "1+",
          abilities: [
            [
              "If this is the first card you played this turn, you get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Ninjitsu",
          hc: 2,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              {
                hc: 1
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        },
        {
          name: "Sai Blades",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each Hero you played this turn that costs ",
              {
                bold: "1"
              },
              {
                icon: 3
              },
              " or ",
              {
                bold: "2"
              },
              {
                icon: 3
              },
              "."
            ]
          ]
        },
        {
          name: "Silent Meditation",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "5+",
          abilities: [
            [
              "When you play Silent Meditation, the next Hero you recruit this turn goes into your hand."
            ],
            [
              {
                team: 6
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 24,
      name: "Forge",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Dirty Work",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                hc: 5
              },
              ": Any Villain you fight in the Sewers this turn gets ",
              {
                bold: "-2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Reboot",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              {
                hc: 5
              },
              ": You may discard a card. If you do, draw two cards."
            ]
          ]
        },
        {
          name: "Overdrive",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              {
                keyword: 3
              },
              {
                bold: " 3"
              }
            ]
          ]
        },
        {
          name: "B.F.G.",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              {
                hc: 5
              },
              {
                hc: 5
              },
              ": Defeat the Mastermind once for free."
            ]
          ]
        }
      ]
    },
    {
      id: 25,
      name: "Ghost Rider",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Blazing Hellfire",
          hc: 3,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You may KO a Villain from your Victory Pile. If you do, you get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Hell on Wheels",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              {
                team: 6
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        },
        {
          name: "Infernal Chains",
          hc: 4,
          rarity: 2,
          cost: 2,
          abilities: [
            "Draw a card.",
            [
              {
                hc: 4
              },
              ": Defeat a Villain of ",
              {
                bold: " 3"
              },
              {
                icon: 1
              },
              " or less for free."
            ]
          ]
        },
        {
          name: "Penance Stare",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            [
              "Each player KOs a Villain from their Victory Pile. You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each Villain KO'd this way."
            ],
            [
              {
                team: 6
              },
              ": Put one of those Villains into your Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 26,
      name: "Iceman",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Deep Freeze",
          hc: 3,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              {
                hc: 3
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "for each other ",
              {
                hc: 3
              },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Ice Slide",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              {
                hc: 3
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each other ",
              {
                hc: 3
              },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Frost Spike Armor",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "Draw a card.",
            [
              {
                hc: 3
              },
              ": Draw a card for each ",
              {
                hc: 3
              },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Impenetrable Ice Wall",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "7",
          abilities: [
            [
              "If a Villain, Master Strike, or Mastermind Tactic would cause you to gain any Wounds or discard any cards, you may reveal this card instead."
            ]
          ]
        }
      ]
    },
    {
      id: 27,
      name: "Iron Fist",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Focus Chi ",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "for each Hero with a different ",
              {
                icon: 3
              },
              " you have."
            ]
          ]
        },
        {
          name: "Wield the Iron Fist",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each Hero with a different ",
              {
                icon: 3
              },
              " you have."
            ]
          ]
        },
        {
          name: "Ancient Legacy",
          hc: 4,
          rarity: 2,
          cost: 1,
          attack: "0+",
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              {
                hc: 4
              },
              {
                hc: 4
              },
              ": ",
              {
                keyword: 3
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Living Weapon",
          hc: 4,
          rarity: 3,
          cost: 9,
          attack: "8",
          abilities: [
            [
              "Reveal cards from your deck until you have revealed two cards with the same ",
              {
                icon: 3
              },
              ". Draw all the cards you revealed."
            ]
          ]
        }
      ]
    },
    {
      id: 28,
      name: "Jean Grey",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Psychic Search",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                team: 4
              },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Read Your Thoughts",
          hc: 1,
          rarity: 1,
          cost: 5,
          recruit: "3+",
          abilities: [
            [
              "Whenever you rescue a Bystander this turn, you get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        },
        {
          name: "Mind Over Matter",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            "Whenever you rescue a Bystander this turn, draw a card."
          ]
        },
        {
          name: "Telekinetic Mastery",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              "Whenever you rescue a Bystander this turn, you get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "."
            ],
            [
              {
                team: 4
              },
              ": Rescue a Bystander for each other ",
              {
                team: 4
              },
              " Hero you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 29,
      name: "Nightcrawler",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Bamf!",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 1
              }
            ]
          ]
        },
        {
          name: "Blend Into Shadows",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            {
              keyword: 1
            }
          ]
        },
        {
          name: "Swashbuckler",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              {
                hc: 2
              },
              {
                hc: 1
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Along for the Ride",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              {
                keyword: 1
              }
            ],
            [
              "When you play or ",
              {
                keyword: 1
              },
              " this card, you may also ",
              {
                keyword: 1
              },
              " up to three other cards from your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 30,
      name: "Professor X",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Psionic Astral Form",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { team: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Class Dismissed",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "You may put a Hero from the HQ on the bottom of the Hero Deck.",
            [
              { hc: 2 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Telepathic Probe",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "Reveal the top card of the Villain Deck. If it's a Bystander, you may rescue it. If it's a Villain, you may fight it this turn."
          ]
        },
        {
          name: "Mind Control",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Whenever you defeat a Villain this turn, you may gain it. It becomes a grey Hero with no text that gives ",
              { bold: "+" },
              { icon: 1 },
              " equal to its ",
              { icon: 1 },
              ". ",
              { italic: "( You still get its " },
              { icon: 4 },
              { italic: ".)" }
            ]
          ]
        }
      ]
    },
    {
      id: 31,
      name: "Punisher",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Boom Goes the Dynamite ",
          hc: 5,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Reveal the top card of your deck. If it costs 0",
              {
                icon: 3
              },
              ", KO it."
            ],
            [
              {
                hc: 5
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Hail of Bullets",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "Reveal the top card of the Villain Deck. If it's a Villain, you get ",
              {
                bold: "+"
              },
              {
                icon: 1
              },
              " equal to its printed ",
              {
                icon: 4
              },
              "."
            ],
            [
              {
                hc: 5
              },
              {
                hc: 5
              },
              ": You may defeat that Villain for free."
            ]
          ]
        },
        {
          name: "Hostile Interrogation",
          hc: 4,
          rarity: 2,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              {
                hc: 4
              },
              ": Each other player reveals the top card of their deck. If that card costs 4",
              {
                icon: 3
              },
              " or more, discard it. You get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              " for each card discarded this way."
            ]
          ]
        },
        {
          name: "The Punisher",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4+",
          dense: true,
          abilities: [
            [
              "Reveal cards from the Hero Deck until you have revealed two cards with the same ",
              {
                icon: 3
              },
              ". You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " for each card revealed this way. Put them on the bottom of the Hero Deck in random order."
            ]
          ]
        }
      ]
    },
    {
      id: 32,
      name: "Wolverine",
      filterName: "Wolverine (DC)",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Animal Instincts",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            "Draw a card.",
            [
              {
                hc: 2
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Sudden Ambush",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you drew any extra cards this turn, you get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "No Mercy",
          hc: 4,
          rarity: 2,
          cost: 4,
          abilities: [
            [
              "Draw a card.",
            ],
            [
              "You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Reckless Abandon",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3",
          abilities: [
            [
              "Count the number of extra cards you drew this turn. Draw that many cards."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 5,
      name: "Apocalypse",
      set: 3,
      attack: "12",
      vp: 6,
      cards: [
        {
          name: "Apocalypse",
          dense: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Four Horsemen"
            ],
            [
              "Four Horsemen Villains get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Apocalypse Wins" },
              ": When Famine, Pestilence, War, and Death have escaped."
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals their hand and puts all their Heroes that cost 1 ",
              { icon: 3 },
              " or more on top of their deck."
            ]
          ]
        },
        {
          name: "Apocalyptic Destruction",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs two Heroes from their discard pile that each cost 1 ",
              { icon: 3 },
              " or more."
            ]
          ]
        },
        {
          name: "The End of All Things",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals the top three cards of their deck, KOs each one of those cards that cost 1 ",
              { icon: 3 },
              " or more, and puts the rest back in any order."
            ]
          ]
        },
        {
          name: "Horsemen Are Drawing Nearer",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player plays a Four Horsemen Villain from their Victory Pile as if playing it from the Villain Deck."
            ]
          ]
        },
        {
          name: "Immortal and Undefeated",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, rescue six Bystanders and shuffle this Tactic back into the other Tactics."
            ]
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Kingpin",
      set: 3,
      attack: "13",
      vp: 6,
      cards: [
        {
          name: "Kingpin",
          attackAsterisk: true, 
          abilities: [
            { keyword: 2 },
            [
              { bold: "Always Leads" },
              ": Streets of New York"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { team: 6 },
              " Hero or discards their hand and draws 5 cards."
            ]
          ]
        },
        {
          name: "Call a Hit",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose a Hero from each player's discard pile and KO it."
            ]
          ]
        },
        {
          name: "Criminal Empire",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, reveal the top three cards of the Villain Deck. Play all the Villains you revealed. Put the rest back in random order."
            ]
          ]
        },
        {
          name: "Dirty Cops",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put a 0 ",
              { icon: 3 },
              " Hero from the KO pile on top of each other player's deck."
            ]
          ]
        },
        {
          name: "Mob War",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player plays a Henchman Villain from their Victory Pile as if playing it from the Villain Deck."
            ]
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Mephisto",
      set: 3,
      attack: "10",
      vp: 6,
      cards: [
        {
          name: "Mephisto",
          abilities: [
            "Whenever a player gains a Wound, put it on top of that player's deck.",
            [
              { bold: "Always Leads" },
              ": Underworld"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { team: 6 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Damned If You Do...",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs a Bystander from their Victory Pile or gains a Wound."
            ]
          ]
        },
        {
          name: "Devilish Torment",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player puts all 0 ",
              { icon: 3 },
              " cards from their discard pile on top of their deck in any order."
            ]
          ]
        },
        {
          name: "Pain Begets Pain",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose any number of Wounds from your hand and discard pile. The player to your right gains them."
            ]
          ]
        },
        {
          name: "The Price of Failure",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player without a Mastermind Tactic in their Victory Pile gains a Wound."
            ]
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Mr. Sinister",
      set: 3,
      attack: "8",
      vp: 6,
      cards: [
        {
          name: "Mr. Sinister",
          attack: "8+",
          dense: true,
          abilities: [
            [
              "Mr. Sinister gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander he has."
            ],
            [
              { bold: "Always Leads" },
              ": Marauders"
            ],
            [
              { bold: "Master Strike" },
              ": Mr. Sinister captures a Bystander. Then each player with exactly 6 cards reveals a ",
              { hc: 1 },
              " Hero or discards cards equal to the number of Bystanders Mr. Sinister has."
            ]
          ]
        },
        {
          name: "Human Experimentation",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Mr. Sinister captures Bystanders equal to the number of Villains in the city."
            ]
          ]
        },
        {
          name: "Master Geneticist",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top seven cards of the Villain Deck. Mr. Sinister captures all of the Bystanders you revealed. Put the rest back in random order."
            ]
          ]
        },
        {
          name: "Plans Within Plans",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Mr. Sinister captures a Bystander for each Mr. Sinister Tactic in players' Victory Piles, including this Tactic."
            ]
          ]
        },
        {
          name: "Telepathic Manipulation",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Mr. Sinister captures a Bystander from each other player's Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Stryfe",
      set: 3,
      attack: "7",
      vp: 6,
      cards: [
        {
          name: "Stryfe",
          attack: "7+",
          abilities: [
            [
              { bold: "Always Leads" },
              ": MLF"
            ],
            [
              { bold: "Master Strike" },
              ": Stack this Master Strike next to Stryfe. Stryfe gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Master Strike stacked next to him. Each player reveals a ",
              { team: 7 },
              " Hero or discards a card at random."
            ]
          ]
        },
        {
          name: "Furious Wrath",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top six cards of the Villain Deck. Play all the Master Strikes you revealed. Put the rest back in random order."
            ]
          ]
        },
        {
          name: "Psychic Torment",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top five cards of your deck. Put one into your hand and discard the rest."
            ]
          ]
        },
        {
          name: "Swift Vengeance",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": A Wound from the Wound Stack becomes a Master Strike that takes effect immediately."
            ]
          ]
        },
        {
          name: "Tide of Retribution",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals an ",
              { team: 7 },
              " Hero or gains a Wound."
            ]
          ]
        }
      ]
    },


  ]
}