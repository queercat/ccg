type Indexable = string | number;
type Problem = Card extends { type: "Problem" } ? Card : never;

type DefaultZone = "problems" | "homes";

type Zone = {
  owner: string;
  cards: Card[];
  problem?: Problem; // Would be much nicer to have a Rust like enum here. Probably doable but TODO @Hithroc.
};

type GameType = {
  decks: Record<Indexable, Card[]>;
  hands: Record<Indexable, Card[]>;
  actionTokens: Record<Indexable, number>;
  scores: Record<Indexable, number>;
  zones: Record<DefaultZone, Record<Indexable, Zone>>;
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
  power: number;
  guid: string;
  requirements: {
    color: Color[];
    power: number;
  };
};
