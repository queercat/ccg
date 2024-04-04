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

    zones: {},
  };
};
