import { act, render } from "@testing-library/react";
import { App } from "App";
import { boardStore } from "./boardStore";

describe("check board store [isWon]", () => {
  test("isWon should be truthy", () => {
    render(<App />);
    act(() => boardStore.set.setIsWon(true));
    expect(boardStore.get.isWon()).toBeTruthy();
  });

  test("isWon should be falsy", () => {
    render(<App />);

    act(() => boardStore.set.setIsWon(false));
    expect(boardStore.get.isWon()).toBeFalsy();
  });
});

describe("check board store [emptySlotPos]", () => {
  test("emptySlotPos should be updated", () => {
    render(<App />);
    act(() => boardStore.set.setEmptySlotPos({ col: 0, row: 0 }));
    expect(boardStore.get.emptySlotPos()).toStrictEqual({ col: 0, row: 0 });
  });

  test("emptySlotPos shouldn't be updated", () => {
    render(<App />);
    act(() => boardStore.set.setEmptySlotPos({ col: 0, row: 0 }));
    expect(boardStore.get.emptySlotPos()).not.toStrictEqual({ col: 1, row: 1 });
  });
});

describe("check board store [board]", () => {
  test("board should be updated", () => {
    render(<App />);

    const newMockBoard = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
    act(() => boardStore.set.setBoard(newMockBoard));
    expect(boardStore.get.board()).toStrictEqual(newMockBoard);
  });

  test("board shouldn't be updated", () => {
    render(<App />);

    const newMockBoard = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];

    const notNewMockBoard = [
      [2, 1, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
    act(() => boardStore.set.setBoard(newMockBoard));
    expect(boardStore.get.board()).not.toStrictEqual(notNewMockBoard);
  });
});

describe("check slot movement", () => {
  const newMockBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ];
  beforeEach(() =>
    act(() => {
      boardStore.set.setBoard(newMockBoard);
      boardStore.set.setEmptySlotPos({ col: 2, row: 2 });
    })
  );

  test("slot should be move", () => {
    render(<App />);
    const shouldBe = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 8],
    ];
    act(() => boardStore.set.moveSlot({ row: 2, col: 1 }));
    expect(boardStore.get.board()).toStrictEqual(shouldBe);
  });

  test("the puzzle must not be moved", () => {
    render(<App />);
    act(() => boardStore.set.moveSlot({ row: 0, col: 0 }));

    expect(boardStore.get.board()).toStrictEqual(newMockBoard);
  });
});
