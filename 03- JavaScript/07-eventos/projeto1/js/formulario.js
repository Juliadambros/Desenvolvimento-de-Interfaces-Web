(function(){
    'use strict';
    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageClosebtn = document.getElementsByTagName("button")[0]

    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value){
            showErrorMessage("Preencha todos os campos", function(){
                txtTitulo.focus()
            })
            e.preventDefault
        }
    })

    function showErrorMessage(msg, cb){
        //alert(msg)
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg
        feedbackMessageClosebtn.focus()

        function hideErrorMessage(){
            feedbackMessage.classList.remove()
            feedbackMessageClosebtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageClosebtn.removeEventListener("keyup", pressedKeyboardOnBtn)
            if(typeof cb==="function"){
                cb()
            }
        }

        function pressedKeyboardOnBtn(e){
            if(e.keyCode === 27){
                hideErrorMessage()
            }
        }
        feedbackMessageClosebtn.addEventListener("click", hideErrorMessage)
        feedbackMessageClosebtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    mostraNumero(maxima)
    contadorContainer.style.display = "block"
    function checkLengh(){
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostrarNumero(caracteresRestantes)
    }
    function mostrarNumero(n){
        resta.textContent = n 
    }
})()