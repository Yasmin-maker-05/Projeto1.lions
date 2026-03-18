const prompt = require('prompt-sync')();

let notas = []

let prova1 = parseFloat(prompt("Digite a primeira nota: "));
let prova2 = parseFloat(prompt("Digite a segunda nota: "));

notas.push(prova1);
notas.push(prova2);
let media = (notas[0] + notas[1]) / 2;

console.log("A média das notas é: " + media)