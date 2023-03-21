import {
  Board,
  Box,
  ButtonContainer,
  Message,
  Rect,
  RedoButton,
  ShuffleButton,
  UndoButton,
} from "components";
import { AppProvider } from "providers";
import { boardStore } from "store";
import { SlotPos } from "types";
import { canMoveSlot } from "utils";
import { moveSlotEvent } from "./events";

export const App = () => {
  const board = boardStore.use.board();
  const emptySlotPos = boardStore.use.emptySlotPos();
  const isWon = boardStore.use.isWon();

  const handleClick = (targetSlotPos: SlotPos) => {
    if (!canMoveSlot({ targetSlotPos, board })) return;

    moveSlotEvent.dispatch({
      type: "moveSlot",
      data: {
        fromPos: targetSlotPos,
        toPos: emptySlotPos,
      },
    });
  };

  return (
    <AppProvider>
      <Box>
        <ButtonContainer>
          <UndoButton />
          <RedoButton />
          <ShuffleButton />
        </ButtonContainer>

        <div>
          {isWon && <Message>Congratulations!</Message>}
          <Board>
            {board.map((row, rowIndex) =>
              row.map((item, colIndex) => (
                <Rect
                  onClick={() => handleClick({ col: colIndex, row: rowIndex })}
                  key={`${rowIndex}-${colIndex}`}
                  background={item ? "transparent" : "fill"}
                >
                  {Boolean(item) && item}
                </Rect>
              ))
            )}
          </Board>
        </div>
      </Box>
    </AppProvider>
  );
};
