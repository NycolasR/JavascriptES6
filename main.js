// Desestruturação de objetos

const usuario = {
    nome: 'Nycolas',
    idade: 19,
    endereco: {
        cidade: 'Patos',
        estado: 'PB',

    },
};

// Buscando elementos desestruturando o objeto
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome)
console.log(idade)
console.log(cidade)

function getNome({ nome }) {
    console.log(nome)
}

getNome(usuario)