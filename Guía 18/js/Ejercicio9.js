/* Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring(). */

let frase = prompt("Ingrese una frase.")
let nuevaFrase = "";

for (i=0; i<frase.length; i++) {
    nuevaFrase += frase.substring(i,i+1) + " ";
}

console.log(nuevaFrase);
document.write(nuevaFrase);