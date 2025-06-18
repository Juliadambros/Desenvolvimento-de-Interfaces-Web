const arr = [1, 5, 10, "ola", true]
//verifica ser toodos os elementos respeitam a condição (every)
let soNumeros = arr.every(function(el){
    //console.log(el)
    return typeof el === "number"
})

console.log(soNumeros)