const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite sua nota (entre 0 e 100): "))

switch (numero) {

case (numero >= 90 && numero <= 100):
    console.log('A');
    break;

case (numero >= 80 && numero <= 89):
console.log('B');
break;
case (numero >= 70 && numero <= 79):

console.log('C');
break;
case (numero >= 60 && numero <= 69):

console.log('D');
break;
case (numero >= 0 && numero <= 59):

console.log('F');
break;
default:

console.log("Nota inválida");
}