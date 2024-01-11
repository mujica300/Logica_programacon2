let temperatura_celsius;

do {
    let userInput = prompt("¿Cuántos grados Celsius hay hoy?");
    temperatura_celsius = parseFloat(userInput);

    if (isNaN(temperatura_celsius)) {
        alert("Por favor, ingrese un valor numérico válido.");
    }
} while (isNaN(temperatura_celsius));

let temperatura_fahrenheit = (temperatura_celsius * 9 / 5) + 32;
let temperatura_kelvin = temperatura_celsius + 273.15;

document.write(`Hay ${temperatura_celsius} grados Celsius, lo que equivale a ${temperatura_fahrenheit} grados Fahrenheit y ${temperatura_kelvin} grados Kelvin`);
