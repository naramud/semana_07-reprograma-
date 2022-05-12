function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(8)
        }, 1000)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve('cachorro@gmail.com')
        }, 1000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            let deuErro = false;
            if(!deuErro){
                resolve(`{time: 1s, to: narlenes092@gmail.com}`)
            } else{
                reject('Sua caixa de correio está cheia')
            }
        }, 1000)
    })
}

console.log('Inicio')
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail('oii!', email).then(() => {
            console.log('Email enviado para usuário com ID: ' + id)
        }) .catch(err =>{
            console.log(err)
        })
    })
})

console.log('Deu certo')