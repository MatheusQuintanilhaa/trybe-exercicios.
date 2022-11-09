const angulo = 70;
const anguloDois = 100;
const anguloTres = 10;
const somaDosAngulos = angulo + anguloDois + anguloTres;

if (somaDosAngulos === 180) {
    console.log("true");
} else if (angulo < 0 || anguloDois < 0 || anguloTres < 0) {
    console.log("erro, ângulo inválido");
} else {
    console.log("false");
}
