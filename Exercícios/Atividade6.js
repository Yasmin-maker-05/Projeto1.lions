const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let hora = prompt ("Qual o valor normal de ganho por hora? ")
let extra = prompt ("Quantas horas extras você fez esse mês? ")
let resultado1 = (hora * 1.5)
let resultado2 = (extra * resultado1)

console.log(nome + ", o seu bônus por hora extra este mês é de: " + resultado2)