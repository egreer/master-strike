import { CardSetDef } from '../cardTypes';

export const CivilWar: CardSetDef = {
  id: 13,
  heroes: [
    {
      id: 106,
      name: "Captain America, Secret Avenger",
      team: 1,
      cards: [
        {
          name: "Bold Leadership",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-secret-avenger-03.png",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Hero Class you have."
            ]
          ]
        },
        {
          name: "Inspire a Nation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-secret-avenger-04.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          divided: 1,
          abilities: [
            [
              "Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Inspire a Man",
          subtitle: "Battlestar",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          divided: 2,
          abilities: []
        },
        {
          name: "Secret Avengers Assemble!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-secret-avenger-02.png",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { rule: 11, text: "Sidekick" },
              " and other ",
              { team: 1 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Freedom Never Dies",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-secret-avenger-01.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Whenever you play a ",
              { rule: 11, text: "Sidekick" },
              " or another ",
              { team: 1 },
              " Hero this turn set that card aside. At the end of your turn, put those cards on the bottom of your deck in random order before you draw your new hand."
            ]
          ]
        },

      ]
    },
    {
      id: 107,
      name: "Cloak & Dagger",
      team: 1,
      cards: [
        {
          name: "Above",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cloak-and-dagger-03.png",
          subtitle: "Cloak",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          divided: 1,
          abilities: []
        },
        {
          name: "Below",
          subtitle: "Dagger",
          team: 6,
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          divided: 2,
          abilities: [
            [
              "You get ",
              { bold: "+3" },
              { icon: 2 },
              " usable only to recruit Heroes in the HQ space under the Sewers."
            ]
          ]
        },
        {
          name: "Flee",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cloak-and-dagger-04.png",
          subtitle: "Cloak",
          hc: 1,
          rarity: 1,
          cost: 4,
          divided: 1,
          recruit: "2+",
          abilities: [
            { keyword: 27 },
            [
              { hc: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Fight",
          subtitle: "Dagger",
          team: 6,
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          divided: 2,
          abilities: [
            { keyword: 27 },
            [
              { hc: 3 },
              " You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Darkness",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cloak-and-dagger-02.png",
          subtitle: "Cloak",
          hc: 1,
          rarity: 2,
          cost: 6,
          divided: 1,
          attack: "3",
          abilities: [
            [
              { hc: 1 },
              ": Reveal the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Light",
          subtitle: "Dagger",
          team: 6,
          hc: 3,
          rarity: 2,
          cost: 6,
          recruit: "3",
          divided: 2,
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of your deck. If it costs 1 or more, draw it."
            ]
          ]
        },
        {
          name: "Penumbra",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cloak-and-dagger-01.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Whenever you play a ",
              { rule: 4 },
              " card this turn, play both sides as if they were two different cards."
            ]
          ]
        },

      ]
    },
    {
      id: 108,
      name: "Daredevil",
      filterName: "Daredevil (Civil War)",
      team: 1,
      cards: [
        {
          name: "Dual Existence",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-04-1.png",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Look at the top two cards of your deck. Draw one and put the other back."
            ]
          ]
        },
        {
          name: "Roundhouse Side Kick",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-03-1.png",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If that card is that cost, gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Hidden Identity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-02-1.png",
          hc: 2,
          rarity: 2,
          cost: 6,
          divided: 1,
          recruit: "3",
          abilities: [
            [
              "The next Hero you recruit this turn goes on top of your deck."
            ]
          ]
        },
        {
          name: "Revealed Identity",
          subtitle: "Iron Fist",
          team: 6,
          hc: 4,
          rarity: 2,
          cost: 6,
          divided: 2,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different cost of Hero you have."
            ]
          ]
        },
        {
          name: "Master of Martial Arts",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/daredevil-01-1.png",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              { team: 1 },
              ": Discard the top two cards of your deck. If they have different costs, you get ",
              { bold: "+2" },
              { icon: 1 },
              ", then repeat this process."
            ]
          ]
        },

      ]
    },
    {
      id: 109,
      name: "Falcon",
      team: 1,
      cards: [
        {
          name: "Rapid Reinforcements",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-04-1.png",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            "Put a Hero from the HQ on the bottom of the Hero Deck.",
            [
              { hc: 5 },
              ": If that Hero had a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Talk with Birds",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-03-1.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          divided: 1,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Squawk Back",
          subtitle: "Redwing",
          hc: 2,
          rarity: 1,
          cost: 4,
          divided: 2,
          abilities: [
            [
              "Look at the top three cards of your deck. Draw one. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Scout the Battlefield",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-02-1.png",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card in the HQ with an ",
              { icon: 1 },
              " icon."
            ]
          ]
        },
        {
          name: "Fly in a Friend",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/falcon-01-1.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              { team: 1 },
              ": You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the printed ",
              { icon: 1 },
              " of a Hero in the HQ."
            ]
          ]
        },

      ]
    },
    {
      id: 110,
      name: "Goliath",
      team: 1,
      cards: [
        {
          name: "Brilliant Biochemist",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/goliath-04.png",
          hc: 5,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 1,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ]
          ]
        },
        {
          name: "Massive Warrior",
          hc: 4,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 2,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ]
          ]
        },
        {
          name: "Growth Industry",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/goliath-03.png",
          hc: 5,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            [
              { hc: 5 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Being Big is Best",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/goliath-02.png",
          hc: 4,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "3+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you played this turn that costs 4 or more."
            ]
          ]
        },
        {
          name: "Enormous Implications",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/goliath-01.png",
          hc: 4,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the cost of another card you played this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 111,
      name: "Hercules",
      team: 1,
      cards: [
        {
          name: "Manly Dullard",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hercules-03.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          divided: 1,
          attack: "3",
          abilities: [
            [
              "To play this, you must discard a card from your hand."
            ]
          ]
        },
        {
          name: "Boy Genius",
          subtitle: "Amadeus Cho",
          team: 0,
          hc: 5,
          rarity: 1,
          cost: 3,
          divided: 2,
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Crowd Favorite",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hercules-04.png",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": Whenever you defeat a Villain this turn, rescue a Bystander."
            ],
          ]
        },
        {
          name: "Prince of Power",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hercules-02.png",
          hc: 4,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              { hc: 4 },
              ": Reveal the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Son of Zeus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hercules-01.png",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Rescue a Bystander. Then, you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in your Victory Pile."
            ],
            [
              { team: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Bystander in your Victory Pile."
            ]
          ]
        },

      ]
    },
    {
      id: 112,
      name: "Hulkling",
      team: 1,
      cards: [
        {
          name: "Half-Kree",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkling-03.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 1,
          recruit: "3",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "Gain a Wound."
            ]
          ]
        },
        {
          name: "Half-Skrull",
          hc: 1,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 2,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ]
          ]
        },
        {
          name: "Cellular Regeneration",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkling-04.png",
          hc: 4,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Impersonate",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkling-02.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ],
            [
              "Play this card as a copy of another Hero you played this turn. This card is both ",
              { hc: 1 },
              " and the class and color you copy."
            ]
          ]
        },
        {
          name: "Enormous Shapeshifter",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulkling-01.png",
          hc: 1,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "4+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ],
            [
              { hc: 1 },
              ": You get ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 113,
      name: "Luke Cage",
      team: 1,
      cards: [
        {
          name: "Cautious",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-03.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          divided: 1,
          attack: "2",
          abilities: []
        },
        {
          name: "Reckless",
          subtitle: "Jessica Jones",
          team: 6,
          hc: 2,
          rarity: 1,
          cost: 3,
          divided: 2,
          attack: "3",
          abilities: [
            [
              "Gain a Wound."
            ]
          ]
        },
        {
          name: "Take a Bullet for the Team",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-04.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              "If any player would gain a Wound, you may discard this card instead. If you do, draw two cards."
            ],
          ]
        },
        {
          name: "Sweet Christmas",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-02.png",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { hc: 2 },
              ": Look at the top three cards of your deck. Discard them all or put them back in any order."
            ]
          ]
        },
        {
          name: "Unbreakable Skin",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/luke-cage-01.png",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              { team: 1 },
              ": ",
              { keyword: 28 },
              " the Wound Stack. While it's fortified, players can't gain Wounds. At the beginning of your next turn, put this card in your discard pile."
            ]
          ]
        },

      ]
    },
    {
      id: 114,
      name: "Patriot",
      team: 1,
      cards: [
        {
          name: "New Generation of Heroes",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/patriot-04.png",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Hero Name among your non-",
              { team: 2 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Intuitive Tactician",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/patriot-03.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Name among your non-",
              { team: 2 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Incredible Effort",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/patriot-02.png",
          hc: 1,
          rarity: 2,
          cost: 5,
          divided: 1,
          attack: "1+",
          abilities: [
            [
              { hc: 1 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Effortless",
          subtitle: "Hawkeye",
          hc: 5,
          rarity: 2,
          cost: 5,
          divided: 2,
          recruit: "3",
          abilities: []
        },
        {
          name: "Lead the Young Avengers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/patriot-01.png",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "3",
          abilities: [
            [
              "Reveal the top three cards of your deck. If you revealed at least three different Hero Names this way, draw those three cards. Otherwise, put them back in any order."
            ]
          ]
        },

      ]
    },
    {
      id: 115,
      name: "Peter Parker",
      team: 1,
      cards: [
        {
          name: "Conflicted Loyalties",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-04.png",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              { hc: 5 },
              ": Reveal the top card of your deck. If it costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "Spider-Man Unmasked",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-03.png",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ],
            [
              { hc: 2 },
              ": Put that ",
              { rule: 11, text: "Sidekick" },
              " on top of your deck."
            ]
          ]
        },
        {
          name: "Protect My Family",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-02.png",
          hc: 5,
          rarity: 2,
          cost: 2,
          divided: 1,
          attack: "1",
          abilities: [
            [
              "Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Hot Bowl of Soup",
          subtitle: "Aunt May",
          team: 3,
          hc: 2,
          rarity: 2,
          cost: 2,
          divided: 2,
          recruit: "1",
          abilities: [
            "You may KO a Wound from your hand or discard pile."
          ]
        },
        {
          name: "Reluctant Celebrity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/peter-parker-01.png",
          hc: 2,
          rarity: 3,
          cost: 2,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each extra card you've drawn this turn.",
            ]
          ]
        },

      ]
    },
    {
      id: 116,
      name: "Speedball",
      team: 16,
      cards: [
        {
          name: "Reckless Rescue Attempt",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/speedball-03.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of the Villain Deck. If it's a Villain, rescue a Bystander. Otherwise, KO a Bystander from the Bystander Deck."
            ]
          ]
        },
        {
          name: "Bounce Around",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/speedball-04.png",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": If there are any Bystanders in the city or KO pile, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Double Down",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/speedball-02.png",
          hc: 3,
          rarity: 2,
          cost: 5,
          divided: 1,
          abilities: [
            [
              "Draw two cards."
            ]
          ]
        },
        {
          name: "Bubble Up",
          subtitle: "Namorita",
          hc: 1,
          rarity: 2,
          cost: 5,
          divided: 2,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+3" },
              { icon: 1 },
              " usable only against Villains on the Bridge or against the Mastermind."
            ]
          ]
        },
        {
          name: "Kinetic Force Field",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/speedball-01.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "If a Master Strike would occur, you may reveal this card to KO that Master Strike, cancel its effects, and draw a card."
            ]
          ]
        },

      ]
    },
    {
      id: 117,
      name: "Stature",
      team: 1,
      cards: [
        {
          name: "Shrink to Nothing",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stature-04.png",
          hc: 5,
          rarity: 1,
          cost: 2,
          costAsterisk: true,
          attack: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            "Draw a card.",
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Crush Ants",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stature-03.png",
          hc: 4,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          divided: 1,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": Defeat a Villain that has ",
              { bold: "3" },
              { icon: 1 },
              " or less."
            ]
          ]
        },
        {
          name: "Crush File Sizes",
          subtitle: "Iron Lad",
          hc: 5,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          divided: 2,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            [
              { hc: 5 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Growing Confidence",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stature-02.png",
          hc: 4,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain in your Victory Pile that has a printed ",
              { icon: 1 },
              " 3 or less."
            ]
          ]
        },
        {
          name: "Trample the Tiny",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/stature-01.png",
          hc: 4,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "5",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": Defeat each Villain that has 4 ",
              { icon: 1 },
              " or less."
            ]
          ]
        },

      ]
    },
    {
      id: 118,
      name: "Storm & Black Panther",
      team: 4,
      cards: [
        {
          name: "Gathering Rain Clouds",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-and-storm-04.png",
          subtitle: "Storm",
          hc: 3,
          rarity: 1,
          cost: 2,
          recruit: "1",
          divided: 1,
          abilities: [
            [
              { hc: 3 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Gathering Clues",
          subtitle: "Black Panther",
          team: 1,
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          divided: 2,
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Lightning Strike",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-and-storm-03.png",
          subtitle: "Storm",
          hc: 3,
          rarity: 1,
          cost: 3,
          divided: 1,
          attack: "2",
          abilities: [
            [
              "Any Villain you fight on the Rooftops this turn gets ",
              { bold: "-1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Pouncing Strike",
          subtitle: "Black Panther",
          team: 1,
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          divided: 2,
          abilities: [
            [
              "You may move a Villain to an adjacent empty city space."
            ]
          ]
        },
        {
          name: "Tsunami of Water",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-and-storm-02.png",
          subtitle: "Storm",
          hc: 3,
          rarity: 2,
          cost: 5,
          divided: 1,
          attack: "3",
          abilities: [
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " usable only against the Mastermind."
            ]
          ]
        },
        {
          name: "Tsunami of Justice",
          subtitle: "Black Panther",
          team: 1,
          hc: 1,
          rarity: 2,
          cost: 5,
          divided: 2,
          attack: "3",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "King & Queen of Wakanda",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-panther-and-storm-01-1.png",
          team: 1,
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Reveal any number of multi-class cards from your hand. Gain that many ",
              { rule: 11 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 119,
      name: "Tigra",
      team: 1,
      cards: [
        {
          name: "Friendship",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tigra-03.png",
          hc: 1,
          rarity: 1,
          cost: 2,
          divided: 1,
          recruit: "1",
          abilities: [
            [
              { hc: 1 },
              ": Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Ferocity",
          hc: 2,
          rarity: 1,
          cost: 2,
          divided: 2,
          attack: "1",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Supernatural Senses",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tigra-04.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 2 },
              { hc: 2 },
              ": You may KO the card you discarded this way."
            ],
          ]
        },
        {
          name: "Can't Surprise a Cat",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tigra-02.png",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              "If an Ambush effect would occur, you may discard this card to cancel that effect and draw two cards."
            ]
          ]
        },
        {
          name: "Mystic Talisman",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/tigra-01.png",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Recruit a Hero from the HQ for free."
            ],
            [
              { team: 1 },
              ": You get that Hero's printed ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 120,
      name: "Vision",
      team: 1,
      cards: [
        {
          name: "Solar Energy",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vision-04.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 27 },
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Through Solid Objects",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vision-03.png",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            { keyword: 27 },
            [
              "Choose a Hero Class. Reveal the top card of your deck. If it's the Hero Class you named, then draw it."
            ]
          ]
        },
        {
          name: "Lighter than Air",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vision-02.png",
          hc: 3,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          divided: 1,
          recruit: "3",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 3 }
            ],
            { keyword: 27 }
          ]
        },
        {
          name: "Harder than Diamond",
          hc: 5,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          divided: 2,
          attack: "3",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            { keyword: 27 }
          ]
        },
        {
          name: "Insubstantial Accomplishments",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/vision-01.png",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            { keyword: 27 },
            [
              "When you play this, you may swap a card from your hand with the top two cards of your deck."
            ]
          ]
        },

      ]
    },
    {
      id: 121,
      name: "Wiccan",
      team: 1,
      cards: [
        {
          name: "Sorcerous Illusions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wiccan-04.png",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            { keyword: 27 },
            [
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Astral Projection",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wiccan-03.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 27 },
            [
              "Choose a number, and then reveal the top card of your deck. If that card is that cost, then you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Supersonic Spells",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wiccan-02.png",
          hc: 3,
          rarity: 2,
          cost: 4,
          divided: 1,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Supersonic Speed",
          subtitle: "Speed",
          hc: 1,
          rarity: 2,
          cost: 4,
          divided: 2,
          abilities: [
            "Draw a card.",
            [
              { hc: 1 },
              ": Draw another card."
            ]
          ]
        },
        {
          name: "Clairvoyance",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wiccan-01.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "3",
          abilities: [
            [
              "Choose a number, and then reveal the top card of your deck. If that card is that cost, draw it and draw another card."
            ]
          ]
        },

      ]
    },
  ],
  masterminds: [
    {
      id: 31,
      name: "Authoritarian Iron Man",
      vAttack: "12",
      vp: 6,
      cards: [
        {
          name: "Authoritarian Iron Man",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/authoritarian-iron-man-01.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Superhuman Registration Act"
            ],
            [
              { bold: "Master Strike" },
              ": Authoritarian Iron Man ",
              { keyword: 28, text: "fortifies" },
              " the next city space to his right, starting with the Bridge. You can't fight him while there's a Villain in that space. Villains in that space get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Armada of Armors",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/authoritarian-iron-man-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+6" },
              { icon: 2 },
              " usable only to recruit ",
              { hc: 3 },
              " and/or ",
              { hc: 5 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Freeze Domestic Assets",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/authoritarian-iron-man-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards all their cards with ",
              { icon: 2 },
              " icons."
            ]
          ]
        },
        {
          name: "Man the Fortifications",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/authoritarian-iron-man-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top card of the Villain Deck. If it's a Villain, it enters the city space that Authoritarian Iron Man is fortifying."
            ]
          ]
        },
        {
          name: "Recall to Service",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/authoritarian-iron-man-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The Villain with the highest printed ",
              { icon: 1 },
              " in the Escape Pile enters the city space that Authoritarian Iron Man is fortifying."
            ]
          ]
        }
      ]
    },
    {
      id: 32,
      name: "Baron Helmut Zemo",
      tacticName: "Helmut Zemo",
      vAttack: "16",
      vp: 6,
      cards: [
        {
          name: "Baron Helmut Zemo",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-helmut-zemo-01.png",
          vAttackAsterisk: true,
          abilities: [
            [
              "Baron Zemo gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each Villain in your Victory Pile."
            ],
            [
              { bold: "Always Leads" },
              ": Thunderbolts"
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs a Villain from their Victory Pile. Any player who cannot do so gains a Wound."
            ]
          ]
        },
        {
          name: "Blasted Henchmen!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-helmut-zemo-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or KOs a Villain from their Victory Pile."
            ]
          ]
        },
        {
          name: "Cursed Dynasty",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-helmut-zemo-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand of cards at the end of this turn, draw two extra cards."
            ]
          ]
        },
        {
          name: "Endless Minions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-helmut-zemo-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or chooses a Villain from their Victory Pile and it enters the city."
            ]
          ]
        },
        {
          name: "Revenge for My Father",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/baron-helmut-zemo-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand. Each player who revealed an ",
              { team: 1 },
              " Hero gains a Wound."
            ]
          ]
        }
      ]
    },
    {
      id: 33,
      name: "Maria Hill, Director of S.H.I.E.L.D.",
      tacticName: "Maria Hill",
      vAttack: "7",
      vp: 6,
      cards: [
        {
          name: "Maria Hill, Director of S.H.I.E.L.D.",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/maria-hill-01.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 29, text: "Double S.H.I.E.L.D. Clearance" },
              ". You can't fight Maria Hill while there are any S.H.I.E.L.D. Elite or Officers in the city."
            ],
            [
              { bold: "Always Leads" },
              ": S.H.I.E.L.D. Elite"
            ],
            [
              { bold: "Master Strike" },
              ": Two S.H.I.E.L.D. Officers enter the city as 3",
              { icon: 1 },
              " Villains. When you fight them, gain them as Heroes."
            ]
          ]
        },
        {
          name: "Crash the Helicarrier",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/maria-hill-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO any number of your ",
              { team: 2 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Declare Martial Law",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/maria-hill-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put a S.H.I.E.L.D. Officer into each empty city space as 3",
              { icon: 1 },
              " Villains. When you fight them, gain them as Heroes."
            ]
          ]
        },
        {
          name: "Evacuation Code Epsilon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/maria-hill-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards a ",
              { team: 2 },
              " card."
            ]
          ]
        },
        {
          name: "Rapid Response Team",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/maria-hill-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Two S.H.I.E.L.D. Officers enter the city as 3",
              { icon: 1 },
              " Villains. When you fight them, gain them as Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 34,
      name: "Misty Knight",
      vAttack: "14",
      vp: 6,
      cards: [
        {
          name: "Misty Knight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/misty-knight-01.png",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 2 },
            [
              { bold: "Always Leads" },
              ": Heroes for Hire"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals 4 cards with ",
              { icon: 2 },
              " icons or gains a Wound."
            ]
          ]
        },
        {
          name: "Bionic Repulsor Field",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/misty-knight-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 6 },
              " Hero or puts two cards from their hand on top of the deck."
            ]
          ]
        },
        {
          name: "Cyborg Detective",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/misty-knight-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top three cards of the Villain Deck. Put them back in any order."
            ]
          ]
        },
        {
          name: "Trusted Bodyguard",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/misty-knight-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Going clockwise, the first other player with Colleen Wing in their Victory Pile rescues 5 Bystanders and returns Colleen Wing to play ",
              { keyword: 28, text: "fortifying" },
              " Misty Knight."
            ]
          ]
        },
        {
          name: "Vibranium Cyber Arm",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/misty-knight-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 6 },
              " Hero or gains a Wound."
            ]
          ]
        }
      ]
    },
    {
      id: 35,
      name: "Ragnarok",
      vAttack: "6",
      vp: 6,
      cards: [
        {
          name: "Ragnarok",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ragnarok-01.png",
          vAttack: "6+",
          abilities: [
            [
              "Ragnarok gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Hero Class among Heroes in the HQ.",
            ],
            [
              { bold: "Always Leads" },
              ": Registration Enforcers"
            ],
            [
              { bold: "Master Strike" },
              ": Each player says “zero“ or “not zero.“ Then, each player discards all their cards with that cost."
            ]
          ]
        },
        {
          name: "Electrical Charge",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ragnarok-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Count how many ",
              { hc: 3 },
              " Heroes you have. Draw that many cards."
            ]
          ]
        },
        {
          name: "God of Cyborg Thunder",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ragnarok-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You can spend ",
              { icon: 2 },
              " as ",
              { icon: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Hammer Goliath",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ragnarok-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO each Hero from the HQ that costs 7 or more."
            ]
          ]
        },
        {
          name: "Unnatural Storm Clouds",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ragnarok-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put all Heroes from the HQ on the bottom of the Hero Deck in random order."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 19,
      name: "Mandroid",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/mandroid.png",
      vAttack: "2+",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              "This gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each other Mandroid in your Victory Pile."
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
      id: 20,
      name: "Cape-Killers",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/cape-killers.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          vAttackAsterisk: true,
          abilities: [
            { keyword: 29 },
            [
              { bold: "Fight" },
              ": KO a card from your discard pile."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 42,
      name: "CSA Special Marshals",
      cards: [
        {
          name: "Bullseye",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/csa-special-marshals-03.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO one of your heroes with a ",
              { icon: 2 },
              " icon."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player KOs one of their Heroes that has printed ",
              { icon: 1 },
              " of 2 or more."
            ]
          ]
        },
        {
          name: "Moonstone",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/csa-special-marshals-04.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each other player discards two cards, and then draws a card."
            ]
          ]
        },
        {
          name: "Penance",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/csa-special-marshals-01.png",
          qtd: 2,
          vAttack: "2+",
          vp: "3",
          abilities: [
            [
              "Penance gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain in your Victory Pile."
            ]
          ]
        },
        {
          name: "Venom",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/csa-special-marshals-02.png",
          qtd: 2,
          vAttack: "7",
          vp: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              ": ",
              { hc: 1 }
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the Bystander Stack. While it's fortified, if a Bystander would be rescued from there, KO that Bystander instead."
            ]
          ]
        }
      ]
    },
    {
      id: 43,
      name: "Great Lakes Avengers",
      cards: [
        {
          name: "Big Bertha",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/great-lakes-avengers-01.png",
          qtd: 2,
          vAttack: "7",
          vp: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              ": ",
              { hc: 4 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Flatman",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/great-lakes-avengers-04.png",
          qtd: 2,
          vAttack: "5",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              ": ",
              { hc: 1 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO a card from your discard pile."
            ]
          ]
        },
        {
          name: "Mr. Immortal",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/great-lakes-avengers-03.png",
          qtd: 2,
          vAttack: "2",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of the Villain Deck. If it's a Villain or Bystander, Mr. Immortal reenters the Sewers."
            ]
          ]
        },
        {
          name: "Squirrel Girl",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/great-lakes-avengers-02.png",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              "You can't fight Squirrel Girl if you played more than one card this turn."
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the Sidekick Stack. While it's fortified, ",
              { rule: 11 },
              " can't be recruited or gained."
            ]
          ]
        }
      ]
    },
    {
      id: 44,
      name: "Heroes for Hire",
      cards: [
        {
          name: "Colleen Wing",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heroes-for-hire-04.png",
          qtd: 2,
          vAttack: "9",
          vp: "5",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 2 },
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the Mastermind. While it's fortified, the Mastermind can't be fought."
            ]
          ]
        },
        {
          name: "Humbug",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heroes-for-hire-03.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 2 },
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Shang-Chi",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heroes-for-hire-02.png",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 2 },
            [
              {
                bold: "Fight"
              },
              ": If you have any cards in your discard pile, then shuffle them into your deck, and Shang-Chi reenters the Sewers."
            ]
          ]
        },
        {
          name: "Tarantula",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/heroes-for-hire-01.png",
          qtd: 2,
          vAttack: "7",
          vp: "5",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 2 },
            [
              {
                bold: "Fight"
              },
              ": Each player discards two cards or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        }
      ]
    },
    {
      id: 45,
      name: "Registration Enforcers",
      cards: [
        {
          name: "Blade",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/registration-enforcers-03.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": If you fight Blade in the Sewers or Rooftops, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Captain Marvel",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/registration-enforcers-04.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player swaps a card from their hand with the top card of their deck."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player swaps their hand with the top four cards of their deck."
            ]
          ]
        },
        {
          name: "Deadpool",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/registration-enforcers-01.png",
          qtd: 2,
          vAttack: "5",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a card that costs 5 or discards down to 5 cards."
            ],
            [
              {
                bold: "Fight"
              },
              ": Same effect."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Micromax",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/registration-enforcers-02.png",
          qtd: 2,
          vAttack: "6",
          vp: "3",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              ": ",
              { hc: 2 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 46,
      name: "S.H.I.E.L.D. Elite",
      cards: [
        {
          name: "Agent Eric Marshall",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shield-elite-02.png",
          qtd: 2,
          vAttack: "1",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 29 },
            [
              {
                bold: "Ambush"
              },
              ": A S.H.I.E.L.D. Officer enters the city as a ",
              { bold: "3" },
              { icon: 1 },
              " Villain. When you fight it, gain it as a Hero."
            ]
          ]
        },
        {
          name: "Agent Gabe Jones",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shield-elite-01.png",
          qtd: 2,
          vAttack: "2",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 29 },
            [
              {
                bold: "Fight"
              },
              ": A S.H.I.E.L.D. Officer enters the city as a ",
              { bold: "3" },
              { icon: 1 },
              " Villain. When you fight it, gain it as a Hero."
            ]
          ]
        },
        {
          name: "Dum Dum Dugan",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shield-elite-04.png",
          qtd: 2,
          vAttack: "4",
          vp: "3",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 29 },
            [
              {
                bold: "Fight"
              },
              ": Each player with no S.H.I.E.L.D. Officers in their discard pile gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Sharon Carter, Agent 13",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shield-elite-03.png",
          qtd: 2,
          vAttack: "6",
          vp: "5",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 29 },
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the S.H.I.E.L.D. Officer stack. While it's fortified, whenever any number of S.H.I.E.L.D. Officers become Villains, an extra one becomes a Villain."
            ]
          ]
        }
      ]
    },
    {
      id: 47,
      name: "Superhuman Registration Act",
      cards: [
        {
          name: "Iron Spider",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/superhuman-registration-act-02.png",
          qtd: 2,
          vAttack: "2",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 28 },
              " your deck. While Iron Spider fortifies a players deck, that player draws one fewer card at the end of their turn."
            ],
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of the Villain Deck. If that card is worth 2VP or less, Iron Spider fortifies the deck of the player on your left."
            ]
          ]
        },
        {
          name: "Ms. Marvel",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/superhuman-registration-act-03.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " an HQ space. While its fortified, Heroes can't be gained from that space."
            ]
          ]
        },
        {
          name: "She-Hulk",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/superhuman-registration-act-04.png",
          qtd: 2,
          vAttack: "8",
          vp: "5",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              ": ",
              { hc: 4 }
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the Villain deck. When a Master Strike is completed from that deck, each player gains a Wound and She-Hulk enters the Sewers."
            ]
          ]
        },
        {
          name: "Yellowjacket",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/superhuman-registration-act-01.png",
          qtd: 2,
          vAttack: "7",
          vp: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              ": ",
              { hc: 5 }
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the Hero Deck. While it's fortified, whenever a Hero in the HQ costs 7 or more, KO that Hero."
            ]
          ]
        }
      ]
    },
    {
      id: 48,
      name: "Thunderbolts",
      cards: [
        {
          name: "Fixer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/thunderbolts-02.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Look at the top three cards of your deck. KO one and put the rest back in any order."
            ]
          ]
        },
        {
          name: "Mach-IV",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/thunderbolts-04.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Radioactive Man",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/thunderbolts-03.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 28 },
              " the Wound Stack. While it's fortified, whenever a player gains a Wound, that player gains an extra Wound."
            ]
          ]
        },
        {
          name: "Songbird",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/thunderbolts-01.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player without another Thunderbolts Villain in their Victory Pile gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 60,
      name: "Avengers vs. X-Men",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/70Scheme(87).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Hero Deck has 3 Heroes of one Team and 3 Heroes of another Team. (",
              { team: 1 },
              ",",
              { team: 4 },
              ",",
              { team: 3 },
              ",",
              { team: 6 },
              ", etc.)"
            ],
            [
              { bold: "Twist 1-7" },
              ": Each player reveals their hand. Each player that has cards of both those teams gains a Wound."
            ],
            [
              { bold: "Twist 8" },
              ": Evil wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 61,
      name: "Dark Reign of H.A.M.M.E.R. Officers",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/71Scheme(88).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme. Then, for each Twist in that stack, put a S.H.I.E.L.D. Officer next to the Mastermind as a ",
              { bold: "3" },
              { icon: 1 },
              " Villain with ",
              { keyword: 29 },
              ". You can fight them to gain them as Heroes."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 7 Officers next to the Mastermind."
            ],
          ]
        },
      ]
    },
    {
      id: 62,
      name: "Epic Super Hero Civil War",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/69Scheme(86).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 1 player: 4 Heroes in Hero Deck. 1-3 players: 9 Twists. 4-5 players: 6 Twists."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme. Then, for each Twist in that stack, KO a Hero from the HQ and immediately refill that HQ space."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Hero Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 63,
      name: "Imprison Unregistered Superhumans",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/64Scheme(14).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists."
            ],
            [
              { bold: "Twist 1, 3, 5, 7, 9" },
              ": This Scheme ",
              { keyword: 28, text: "fortifies " },
              " the city space to its right starting with the Bridge. Villains in that space get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Other Twists" },
              ": If there's a Villain in that fortified city space, KO a Bystander."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Bystanders are in the KO pile and/or Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 64,
      name: "Nitro the Supervillain Threatens Crowds",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/67Scheme(84).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": KO all Bystanders held by Villains. Then, the Villain with the highest ",
              { icon: 1 },
              " captures 3 Bystanders."
            ],
            [
              { bold: "Evil Wins" },
              ": When 15 Bystanders are in the KO pile and/or Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 65,
      name: "Predict Future Crime",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/66Scheme(83).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Add an extra Villain Group."
            ],
            [
              { bold: "Twist" },
              ": Reveal the top 3 cards of the Villain Deck. Play each Villain you revealed. Put the rest back in any order."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 2 Villains per player in the Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 66,
      name: "Reveal Heroes' Secret Identities",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/65Scheme(82).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. 7 Heroes in Hero Deck."
            ],
            [
              { bold: "Twist" },
              ": Put a Hero from the HQ next to the Scheme as an “Unmasked“ Hero. All cards with “Unmasked“ Hero Names cost ",
              { bold: "+1" },
              { icon: 2 },
              " to recruit. You can't Unmask a Hero Name that has already been Unmasked."
            ],
            [
              { bold: "Evil Wins" },
              ": When 5 Heroes are Unmasked."
            ],
          ]
        },
      ]
    },
    {
      id: 67,
      name: "United States Split by Civil War",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/68Scheme(85).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists."
            ],
            [
              { bold: "Twist" },
              ": If there is a Villain on the Streets or Bridge, put this Twist in a stack of “Western States Victories.“ Otherwise, if there is a Villain in the Sewers, put this Twist in a stack of “Eastern States Victories.“"
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 3 Western Victories or 3 Eastern Victories."
            ],
          ]
        },
      ]
    },
  ],
  bystanders: [
    {
      id: 19,
      name: "Aspiring Hero",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-aspiring-hero.png",
      vp: 1,
      cards: [
        {
          qtd: 4,
          abilities: [
            [
              "When you rescue this Bystander, gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 20,
      name: "Comic Shop Keeper",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-comic-shop-keeper.png",
      vp: 1,
      cards: [
        {
          qtd: 3,
          abilities: [
            [
              "When you rescue this Bystander, reveal the top three cards of the Hero Deck. The player of your choice gains one of them that costs 3 or less. Put the rest back in any order."
            ]
          ]
        }
      ]
    },
  ],
  wounds: [
    {
      id: 3,
      name: "Blinding Flash",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_blindingflash.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 2,
          abilities: [
            [
              { bold: "Healing" },
              ": You may discard a card and have each other player discard a card. If you do, KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Blunt Force Trauma",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_bluntforcetrauma.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 2,
          abilities: [
            [
              { bold: "Healing" },
              ": You may spend 5",
              { icon: 1 },
              ". If you do, KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Corrosive Webbing",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_corrosivewebbing.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 2,
          abilities: [
            [
              { bold: "Healing" },
              ": You may KO this Wound. If you do, gain another Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Fatal Blow",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_fatalblow.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 2,
          abilities: [
            [
              { bold: "Healing" },
              ": You may KO a Hero that costs 1 or more from your hand or discard pile. If you do, KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Psychic Trauma",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_psychictrauma.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 2,
          abilities: [
            [
              { bold: "Healing" },
              ": You may spend 5",
              { icon: 2 },
              ". If you do, KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Spreading Nanovirus",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_spreadingnanovirus.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 3,
          abilities: [
            [
              { bold: "Healing" },
              ": You may have the player on your left gain this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Subdermal Tracker",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/gw_subdermaltracker.png",
      set: 13,
      cards: [
        {
          subtitle: "Grievous Wound",
          qtd: 2,
          abilities: [
            [
              { bold: "Healing" },
              ": You may play a card from the Villain Deck. If you do, KO this Wound.",
            ],
          ]
        }
      ]
    },
  ]
}