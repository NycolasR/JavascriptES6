"use strict";

/*
const, let e var:
Uma const (constante) não pode ter seu valor reatribuído
*/
// Testes const
var usuario = {
  nome: 'Nycolas'
};
usuario.nome = 'Ramon';
console.log(usuario.nome); // Testes let

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
