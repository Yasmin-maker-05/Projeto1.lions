const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let horas = prompt ("Qual quantidade de horas estimadas para um novo sistema web? ")
let ONG = prompt ("O cliente é uma ONG? ")
const hora = (45)
let custoprojeto = (hora * horas)
if (custoprojeto >= 5000 && ONG == 'sim' ) {
    let desconto = (custoprojeto / 100)
    let valorfinal = (custoprojeto - desconto)
    console.log(nome + ", o custo do seu projeto é " + custoprojeto + ", porém uma ONG tem o direito de 10% de desconto ao valor igual ou acima de 5000 reais totalizando: " + valorfinal);
} else {
    console.log("O custo do novo sistema web é " + custoprojeto)
}