const prompt = require('prompt-sync')();

let Qtabuada = Number(prompt("Qual a tabuada que deseja? "))
console.log("Tabuada do número: " + Qtabuada)
for (let i = 0; i <= 10; i++) {
    console.log(Qtabuada + "x" + i + "=" + (Qtabuada * i))
}