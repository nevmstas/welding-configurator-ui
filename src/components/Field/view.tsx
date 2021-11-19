import React, { useEffect, useState } from "react";
import { EDirection } from "../DirectionMenu/interfaces";
import { Cell } from "../FieldItem";
import { FieldProps } from "./interface";
import { ArrayMaker } from "../../utils/arrayMaker";
import { calculateMatrixWithDirection } from "./utils";

const Field: React.FC<FieldProps> = ({ matrixSize }) => {
  const [matrix, setMatrix] = useState([] as any[][]);

  useEffect(() => {
    setMatrix(ArrayMaker.makeOneSizeArray(matrixSize));
  }, [matrixSize]);

  const handleCellClick = (x: number, y: number) => (direction: EDirection) => {
    const newMatrix = calculateMatrixWithDirection({
      matrix,
      point: { x, y },
      direction,
    });
    setMatrix(newMatrix);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {matrix &&
        matrix.map((row, i) => (
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
