import { Operation } from "types";
import { createEvent } from "utils/general";

export const redoEvent = createEvent<Operation>("redo");
export const undoEvent = createEvent<Operation>("undo");
