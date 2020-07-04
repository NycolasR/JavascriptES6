// 5.1 Rest
// 5.1.1
const arr = [1, 2, 3, 4, 5, 6]

let [ x, ...y ] = arr

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.1.2 - function soma...
function soma(...parametros) {
    return parametros.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55

// 5.2 Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel', };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };

console.log(usuario2);
console.log(usuario3);