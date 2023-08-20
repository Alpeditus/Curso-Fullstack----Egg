// A partir del siguiente array:

var valores = [true, 5, false, "hola", "adios", 2];

// a) Determinar cual de los dos elementos de texto es mayor.

let palabraMayor = "";
for (let i=0;i<valores.length;i++){
    if (typeof valores[i] === "string") {
        if (valores[i].length>palabraMayor.length) {
            palabraMayor = valores[i];
        }
    }
}

console.log(`La palabra mayor es ${palabraMayor}.`)

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
// operadores necesarios para obtener un resultado true y otro resultado false.
let valoresBoleanos;
if(valores[0] == true || valores[2] == true){
    console.log(`Es resultado es true.`)
}

if(valores[0] == true && valores[2] == true){
    console.log(`Es resultado es true.`)
} else {
    console.log(`El resultado es false.`)
}

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos.*/

console.log(`Se hará las 4 operaciones matemáticas con los valores números del Array: 
Suma: ${valores[1]+valores[5]}.
Resta: ${valores[1]-valores[5]}.
Multiplicación: ${valores[1]*valores[5]}.
División: ${valores[1]/valores[5]}.
`);