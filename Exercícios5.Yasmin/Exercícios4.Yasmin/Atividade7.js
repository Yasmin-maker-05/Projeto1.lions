const prompt = require("prompt-sync")();

const converter = (valor, moeda) => {
    let resultado;

    switch (moeda) {
        case "USD":
            resultado = valor / 5;
            break;
        case "EUR":
            resultado = valor / 6;
            break;
        case "GBP":
            resultado = valor / 7;
            break;
        default:
            resultado = valor;
    }

    return resultado;
};

let valor = Number(prompt("Qual o valor em reais que deseja converter?: "));
let moeda = prompt("Para qual moeda deseja coverter (USD, EUR ou GBP): ");

console.log("Convertido:", converter(valor, moeda));