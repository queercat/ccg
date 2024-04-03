const mockCard = (owner: string): Card => {
  return {
    name: "Card #" + Math.random() * 1000,
    cost: Math.floor(Math.random() * 5),
    owner,
    traits: [],
    requirements: null,
    colors: ["Pink"],
    type: "Friend",
  };
};

const mockDeck = (owner: string) => {
  return [mockCard(owner), mockCard(owner), mockCard(owner)];
};

export const setupGame = (): GameType => {
  return {
    decks: {
      "0": mockDeck("0"),
      "1": mockDeck("1"),
    },

    hands: {
      "0": [],
      "1": [],
    },

    actionTokens: {
      "0": 0,
      "1": 0,
    },

    scores: {
      "0": 0,
      "1": 0,
    },

    problems: {
      "0": [],
      "1": [],
    },
  };
};
