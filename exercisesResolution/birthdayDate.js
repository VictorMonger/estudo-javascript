function calculateAgeIn(birthDate){
  const today = new Date();

  const age = {}

  const daysPartDifference = today.getDate() - birthDate.getDate();
  const monthPartDifference = today.getMonth() - birthDate.getMonth();
  const yearPartDifference = today.getFullYear() - birthDate.getFullYear();

  if (monthPartDifference < 0) {
    age.year = yearPartDifference - 1;
  } else {
    age.year = yearPartDifference;
  }

  if (daysPartDifference < 0) {
    age.month = monthPartDifference === 0 ? 11 : monthPartDifference - 1;
    age.year = age.year - 1;
  } else {
    age.month = monthPartDifference
  }

  if (daysPartDifference < 0) {
    age.days = 30 + daysPartDifference
  } else {
    age.days = daysPartDifference;
  }

  return age;
}

const birthDate = new Date('2000/11/30');

const age = calculateAgeIn(birthDate)

console.log(age)