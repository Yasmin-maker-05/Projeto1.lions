const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let custo = prompt ("Qual o custo de produção de um lote dos componentes eletrônicos? ")
let venda = prompt ("Por quanto esse lote é vendido no total? ")
let lucro = (venda - custo)
if (lucro >= 500) {
    console.log("Margem de lucro saudável: R$ " + lucro + ".")
} else if (lucro < 500) {
    console.log("Atenção: Margem de lucro perigosamente baixa!");
} else if (lucro = 0) {
    console.log("MARGEM DE LUCRO EM EXTREMO PERIGO!");
}