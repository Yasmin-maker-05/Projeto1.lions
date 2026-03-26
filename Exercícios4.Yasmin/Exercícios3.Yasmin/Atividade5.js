const prompt = require("prompt-sync")();

let pesoTotal = 0;
let caixas = 0;

while (true) {
    let peso = Number(prompt("Digite o peso da caixa: "));

    if (pesoTotal + peso > 1000) {
        console.log("Carga máxima atingida!");
        break;
    }

    pesoTotal += peso;
    caixas++;
}

console.log("Peso total:", pesoTotal);
console.log("Caixas carregadas:", caixas);