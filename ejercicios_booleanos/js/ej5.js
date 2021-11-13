let weight = prompt("Digite su peso en kilogramos");
let height = prompt("Digite su altura en metros");
let result = weight / (height ** 2);
if (result < 18.5) {
    console.log("Bajo de peso");
} else if (18.5 >= result || result <= 24.9) {
    console.log("Normal");
} else if (25 >= result || result <= 29.9) {
    console.log("Sobrepeso");
} else if (result > 30) {
    console.log("Obeso");
}