/* Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

var letra = prompt("Ingrese la letra S o N.")
if (letra.toUpperCase() == 'S' || letra.toUpperCase() == 'N') {
    alert("Correcto.")
} else {
    alert("Incorrecto.")
}