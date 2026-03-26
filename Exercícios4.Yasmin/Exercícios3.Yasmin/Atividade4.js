const prompt = require('prompt-sync')();

let Pedido = {
    nome: [],
    HamburguerPremium: [35],
    QuatidadeHamburguer: [],
    IngredientesExtras: [],
    Total: []
}

let nomeC = prompt("Qual seu nome? ")
Pedido.nome.push(nomeC)

let NumHamburguer = Number(prompt("Quantos hambúrgueres deseja? "))
Pedido.QuatidadeHamburguer.push(NumHamburguer)

let Ingrediente1 = prompt('Qual o primeiro ingrediente extra que deseja? (caso não queira, apenas digite "nenhum" e depois "0") ')
Pedido.IngredientesExtras.push(Ingrediente1)
let valor1 = Number(prompt("Qual o valor desse ingrediente? "))

let Ingrediente2 = prompt('Qual o segundo ingrediente extra que deseja? (caso não queira, apenas digite "nenhum" e depois "0") ')
Pedido.IngredientesExtras.push(Ingrediente2)
let valor2 = Number(prompt("Qual o valor desse ingrediente? "))

let soma = (Pedido.HamburguerPremium[0] + valor1 + valor2) * NumHamburguer
let desconto = (soma * 0.20)
let descontado = (soma - desconto)

if (Pedido.IngredientesExtras.length == 2 && Pedido.QuatidadeHamburguer[0] > 2) {
    Pedido.Total.push(descontado)
    console.log(Pedido)
    console.log("Por levar mais de 2 hambúrgueres você recebeu um desconto de 20% sobre o valor total!")
} else {
    Pedido.Total.push(soma)
    console.log(Pedido)
}