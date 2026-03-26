const prompt = require('prompt-sync')();

let Registro = {
    nome: [],
    pontosLeitura: [10],
    HistoricoDias: [],
    HistoricoPaginas: []
}

let Nome = prompt ("Qual seu nome? ")
Registro.nome.push(Nome)
let AtualDia = prompt("Qual a data atual? ")
Registro.HistoricoDias.push(AtualDia)
let PaginasAtual = Number(prompt("Quantas páginas você leu? "))
Registro.HistoricoPaginas.push(PaginasAtual)

if (Registro.HistoricoPaginas > 50 && Registro.pontosLeitura > 0) {
    let NovosPontos = Registro.pontosLeitura * 2
    Registro.pontosLeitura.push(NovosPontos)
    Registro.pontosLeitura.shift()
    console.log(Registro)
    console.log("Super Leitor!")
} else if (Registro.HistoricoPaginas < 10) {
    let PerdeuPontos = Registro.pontosLeitura / 2
    Registro.pontosLeitura.push(PerdeuPontos)
    Registro.pontosLeitura.shift()
    console.log(Registro)
} else {
    console.log(Registro)
}