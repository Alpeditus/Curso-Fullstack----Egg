import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavImg from "../img/meGusta.png";
import noFavImg from "../img/corazon.png"

export default function Producto({ producto,agregarFavoritos,eliminarFavoritos}) {

  const [favorito,setFavorito] = useState(false)

  function handleClick(){

    if (favorito) {
      eliminarFavoritos(producto)
      setFavorito(false)
    }else{
      agregarFavoritos(producto)
      setFavorito(true)
    }
  }

  return (
    <div className="producto">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.image} alt="" />
      </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {
        favorito ? 
        <img className="fav-icon" onClick={handleClick} src={noFavImg} alt="" />
        :
        <img className="fav-icon" onClick={handleClick} src={FavImg} alt="" />
      }
      
    </div>
  );
}
