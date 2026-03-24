const prompt = require('prompt-sync')();

let filaProjetos = []
let nomeEmpresa = prompt ("Qual o nome da empresa cliente? ")
let valorProjeto = Number(prompt ("Qual o valor do projeto em reais? "))
let cliente = {
    Nome: nomeEmpresa
}
let valorEstismado = {
    Valor: valorProjeto
}
filaProjetos.push(cliente)
filaProjetos.push(valorEstismado)

let entrega = ("O projeto possui prazo de entrega urgente? (sim/nao) ")
if (entrega = "sim" && valorProjeto > 3000) {
    let juros = (valorProjeto * 0.15)
    let jurossomados = (valorProjeto + juros)
    console.log("Por conta do valor ou urgência o valor atual do projeto terá um acréssimo de 15% ao valor original")
    console.log(cliente)
    console.log(jurossomados)
} else {
    console.log(cliente)
    console.log(valorEstismado)
}