type GameType = {
  decks: BizzaroArray<Card[]>;
  hands: BizzaroArray<Card[]>;
  actionTokens: BizzaroArray<number>;
  scores: BizzaroArray<number>;
  problems: BizzaroArray<Card[]>;
};

type Color = "Pink" | "Yellow" | "White" | "Blue" | "Orange" | "Purple";
type BizzaroArray<T> = { [key: string | number]: T };

type Card = {
  owner: string;
  name: string;
  type: string;
  cost: number;
  requirement: Option<Record<Color, number>>;
};
