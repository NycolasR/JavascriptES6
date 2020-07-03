"use strict";

// Função map
var arr = [1, 3, 4, 5, 8, 10];
var newArr = arr.map(function (item) {
  // cada item do vetor passará por esta função
  return item * 2; // para cada item em arr, item * 2 estará em newArr em seu índice análogo
});
console.log(newArr); // Função reduce

var sum = arr.reduce(function (total, proximoValor) {
  return total + proximoValor;
}); // 1º iteração: total == 0, proximoValor == 1
// o resultado será retornado para a próxima iteração

console.log(sum); // Função filter

var filter = arr.filter(function (item) {
  return item % 2 === 0; //filtra-se apenas os valores pares (cujo retorno será true)
});
console.log(filter); // Função find

var find = arr.find(function (item) {
  return item === 2; // o valor de find será retornado se for igual ao que está sendo comparado
  // caso contrário, será undefined
});
console.log(find);
