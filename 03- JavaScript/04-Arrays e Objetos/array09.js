const arr = [1,2,3]
show(1,2,3)
show(arr)
show(...arr)

function show(){
    console.log(arguments)
    console.log(arguments.length)
}
