import { Board } from "types";

const ROW_SIZE = 3;

export const makeTwoDimensionalArray = (arr: number[]) => {
  const result: Board = [];

  for (let i = 0; i < arr.length; i += ROW_SIZE) {
    result.push(arr.slice(i, i + ROW_SIZE));
  }

  return result;
};
