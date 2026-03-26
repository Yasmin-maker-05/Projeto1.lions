const prompt = require('prompt-sync')();

let NovoPassageiro = {
    nome: [],
    nacionalidade: [],
    Trabalhando: [],
    Documentos: ['Passaporte', 'Visto'],
    EntradaPermitida: true
}

let NomeP = prompt("Qual seu nome? ")
NovoPassageiro.nome.push(NomeP)

let NacionalidadeP = prompt("Qual sua nacionalidade? (ex: Brasil, México, etc) ")
NovoPassageiro.nacionalidade.push(NacionalidadeP)

let EstaTrabalhando = true
let Trabalho = prompt("Está indo a trabalho? (sim/nao) ")
if (Trabalho == 'nao') {
    EstaTrabalhando = ! EstaTrabalhando
}
if (EstaTrabalhando) {
    NovoPassageiro.Trabalhando.push("Sim")
} else {
    NovoPassageiro.Trabalhando.push("Nao")
}
console.log("Qual o teceiro documento que precisa ser inserido?")
console.log("Plano de Saúde")

let Plano = prompt('Por favor informe seu plano de saúde, caso não possua, pule está estapa apenas digitando "ENTER" ')
NovoPassageiro.Documentos.push(Plano)

if (NovoPassageiro.nacionalidade !== 'Brasil' && NovoPassageiro.Documentos[1] == 'Visto' && NovoPassageiro.Documentos[2] !== '') {
    console.log(NovoPassageiro)
} else if (NovoPassageiro.nacionalidade == 'Brasil' && NovoPassageiro.Documentos[0] == 'Passaporte'){
    console.log(NovoPassageiro)
} else {
    console.log("Entrada negada")
    NovoPassageiro.EntradaPermitida = ! NovoPassageiro.EntradaPermitida
    console.log(NovoPassageiro)
}