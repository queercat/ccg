import { Game } from "boardgame.io";
import { beginPhase } from "./phases/beginPhase";
import { mainPhase } from "./phases/mainPhase";
import { setupGame } from "./setup/setup";

export const CCG: Game<GameType> = {
  setup: ({ ctx }) => setupGame(ctx.numPlayers),
  phases: {
    beginPhase,
    mainPhase,
  },
};
