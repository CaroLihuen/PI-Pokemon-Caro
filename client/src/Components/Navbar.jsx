import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas quizas alguna imagen o colores o algo asi..
export default function Navbar(){
    return(
        <div>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )

}