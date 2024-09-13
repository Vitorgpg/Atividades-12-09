var precoProduto = parseFloat(prompt("Digite o preço do produto:"));
var quantidadeProduto = parseInt(prompt("Digite a quantidade do produto:"));

var codigoPagamento = "";
codigoPagamento += prompt("Escolha o código da condição de pagamento:\n" +
    "1 - À vista, dinheiro ou cheque (10% de desconto)\n" +
    "2 - À vista, cartão de crédito (5% de desconto)\n" +
    "3 - Em 2 vezes (preço sem juros)\n" +
    "4 - Em 3 vezes (preço + 10% de juros)");

codigoPagamento = parseInt(codigoPagamento);  

var valorTotal = precoProduto * quantidadeProduto;
var valorFinal;

if (codigoPagamento == 1) {
    valorFinal = valorTotal * 0.90; 
    console.log("Pagamento à vista, dinheiro ou cheque. Valor final: R$ " + valorFinal.toFixed(2));
} else if (codigoPagamento == 2) {
    valorFinal = valorTotal * 0.95;  
    console.log("Pagamento à vista, cartão de crédito. Valor final: R$ " + valorFinal.toFixed(2));
} else if (codigoPagamento == 3) {
    valorFinal = valorTotal;  
    console.log("Pagamento em 2 vezes. Valor final: R$ " + valorFinal.toFixed(2));
} else if (codigoPagamento == 4) {
    valorFinal = valorTotal * 1.10; 
    console.log("Pagamento em 3 vezes com 10% de juros. Valor final: R$ " + valorFinal.toFixed(2));
} else {
    console.log("Código de pagamento inválido.");
}
