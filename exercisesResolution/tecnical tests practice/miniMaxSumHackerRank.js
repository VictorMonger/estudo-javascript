const arr = [1, 2, 3, 4, 5]

const minSum = (arr) => {
  const firstArrNumbers = arr.slice(0, 4);
  const minSum = firstArrNumbers.reduce((a, b) => a + b);
  return minSum;
}

const maxSum = (arr) => {
  const lastArrNumbers = arr.slice(-4);
  const maxSum = lastArrNumbers.reduce((a, b) => a + b);
  return maxSum;
}

console.log(minSum(arr), maxSum(arr))
