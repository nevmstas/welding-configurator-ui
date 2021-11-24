/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SideLineProps } from "./interfaces";

const SideLine: React.FC<SideLineProps> = ({
  value,
  color,
  vertical = false,
}) => {
  return (
    <div
      css={css`
        width: ${vertical ? "20px" : "100px"};
        height: ${vertical ? "100px" : "20px"};
        background-color: ${color};
        border: none;
        margin: 10px;
        font-size: 14px;
        color: white;
      `}
    >
      <span
        css={css`
          writing-mode: ${vertical && "vertical-lr"};
          text-orientation: ${vertical && "mixed"};
        `}
      >
        {value}
      </span>
    </div>
  );
};

export default SideLine;
