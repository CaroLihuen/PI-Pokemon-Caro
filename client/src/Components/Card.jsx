import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
/* deberá mostrar su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc) */
export default function Card(){
    return(
        <div>
            <h1>Card</h1>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )

}