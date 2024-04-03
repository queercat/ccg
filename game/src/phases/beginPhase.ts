import { PhaseConfig } from "boardgame.io";
import { handleReadyStep } from "../moves/handleReadyStep";
import { handleActionStep } from "../moves/handleActionStep";
import { handleDrawStep } from "../moves/handleDrawStep";

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
          handleReadyStep,
        },
        next: "actionStep",
      },

      actionStep: {
        moves: {
          handleActionStep,
        },
        next: "drawStep",
      },

      drawStep: {
        moves: {
          handleDrawStep,
        },
      },
    },
  },
};
