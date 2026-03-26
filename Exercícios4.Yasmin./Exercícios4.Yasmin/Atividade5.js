const prompt = require("prompt-sync")();

function atualizarStatus(codigo) {
    let status;

    switch (codigo) {
        case "P":
            status = "Pendente de Envio";
            break;
        case "E":
            status = "Em Rota de Entrega";
            break;
        case "C":
            status = "Cancelado";
            break;
        default:
            status = "Status Inválido";
    }

    return status;
}

let encomenda = {
    id: 1234567
};

let codigo = prompt('Digite o código de status da sua entrega ("P", "E", "C"): ');
encomenda.status = atualizarStatus(codigo);

console.log(encomenda);