const prompt = require('prompt-sync')();

let listaAlunos = ["Maria", "Pedro"]
let aluno3 = prompt("Qual o nome do novo aluno? ")
listaAlunos.push(aluno3)
if (listaAlunos.length = 3) {
    console.log(`Turma formada com sucesso! Alunos: ${listaAlunos}`);
}