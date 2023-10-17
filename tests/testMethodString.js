const stringTest = "Minha terra tem palmeiras onde canta o sabiá"

console.log(stringTest.match("palmeiras"));

console.log(stringTest.search("sabiá"));

console.log(stringTest.startsWith("Minha")); // verifica se começa com essa palavra

console.log(stringTest.endsWith("sabiá")); // verifica se termina com essa palavra

console.log(stringTest.includes("onde")); // verifica se inclui essa palavra

console.log(stringTest.indexOf("tem"));

console.log(stringTest.lastIndexOf("o"));

console.log(stringTest.valueOf());


console.log(stringTest.charCodeAt(0));
console.log(String.fromCharCode(75));
