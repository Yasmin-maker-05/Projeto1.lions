const prompt = require('prompt-sync')();

let carrinho = {
    nome: [],
    ClienteAss: [],
    itens: []
}

let Cliente = prompt("Qual o seu nome? ")
carrinho.nome.push(Cliente)

let Assinatura = prompt("Qual a assinatura? (prime/padrão) ")
carrinho.ClienteAss.push(Assinatura)

let preço1 = Number(prompt("Qual o preço do primeiro produto? "))
let preço2 = Number(prompt("Qual o preço do segundo produto? "))
let preço3 = Number(prompt("Qual o preço do terceiro produto? "))

carrinho.itens.push(preço1)
carrinho.itens.push(preço2)
carrinho.itens.push(preço3)

let soma = (preço1 + preço2 + preço3)
let juro = (soma + 30)
if (soma > 200 || Assinatura == 'prime') {
    console.log("Parabéns você recebeu um selo de Frete Grátis")
    console.log(carrinho)
    console.log("O valor total da sua compra será: " + soma)
} else {
    console.log(carrinho)
    console.log("O valor total da sua compra será: " + juro)
}