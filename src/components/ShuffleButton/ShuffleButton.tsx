import { Button } from "components/Button";
import { boardStore } from "store";
import { shuffleBoard } from "utils";
import { shuffleBoardEvent } from "../../events";

export const ShuffleButton = () => {
  const handleClick = () => {
    const board = boardStore.get.board();
    const emptySlotPos = boardStore.get.emptySlotPos();

    const shuffledBoard = shuffleBoard();
    if (!shuffledBoard) return;

    shuffleBoardEvent.dispatch({
      type: "shuffleBoard",
      data: {
        newBoard: shuffledBoard.board,
        prevBoard: board,
        prevEmptySlotPos: emptySlotPos,
        newEmptySlotPos: shuffledBoard.emptySlotPos,
      },
    });
  };

  return <Button onClick={handleClick}>Shuffle</Button>;
};
