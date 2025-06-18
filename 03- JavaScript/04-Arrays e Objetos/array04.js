let arr = [4, 5, 10, 20, 35, 4, 5]
console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))
console.log(arr.indexOf(40))
console.log(arr.lastIndexOf(40))
console.log(arr.includes(20))
console.log(arr.includes(40))
let fn = arr.find(function(el){
    return el > 10
})
console.log(fn)
let fn2 = arr.findIndex(function(el){
    return el > 10
})
console.log(fn2)