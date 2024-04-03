import { Move } from "boardgame.io";

export const handleReadyStep: Move = ({ events }) => {
  events.endStage();
};
