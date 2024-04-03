type GameType = { decks: Card[][], hands: Card[][], actionTokens: number[], scores: number[], problems: Card[][] }
type Color = "Pink" | "Yellow" | "White" | "Blue" | "Orange" | "Purple"

type Card = {
  owner: string,
  name: string,
  type: string,
  cost: number,
  requirement: Option<Record<Color, number>>
}