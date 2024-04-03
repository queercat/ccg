import { Move } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";

export const mainPhaseDraw: Move<GameType> = ({G, playerID}) => {
  // First check that the player has the tokens to draw.
  if (G.actionTokens[playerID] < 1) {
    return INVALID_MOVE
  }

  if (G.decks[playerID].length < 1) {
    return INVALID_MOVE
  }

  G.actionTokens[playerID] -= 1

  const card = G.decks[playerID].pop()!

  G.hands[playerID].push(card)
}