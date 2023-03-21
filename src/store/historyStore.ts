import { createStore } from "@udecode/zustood";
import { Operation } from "types";
import { invertOperation } from "utils";

export const historyStore = createStore("history")(
  {
    undos: [] as Operation[],
    redos: [] as Operation[],
  },
  { persist: { enabled: true, name: "history" } }
).extendActions((set, get) => ({
  appendUndo: (operation: Operation) => {
    const invertedOperation = invertOperation(operation);
    set.undos([...get.undos(), invertedOperation]);
  },
  undo: () => {
    const undos = [...get.undos()];
    const lastOperation = undos.pop();
    if (!lastOperation) return;
    const invertedOperation = invertOperation(lastOperation);
    set.undos(undos);
    set.redos([...get.redos(), invertedOperation]);
  },
  redo: () => {
    const redos = [...get.redos()];
    const lastOperation = redos.pop();
    if (!lastOperation) return;
    const invertedOperation = invertOperation(lastOperation);
    set.redos(redos);
    set.undos([...get.undos(), invertedOperation]);
  },
  clearRedos: () => {
    set.redos([]);
  },
}));
