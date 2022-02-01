import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from './Filter';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Card from './Card';
import { allPokemon, allTypes } from "../Actions";
//faltan varias cosas!!
export default function Home(){
    const dispatch= useDispatch();
    const allpoke = useSelector((state)=>state.pokemon)
    const alltypes = useSelector((state)=>state.types)
    
    useEffect(()=>{
        dispatch(allPokemon())
    },[dispatch])

    useEffect(()=>{
        dispatch(allTypes())
    },[dispatch])

    return(
        <div>
         <h1>Videogames</h1>
         <div>{<Navbar/>}</div>
         <div>{<Filter/>}</div>
         <div>{<SearchBar/>}</div>
         <div>{<Pagination/>}</div>
         <div>{<Card/>} </div>
        </div>
    )
}