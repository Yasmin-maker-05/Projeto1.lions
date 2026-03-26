const prompt = require('prompt-sync')();

let Servidor = {
    nome: 'Servidor Principal AWS',
    capacidadeMaximaGigabytes: [500],
    sitesHospedados: ['Roblox'],
    Domínio: ['.com'],
    TamanhoOcupaGB: [290]
}

let SiteNovo = prompt("Qual o nome deste novo site? ")

let Dominio = prompt("Qual o domínio desse site? ")

let Tamanho = Number(prompt("Qual o tamanho deste site? "))

let soma = (Servidor.TamanhoOcupaGB[0] + Tamanho)

if (soma <= Servidor.capacidadeMaximaGigabytes[0]) {
    Servidor.sitesHospedados.push(SiteNovo)
    Servidor.Domínio.push(Dominio)
    Servidor.TamanhoOcupaGB.push(Tamanho)
    let alertaSobrecarga = true
    if (alertaSobrecarga) {
        console.log("Upload Concluído! Sistema Operacional")
    } 
    console.log(Servidor)
} else {
    alertaSobrecarga = false
    console.log("Falha: Falta de Espaço Físico. Cancele o deploy")
    console.log(Servidor)
}