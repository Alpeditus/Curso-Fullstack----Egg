import React from 'react'

const titulo = "Hello World";
const subTitulo = "Aprendiendo React.";

export const titulos = () => {
  return (
    <div>
        <h1> {titulo} </h1>
        <h2> {subTitulo} </h2>
    </div>
  )
}
