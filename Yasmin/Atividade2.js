const prompt = require('prompt-sync')();

const ano = ("2026")
let nome = prompt ("Qual o seu nome? ")
let idade = prompt ("Qual sua idade? ")
let aniversario = prompt ("Já fez aniversário? Digite 'Sim' ou 'Não'")
let resposta = 0
if (aniversario === 'Sim') {
    resposta = 0;
} else {
    resposta = 1;
}
let anonascimento = (ano - idade - resposta)

console.log("Olá " + nome + " voce tem " + idade + " anos " + "e nasceu em: " + anonascimento)