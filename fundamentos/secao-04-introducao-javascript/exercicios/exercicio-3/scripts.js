const number = 200;
const numberDois = 300;
const numberTres = 1000;

if (number > numberDois && number > numberTres) {
    console.log("O maior número é: " + number + " (number)");
} else if (numberDois > number && numberDois > numberTres) {
    console.log("O maior número é: " + numberDois + " (numerDois)");
} else {
    console.log("O maior número é: " + numberTres + " (numberTres)");
}


