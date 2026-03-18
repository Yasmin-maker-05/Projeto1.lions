const prompt = require('prompt-sync')();

let gostaDeCafe = prompt ("Você gosta de café ? ")
if (gostaDeCafe == 'Sim') {
    console.log("Café é o combustível da vida, uma bebida realmente maravilhosa!")
} else {
    console.log("Realmente o dia só começa com um bom suco ou achocolatado!")
}