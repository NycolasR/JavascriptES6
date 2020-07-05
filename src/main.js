const minhaPromise = (flag) => new Promise((resolve, reject) => {
    if(flag) {
        setTimeout(() => { resolve('OK') }, 2000);
    } else {
        setTimeout(() => { reject('NOT OK') }, 2000);
    }
})

/*
 Uma async function automáticamente vira uma promise, logo,
 é possível "esperar" pelo resultado desta função utilizando o .then()

 async function executaPromise() {
    console.log(await minhaPromise());

    A próxima linha só será executada ao término desta
    awaits devem ser usados dentro de funções async


    Para:

    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    
    A solução análoga sem o uso de async await seria:

    minhaPromise().then(response => {
        console.log(response + '1')

        minhaPromise().then(response => {
            console.log(response + '2')

            minhaPromise().then(response => {
                console.log(response + '3')
            })
        })
    })
    
 }
*/

const executaPromise = async () => {
    console.log(await minhaPromise(true))
    console.log(await minhaPromise(true))
    console.log(await minhaPromise(true))
}

/*executaPromise()
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    });
*/


// Meus testes
const verificaIdade = (idade) => new Promise((resolve, reject) => {
    if(idade >= 18) {
        setTimeout(() => { resolve('Maior de idade') }, 5000);
    } else {
        setTimeout(() => { reject('Menor de idade') }, 5000);
    }
});

const exeVerificador = async (idade) => {
    return await verificaIdade(idade)
}

for(var i = 0; i < 5; i++) {
    exeVerificador(Math.floor(Math.random() * 50))
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
}