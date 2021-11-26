import { css } from "@emotion/react";
import React from "react";

const HorizontalLine: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: absolute;
        border-bottom: 2px solid black;
        bottom: 50%;
      `}
    ></div>
  );
};

const VerticalLine: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        position: absolute;
        border-left: 2px solid black;
        left: 50%;
      `}
    ></div>
  );
};

const Cross = () => {
  return (
    <>
      <HorizontalLine />
      <VerticalLine />
    </>
  );
};

const TurnLeftLine = () => {
  return (
    <div
      css={css`
        width: 50%;
        height: 50%;
        position: absolute;
        border-bottom: 2px solid black;
        border-right: 2px solid black;
      `}
    ></div>
  );
};

export const TurnRightLine = () => {
  return (
    <div
      css={css`
        width: 50%;
        height: 50%;
        position: absolute;
        left: 40%;
        border-bottom: 2px solid black;
        border-left: 2px solid black;
      `}
    ></div>
  );
};

// 1 - vertical
// 2 - horizontal
// 3 - crossing
// 4 - top to right
// 5 - top to left

const HASH = {
  1: <VerticalLine />,
  2: <HorizontalLine />,
  3: <Cross />,
  4: <TurnRightLine />,
  5: <TurnLeftLine />,
};

export const lineFactory = (item: number): JSX.Element =>
  HASH[item as keyof typeof HASH];
