/* Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20. */

let arregloA = [];
let arregloB = [];

for (let i = 0; i < 50; i++) {
  arregloA[i] = (Math.random() * 50 + 1).toFixed(2);
  //arregloA.push = otra forma de agregar valores a
}

arregloA.sort((a, b) => a - b);

for (let i = 0; i < 20; i++) {
  i < 10 ? (arregloB[i] = arregloA[i]) : (arregloB[i] = 0.5);
  
}

console.log(arregloA);
console.log(arregloB);

let respuesta = document.getElementById("respuesta");
respuesta.innerHTML = `El arreglo A es igual: ${arregloA}<br>Y el arreglo B es igual a: ${arregloB}`;
