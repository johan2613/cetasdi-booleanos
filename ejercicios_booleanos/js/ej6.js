let number = prompt("Digite un número");
let result1 = number / 3;
let result2 = number / 5;
if (Number.isInteger(result1) && Number.isInteger(result2)) {
    console.log("Múltiplo de 3 y de 5");
} else if (Number.isInteger(result1)) {
    console.log("Múltiplo de 3");
} else if (Number.isInteger(result2)) {
    console.log("Múltiplo de 5");
} else {
    console.log("No es múltiplo ni de 3 ni de 5");
}