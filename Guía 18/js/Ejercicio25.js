/* Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Obtener nombre y apellido de form </title>
</head><body>
<form id="form1" onsubmit="getFormValores()">
Nombre: <input type="text" name="nombre" value="David"><br>
Apellido: <input type="text" name="apellido" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html> */

//Se usa &lt; y &gt; en lugar de < y > para que el innerHTML no interprete las etiquetas.
//<pre></pre> Interpreta automáticamente los saltos de línea.
document.getElementById("consigna").innerHTML = `<pre>Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.
&lt;!DOCTYPE html&gt;
&lt;html&gt;&lt;head&gt;
&lt;meta charset=utf-8 /&gt;
&lt;title&gt;Obtener nombre y apellido de form &lt;/title&gt;
&lt;/head&gt;&lt;body&gt;
&lt;form id="form1" onsubmit="getFormValores()"&gt;
Nombre: &lt;input type="text" name="nombre" value="David"&gt;&lt;br&gt;
Apellido: &lt;input type="text" name="apellido" value="Beckham"&gt;&lt;br&gt;
&lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
&lt;/body&gt;&lt;/html&gt;</pre>`;

// script.js

function getFormValores() {
    // Obtener los elementos de entrada
    var nombreInput = document.getElementsByName('nombre')[0];
    var apellidoInput = document.getElementsByName('apellido')[0];
  
    // Obtener los valores de los elementos de entrada
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
  
    // Imprimir los valores en la consola (puedes ajustar esto según tus necesidades)
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    document.getElementById("respuesta").innerHTML = 
    `Nombre ingresado: ${nombre}.<br>
    Apellido ingresado: ${apellido}.`
  
    // Evitar que el formulario se envíe realmente
    return false;
  }
  