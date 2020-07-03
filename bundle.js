"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// REST
var usuario0 = {
  nome: "Nycolas",
  idade: 19,
  universidade: "IFPB"
};

var nome = usuario0.nome,
    resto = _objectWithoutProperties(usuario0, ["nome"]); // ... -> rest operator
//console.log(nome) // receberá o nome do usuário
//console.log(resto) // receberá o resto das propriedades do usuário
//Exemplo com arrays


var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2); //console.log(a)
//console.log(b)
//console.log(c)
// Exemplo para parâmetros de entrada de funções

function soma(a, b) {
  for (var _len = arguments.length, parametros = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    parametros[_key - 2] = arguments[_key];
  }

  return a + b + parametros.reduce(function (total, next) {
    return total + next;
  });
} //console.log(soma(1, 3, 4, 6));
// SPREAD
// Exemplo de soma entre arrays


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2); //console.log(arr3)
// Exemplo com usuários

var usuario1 = {
  nome: "Nycolas",
  idade: 19,
  universidade: "IFPB"
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Gabriel'
});

console.log(usuario2);
