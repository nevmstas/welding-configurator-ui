/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { DirectionMenuProps, EDirection } from "./interfaces";

const menuItems = [
  {
    label: "L",
    value: EDirection.LEFT,
  },
  {
    label: "S",
    value: EDirection.STRAIGHT,
  },
  {
    label: "R",
    value: EDirection.RIGHT,
  },
];

const DirectionMenu: React.FC<DirectionMenuProps> = ({
  action,
  onClose,
  isOpen,
}) => {
  const handleItemMenuClick = (direction: EDirection) => () => {
    onClose();
    action(direction);
  };

  return (
    <>
      {isOpen && (
        <div
          css={css`
            position: absolute;
            display: flex;
            margin-left: -40px;
            margin-top: -80px;
            z-index: 2;
            background-color: lightslategray;
          `}
        >
          {menuItems.map((item) => (
            <div
              css={css`
                width: 30px;
                height: 30px;
                cursor: pointer;
                margin: 5px;
                background-color: lightcyan;
              `}
              onClick={handleItemMenuClick(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DirectionMenu;
