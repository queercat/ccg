import { PhaseConfig } from "boardgame.io";

export const beginPhase: PhaseConfig<GameType> = {
  start: true,
  next: "mainPhase",
  turn: {
    onBegin: ({ events }) => {
      events.setActivePlayers({ currentPlayer: "readyStep" });
    },
    stages: {
      readyStep: {
        moves: {
          handleReadyStep: ({ events }) => {
            events.endStage();
          },
        },
        next: "actionStep",
      },

      actionStep: {
        moves: {
          handleActionStep: ({ G, playerID, ctx, events }) => {
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
          },
        },
        next: "drawStep",
      },

      drawStep: {
        moves: {
          // (605.1)
          handleDrawStep: ({ G, ctx, playerID, events }) => {
            if (ctx.turn <= 2) {
              events.endPhase();
              return;
            }

            G.hands[playerID].push(G.decks[playerID].pop());

            events.endPhase();
          },
        },
      },
    },
  },
};
