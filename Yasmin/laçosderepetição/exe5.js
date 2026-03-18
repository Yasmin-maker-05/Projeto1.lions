const prompt = require('prompt-sync')();

let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0
let mediaPares = 0
let mediaImpares = 0

for (let i = 0; i <= 999; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par")
        
    } else {
        console.log(i + " é ímpar")
    }
}