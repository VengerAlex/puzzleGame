import { Button } from "components/Button";
import { historyStore } from "store";
import { undo } from "utils";

export const UndoButton = () => {
  const undos = historyStore.use.undos();

  return (
    <Button disabled={!Boolean(undos.length)} onClick={undo}>
      undo
    </Button>
  );
};
