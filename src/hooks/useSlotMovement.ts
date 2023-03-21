import { useEffect } from "react";
import { boardStore } from "store";
import { generateStartArray } from "utils";

const correctArray = generateStartArray().join(" ");

export const useSlotMovement = () => {
  const board = boardStore.use.board();

  useEffect(() => {
    const isWon = boardStore.get.isWon();

    const storedBoard = board.flatMap((el) => el).join(" ");
    const isEqual = correctArray === storedBoard;

    if (!isWon && isEqual) {
      boardStore.set.setIsWon(true);
    } else if (isWon && !isEqual) {
      boardStore.set.setIsWon(false);
    }
  }, [board]);
};
