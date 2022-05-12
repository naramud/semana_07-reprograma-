const fs = require('fs')

function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
        para:${para}
        ------------------
        ${corpo}
        ------------------
        de: Narlene Amud
        `)
        callback('ok', 42, '1s')
    }, 1000)
}

console.log('Inicio do envio de email')
enviarEmail('oi tudo bem!?', 'narlenes092@gmail.com', (status, amount, time) => {
    console.log(`
    Status: ${status}
    -----------------------
    Contatos: ${amount}
    -----------------------
    Tempo de envio: ${time}
    `)
    console.log('deu tudo certo parceiro')
})

console.log('Aguarde seu email foi enviado e vai aparecer em segundos :) sabe esperar não?')