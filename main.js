const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);
//Para cada item, tem-se que seu retorno será item * 2

console.log(newArr);

const teste = () => 'teste'; // atribuindo uma arrow function a uma constante.
console.log(teste());

const obj = () => ({nome: 'Nycolas'}); //usa-se parênteses ao retornar um objeto
console.log(obj())