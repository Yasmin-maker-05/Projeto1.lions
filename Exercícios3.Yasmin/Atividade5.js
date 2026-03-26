const prompt = require('prompt-sync')();

let FichaProjeto = {
    Coordenador: ['Pedro'],
    limiteVagas: [3],
    áreaEstudo: ['Tecnologia'],
}
let Mentores = {
    Nome: ['Carlos', 'Marcos'],
    areaAtuacao: ['Marketing']
}
 let NovoUsuario = prompt("Qual seu nome? ")
 let AreaAtu = prompt("Qual sua área de atuação? (ex: Tecnologia, Artes, Linguística) ")

  if (FichaProjeto.limiteVagas.length < 3 && AreaAtu == 'Tecnologia') {
    console.log("Inscrição aceita")
    Mentores.Nome.push(NovoUsuario)
    console.log(FichaProjeto)
    console.log(Mentores)
  } else {
    console.log("Bloqueado para Inscrições")
    console.log(FichaProjeto)
  }