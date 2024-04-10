//EJERCICIO 1
//Entrada de variables
let nombreUsuario = prompt("Ingrese el nombre de usuario");
let montoRetirar = parseInt(prompt("Ingrese un monto a retirar"));
let saldoCuenta = 20000;
//Proceso
const saldoDisponible = saldoCuenta - montoRetirar;
if (saldoDisponible < montoRetirar) {
    //salida
    alert ("Su saldo no es sufuciente para retirar: " + montoRetirar)
} else {
    //Salida
    alert ("El retiro se realizo con éxito")
    alert("Monto retirado: " + montoRetirar + ", Saldo disponible: " + saldoDisponible);
}

let esEstudiante = true
if (esEstudiante) {
    console.log("Eres Estudiante");
} else {
    console.log("No eres Estudiante");
}