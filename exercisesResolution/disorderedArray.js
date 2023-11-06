const sortedArray = (unorderedArray) => {
  const newArray = unorderedArray.sort((a, b) => {
    return a - b;
  });
  return newArray;
}

const array = [53, 623, 45, 67, 78, 23, 243, 15, 69, 9, 37, 12, 45, 561, 7, 34, 1, 24, 22, 17, 5, 3];

console.log(sortedArray(array));
