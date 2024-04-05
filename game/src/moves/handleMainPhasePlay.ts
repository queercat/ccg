import { Move } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";
import { checkPlayerColorPowerRequirements } from "../utilities/checkPlayerPowerColorRequirements";

export const handleMainPhasePlay: Move<GameType> = (
  { G, ctx },
  cardHandIndex: number,
  zoneToPlayTo: string
) => {
  if (cardHandIndex >= G.hands[ctx.currentPlayer].length) {
    return INVALID_MOVE;
  }
  const cardToPlay = G.hands[ctx.currentPlayer][cardHandIndex];
  const currentActionTokens = G.actionTokens[ctx.currentPlayer];
  if (currentActionTokens < cardToPlay.cost) {
    return INVALID_MOVE;
  }
  const { color: colorRequirements, power: powerRequirements } =
    cardToPlay.requirements;
  if (
    !checkPlayerColorPowerRequirements(
      G,
      ctx.currentPlayer,
      powerRequirements,
      new Set(colorRequirements)
    )
  ) {
    return INVALID_MOVE;
  }
  G.actionTokens[ctx.currentPlayer] -= cardToPlay.cost;
  G.zones[zoneToPlayTo as DefaultZone][ctx.currentPlayer].cards.push(
    cardToPlay
  );
  G.hands[ctx.currentPlayer].splice(cardHandIndex, 1);
};
