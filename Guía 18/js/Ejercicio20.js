/* Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18]. */

let matriz = [[3], [6], [9], [12], [15]];

let vector = matriz.flat();

for(let i=0; i<vector.length;i++){
    vector[i]+=3;
}

console.log(` La matriz es igual a ${matriz} y el vector a ${vector}`);