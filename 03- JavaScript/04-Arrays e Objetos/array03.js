const arr = [1, 5, 10, "ola", true]

/*arr.filter(function(el, i, arr){
    console.log(el) //elemento
    console.log(i) //posisão 
    console.log(arr) //array
})*/

let soNumeros = arr.filter(function(el, i, arr){
    return typeof el === "number"
})
console.log(soNumeros)
soNumeros.forEach(function(el, i, arr){ //não tem retorno
    console.log(i + " - " + el)
});

let arr1 = soNumeros.map(function(el, i, arr){
    return el * el
})
console.log(arr1)