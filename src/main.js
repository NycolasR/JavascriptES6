// Respostas - Lista do módulo 2
// 1.1
import ClasseUsuario from './functions';

ClasseUsuario.info()

// 1.2
import { idade } from './functions';
console.log(`A idade do usuário é de ${idade} anos`)

// 1.3
import ClasseUsuario2, { idade as idadeUsuario } from './functions';
ClasseUsuario2.info()
console.log(idadeUsuario)