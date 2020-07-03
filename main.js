class TodoList {
    constructor() {
        this.todos = []
    }

    static addTodo() { // método estático
        this.todos.push('Novo todo'); // vai dar erro, pois métodos estáticos não enxergam o resto da classe
        console.log(this.todos);
    }
}

TodoList.addTodo();