import { Board, SlotPos } from "./boardTypes";

export interface MoveSlotOperation {
  type: "moveSlot";
  data: {
    fromPos: SlotPos;
    toPos: SlotPos;
  };
}

export interface ShuffleBoardOperation {
  type: "shuffleBoard";
  data: {
    newBoard: Board;
    prevBoard: Board;

    newEmptySlotPos: SlotPos;
    prevEmptySlotPos: SlotPos;
  };
}

export type Operation = MoveSlotOperation | ShuffleBoardOperation;
