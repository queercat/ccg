import { describe, it, expect } from "vitest";
import { checkPlayerColorPowerRequirements } from "./checkPlayerPowerColorRequirements";
import { setupGame } from "../setup/setup";

const name = "checkPlayerPowerColorRequirements";

const insertBeegFluttershy = (game: GameType, playerID: string) => {
  game.zones.homes[playerID].cards.push({
    name: "Beeg Fluttershy",
    colors: ["Yellow"],
    cost: 1,
    owner: playerID,
    power: 9001,
    guid: "beeg-fluttershy",
    type: "Mane Character",
    traits: [],
    requirements: {
      color: ["Yellow"],
      power: 69,
    },
  });
};

describe(name, () => {
  it("works for base case.", () => {
    const initialState = setupGame(2);

    const result = checkPlayerColorPowerRequirements(
      initialState,
      "0",
      1,
      new Set(["Yellow"])
    );

    expect(result).toBe(false);
  });

  it("works for a case where the player has the required power.", () => {
    const initialState = setupGame(2);

    insertBeegFluttershy(initialState, "0");

    const result = checkPlayerColorPowerRequirements(
      initialState,
      "0",
      69,
      new Set(["Yellow"])
    );

    expect(result).toBe(true);
  });
});

// todo: write more tests for checking specific color requirement pairs.
