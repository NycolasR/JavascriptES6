class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form')

        this.registerHandlers();
    }

    registerHandlers() { // para registrar os eventos
        // para quando o usuário submitar o form
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        // isto vai prevenir que o form tenha o funcionamento
        // comum de recarregar a página, usar o método GET ou POST.
        event.preventDefault();

        this.repositories.push({
            name: 'ocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br',
        });

        console.log(this.repositories);
    }
}

new App();