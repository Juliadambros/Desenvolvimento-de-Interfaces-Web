function fn(cb){
    console.log('executar função de callback')
    console.log(typeof cb)
    cb()
}

function callback(){
    console.log('função passada por parametro')
}

fn(callback)

const objeto = {
    nome: "Júlia",
    callback
}
objeto.callback()