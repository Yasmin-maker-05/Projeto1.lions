const prompt = require('prompt-sync')();

let listadetarefas = []
let tarefa1 = prompt("Digite a primeira tarefa: ");
let tarefa2 = prompt("Digite a segunda tarefa: ");
let tarefa3 = prompt("Digite a terceira tarefa: ");
listadetarefas.push(tarefa1)
listadetarefas.push(tarefa2)
listadetarefas.push(tarefa3)
console.log("Você tem " + listadetarefas.length + " na sua lista")
listadetarefas.pop()
console.log("Agora você tem " + listadetarefas.length + " na sua lista")
console.log(listadetarefas[0])
console.log(listadetarefas[1])