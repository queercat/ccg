type Indexable = string | number;

type GameType = {
  decks: Record<Indexable, Card[]>;
  hands: Record<Indexable, Card[]>;
  actionTokens: Record<Indexable, number>;
  scores: Record<Indexable, number>;
  problems: Record<Indexable, Problem[]>;
};

type Color = "Pink" | "Yellow" | "White" | "Blue" | "Orange" | "Purple";

type Card = {
  owner: string;
  name: string;
  type: string;
  cost: number;
  requirement: Option<Record<Color, number>>;
};
