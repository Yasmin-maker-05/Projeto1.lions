const prompt = require('prompt-sync')();

let estacao = { 
    id: 'Sensor3',
    local: 'Cidade',
    temperaturas: []
}

let temp1 = Number(prompt("Qual a primeira leitura de temperatura do dia: "))
let temp2 = Number(prompt("Qual a segunda leitura de temperatura do dia: "))
let temp3 = Number(prompt("Qual a terceira leitura de temperatura do dia: "))

estacao.temperaturas.push(temp1)
estacao.temperaturas.push(temp2)
estacao.temperaturas.push(temp3)

let media = (estacao.temperaturas[0] + estacao.temperaturas[1] + estacao.temperaturas[2]) / 3

if (media > 35) {
  estacao.alerta = true
  console.log("PERIGO: Média de temperatura extrema (" + media + " graus) detectada no " + estacao.local + "!")
} else {
  estacao.alerta = false
  console.log("Temperaturas dentro da normalidade.")
}

console.log(estacao)