"use strict";

// Desestruturação de objetos
var usuario = {
  nome: 'Nycolas',
  idade: 19,
  endereco: {
    cidade: 'Patos',
    estado: 'PB'
  }
}; // Buscando elementos desestruturando o objeto

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function getNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

getNome(usuario);
