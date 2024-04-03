import { Game } from "boardgame.io";
import { beginPhase } from "./phases/beginPhase";
import { mainPhase } from "./phases/mainPhase";

const mockCard = (owner: string): Card => {
  return {
    name: "Card #" + Math.random() * 1000,
    cost: 3,
    owner,
    requirement: null,
    type: "Creature"
  }
}

const mockDeck = (owner: string) => {
  return [mockCard(owner), mockCard(owner), mockCard(owner)]
}

export const CCG: Game<GameType>
 = {
  setup: () => ({ decks: [mockDeck("0"), mockDeck("1")], hands: [[], []], actionTokens: [0, 0], scores: [0, 0], problems: [[], []]}),
  phases: {
    beginPhase,
    mainPhase
  }
};