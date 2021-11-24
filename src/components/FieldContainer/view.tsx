import { css } from "@emotion/react";
import React, { useMemo } from "react";
import { SideLine } from "./components/SideLine";
import { FieldContainerProps } from "./interfaces";

const SIDE_COLORS = {
  lightblue: "lightblue",
  lightgreen: "green",
  orangered: "red",
  yellow: "yellow",
  orange: "orange",
};

const columnStyle = css`
  display: flex;
  flex-direction: column;
`;

const FieldContainer: React.FC<FieldContainerProps> = ({ children, size }) => {
  const items = useMemo((): Array<{ value: string; color: string }> => {
    let flag = 0;
    const arr = [];

    for (let i = 0; i < size; i++) {
      if (flag === Object.keys(SIDE_COLORS).length) {
        flag = 0;
      }
      arr.push({
        value: Object.values(SIDE_COLORS)[flag],
        color: Object.keys(SIDE_COLORS)[flag],
      });

      flag++;
    }
    return arr;
  }, [size]);

  const sideRender = items.map((obj, idx) => (
    <SideLine key={idx} value={obj.value} color={obj.color} />
  ));

  const topRender = items.map((obj, idx) => (
    <SideLine key={idx} value={obj.value} color={obj.color} vertical={true} />
  ));

  return (
    <div css={columnStyle}>
      <div
        css={css`
          display: flex;
          margin-left: "100px";
          justify-content: center;
        `}
      >
        {topRender}
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={columnStyle}>{sideRender}</div>
        <div>{children}</div>
        <div css={columnStyle}>{sideRender}</div>
      </div>
    </div>
  );
};

export default FieldContainer;
