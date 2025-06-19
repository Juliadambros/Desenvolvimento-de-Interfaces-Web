function operacoes(n1, n2) {
    console.log("Questão 1 - Operações com dois números:");
    console.log("Soma:", n1 + n2);
    console.log("Subtração:", n1 - n2);
    console.log("Multiplicação:", n1 * n2);
    console.log("Divisão:", n1 / n2);
    console.log("Resto da divisão:", n1 % n2);
}
operacoes(100, 20);

function verificarIdade(idade) {
    console.log("Questão 2 - Verificação de maioridade:");
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
verificarIdade(20);

function contarAteN(n) {
    console.log("Questão 3 - Contador de 1 a N:");
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
contarAteN(7);

function somaImpares(numeros) {
    console.log("Questão 4 - Soma dos números ímpares:");
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            soma += numeros[i];
        }
    }
    console.log("Soma dos ímpares:", soma);
}
somaImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

function calcularIMC(peso, altura) {
    console.log("Questão 5 - Cálculo do IMC:");
    let imc = peso / (altura * altura);
    console.log("IMC:", imc);
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Peso normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}
calcularIMC(72, 1.74);

function parOuImpar(numero) {
    console.log("Questão 6 - Número par ou ímpar:");
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}
parOuImpar(104);

function regressiva(n) {
    console.log("Questão 7 - Contador regressivo:");
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}
regressiva(5);

function mediaNotas(n1, n2, n3, n4) {
    console.log("Questão 8 - Média de notas:");
    let media = (n1 + n2 + n3 + n4) / 4;
    console.log("Média:", media);
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
mediaNotas(8, 7, 6, 9);

function maiorNumero(lista) {
    console.log("Questão 9 - Maior valor de uma lista:");
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    console.log("Maior número:", maior);
}
maiorNumero([10, 25, 7, 30, 5, 18, 40, 2, 15, 9]);

function inverterTexto(texto) {
    console.log("Questão 10 - Inversor de palavra:");
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    console.log("Invertido:", invertido);
}
inverterTexto("Júlia");

