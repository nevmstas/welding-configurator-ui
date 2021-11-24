/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FieldContainerProps } from "./interfaces";

const SIDE_COLORS = {
  lightblue: "lightblue",
  lightgreen: "green",
  orangered: "red",
  yellow: "yellow",
  orange: "orange",
};

interface SideLineProps {
  value: string;
  color: string;
  vertical?: boolean;
}

const SideLine: React.FC<SideLineProps> = ({
  value,
  color,
  vertical = false,
}) => {
  return (
    <div
      css={css`
        width: 100px;
        height: 20px;
        background-color: ${color};
        border: none;
        margin: 10px;
        font-size: 14px;
        color: white;
      `}
    >
      {value}
    </div>
  );
};

const columnStyle = css`
  display: flex;
  flex-direction: column;
`;

const FieldContainer: React.FC<FieldContainerProps> = ({ children, size }) => {
  const getItemsBySize = (): Array<{ value: string; color: string }> => {
    let flag = 0;
    const arr = [];

    for (let i = 0; i < size; i++) {
      if (flag === Object.keys(SIDE_COLORS).length) {
        flag = 0;
      }
      arr.push({
        value: Object.keys(SIDE_COLORS)[flag],
        color: Object.values(SIDE_COLORS)[flag],
      });

      flag++;
    }
    return arr;
  };

  return (
    <div css={columnStyle}>
      <div></div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={columnStyle}>
          {getItemsBySize().map((obj, idx) => (
            <SideLine key={idx} value={obj.value} color={obj.color} />
          ))}
        </div>
        <div>{children}</div>
        <div></div>
      </div>
    </div>
  );
};

export default FieldContainer;
