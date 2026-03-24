const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let salario = prompt ("Qual o seu salário líquido? ")
let parcela = prompt ("Qual valor da parcela? ")
let pergunta = prompt ("O cliente possui restrição no nome? (sim/nao) ")
const porcentagem = (30)
let resultado1 = (porcentagem * salario)
let resultado2 = (resultado1 / 100)
let resultado3 = (resultado2 / 100)
if (parcela <= resultado2 && pergunta == 'nao') {
    console.log("O valor correspondente a 30% do seu salário é: " +resultado2)
    console.log("Crédito aprovado! BORA GASTAR!");
} else if (parcela > resultado2 || pergunta == 'nao') {
    console.log("Crédito Negado: Parcela acima do limite ou restrição no CPF")
}