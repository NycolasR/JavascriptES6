const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

// 2.1 Utilizando o map
const idades = usuarios.map(usuario => usuario.idade)
console.log(`Idades dos usuários: ${idades}`);

// 2.2 Utilizando o filter
const usuariosSeletos = usuarios.filter(usuario => {
    return usuario.empresa === 'Rocketseat' && usuario.idade >= 18
});

console.log(usuariosSeletos);

// 2.3 Utilizando o find
const googleWoker = usuarios.find(usuario => usuario.empresa === 'Google')
console.log(googleWoker)

// 2.4 Unindo operações
const duplicarIdades = usuarios.map(usuario => {
    usuario.idade *= 2
})
const abaixo50 = usuarios.filter(usuario => { return usuario.idade < 50})

console.log(abaixo50)