import React from 'react';
import '../Styles/Card.css';
//ver de agregar cosas /// Provar! :)
export default function Card({name, sprite, types, attack}){
    return(
        <div className="container">
          <div className="card">
            <h2 className="name">Name: {name}</h2>
            <h4>Attack: {attack}</h4>
            <h4>Types: {types}</h4>
            <img src={sprite} alt="" width="120px" height="150px" />
          </div>
        </div>
    )

}