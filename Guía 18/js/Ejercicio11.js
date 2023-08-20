/* Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript” */

// Con FOR normal.
let palabraLarga = (frase) => {
  let vector = frase.split(" ");
  let palabraMasGrande = "";

  for (i = 0; i < vector.length; i++) {
    if (vector[i].length > palabraMasGrande.length) {
      palabraMasGrande = vector[i];
    }
  }
  return palabraMasGrande;
};

let frase = prompt("Ingrese una frase de dos palabras mínimo.");
let respuesta = palabraLarga(frase);

// Usando For..OF (Chat GPT)

const palabraMasLarga = (str) => {
    const palabras = str.split(' ');
    let palabraMasLarga = "";
  
    for (const palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
    return palabraMasLarga;
  };
  
  // Ejemplo de uso
  const input = "Guia de JavaScript";
  const palabraLarga2 = palabraMasLarga(input);
  console.log(palabraLarga2);  // Salida: "JavaScript"
  
console.log(`La palabra más larga de la frase es ${respuesta}.`);
document.write(`La palabra más larga de la frase es ${respuesta}.`);