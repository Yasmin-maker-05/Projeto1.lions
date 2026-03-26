const prompt = require('prompt-sync')();

let ClienteVIP = {
    nome: ['Marcos'],
    Destino: ['Londres', 'Paris'],
    QuantidadeMilhas: [1080, 2460],
    Categoria: []
}

let destino = prompt("Qual o destino do seu novo voo? ")
ClienteVIP.Destino.push(destino)
let milhas = Number(prompt("Quantas milhas você conseguiu com essa viajem? "))
ClienteVIP.QuantidadeMilhas.push(milhas)

let soma = (ClienteVIP.QuantidadeMilhas[0] + ClienteVIP.QuantidadeMilhas[1] + ClienteVIP.QuantidadeMilhas[2])
let falta = (5000 - soma)

if (soma > 5000) {
    let subtracao = (soma - 5000)
    ClienteVIP.QuantidadeMilhas.push(subtracao)
    ClienteVIP.QuantidadeMilhas.shift()
    ClienteVIP.QuantidadeMilhas.shift()
    ClienteVIP.QuantidadeMilhas.shift()
    ClienteVIP.Categoria.push('Platinum')
    console.log('Parabéns você alcançou um total de 5000 milhas gastadas e agora é um cliente da Categoria Platinum')
    console.log(ClienteVIP)
} else {
    ClienteVIP.Categoria.push("Gold")
    console.log("Ainda faltam " + falta + " milhas para você poder virar um cliente Platinum")
    console.log(ClienteVIP)
}