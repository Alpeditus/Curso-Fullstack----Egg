/* Resalte todas las palabras de más de 8 caracteres en el texto del párrafo
(con un fondo amarillo, por ejemplo) */

document.getElementById("resaltar").addEventListener("click", () => {
    const parrafo = document.getElementById("parrafo").value;
    let vector = parrafo.split(' ');

    let resultadoHTML = '';

    for (const palabra of vector) {
        if (palabra.length > 8) {
            resultadoHTML += `<span class="resaltado">${palabra}</span> `;
        } else {
            resultadoHTML += palabra + ' ';
        }
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
});
