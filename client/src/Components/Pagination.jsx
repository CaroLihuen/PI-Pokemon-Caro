import React from 'react';
import '../Styles/Pagination.css';
//Falta logica y conectarlo al home
/* Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina. */
export default function Pagination({allpoke, pokeforPage, page }) {
    const numberPage = [];

    for (let i = 1; i <= Math.ceil(allpoke / pokeforPage); i++) {
        numberPage.push(i);
    }

    return (
        <nav>
        <div className="page">
           { 
           numberPage && numberPage.map((number) =>{  
             return( 
               <div className="Paginado" key={number}>
                <button className="BotonPaginado" onClick={()=>page(number)}> {number} </button>
               </div>
             )
           })}
        </div>
       </nav>
    )

}