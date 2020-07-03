 /*
 const, let e var:
 Uma const (constante) não pode ter seu valor reatribuído
 */

 // Testes const
 const usuario = {
     nome: 'Nycolas'
 };

 usuario.nome = 'Ramon';

 console.log(usuario.nome);

 // Testes let

 function teste(x) {
    let y = 2;

    if(x > 5) {
        let y = 4
        console.log(x, y);
    }
 }

 teste(10)