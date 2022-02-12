import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
//ver de agregar cosas quizas alguna imagen o colores o algo asi..
export default function Navbar(){
    return(
        <div className="Nav" >
            <h1 className="titulo">Pokemon</h1>
            <Link to='/home' >
            <button className="button">Home</button>
            </Link>
        </div>
    )

}