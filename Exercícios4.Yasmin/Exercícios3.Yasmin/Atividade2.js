const prompt = require("prompt-sync")();

let temperatura = Number(prompt("Digite a temperatura inicial: "));

for (let i = 0; i < 5; i++) {
    console.log("Temperatura:", temperatura);
    temperatura += 2;
}