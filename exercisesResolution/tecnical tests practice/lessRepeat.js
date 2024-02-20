const letterNonRepeat = (str) => {
  str = str.replaceAll(" ", "");

  const letterCount = {};

  for (let letter of str) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  for (let letter of str) {
    if (letterCount[letter] === 1) {
      return letter;
    }
  }
  return "_";
};

const str = "the string with small letters only";

console.log(letterNonRepeat(str));
