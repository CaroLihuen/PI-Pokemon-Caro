import React from 'react';
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { allPokemonbyName } from '../Actions/index';
import '../Styles/SearchBar.css';
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
        <div className="ContenedorSearchBar">
            <input className="InputSearchBar" id="search" type="text" placeholder="Search by name" onChange={(e)=>handleChange(e) } />
            <button className="botonSearchBar" type="submit" onClick={(e)=>{handleSubmit(e)}} >Search</button>
        </div>
    )

}