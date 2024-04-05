const mockCard = (owner: string): Card => {
  return {
    name: "Card #" + Math.random() * 1000,
    cost: Math.floor(Math.random() * 5),
    owner,
    traits: [],
    requirements: {
      color: ["Pink", "Yellow"],
      power: 1,
    },
    colors: ["Pink", "Yellow"],
    type: "Friend",
    power: 1,
    guid: Math.random().toString(),
  };
};

const mockDeck = (owner: string) => {
  return [mockCard(owner), mockCard(owner), mockCard(owner)];
};

const createZone = (owner: string): Zone => {
  return {
    owner,
    cards: [],
  };
};

const mapRangeToLambda = <T>(
  range: number,
  lambda: (index: Indexable) => T
) => {
  const result: Record<Indexable, T> = {};

  for (let i = 0; i < range; i++) {
    result[i] = lambda(i);
  }

  return result;
};

export const setupGame = (numPlayers: number): GameType => {
  return {
    decks: mapRangeToLambda(numPlayers, (id) => mockDeck(id.toString())),
    hands: mapRangeToLambda(numPlayers, (_) => []),
    actionTokens: mapRangeToLambda(numPlayers, (_) => 0),
    scores: mapRangeToLambda(numPlayers, (_) => 0),

    zones: {
      problems: mapRangeToLambda(numPlayers, (id) => createZone(id.toString())),
      homes: mapRangeToLambda(numPlayers, (id) => createZone(id.toString())),
    },
  };
};
