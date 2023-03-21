import { createEvent } from "utils/general";
import { MoveSlotOperation, ShuffleBoardOperation } from "types";

export const moveSlotEvent = createEvent<MoveSlotOperation>("moveSlot");
export const shuffleBoardEvent =
  createEvent<ShuffleBoardOperation>("shuffleBoard");
