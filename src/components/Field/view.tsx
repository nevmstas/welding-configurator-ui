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

  const handleCellClick = (x: number, y: number) => (direction: EDirection) => {
    console.log(x, y);
    const newMatrix = [...matrix];
    newMatrix[x][y] = 1;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        switch (direction) {
          case EDirection.LEFT:
            if (i < x) {
              newMatrix[i][y] = 1;
            }
            if (j < y) {
              newMatrix[x][j] = 1;
            }
            break;
          case EDirection.STRAIGHT:
            newMatrix[x][j] = 1;
            break;
          case EDirection.RIGHT:
            if (i <= x) {
              newMatrix[i][y] = 1;
            }
            if (j >= y) {
              newMatrix[x][j] = 1;
            }
            break;
          default:
            break;
        }
      }
    }
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
