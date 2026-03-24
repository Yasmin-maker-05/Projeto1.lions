const prompt = require('prompt-sync')();

let numero = prompt("Digite um número: ")
if (numero == 0) {
    console.log("O número que você digitou é zero")
} else if (numero % 2 == 0) {
    console.log("O número que vocÊ digitou é par.")
} else {
    console.log("O número que você digitou é ímpar")
}