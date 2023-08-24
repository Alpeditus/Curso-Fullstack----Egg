/* Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo. */

//var edad = prompt("Ingrese su edad.");

function mostrarMensaje() {
  var edad = parseInt(document.getElementById("edadInput").value);
  var mensajeDiv = document.getElementById("mensajeDiv");

  if (edad < 18) {
    mensajeDiv.textContent = "Ud es menor de edad.";
  } else {
    mensajeDiv.textContent = "Ud es mayor de edad.";
  }
}

