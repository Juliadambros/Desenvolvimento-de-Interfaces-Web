function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error('need two parameters')
    }
    return peso / (altura*altura)
}

function classificaIMC(imc){
    if(imc <= 16.9) return 'muito abaixo do peso'
    else if(imc <= 18.4) return 'abaixo do peso'
    else if(imc <= 24.9) return 'normal'
    else if(imc <= 29.9) return 'acima do peso'
    else if(imc <= 34.9) return 'obesidade grau 1'
    else if(imc <= 40) return 'obesidade grau 2'
    else return 'obesidade grau 3'
}

let imc = calcularIMC(60, 1.65)
console.log(imc)
console.log(classificaIMC(imc))