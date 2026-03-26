const prompt = require('prompt-sync')();

let codigoProduto = console.log("Bem vindo a Lions Dev! \n Essas são as opções de lanches: \n A1 - Torta/bolo \n A2 - Pizza \n A3 - Cachorro Quente ")
let pergunta = prompt('Por favor digite o código do lanche que deseja: ')

switch (pergunta) {
    case 'A1':
        console.log('Torta/bolo escolhido!')
        break;
    case 'A2':
        console.log('Pizza escolhida!')
        break;
    case 'A3':
        console.log('Cachorro-quente escolhido!')
        break;
    default:
        console.log('O código que você digitou é inválido')
}