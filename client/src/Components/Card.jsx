import React from 'react';
//ver de agregar cosas /// Provar! :)
export default function Card({name, sprite, types}){
    return(
        <div>
            <h1>Card</h1>
            <h3>Name:{name}</h3>
            <h4>Types: {types}</h4>
            <img src={sprite} alt="" width="120px" height="150px" />
        </div>
    )

}