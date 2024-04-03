import { PhaseConfig } from "boardgame.io";
import { TurnOrder } from "boardgame.io/core";
import { mainPhaseDraw } from "../moves/draw";

export const mainPhase: PhaseConfig<GameType> = {
  turn: {
    order: TurnOrder.CONTINUE,
  },
  moves: {
    mainPhaseDraw,
  },
};
