import { Button } from "components/Button";
import { historyStore } from "store";
import { redo } from "utils";

export const RedoButton = () => {
  const redos = historyStore.use.redos();

  return (
    <Button disabled={!Boolean(redos.length)} onClick={redo}>
      redo
    </Button>
  );
};
