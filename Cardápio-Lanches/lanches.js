console.log("Cardápio:");
console.log("100 - Cachorro quente - R$ 1,10");
console.log("101 - Bauru simples - R$ 1,30");
console.log("102 - Bauru c/ovo - R$ 1,50");
console.log("103 - Hamburger - R$ 1,10");
console.log("104 - Cheeseburger - R$ 1,30");

var codigoLanche = parseInt(prompt("Digite o código do lanche:"));
var quantidade = parseInt(prompt("Digite a quantidade:"));

var precos = [1.10, 1.30, 1.50, 1.10, 1.30];
var preco = precos[codigoLanche - 100];

if (quantidade <= 0) {
    console.log("Quantidade inválida. Deve ser um número positivo.");
} else if (preco === undefined) {
    console.log("Código inválido.");
} else {
    console.log("O valor total a ser pago é: R$ " + (preco * quantidade).toFixed(2));
}
