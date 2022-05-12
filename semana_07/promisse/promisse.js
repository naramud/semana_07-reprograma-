function soAceitaPares(numeros){
    const promisse = new Promisse((resolve, reject) => {
        if(numeros %2 == 0){
            const resultado = ' É par'
            resolve(resultado)
        } else {
            reject(new Error('Você passou um umero impar'))
        }
    })
    return promisse
}

console.log('promessa')