const isCpfValid = (cpf) => {
  cpf = cpf
    .split("")
    .filter((char) => !isNaN(parseInt(char)))
    .join("");

  if (cpf.length !== 11) return false;

  if (cpf.split("").every((char) => char === cpf[0])) return false;

  const isValidDigit = (cpf, position) => {
    let sum = 0;

    for (let i = 0; i < position; i++) {
      sum += parseInt(cpf.charAt(i), 10) * (position + 1 - i);
    }
    let remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    return parseInt(cpf.charAt(position), 10) === remainder;
  };
  if (!isValidDigit(cpf, 9) || !isValidDigit(cpf, 10)) return false;

  return true;
};