import React, { useState } from "react";
import { EDirection } from "../DirectionMenu/interfaces";
import { Cell } from "../FieldItem";

const Field = () => {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const handleCellClick =
    (i: number, j: number) => (direction: EDirection) => {
      console.log(direction);
      const newMatrix = [...matrix];
      console.log(i, j);
      newMatrix[i][j] = 1;
      setMatrix(newMatrix);
    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {matrix.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((item, j) => (
            <Cell key={j} item={item} onClick={handleCellClick(i, j)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
