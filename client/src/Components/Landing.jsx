import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Landing.css';
//Listo!
export default function Landing(){
    return(
        <div className='fondo'>
            <h1 className="center">Welcome to Pokemon</h1>
            <Link className='btn' to='/home' >
            <button className="btn_Landing">Home</button>
            </Link>
        </div>
    )

}