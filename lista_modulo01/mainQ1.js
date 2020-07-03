class Usuario {
    constructor(email, senha, admin=false) {
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha, true);
    }
}

const user1 = new Usuario('email@teste.com', 'senha123');
const adm1 = new Admin('email@teste.com', 'senha123');

console.log(`user1: ${user1.isAdmin()}`)
console.log(`adm1: ${adm1.isAdmin()}`)