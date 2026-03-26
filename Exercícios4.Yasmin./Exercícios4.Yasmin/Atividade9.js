const prompt = require("prompt-sync")();

function direcionar(nivel) {
    let setor;

    switch (nivel) {
        case 1:
            setor = "Atendimento Básico";
            break;
        case 2:
            setor = "Equipe Especializada";
            break;
        case 3:
            setor = "Gestão de Crise";
            break;
        default:
            setor = "Inválido";
    }

    return setor;
}

let fila = [];

let nivel = Number(prompt("Qual o nivel de criticidade: "));

fila.push(direcionar(nivel));

console.log(fila);