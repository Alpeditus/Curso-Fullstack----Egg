/* Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */

var num = parseInt(prompt("Ingrese un número."));
if (num%2==0 && num!==0) {
    alert("Su número es par.");
    document.write("Su número es par.");
} else if (num%2!=0) {
    alert("Su número es impar.");
    document.write("Su número es impar.");
} else {
    alert("Su número es 0.");
    document.write("Su número es 0.");
}