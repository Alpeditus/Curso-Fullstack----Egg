/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/

var vector1 = [];
var vector2 = [];

let numeroAleatorio = (max,min) => {
    return Math.floor(Math.random()*(max-min))+min;
}

for (i=0; i<5;i++){
    let num1 = numeroAleatorio(101,-100);
    let num2 = numeroAleatorio(101,-100);
    vector1.push(num1);
    vector2.push(num2);
}

console.log(vector1);
console.log(vector2);

document.write(`El vector n°1 es [${vector1}] y el vector n°2 es [${vector2}].`);