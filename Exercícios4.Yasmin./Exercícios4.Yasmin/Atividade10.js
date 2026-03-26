const prompt = require("prompt-sync")();

let caixa = {
    operador: "Marisvalda",
    saldo: 100,
    historico: []
};

function registrarVenda(saldo, valor) {
    return saldo + valor;
}

function registrarDespesa(saldo, valor) {
    return saldo - valor;
}

let opcao;

do {
    opcao = prompt("V (venda), D (despesa), S (sair): ");

    switch (opcao) {

        case "V":
            let v = Number(prompt("Valor do item: "));
            caixa.saldo = registrarVenda(caixa.saldo, v);
            caixa.historico.push("Entrada");
            break;

        case "D":
            let d = Number(prompt("Valor do item: "));
            caixa.saldo = registrarDespesa(caixa.saldo, d);
            caixa.historico.push("Saída");
            break;
    }

} while (opcao !== "S");

console.log(caixa);