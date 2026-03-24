const prompt = require('prompt-sync')();

let produtos = prompt ("Qual a quantidade de produtos atual no estoque? ")
let quantidamin = prompt ("Qual a quantidade mínima que deve haver no estoque? ")
let quantidade = (quantidamin - produtos)
if (produtos < quantidamin) {
    console.log("Alerta: Estoque baixo! É necessário solicitar a compra de " + quantidade + " unidades")
} else {
    console.log("Estoque regularizado.")
}