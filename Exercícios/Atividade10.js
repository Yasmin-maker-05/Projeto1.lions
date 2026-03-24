const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? ")
let condominio = Number(prompt("Qual o valor original do condomínio? "))
let atraso = Number(prompt("Qual a quantidade de dias de atraso? "))
let vencimento = prompt ("O vencimento original caiu em um feriado ou final de semana? (sim/nao) ")
const multa = (0.02)
let multado = (condominio * multa)
let soma1 = (multado + condominio)
let somafinal = (soma1 + atraso)
if (atraso > 0 && vencimento == 'nao') {
    console.log(nome + ", o valor do seu condomínio somado com a multa e os juros é de: " + somafinal)
} else {
    console.log("Por exessão de feriado ou consomínio sem atraso o valor continuará o mesmo: " + condominio)
}