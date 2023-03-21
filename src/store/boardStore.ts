import { createStore } from "@udecode/zustood";
import { Board, SlotPos } from "types";
import {
  canMoveSlot,
  generateStartArray,
  makeTwoDimensionalArray,
  moveTargetSlot,
} from "utils";

export const boardStore = createStore("board")(
  {
    board: makeTwoDimensionalArray(generateStartArray()) as Board,
    emptySlotPos: { row: 2, col: 2 } as SlotPos,
    isWon: false,
  },
  { persist: { enabled: true, name: "board" } }
)
  .extendActions((set) => ({
    setIsWon: (status: boolean) => set.isWon(status),
    setBoard: (newBoard: Board) => set.board(newBoard),
    setEmptySlotPos: (newPos: SlotPos) => set.emptySlotPos(newPos),
  }))
  .extendActions((set, get) => ({
    moveSlot: (targetSlotPos: SlotPos) => {
      if (!canMoveSlot({ targetSlotPos, board: get.board() })) return;

      boardStore.set.setBoard(
        moveTargetSlot({
          board: get.board(),
          targetSlotPos,
          emptySlotPos: get.emptySlotPos(),
        })
      );
      boardStore.set.setEmptySlotPos(targetSlotPos);
    },
  }));
