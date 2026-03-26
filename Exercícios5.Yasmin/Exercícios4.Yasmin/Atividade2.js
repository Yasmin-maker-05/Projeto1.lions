const prompt = require("prompt-sync")();

let nome = prompt("Qual o seu nome: ");
let codigo = Number(prompt("Digite o seu código: "));

const validarAcesso = (nome, codigo) => {
    if (nome.length > 5 && codigo > 1000) {
        return true;
    } else {
        return false;
    }
};

let acesso = validarAcesso(nome, codigo);

if (acesso) {
    console.log("Acesso Concedido");
} else {
    console.log("Acesso Negado");
}