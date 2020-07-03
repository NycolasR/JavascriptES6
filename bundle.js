"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
}); //Para cada item, tem-se que seu retorno será item * 2

console.log(newArr);

var teste = function teste() {
  return 'teste';
}; // atribuindo uma arrow function a uma constante.


console.log(teste());

var obj = function obj() {
  return {
    nome: 'Nycolas'
  };
}; //usa-se parênteses ao retornar um objeto


console.log(obj());
