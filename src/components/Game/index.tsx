import React, { useState } from "react";
import { Board } from "../Board";
// eslint-disable-next-line no-unused-vars
import { History, SquareValue } from "../../types";
export const Game = () => {
  const [history, setHistory] = useState<History>([
    { squares: Array<SquareValue>(9).fill(null) },
  ]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNum, setStepNum] = useState(0);
  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNum + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory(_history.concat([{ squares }]));
    setXisNext(!xIsNext);
    setStepNum(_history.length);
  };
  console.log(stepNum);
  const current = history[stepNum];
  const winner = calculateWinner(current.squares);
  const status =
    winner != null
      ? "Winner: " + winner
      : "Next player: " + (xIsNext ? "X" : "O");
  const jumpTo = (step: number) => {
    setStepNum(step);
    setXisNext(step % 2 === 0);
  };
  const moves = history.map((step, move) => {
    const desc = move === 0 ? "Go to game start" : "Go to move #" + move;
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="name">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
function calculateWinner(squares: SquareValue[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
