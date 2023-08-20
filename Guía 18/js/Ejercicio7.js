/* Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial. */

const limite = parseInt(prompt("Ingrese un número límite."));
var suma = 0;
do {
  var ingreso = parseInt(prompt("Ingrese un número."));
  suma += ingreso;
  console.log(`Su acumulativo es ${suma}.`);
} while (suma <= limite);

document.write(`Ud superó el número límite ${limite}.`);
