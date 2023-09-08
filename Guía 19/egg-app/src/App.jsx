import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  const [contador1, setContador1] = useState(0) //Forma de crear la variable con useState. (Variable y set de la variable)
  const [contador2, setContador2] = useState(0)
  // let contador2 = 0

  useEffect(()=>{
    console.log("use Efect");
  },[contador1])

  useEffect(()=>{
    console.log("use Efect 2");
  },[contador2])

  useEffect(()=>{
    console.log("use Efect 3");
  })

  function sumarContador1(){
    setContador1(contador1 + 1)
  }
  
  function sumarContador2(){
    setContador2(contador2 + 1)
  }
  
  // function sumarContador2(){
  //   console.log( contador2);
  //   contador2 = contador2 + 1
  // }

  // const[mostrar, setMostrar] = useState(false)

  return (
    <div>
      <p>Contador: {contador1} </p>
      <button onClick={sumarContador1}>Sumar contador 1</button>
      <p>Contador: {contador2} </p>
      <button onClick={sumarContador2}>Sumar contador 2</button>
      {/* <p> {contador2} </p>
      <button onClick={sumarContador2}>Sumar contador 2</button> */}



      {/* <p>{mostrar && "muestro el texto"}</p> {/* Función SI, si muestra verdadero mostrará el texto. */}
       {/* <button onClick={()=> setMostrar(!mostrar)}>Mostrar texto.</button> */}
    </div>
  )
}

export default App
