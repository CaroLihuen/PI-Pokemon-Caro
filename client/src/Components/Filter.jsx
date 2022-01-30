import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
/*
Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
 Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza

 */
export default function Filter(){
    return(
        <div>
            <h1>Filtros</h1>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )

}