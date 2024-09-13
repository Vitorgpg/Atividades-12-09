console.log("Cardápio:\n" +
    "100 - Cachorro quente - R$ 1,10\n" +
    "101 - Bauru simples - R$ 1,30\n" +
    "102 - Bauru c/ovo - R$ 1,50\n" +
    "103 - Hamburger - R$ 1,10\n" +
    "104 - Cheeseburger - R$ 1,30\n");

var codigoLanche = parseInt(prompt("Digite o código do lanche:"));
var quantidade = parseInt(prompt("Digite a quantidade:"));

var precoCachorroQuente = 1.10;
var precoBauruSimples = 1.30;
var precoBauruCovo = 1.50;
var precoHamburger = 1.10;
var precoCheeseburger = 1.30;

var preco;

if (codigoLanche == 100) {
    preco = precoCachorroQuente;
} else if (codigoLanche == 101) {
    preco = precoBauruSimples;
} else if (codigoLanche == 102) {
    preco = precoBauruCovo;
} else if (codigoLanche == 103) {
    preco = precoHamburger;
} else if (codigoLanche == 104) {
    preco = precoCheeseburger;
} else {
    preco = undefined;
}

if (quantidade <= 0) {
    console.log("Quantidade inválida. Deve ser um número positivo.");
} else if (preco === undefined) {
    console.log("Código inválido.");
} else {
    console.log("O valor total a ser pago é: R$ " + (preco * quantidade).toFixed(2));
}
