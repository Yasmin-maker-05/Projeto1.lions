const prompt = require('prompt-sync')();

let salarios = [2500, 3200, 4100, 5000, 6200];

console.log("Seus salários originais eram: ");
console.log(salarios);

console.log("Porém, como mandado pelo sindicato será aplicado um reajuste de 10%");

salarios.forEach((salario, i) => {
    salarios[i] = Math.round(salario * 1.1 * 100) / 100;
});

console.log("Salários atualizados:");
console.log(salarios);