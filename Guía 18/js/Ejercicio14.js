/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
numero de páginas.*/

var libro = {
  ISBN: 0,
  Titulo: "",
  Autor: "",
  NumeroPaginas: 0,
  cargarLibro: function () { // Crea una función dentro del JSON para cargar los datos del objeto.
    this.ISBN = prompt("Ingrese ISBN.");
    this.Titulo = prompt("Ingrese Título.");
    this.Autor = prompt("Ingrese Autor.");
    this.NumeroPaginas = prompt("Ingrese el Número de páginas.");
  },
  mostrarLibro: function () { // Crea una función dentro del JSON para mostrar los datos del objeto.
    console.log(`El ISBN es ${this.ISBN}.`);
    console.log(`El nombre del título es: ${this.Titulo}.`);
    console.log(`El nombre del autor es: ${this.Autor}.`);
    console.log(`La cantidad de páginas que tiene el libro es: ${this.NumeroPaginas}.`)
},
};

//Llama a la función cargar.
libro.cargarLibro();
//Llama a la función mostrar.
libro.mostrarLibro();
