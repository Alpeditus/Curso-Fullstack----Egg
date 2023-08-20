/*Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado.*/

var vector = [];

let numeroAleatorio = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

for (let i = 0; i < 5; i++) {
  let num = numeroAleatorio(101, -100);
  vector.push(num);
}

let vector2 = [1, 2, 3, 4, 5];

console.log(`Vector 1 original: ${vector}.`);
console.log(`Vector 2 original: ${vector2}.`);

vector.splice(vector.length - 2, 2);
vector2.splice(vector2.length - 2, 2);

console.log(`Nuevo vector 1: ${vector}.`);
console.log(`Nuevo vector 2: ${vector2}.`);
