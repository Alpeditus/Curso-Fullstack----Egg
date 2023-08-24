/* Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML. */ 

document.getElementById("boton").addEventListener("click",()=>{
    let radio = parseInt(document.getElementById("radio").value)
    let perimetro = 2 * radio * Math.PI;
    let area = Math.PI * Math.pow(radio,2);

    document.getElementById("respuesta").innerHTML = 
    `El perímetro del círculo es ${perimetro.toFixed(2)}. <br>
     El área del círculo es ${area.toFixed(2)}.`
})
