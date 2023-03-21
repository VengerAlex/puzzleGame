export const findElement = (arr: number[][], num: number) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === num) {
        return { row: i, col: j };
      }
    }
  }

  return null;
};
