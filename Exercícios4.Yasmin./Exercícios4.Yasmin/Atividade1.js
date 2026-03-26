const prompt = require("prompt-sync")();

let nivel = prompt('Qual seu nível ("Estagiario", "Junior", "Pleno"): ');
let salario = Number(prompt("Qual o seu salário: "));

function calcularBonus(nivel, salario) {
    let bonus = 0;

    switch (nivel) {
        case "Estagiario":
            bonus = salario * 0.10;
            break;
        case "Junior":
            bonus = salario * 0.15;
            break;
        case "Pleno":
            bonus = salario * 0.20;
            break;
        default:
            bonus = 0;
    }

    return bonus;
}

let resultado = calcularBonus(nivel, salario);
console.log("Bônus: ", resultado);