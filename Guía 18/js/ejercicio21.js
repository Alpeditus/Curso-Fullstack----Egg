/* Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. */

let persona = {
    nombre : 'Juan',
    apellido : 'Perez',
    edad : 34,
    sexo : 'H',
    peso : 90,
    altura : 1.70
};

let arrayPersona = Object.values(persona); // Crea un array de las propiedades de un objeto.

alert(arrayPersona);
console.log(arrayPersona);