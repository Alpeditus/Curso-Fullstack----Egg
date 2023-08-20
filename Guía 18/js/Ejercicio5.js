/* Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */

var operacion = prompt(`Ingrese la operación a realizar:
Suma (S)
Resta (R)
Multiplicación (M)
División(D)`).toUpperCase();
//operacion = operacion.toUpperCase;
var num1 = parseInt(prompt(`Ingrese el primer número.`));
var num2 = parseInt(prompt(`Ingrese el segundo número.`));
switch (operacion) {
  case "S":
    alert(`El resultado es ${num1+num2}.`);
    break;
  case "R":
    alert(`El resultado es ${num1 - num2}.`);
    break;
  case "M":
    alert(`El resultado es ${num1 * num2}.`);
    break;
  case "D":
    if (num2 != 0) {
      alert(`El resultado es ${num1 / num2}.`);
    } else {
      alert(`El segundo número es incorrecto.`);
    }
    break;
  default:
    alert(`Datos mal ingresados.`)
    break;
}
