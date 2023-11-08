const ratio = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error ('Divisor não pode ser igual a zero.');
  
  }
  if (numerator < 1){
    throw new Error ('Numerador não pode ser menor que um.');

  }
  return numerator / denominator;
}

try {
  const result = ratio(51, 17);
  console.log(`O resultado é ${result}`)
} catch (error) {
  console.error(error.message)
}
