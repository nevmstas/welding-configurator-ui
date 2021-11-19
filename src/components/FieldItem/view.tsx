import React from "react";
import { CellProps } from "./interfaces";

const Cell: React.FC<CellProps> = ({ item, onClick }) => {
  const color = item ? "lightpink" : "lightgreen";
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        margin: "10px",
        cursor: "pointer",
        backgroundColor: color,
      }}
      onClick={onClick}
    ></div>
  );
};

export default Cell;
