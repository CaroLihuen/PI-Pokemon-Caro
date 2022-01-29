import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
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