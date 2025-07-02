let valor = {n:10}
//let valor = [10]

function mudaValor(obj){
    //n.push(11)
    obj.n++
    //console.log("valor interno", n)
}

mudaValor(valor)
console.log("valor externo", valor)

//quando comparo objetos eu comparo endereço de memoria