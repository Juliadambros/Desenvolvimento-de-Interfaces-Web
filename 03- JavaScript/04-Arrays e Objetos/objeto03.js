function changeName(name){
    this.name = name
}

const task1 = {
    name: 'Task 1',
    createdAt: new Date(),
    updatedAt: null,
    completed: false
}

const task2 = {
    name: 'Task 2',
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: function(name){
        this.name = name
    }
}
console.log(task2)
task2.changeName("task2 updated")
console.log(task2)

//console.log(task1)
//task1.name = "task1 updated"
//task1.updatedAt = new Date()
//console.log(task1)