import { Operation } from "types";

export const invertOperation = (operation: Operation) => {
  switch (operation.type) {
    case "moveSlot":
      return {
        ...operation,
        data: { fromPos: operation.data.toPos, toPos: operation.data.fromPos },
      };

    case "shuffleBoard":
      return {
        ...operation,
        data: {
          newBoard: operation.data.prevBoard,
          prevBoard: operation.data.newBoard,

          newEmptySlotPos: operation.data.prevEmptySlotPos,
          prevEmptySlotPos: operation.data.newEmptySlotPos,
        },
      };

    default: {
      return operation;
    }
  }
};
