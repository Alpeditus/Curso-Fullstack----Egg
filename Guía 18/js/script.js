window.onload = saludar;

document.getElementById("123").onmouseover = function(){
    retar("Soy un input");
};

document.getElementById("321").onmouseover = function(){
    retar("Soy un P");
};

document.getElementById("btn").onclick = meHicisteClick;

function saludar(){
    console.log("Bienvenido!!");
}

function retar(tipo){
    console.log(tipo);
    console.log("Epa! salí de arriba mío!!");
}

function meHicisteClick(){
    console.log("Click <3");
}
