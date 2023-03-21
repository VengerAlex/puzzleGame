import {
  findElement,
  generateStartArray,
  makeTwoDimensionalArray,
  shuffle,
} from "utils";

export const shuffleBoard = () => {
  const shuffledArray = shuffle(generateStartArray());
  const board = makeTwoDimensionalArray(shuffledArray);
  const emptySlotPos = findElement(board, 0);

  if (!emptySlotPos) return;

  return {
    board,
    emptySlotPos,
  };
};
