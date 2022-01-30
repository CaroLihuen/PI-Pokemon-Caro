import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
/*-  Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
-  Número de Pokemon (id)
-  Estadísticas (vida, fuerza, defensa, velocidad)
-  Altura y peso */
export default function Detail(){
    return(
        <div>
            <h1>Detail</h1>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )

}