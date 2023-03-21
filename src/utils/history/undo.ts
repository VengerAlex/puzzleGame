import { undoEvent } from "../../events";
import { historyStore } from "store";

export const undo = () => {
  const undos = [...historyStore.get.undos()];
  const lastOperation = undos.pop();
  if (!lastOperation) return;
  undoEvent.dispatch(lastOperation);
};
