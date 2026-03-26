const prompt = require("prompt-sync")();

let t1 = Number(prompt("Qual a temperatura 1: "));
let t2 = Number(prompt("Qual a temperatura 2: "));
let t3 = Number(prompt("Qual a temperatura 3: "));

const avaliarTemperaturas = (lista) => {
    let media = (lista[0] + lista[1] + lista[2]) / 3;

    if (media > 30) {
        return "Alerta de Aquecimento";
    } else {
        return "Clima Estável";
    }
};


let resultado = avaliarTemperaturas([t1, t2, t3]);

console.log(resultado);