// Trecho 1
// Função delay aciona o .then após 1s
const delay = (time) => new Promise(resolve => setTimeout( () => { resolve(time) } , 1000));

async function umPorSegundo() {
    console.log(await delay('1s'));
    console.log(await delay('2s'));
    console.log(await delay('3s'));
}

//umPorSegundo()


// Trecho 2
import axios from 'axios';

const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch(err) {
        console.log('O usário não existe');
    }
}
/*
getUserFromGithub('diego3g')
getUserFromGithub('NycolasR')
getUserFromGithub('diego32342342g')
*/

// Trecho 3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        } catch(err) {
            console.log('O repositório não existe');
        }
    }
}

//Github.getRepositories('NycolasR/CursoJS');
//Github.getRepositories('rocketseat/sdfsdfsdfs');

// Trecho 4
const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response);
    } catch(err) {
            console.log('O usuario não existe');
    }
}

buscaUsuario('NycolasR')
buscaUsuario('NycolasRdfdfsdfs')
