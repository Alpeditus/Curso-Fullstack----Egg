/* Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección. */

let boton = document.getElementById("boton");

boton.onclick = function clickMensaje(){
    console.log('Atrevido.');
    alert('Atrevido.');
};
