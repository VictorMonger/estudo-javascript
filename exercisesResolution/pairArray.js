const pairArray = (inputArray) => {
  return inputArray.filter(value => value % 2 === 0);
};

const array = [53, 624, 48, 62, 78, 23, 88, 15, 69, 9, 37, 12, 42, 29, 7, 34, 1, 24, 22, 17, 5, 3];

console.log(pairArray(array));
