const prompt = require('prompt-sync')();

let estoqueTamanhos = [20, 30, 40];

console.log(estoqueTamanhos[0], estoqueTamanhos[1], estoqueTamanhos[2]);

let TamanhoP = Number(prompt("Quantas camisetas do tamanho P foram vendidas hoje? "));
let estoque1 = estoqueTamanhos[0] - TamanhoP;
console.log("O estoque atual do tamanho P é " + estoque1 + " agora");

let TamanhoM = Number(prompt("Quantas camisetas no tamanho M foram vendidas hoje? "));
let estoque2 = estoqueTamanhos[1] - TamanhoM;
console.log("O estoque atual do tamanho M é " + estoque2 + " agora");

let TamanhoG = Number(prompt("Quantas camisetas no tamanho G foram vendidas hoje? "));
let estoque3 = estoqueTamanhos[2] - TamanhoG;
console.log("O estoque atual do tamanho G é " + estoque3 + " agora");