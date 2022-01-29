import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
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