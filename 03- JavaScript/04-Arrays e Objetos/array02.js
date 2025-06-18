const arr = ["ola", true]
//some é pelo menos 1 respeita a condição
let soNumeros = arr.some(function(el){
    //console.log(el)
    return typeof el === "number"
})

console.log(soNumeros)