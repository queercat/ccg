import { Move } from "boardgame.io";

// (605.1)
export const handleDrawStep: Move = ({ G, ctx, playerID, events }) => {
  if (ctx.turn <= 2) {
    events.endPhase();
    return;
  }

  G.hands[playerID].push(G.decks[playerID].pop());

  events.endPhase();
};
