(function () {


})()
const txtEmail = document.getElementById("txtEmail")
const feedback = document.getElementById("newsletterFeedback")

function cadastrarEmail(){
    let email = txtEmail.value
    feedback.innerHTML =`o email ${email} foi cadastrado com sucesso`
}

function editarEmail(){
    txtEmail.disabled = false
    txtEmail.focus
}

function disabledEmail(){
    txtEmail.disabled = true
}

