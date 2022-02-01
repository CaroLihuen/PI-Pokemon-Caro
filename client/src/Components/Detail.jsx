import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {useEffect} from "react";
import { allPokemonbyID } from '../Actions/index'
//ver de agregar cosas Provar! :)
export default function Detail(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const pdetail = useSelector((state)=>state.detail)
    
    useEffect(()=>{
        dispatch(allPokemonbyID(id))
    },[dispatch,id])

    return(
        <div>
            <h1>Detail</h1>
            <Link to='/home' >
            <button>Home</button>
            </Link>
            { pdetail ? (
             <div>
               <h2>Name: {pdetail.name} </h2>  
               <img src={pdetail.sprite} alt="Not found" width="200px" height="250px"/>
               <h3>HP: {pdetail.hp}</h3>
               <h3>Attack: {pdetail.attack}</h3>
               <h3>Defense: {pdetail.defense} </h3>
               <h3>Speed: {pdetail.speed}</h3>
               <h3>Height: {pdetail.height}</h3>
               <h3>Weight: {pdetail.weight}</h3>
               <h3>Types: {pdetail.types}</h3>
             </div>
            ): (
           <h1>Loading...</h1>
          
            )}
        </div>
    )
}