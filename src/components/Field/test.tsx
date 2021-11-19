import React, { useState } from "react";

const FieldTest = () => {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const handleItemClick =
    (x: number, y: number, option: string, setToggle: Function) => (e: any) => {
      setToggle(false);
      const newMatrix = [...matrix];
      newMatrix[x][y] = matrix[x][y] ? 0 : 1;
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (option === "left") {
            if (i < x) {
              newMatrix[i][y] = 1;
            }
            if (j < y) {
              newMatrix[x][j] = 1;
            }
          }

          if (option === "straight") {
            newMatrix[x][j] = 1;
          }

          if (option === "right") {
            if (i < x) {
              newMatrix[i][y] = 1;
            }
            if (j > y) {
              newMatrix[x][j] = 1;
            }
          }
        }
      }
      setMatrix(newMatrix);
    };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "100px" }}
    >
      {matrix.map((row, i) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {row.map((m, j) => {
              return (
                <Item m={m} i={i} j={j} handleItemClick={handleItemClick} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const Item = ({ m, i, j, handleItemClick }: any) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle && (
        <div>
          <ul>
            <ol onClick={handleItemClick(i, j, "straight", setToggle)}>
              straight
            </ol>
            <ol onClick={handleItemClick(i, j, "left", setToggle)}>left</ol>
            <ol onClick={handleItemClick(i, j, "right", setToggle)}>right</ol>
          </ul>
        </div>
      )}
      <div
        onClick={() => setToggle(true)}
        style={{ margin: "5px", cursor: "pointer" }}
      >
        {m ? "*" : "0"}
      </div>
    </>
  );
};

export default FieldTest;
