import React from 'react';
//Falta logica y conectarlo al home
/* Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina. */
export default function Pagination() {
    const numberPage = [];

    for (let i = 1; i <= Math.ceil(1 / 2); i++) {
        numberPage.push(i);
    }
    return (
        <div>
            <h1>Paginado</h1>
        </div>
    )

}