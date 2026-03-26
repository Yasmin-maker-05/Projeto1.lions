const prompt = require("prompt-sync")();

function salvarArquivo(servidor, tamanhoArquivo) {
    if (servidor.ocupado + tamanhoArquivo <= servidor.total) {
        servidor.ocupado = servidor.ocupado + tamanhoArquivo;
        return true;
    } else {
        return false;
    }
}

let servidor = {
    nome: "Servidor1",
    total: 300,
    ocupado: 60
};

let tamanho = Number(prompt("Digite o tamanho do arquivo (GB): "));

let resultado = salvarArquivo(servidor, tamanho);

if (resultado) {
    console.log("Upload realizado com sucesso!");
} else {
    console.log("Upload rejeitado! Sem espaço suficiente.");
}
console.log(servidor);