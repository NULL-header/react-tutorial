import React from "react";
import { Square } from "../Square";
// eslint-disable-next-line no-unused-vars
import { BoardProps, SquareValue } from "../../types";
// TODO:remove div
export const Board: React.SFC<BoardProps> = ({ squares, onClick }) => {
  return <>{makeBoard(squares, onClick)}</>;
};

// TODO:move to util
const range = (begin: number, num: number) =>
  [...Array(begin + num).keys()].slice(begin);

const isNaturalNumber = (num: number) => !(num % 1);

const makeBoard = (array: SquareValue[], onClick: (i: number) => void) => {
  const sqrt = Math.sqrt(array.length);
  if (!isNaturalNumber(sqrt))
    throw new Error(
      "the function can receive only a two-dimensional array which the row number equals the calumn number"
    );

  const Row = (begin: number) => {
    return range(begin, sqrt).map((e) => (
      <Square key={e} value={array[e]} onClick={() => onClick(e)} />
    ));
  };
  return range(0, sqrt).map((e, i) => (
    <div key={i} className="board-row">
      {Row(e * sqrt)}
    </div>
  ));
};
