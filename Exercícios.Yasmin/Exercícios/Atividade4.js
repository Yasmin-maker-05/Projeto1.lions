const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let distancia =  prompt ("Qual a distância percorrida pelo automóvel? ")
let gasolina = prompt ("Qual a quantidade de combustível consumido(em litros)? ")
let media = (distancia / gasolina)
if (media >= 10) {
    console.log("Consumo dentro do padrão operacional.");
} else if (media < 10) {
    console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.");
}