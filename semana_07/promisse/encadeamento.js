function soAceitaPares(numeros){
    const promisse = new Promise((resolve, reject) => {
        if(numeros %2 == 0){
            const resultado = 'É par'
            resolve(resultado)
        } else {
            reject(new Error('Você passou um numero impar'))
        }
    })
    return promisse
}

soAceitaPares(22)
.then(result => console.log(`Promessa Comprida, ${result}`))
.catch(error => console.log('promessa não comprida' + error))