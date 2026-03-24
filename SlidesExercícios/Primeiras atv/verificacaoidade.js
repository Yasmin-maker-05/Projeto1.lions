const prompt = require('prompt-sync')();

const ano = (2026)
let nome = prompt ("Qual o seu nome? ")
let idade = prompt ("Qual sua idade? ")
let tempo = (18 - idade)
let anonascimento = (ano - idade)
if (idade >= 18) {
    console.log(nome + ", você já é maior de idade e nasceu em " + anonascimento);
} else if (idade < 18) {
    console.log(nome + ", você nasceu em " + anonascimento + ", você só será maior de idade em " + tempo + " anos.")
}