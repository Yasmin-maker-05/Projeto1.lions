const prompt = require('prompt-sync')();

let nomedobicho = prompt ("Qual o nome do cachorro? ")
let raca = prompt ("Qual a raça do cachorro? ")
let idade = Number(prompt ("Qual a idade do cachorro? "))
let dados = []
dados.push(nomedobicho)
dados.push(raca)
dados.push(idade)
let paciente = {
     nomeDog: dados[0],
     racaDog: dados[1],
     idadeDog: dados[2]
}
if (idade >= 8) {
    console.log("O paciente " + nomedobicho + " já é sênior e precisa de exames de rotina.")
    console.log(paciente)
} else {
    console.log("Paciente na faixa de idade regular")
    console.log(paciente)
}