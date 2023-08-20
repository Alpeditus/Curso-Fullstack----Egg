/* Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. */

var num = parseInt(prompt("Ingrese un número."));

//Variables a usar.
var maximo = Number.MIN_SAFE_INTEGER;
var minimo = Number.MAX_SAFE_INTEGER;
var suma = 0;
var contador = 0;
while (num != 0) {
  if (num > maximo) {
    maximo = num;
  }

  if (num < minimo) {
    minimo = num;
  }

  suma += num;
  contador++;

  var num = parseInt(prompt("Ingrese un nuevo número."));
}

console.log("Ud ingresó el número 0.");
document.write("Ud ingresó el número 0.");

if (contador > 0) {
  console.log(`El valor máximo es ${maximo}, el valor mínimo es ${minimo} y el promedio es ${suma/contador}.`);
  document.write(`El valor máximo es ${maximo}, el valor mínimo es ${minimo} y el promedio es ${suma/contador}.`);
} else {
    console.log("No ingresó datos suficientes.");
    document.write("No ingresó datos suficientes.");
}
