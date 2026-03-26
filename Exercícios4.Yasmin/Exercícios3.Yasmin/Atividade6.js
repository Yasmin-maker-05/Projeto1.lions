const prompt = require("prompt-sync")();

const carrinhos = [
    { cliente: "João", produtos: [50.0, 120.5, 15.0] },
    { cliente: "Maria", produtos: [200.0, 45.9] },
    { cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] }
];

let clientesPagos = [];

carrinhos.forEach((carrinho) => {

    let total = 0;

    carrinho.produtos.forEach((valor) => {
        total += valor;
    });

    console.log("Cliente:", carrinho.cliente);
    console.log("Total:", total);

    let pago = 0;

    while (pago < total) {
        let valor = Number(prompt("Digite o valor recebido: "));
        pago += valor;
    }

    if (pago > total) {
        console.log("Troco:", pago - total);
    }

    clientesPagos.push(carrinho.cliente);
});

console.log("Pagamentos concluídos:");
console.log(clientesPagos);