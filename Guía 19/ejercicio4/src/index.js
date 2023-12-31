import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*Crear un proyecto compuesto por 4 componentes bajo la siguiente jerarquía.
• Index.js
o App
§ Navbar
§ Main1 o Main2
§ Footer
Al hacer click sobre las dos posibles opciones en el NavBar, se deberá cambiar entre
Main1 y Main2 dependiendo de la navegación. Para lograrlo se deberá instalar y usar
React Router Dom.
*/