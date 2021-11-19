export enum EDirection {
  STRAIGHT = "STRAIGHT",
  RIGHT = "RIGHT",
  LEFT = "LEFT",
}

export interface DirectionMenuProps {
  onClose: () => void;
  action: (direction: EDirection) => void;
  isOpen: boolean
}
