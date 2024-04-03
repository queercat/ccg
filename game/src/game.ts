import { Game } from "boardgame.io";
import { beginPhase } from "./phases/beginPhase";
import { mainPhase } from "./phases/mainPhase";

const mockCard = (owner: string): Card => {
  return {
    name: "Card #" + Math.random() * 1000,
    cost: 3,
    owner,
    requirement: null,
    type: "Creature",
  };
};

const mockDeck = (owner: string) => {
  return [mockCard(owner), mockCard(owner), mockCard(owner)];
};

export const CCG: Game<GameType> = {
  setup: () => ({
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
  }),
  phases: {
    beginPhase,
    mainPhase,
  },
};
