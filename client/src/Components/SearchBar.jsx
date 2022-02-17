import React from 'react';
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { allPokemonbyName } from '../Actions/index';
import '../Styles/SearchBar.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState(" ");
    const pokes = useSelector((state)=>state.pokemons)
   
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const n = name
        if( !n || n.length === undefined || n.length <= 1 ) {//  
            setName("")   
            return alert("Name is invalid or require name completed");
        }else { 
        dispatch(allPokemonbyName(name))
        }
        setName("");
    }

    return(
        <div className="ContenedorSearchBar">
            <input className="InputSearchBar" id="search" type="text" placeholder="Search by name" onChange={(e)=>handleChange(e) } />
            <button className="botonSearchBar" type="submit" onClick={(e)=>{handleSubmit(e)}} >Search</button>
        </div>
    )

}