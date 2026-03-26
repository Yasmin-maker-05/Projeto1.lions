const prompt = require("prompt-sync")();

let senhaCorreta = 2567;
let tentativa ;

while (tentativa != senhaCorreta) {
    tentativa = Number(prompt("Digite a senha: "));

    if (tentativa != senhaCorreta) {
        console.log("Acesso negado: Senha incorreta");
    }
}

console.log("Cofre liberado com sucesso");