export const shuffle = (startArray: number[]) => {
  return startArray.sort(() => Math.random() - 0.5);
};
