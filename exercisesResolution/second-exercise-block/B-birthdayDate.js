const getAgeByDate = (date) => {
  const birthdayDate = new Date(date);
  const dateNow = new Date();

  const diffInMillisecond = dateNow - birthdayDate;
  const millisecondperDay = 1000 * 60 * 60 * 24;

  const yearsAge = Math.floor(diffInMillisecond / (millisecondperDay * 365.25));
  const monthsAge = Math.floor((diffInMillisecond % (millisecondperDay * 365.25)) / (millisecondperDay * 30.44));
  const daysAge = Math.floor((diffInMillisecond % (millisecondperDay * 30.44)) / millisecondperDay);

  return console.log(`Your age is ${yearsAge} years, ${monthsAge} months and ${daysAge} days.`);
}

getAgeByDate('2000/05/15');