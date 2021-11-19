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
          style={{
            position: "absolute",
            display: "flex",
            marginLeft: "-40px",
            marginTop: "-80px",
            zIndex: "2",
            backgroundColor: "lightslategray",
          }}
        >
          {menuItems.map((item) => (
            <div
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
                margin: "5px",
                backgroundColor: "lightcyan",
              }}
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
