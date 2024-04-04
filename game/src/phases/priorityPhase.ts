import { PhaseConfig } from "boardgame.io";

// Store the phase / stage from where this phase is being called from.
// Allow both players a chance to take a priority accessible action.
// Once both players pass priority, move to the next phase or the stored phase.
// More noodling to do here.
export const priorityPhase: PhaseConfig<GameType> = {};
