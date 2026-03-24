const prompt = require('prompt-sync')();

const frete = (20)
const mais = (1.5)
let distancia = prompt ("Qual a distancia em km? ")
let risco = prompt ("A entrega é considerada de risco ou urgente? (sim/nao) ")
let adicional = (distancia * mais)
let valorbase = (frete + adicional)
let add = (valorbase + 15)
if (distancia >= 100 || risco == "sim") {
    console.log("Como a distância percorrida foi maior que 100 ou classificada como urgente será adicionado 15 reais ao frete")
    console.log("Valor final da entrega: " + add)
} else {
    console.log("O valor da entrega é: " + valorbase)
}