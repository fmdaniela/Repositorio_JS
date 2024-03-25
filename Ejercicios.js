alert ("Hola Mundo desde archivo externo");

let nombre = "Carlos";

console.log (nombre);


/* 46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor en grados 
Celsius. Convierte esta temperatura a grados Fahrenheit utilizando la fórmula `F = (C * 
9/5) + 32` y muestra el resultado en la consola. */

let temperaturaCelsius -25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(temperaturaFahrenheit)

/* Ejercicio funcion invertir numero */

function invertirNumero(numero) {

    let numeroString = "856" //numero.toString()
    let numeroInvertido = ""

    for ( let i = (numeroString.length -1) ; i >= 0 ; i-- ) {

        numeroInvertido = numeroInvertido + numeroString [i]

        return numeroInvertido

    }
}

console.log(invertitNumero (856))

