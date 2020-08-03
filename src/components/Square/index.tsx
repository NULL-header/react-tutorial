import React from "react";
// eslint-disable-next-line no-unused-vars
import { SquareProps } from "../../types";
export const Square: React.SFC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
};
