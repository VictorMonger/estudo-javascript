/* 

array [6] = 3 // coloca outro valor em determinada posição

array.push(43) // insere outro valor no array em uma nova posição

array.length // tamanho do array

array.sort() // coloca os elementos em ordem crescente

for(let position = 0; position < array.length; position++){
  console.log(array[position])

} 

*/

// --------------------------------------------------------------------

/* 
const arraySorted = array.sort((a, b) => {

  return a - b

});

for(let position in arraySorted){
  console.log("A posição " + position + " tem o valor " + arraySorted[position])
} // menos utilizado que o foreach

*/ /*

.indexOf() // busca valor no vetor e retorna a chave (posição) se o valor não
existir retorna -1.

*/

let array = [5, 8, 4, 7, 74, 67, 53, 78, 645, 342, 34, 567, 77]

const arraySorted = array.sort((a, b) => {

  return a - b

});

arraySorted.forEach((number, position)=> {
  console.log("A posição " + position + " tem o valor " + number)
}); //O PRIMEIRO PARAMETRO DO FOR EACH É O VALOR DO ELEMENTO