const prompt = require('prompt-sync')();

let ficha = {
    nome : [],
    peso: [],
    meta: [],
    distancia: []
}

let Nome = prompt ("Qual seu nome? ")
ficha.nome.push(Nome)
let Peso = Number(prompt("Qual seu peso atual? "))
ficha.peso.push(Peso)
let Meta = prompt ("Qual sua meta ? (Emagrecimento ou Performance) ")
ficha.meta.push(Meta)
let distancia1 = Number(prompt("Qual foi a primeira distancia percorrida na maratona? "))
ficha.distancia.push(distancia1)
let distancia2 = Number(prompt("Qual foi a segunda distancia percorrida na maratona? "))
ficha.distancia.push(distancia2)
let distancia3 = Number(prompt("Qual foi a ultima distancia percorrida na maratona? "))
ficha.distancia.push(distancia3)
let distancia4 = Number(prompt("Qual a distancia percorrida hoje? "))
ficha.distancia.push(distancia4)

media = (ficha.distancia[1] + ficha.distancia[2] + ficha.distancia[3]) / 3

if (media > 20 && ficha.meta == 'Emagrecimento') {
    let subtracao = (ficha.peso[0] - 1)
    ficha.peso.push(subtracao)
    ficha.peso.shift()
    console.log("Meta Atingida")
    console.log(ficha)
} else if (ficha.meta == 'Performace' && distancia4 > distancia3){
    console.log("Novo Recorde Pessoal")
    console.log(ficha)
} else {
    console.log(ficha)
}