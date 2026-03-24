const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let cota = prompt ("Quantas cotas você possui no seu fundo imobiliário? ")
let dividendo = prompt ("Qual o valor do dividendo(rendimento) de cada cota? ")
let resultado = (cota * dividendo)
if (resultado >= 100) {
    console.log("Você já tem saldo suficiente para comprar uma nova cota e reinvestir!")
    console.log("O seu saldo atual é: " + resultado)
} else {
    console.log("Rendimento recebido: R$ [valor]. Acumule mais para reinvestir.")
}