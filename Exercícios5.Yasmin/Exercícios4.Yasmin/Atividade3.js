const prompt = require("prompt-sync")();

let pedido = {
    cliente: prompt("Qual seu nome? : ")
};

console.log("1 - Teclado");
console.log("2 - Mouse");
console.log("3 - Fone");

let opcao = Number(prompt("Digite qual produto deseja: "));

switch (opcao) {
    case 1:
        pedido.produto = "Teclado";
        pedido.preco = 100;
        break;
    case 2:
        pedido.produto = "Mouse";
        pedido.preco = 30;
        break;
    case 3:
        pedido.produto = "Fone";
        pedido.preco = 70;
        break;
    default:
        pedido.produto = "Desconhecido";
        pedido.preco = 0;
}

console.log(pedido);