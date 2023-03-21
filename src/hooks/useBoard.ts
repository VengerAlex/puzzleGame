import { useEffect } from "react";
import { boardStore, historyStore } from "store";
import { Operation } from "types";
import {
  moveSlotEvent,
  redoEvent,
  shuffleBoardEvent,
  undoEvent,
} from "../events";

export const useBoard = () => {
  useEffect(() => {
    const onBoardEvent = ({ detail }: { detail: Operation }) => {
      switch (detail.type) {
        case "moveSlot":
          return boardStore.set.moveSlot(detail.data.fromPos);
        case "shuffleBoard": {
          boardStore.set.setBoard(detail.data.newBoard);
          boardStore.set.setEmptySlotPos(detail.data.newEmptySlotPos);
          break;
        }
        default:
          break;
      }
    };

    /**
     * We use this handler to reset the redos when it's a non-undo opeation.
     */
    const onUserBoardEvent = (props: { detail: Operation }) => {
      historyStore.set.clearRedos();
      onBoardEvent(props);
    };

    const events = [moveSlotEvent, shuffleBoardEvent];

    events.forEach((event) => {
      event.subscribe(onUserBoardEvent);
    });

    undoEvent.subscribe(onBoardEvent);
    redoEvent.subscribe(onBoardEvent);
    return () => {
      events.forEach((event) => {
        event.unsubscribe(onUserBoardEvent);
      });

      undoEvent.unsubscribe(onBoardEvent);
      redoEvent.unsubscribe(onBoardEvent);
    };
  }, []);
};
