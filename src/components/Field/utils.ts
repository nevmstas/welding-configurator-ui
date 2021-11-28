import { EDirection } from "../DirectionMenu/interfaces";

interface IProps {
  matrix: any[][];
  point: {
    x: number;
    y: number;
  };
  direction: EDirection;
}

export const calculateMatrixWithDirection = ({
  matrix,
  point: { x, y },
  direction,
}: IProps) => {
  console.log(matrix);
  const newMatrix = [...matrix];
  // newMatrix[x][y] = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      switch (direction) {
        case EDirection.LEFT:
          if (i < x) {
            newMatrix[i][y] = 1;
          }
          if (j < y) {
            newMatrix[x][j] = 2;
          }
          newMatrix[x][y] = 5;
          break;
        case EDirection.STRAIGHT:
          newMatrix[x][j] = 2;
          break;
        case EDirection.RIGHT:
          if (i <= x) {
            newMatrix[i][y] = 1;
          }
          if (j >= y) {
            newMatrix[x][j] = 2;
          }
          newMatrix[x][y] = 4;
          break;
        default:
          break;
      }
    }
  }
  console.log(newMatrix);
  return newMatrix;
};
