import { redoEvent } from "../../events";
import { historyStore } from "store";

export const redo = () => {
  const redos = [...historyStore.get.redos()];
  const lastOperation = redos.pop();
  if (!lastOperation) return;
  redoEvent.dispatch(lastOperation);
};
