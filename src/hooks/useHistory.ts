import { useEffect } from "react";
import {
  moveSlotEvent,
  redoEvent,
  shuffleBoardEvent,
  undoEvent,
} from "../events";
import { historyStore } from "store";
import { Operation } from "types";

export const useHistory = () => {
  useEffect(() => {
    const undoableOperations = [moveSlotEvent, shuffleBoardEvent];

    const onUndoableOperation = ({ detail }: { detail: Operation }) => {
      historyStore.set.appendUndo(detail);
    };

    const onUndo = () => {
      historyStore.set.undo();
    };

    const onRedo = () => {
      historyStore.set.redo();
    };

    undoableOperations.forEach((operation) => {
      operation.subscribe(onUndoableOperation);
    });
    undoEvent.subscribe(onUndo);
    redoEvent.subscribe(onRedo);

    return () => {
      undoableOperations.forEach((operation) => {
        operation.unsubscribe(onUndoableOperation);
      });
      undoEvent.unsubscribe(onUndo);
      redoEvent.unsubscribe(onRedo);
    };
  }, []);
};
