import React, { useState } from "react";
import { DirectionMenu } from "../DirectionMenu";
import { CellProps } from "./interfaces";

const Cell: React.FC<CellProps> = ({ item, onClick }) => {
  const color = item ? "lightpink" : "lightgreen";

  const [toggle, setToggle] = useState(false);
  const onMenuClose = () => {
    setToggle(false);
  };

  const onMenuOpen = () => {
    setToggle(true);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          margin: "10px",
          cursor: "pointer",
          position: "relative",
          backgroundColor: color,
        }}
        onClick={onMenuOpen}
      ></div>
      <DirectionMenu onClose={onMenuClose} action={onClick} isOpen={toggle} />
    </div>
  );
};

export default Cell;
