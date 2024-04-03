import { Move } from "boardgame.io";

export const handleActionStep: Move = ({ G, playerID, ctx, events }) => {
  const maxScore = Math.max(G.scores[0], G.scores[1]);

  let gainAmount = 2;

  // (604.1)
  if (maxScore > 1 && maxScore < 6) {
    gainAmount = 3;
  } else if (maxScore > 5 && maxScore < 11) {
    gainAmount = 4;
  } else if (maxScore >= 11) {
    gainAmount = 5;
  }

  if (ctx.turn == 2) {
    gainAmount = 3;
  }

  G.actionTokens[playerID] += gainAmount;

  events.endStage();
};
