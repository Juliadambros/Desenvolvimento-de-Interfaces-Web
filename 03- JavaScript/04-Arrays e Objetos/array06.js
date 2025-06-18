let arr = [1,3,5,7,9]
arr.push(11,13) //ultimo elemento
console.log(arr)
let removido = arr.pop() //ultimo elemento
console.log(arr)
let removido2 = arr.shift() //inicio
console.log(arr)
arr.unshift(1) //inicio
console.log(arr)
let arr2 = arr.slice(1,3) //recorte do array, sem alterar o array original, nesse caso é d apocisao 1 ate a 3 (porem não pega a 3, uma antes)
console.log(arr2)
console.log(arr)
let arr3 = arr.splice(2,3) //primeiro indice é o quero iniciar a recortar e o outro é a quantidade de elemntos que estou removendo
console.log(arr3)
console.log(arr)