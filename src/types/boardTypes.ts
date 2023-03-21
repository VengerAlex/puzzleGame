import { Operation } from "./historyTypes";

export type Board = number[][];

export interface SlotPos {
  row: number;
  col: number;
}

export type EventListenerCallback = ({ detail }: { detail: Operation }) => void;
