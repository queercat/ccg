export const checkPlayerColorPowerRequirements = (
  G: GameType,
  playerID: string,
  powerRequirement: number,
  colorRequirements: Set<Color>
) => {
  const defaultZones: DefaultZone[] = ["homes", "problems"];
  const ownedCardsInZones: Card[] = [];

  const totalPlayerColors: Color[] = [];
  const visited = new Set<string>();

  let totalPower: number = 0;

  defaultZones.forEach((zone) =>
    G.zones[zone][playerID].cards.forEach((card) => {
      if (card.owner === playerID) {
        ownedCardsInZones.push(card);
      }
    })
  );

  for (const card of ownedCardsInZones) {
    card.colors.forEach((color) => {
      totalPlayerColors.push(color);

      if (colorRequirements.has(color) && !visited.has(card.guid)) {
        totalPower += card.power;
        visited.add(card.guid);
      }
    });
  }

  if (totalPower < powerRequirement) {
    return false;
  }

  for (const color of colorRequirements) {
    if (!totalPlayerColors.includes(color)) {
      return false;
    }
  }

  return true;
};
