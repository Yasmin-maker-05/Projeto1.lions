const prompt = require('prompt-sync')();

let GrupoCorporativo = {
    nomeEmpresa: [],
    orçamentoTotal: [],
    OpenBar: [],
    ConsumoExtras:[],
}

let nomeEmp = prompt("Qual o nome da empresa? ")
GrupoCorporativo.nomeEmpresa.push(nomeEmp)
let Orçamento = Number(prompt("Qual o orçamento total? "))
GrupoCorporativo.orçamentoTotal.push(Orçamento)
let PrimeiraBebida = prompt("Qual o nome da nova bebida importada? ")
GrupoCorporativo.ConsumoExtras.push(PrimeiraBebida)
let SegundaBebida = prompt("Qual o nome da nova segunda bebida importada? ")
GrupoCorporativo.ConsumoExtras.push(SegundaBebida)
let Custo = Number(prompt("Qual o valor somado das duas bebidas? "))

let Verificar = (GrupoCorporativo.orçamentoTotal[0] - Custo)

if (Verificar < 0) {
    GrupoCorporativo.orçamentoTotal.push(Verificar)
    GrupoCorporativo.orçamentoTotal.shift()
    GrupoCorporativo.OpenBar.push("Open Bar Fechado")
    let Aviso = true
    if (Aviso) {
        console.log("Vocês estão recebendo uma Multa de 500 reais por exeder o orçamento total, e o Open bar agora está fechado.")
    }
    console.log(GrupoCorporativo)
} else {
    GrupoCorporativo.orçamentoTotal.push(Verificar)
    GrupoCorporativo.orçamentoTotal.shift()
    GrupoCorporativo.OpenBar.push("Open Bar aberto")
    Aviso = false
    console.log("Você ainda está dentro do orçamento, pode continuar bebendo")
    console.log(GrupoCorporativo)
}