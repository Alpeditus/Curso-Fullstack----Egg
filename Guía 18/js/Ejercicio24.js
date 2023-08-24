/* Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML. */

document.getElementById("boton").addEventListener("click", () => {
  let radio = parseInt(document.getElementById("radio").value);
  //Para identificar la figura se usa el querySelector.
  let figura = document.querySelector('input[name="figura"]:checked').value;

  //let figura = parseInt(document.getElementById("figura").value);
  let perimetro; // = 2 * radio * Math.PI;
  let area; // = Math.PI * Math.pow(radio,2);

  switch (figura) {
    case "1":
      perimetro = 2 * radio * Math.PI;
      area = Math.PI * Math.pow(radio, 2);
      break;
    case "2":
      perimetro = 4 * radio;
      area = Math.pow(radio, 2);
      break;
  }

  document.getElementById(
    "respuesta"
  ).innerHTML = `El perímetro del círculo es ${perimetro.toFixed(2)}. <br>
     El área del círculo es ${area.toFixed(2)}.`;
});
