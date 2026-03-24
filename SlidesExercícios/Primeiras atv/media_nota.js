const prompt = require('prompt-sync')();

let nota1 = prompt ("Digite a primeira nota: ")
let nota2 = prompt ("Digite a segunda nota: ")
let soma = (nota1 + nota2)
let resultado = (soma / 2)

console.log("Sua média é: " + resultado)