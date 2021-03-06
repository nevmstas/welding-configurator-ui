import { css } from "@emotion/react";
import React, { useState } from "react";
import { DirectionMenu } from "../DirectionMenu";
import { lineFactory } from "./components/DirectionLines";
import { CellProps } from "./interfaces";

const Cell: React.FC<CellProps> = ({ item, onClick }) => {
  const [toggle, setToggle] = useState(false);
  const onMenuClose = () => {
    setToggle(false);
  };

  const onMenuOpen = () => {
    setToggle(true);
  };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          width: 20px;
          height: 20px;
          margin: 10px;
          cursor: pointer;
          position: relative;
          background-color: lightgreen;
        `}
        onClick={onMenuOpen}
      >
        {lineFactory(item)}
      </div>
      <DirectionMenu onClose={onMenuClose} action={onClick} isOpen={toggle} />
    </div>
  );
};

export default Cell;
