console.log("Menu de Pizzas:");
console.log("1 -> Mussarela -> R$ 20,00");
console.log("2 -> Calabresa -> R$ 25,00");
console.log("3 -> Marguerita -> R$ 23,00");
console.log("4 -> 4 Queijos -> R$ 29,99");
console.log("5 -> Baiana -> R$ 22,50");


console.log("\nMenu de Bebidas:");
console.log("1 -> Refrigerante Lata -> R$ 5,00");
console.log("2 -> Refrigerante 2L -> R$ 10,00");
console.log("3 -> Agua -> R$ 3,50");
console.log("4 -> Suco -> R$ 7,50");


var pizzaEscolhida = prompt("Escolha o número da pizza:");
var quantidadePizza = prompt("Digite a quantidade de pizzas:");


var bebidaEscolhida = prompt("Escolha o número da bebida:");
var quantidadeBebida = prompt("Digite a quantidade de bebidas:");

var precoPizza = 0;
var precoBebida = 0;


if (pizzaEscolhida == 1) {
    precoPizza = 20.00;
} else if (pizzaEscolhida == 2) {
    precoPizza = 25.00;
} else if (pizzaEscolhida == 3) {
    precoPizza = 23.00;
} else if (pizzaEscolhida == 4) {
    precoPizza = 29.99;
} else if (pizzaEscolhida == 5) {
    precoPizza = 22.50;
} else {
    console.log("Opção de pizza inválida.");
}


if (bebidaEscolhida == 1) {
    precoBebida = 5.00;
} else if (bebidaEscolhida == 2) {
    precoBebida = 10.00;
} else if (bebidaEscolhida == 3) {
    precoBebida = 3.50;
} else if (bebidaEscolhida == 4) {
    precoBebida = 7.50;
} else {
    console.log("Opção de bebida inválida.");
}


var totalPizza = precoPizza * quantidadePizza;
var totalBebida = precoBebida * quantidadeBebida;
var totalPagar = totalPizza + totalBebida;

if (totalPagar > 0) {
    console.log("O valor total a pagar é: R$ " + totalPagar.toFixed(2));
}