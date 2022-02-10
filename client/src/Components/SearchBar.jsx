import React from 'react';
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { allPokemonbyName } from '../Actions/index'
//Faltan varias cosas!!

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState(" ");
    const pokes = useSelector((state)=>state.pokemons)
    //console.log(pokes)
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
        //console.log(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(allPokemonbyName(name))
        setName("");
    }

    return(
        <div>
            <input id="search" type="text" placeholder="Search by name" onChange={(e)=>handleChange(e) } />
            <button type="submit" onClick={(e)=>{handleSubmit(e)}} >Search</button>
        </div>
    )

}