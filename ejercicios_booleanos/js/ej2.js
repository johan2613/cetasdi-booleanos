let number = prompt("Intenta adivinar un número de 1 a 10");
let start = 1;
let end = 10;
let random = start + Math.floor(Math.random() * end);
if (number == random) {
    console.log("Felicitaciones, ese era");
} else {
    console.log("Lo siento, intenta nuevamente");
}