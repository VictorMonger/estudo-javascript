const arr = [-4, 3, -9, 0, 4, 1]

const positiveRatio = (arr) => {
  const positiveElements = arr.filter(element => element > 0)
  const ratioPositiveElements =  positiveElements.length / arr.length
  return ratioPositiveElements.toFixed(6)
}

const negativeRatio = (arr) => {
  const negativeElements = arr.filter(element => element < 0)
  const ratioNegativeElements =  negativeElements.length / arr.length
  return ratioNegativeElements.toFixed(6)
}

const zeroRatio = (arr) => {
  const zeroElements = arr.filter(element => element === 0)
  const ratioZeroElements = zeroElements.length / arr.length
  return ratioZeroElements.toFixed(6)
}

console.log(positiveRatio(arr))
console.log(negativeRatio(arr))
console.log(zeroRatio(arr))
