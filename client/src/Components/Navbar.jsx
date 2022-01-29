import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
export default function Navbar(){
    return(
        <div>
            <h1>Navbar</h1>
            <Link to='/home' >
            <button>Home</button>
            </Link>
        </div>
    )

}