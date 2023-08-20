/* Escribir una función flecha que reciba una palabra y la devuelva al revés. */

var invertirPalabra = (palabra) => { return palabra.split('').reverse('').join('')};

var palabra = prompt("Ingrese la palabra o frase.");
var palabraInvertida = invertirPalabra(palabra);

console.log(palabraInvertida);
document.write(`La respuesta al ejercicio es ${palabraInvertida}.`);
