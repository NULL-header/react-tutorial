export type SquareValue = "X" | "O" | null;
export type History = HistoryElement[];
export interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}
export interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
}
export interface HistoryElement {
  squares: SquareValue[];
}
