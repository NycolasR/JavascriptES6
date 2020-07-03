// REST

const usuario0 = {
    nome: "Nycolas",
    idade: 19,
    universidade: "IFPB"
}

const { nome, ...resto } = usuario0;
// ... -> rest operator

//console.log(nome) // receberá o nome do usuário
//console.log(resto) // receberá o resto das propriedades do usuário


//Exemplo com arrays
const arr = [1, 2, 3, 4]

const [ a, b, ...c ] = arr

//console.log(a)
//console.log(b)
//console.log(c)

// Exemplo para parâmetros de entrada de funções
function soma(a, b, ...parametros) {
    return a + b + parametros.reduce((total, next) => total + next);
}

//console.log(soma(1, 3, 4, 6));


// SPREAD

// Exemplo de soma entre arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

//console.log(arr3)

// Exemplo com usuários
const usuario1 = {
    nome: "Nycolas",
    idade: 19,
    universidade: "IFPB"
};

const usuario2 = { ...usuario1, nome: 'Gabriel' }

console.log(usuario2)