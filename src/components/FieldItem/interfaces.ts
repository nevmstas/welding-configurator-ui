import { MouseEventHandler } from "react";

export interface CellProps {
  item: number;
  //TODO: improve interface
  onClick: (e: any) => void;
}
