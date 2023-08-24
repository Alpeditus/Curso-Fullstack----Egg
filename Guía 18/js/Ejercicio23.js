/* Resalte todas las palabras de más de 8 caracteres en el texto del párrafo
(con un fondo amarillo, por ejemplo) */

/* document.getElementById("resaltar").addEventListener("click", () => {
    const parrafo = document.getElementById("parrafo").value;
    let vector = parrafo.split(' ');

    let resultadoHTML = '';

    for (const vectores of vector) {
        if (vectores.length > 8) {
            resultadoHTML += `<span class="resaltado">${vectores}</span> `;
        } else {
            resultadoHTML += vectores + ' ';
        }
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}); */ 

document.getElementById("resaltar").addEventListener("click", ()=>{
    const parrafo = document.getElementById("parrafo").value;
    const separadores = /[ |,|.]/;
    let vector = parrafo.split(' ');

    let resultadoHTML = '';

    for (const vectores of vector) {
        if (vectores.length > 8) {
            resultadoHTML += `<span class="resaltado">${vectores}</span> `;
        } else {
            resultadoHTML += vectores + ' ';
        }
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
})