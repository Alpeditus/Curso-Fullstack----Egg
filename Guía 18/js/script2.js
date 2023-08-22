let titulos = document.getElementsByName("titulo");
let pes = document.getElementsByTagName("P");
let input = document.getElementById("123");
let boton = document.getElementById("btn");

boton.onclick = function(){

    //Cambiar el estilo de los títulos y oculta o desoculta los mísmos depende la situación (true/false)
    titulos.forEach(e => {
        e.style.color = "red";
        e.hidden = !e.hidden;
    });
    
    //Cambie el value de los párrafos.
    for (const e of pes) {
        e.innerHTML = "Egg";
    }

    //Todos los inputs se completan con el valor indicado.
     input.value = "Chiquito";

}

//Onkeydown cambia el value de input cuando cumple el IF.
input.onkeydown = function() {
        if(input.value.length > 10) input.value = "Chiquito";
}