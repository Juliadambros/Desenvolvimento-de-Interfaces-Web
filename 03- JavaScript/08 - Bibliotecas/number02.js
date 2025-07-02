let numero = 16
console.log(numero.toString())
console.log(numero.toString(2))
console.log(numero.toString(16))
numero = 123456.789
console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR",{style: "currency", currency: "BRL"}))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(isNaN("teste"))
console.log(isNaN(1))