function Task(name){
    let _name = name
    this.createdAt = new Date()
    this.updateAd = null
    this.changeName = function(name){
        _name = name
        this.updateAd = new Date()
    }
}

const task1 = new Task("task 1")
console.log(task1)
task1.changeName("task1 atualizada")
console.log(task1)

task1.name = "atualizada"
console.log(task1)