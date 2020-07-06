import axios from 'axios';

// Crando uma configuração do axios:
// a partir desta baseURL, todas as requisições
// vão partir deste endereço
const api = axios.create({
    baseURL: 'https://api.github.com',
})

export default api;