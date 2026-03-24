const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let vendas = prompt ("Qual o valor total de vendas que você fez esse mês? ")
let comissao = (vendas * 0.05)
let comissao2 = (vendas * 0.02)
if (vendas >= 20000) {
    console.log(nome + ", a sua comissão é de 5% totalizando: " + comissao)
} else {
    console.log(nome + ", a sua comissao é de 2% totalizando: " + comissao2)
}