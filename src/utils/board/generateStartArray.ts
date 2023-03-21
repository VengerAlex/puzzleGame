export const generateStartArray = () => {
  const arr = Array.from(Array(9).keys());
  arr.shift();
  arr.push(0);
  return arr;
};
