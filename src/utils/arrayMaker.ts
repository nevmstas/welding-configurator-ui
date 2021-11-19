export class ArrayMaker {
  static makeOneSizeArray(size: number) {
    var arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(new Array(size));
    }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        arr[i][j] = 0;
      }
    }

    return arr;
  }

  static makeTwoSizeArray(size1: number, size2: number) {
    var arr = [];
    for (let i = 0; i < size1; i++) {
      arr.push(new Array(size2));
    }

    for (let i = 0; i < size1; i++) {
      for (let j = 0; j < size2; j++) {
        arr[i][j] = 0;
      }
    }

    return arr;
  }
}
