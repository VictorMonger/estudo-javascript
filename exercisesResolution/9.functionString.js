const stringHandler = (inputString) => {
  const treatedString = inputString.replaceAll(' ', '').replaceAll('.', '');
  const arrayString = inputString.split('');

  const stringTotalLetter = treatedString.length;

  console.log(`Essa string tem um total de ${stringTotalLetter} letras.`);

  console.log(`A string de forma inversa é: ${inverterString(arrayString)}`);

  console.log(`O número total de letras "a" nessa string é ${counterSpecificLetter(arrayString)}`);
};

const inverterString = (inputStringArray) => {
  return inputStringArray.reverse().join(''); 
};

const counterSpecificLetter = (inputStringArray) => {
  const aArray = inputStringArray.filter(value => value === 'a' || value === 'á');
  
  return aArray.length;
};

const string = 'Minha terra tem palmeiras onde canta o sabiá.';

stringHandler(string);
