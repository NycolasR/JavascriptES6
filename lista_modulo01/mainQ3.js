// 3.1
const arr = [1, 2, 3, 4, 5]

const res = arr.map(item => item + 10);
console.log(res)

// 3.2
// Dica: Utilize uma const pra function
const usuario = { nome: 'Diego', idade: 23};
const mostraIdade = (usuario) => { return usuario.idade; }

console.log(mostraIdade(usuario))

// 3.3
// Dica: Utilize uma const pra function
const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => { 
    return { nome, idade }
};

console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 3.4
const promise = () => {
    return new Promise(f = (resolve, reject) => {
        return resolve()
    })
}