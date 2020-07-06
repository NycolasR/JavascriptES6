import api from './api'; 
// caso o ./ seja omitido, este módulo será requisitado da pasta node_modules

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() { // para registrar os eventos
        // para quando o usuário submitar o form
        this.formEl.onsubmit = event => this.addRepository(event);
    }

     async addRepository(event) {
        // isto vai prevenir que o form tenha o funcionamento
        // comum de recarregar a página, usar o método GET ou POST.
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0) {
            return;
        }

        const response = await api.get(`/repos/${repoInput}`);
        
        const { name, description, html_url, owner: { avatar_url } } = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        this.inputEl.value = '';
        this.inputEl.focus();

        this.render();
    }

    render() {
        this.listEl.innerHTML = ''

        // forEach() só percorre o array,
        // para percorrer e alterar, usa-se o map()
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();