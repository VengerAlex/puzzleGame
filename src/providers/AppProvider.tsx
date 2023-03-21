import { useBoard, useHistory } from "hooks";
import { FC, PropsWithChildren } from "react";
import { useSlotMovement } from "../hooks/useSlotMovement";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  useHistory();
  useBoard();
  useSlotMovement();

  return <div>{children}</div>;
};
