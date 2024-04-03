type Indexable = string | number;

type GameType = {
  decks: Record<Indexable, Card[]>;
  hands: Record<Indexable, Card[]>;
  actionTokens: Record<Indexable, number>;
  scores: Record<Indexable, number>;
  problems: Record<Indexable, Problem[]>;
};

type Color = "Pink" | "Yellow" | "White" | "Blue" | "Orange" | "Purple";

// 206.2
type CardType =
  | "Mane Character"
  | "Friend"
  | "Problem"
  | "Troublemaker"
  | "Event"
  | "Resource";

type Card = {
  owner: string;
  name: string;
  type: CardType;
  traits: string[];
  cost: number;
  colors: Color[];
  requirements: Option<Record<Color, number>>;
};
