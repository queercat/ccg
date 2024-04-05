import { PhaseConfig } from "boardgame.io";
import { TurnOrder } from "boardgame.io/core";
import { handleMainPhaseDraw } from "../moves/handleMainPhaseDraw";
import { handleMainPhasePlay } from "../moves/handleMainPhasePlay";

export const mainPhase: PhaseConfig<GameType> = {
  turn: {
    order: TurnOrder.CONTINUE,
  },
  moves: {
    handleMainPhaseDraw,
    handleMainPhasePlay,
  },
};
