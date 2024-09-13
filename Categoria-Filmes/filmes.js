var idade = prompt("Digite sua idade:");

if (idade >= 18) {
    console.log("A categoria de filme adequada é: 18 anos.");
} else if (idade >= 16) {
    console.log("A categoria de filme adequada é: 16 anos.");
} else if (idade >= 14) {
    console.log("A categoria de filme adequada é: 14 anos.");
} else if (idade >= 12) {
    console.log("A categoria de filme adequada é: 12 anos.");
} else {
    console.log("A categoria de filme adequada é: Livre.");
}