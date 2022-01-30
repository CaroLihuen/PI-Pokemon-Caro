import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
/*-  Un formulario __controlado con JavaScript__ con los campos mencionados en el detalle del Pokemon
-  Posibilidad de seleccionar/agregar más de un tipo de Pokemon
-  Botón/Opción para crear un nuevo Pokemon */
export default function Create(){
    return(
        <div>
            <h1>Welcome to Pokemon</h1>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )

}