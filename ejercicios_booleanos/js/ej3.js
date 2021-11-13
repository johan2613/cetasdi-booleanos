let number = prompt("Escriba un número");
let div = number / 5;
if (Number.isInteger(div)) {
    console.log("Sí, el número" + " " + number + " " + "es múltiplo de 5");
} else {
    console.log("No, el número" + " " + number + " " + "no es múltiplo de 5");
}