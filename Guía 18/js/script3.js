const ul = document.getElementById("lista");
const boton = document.getElementById("btn");

//Se conecta a la appi de Rick and Morty para obtener los resultados.
async function getAllCharacters() {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let {results} = await response.json();
    return results;
}

//Añade tantos li como elementos haya.
function agregar(nombre) {
    let li = document.createElement("li");
    li.innerHTML = nombre;
    ul.append(li);
}

//Activa el evento.
boton.onclick = async function () {
    
    let results = await getAllCharacters();

    results.forEach(e=> {
        agregar(e.name);
    })
}