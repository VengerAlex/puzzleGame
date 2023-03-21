import { Board, SlotPos } from "types";

interface CanMoveSlotProps {
  board: Board;
  targetSlotPos: SlotPos;
}

interface MoveTargetSlotProps {
  board: Board;
  emptySlotPos: SlotPos;
  targetSlotPos: SlotPos;
}

export const canMoveSlot = ({
  targetSlotPos: { row, col },
  board,
}: CanMoveSlotProps) => {
  return (
    (row > 0 && board[row - 1][col] === 0) ||
    (row < 2 && board[row + 1][col] === 0) ||
    (col > 0 && board[row][col - 1] === 0) ||
    (col < 2 && board[row][col + 1] === 0)
  );
};

export const moveTargetSlot = ({
  board,
  emptySlotPos,
  targetSlotPos,
}: MoveTargetSlotProps) => {
  const newBoard = [...board];
  newBoard[emptySlotPos.row][emptySlotPos.col] =
    newBoard[targetSlotPos.row][targetSlotPos.col];
  newBoard[targetSlotPos.row][targetSlotPos.col] = 0;

  return newBoard;
};
