const prompt = require('prompt-sync')();

let filme = prompt("Qual o tema do filme? (Ação/Comédia/Terror/Animação) ")

switch (filme) {
    case 'Ação':

    console.log('Sala 1');
    break;
    case 'Comédia':

    console.log('Sala 2');
    break;
    case 'Terror':

    console.log('Sala 3');
    break;
    case 'Animação':

    console.log('Sala 4');
    break
    default:

console.log("Gênero não encontrado. Verifique as opções válidas.");
}