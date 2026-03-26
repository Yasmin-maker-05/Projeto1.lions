const prompt = require("prompt-sync")();

const classificarJogador = (lista) => {
    let soma = lista[0] + lista[1] + lista[2];

    if (soma > 200 || lista[2] > 90) {
        return "Veterano";
    } else {
        return "Iniciante";
    }
};

let p1 = Number(prompt("Qual a pontuação da primeira partida?: "));
let p2 = Number(prompt("Qual a pontuação da segunda partida?: "));
let p3 = Number(prompt("Qual a pontuação da terceira partida?: "));

let resultado = classificarJogador([p1, p2, p3]);

console.log(resultado);