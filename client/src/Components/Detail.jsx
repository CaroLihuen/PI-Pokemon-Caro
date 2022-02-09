import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {useEffect} from "react";
import { allPokemonbyID } from '../Actions/index'
import Navbar from './Navbar';
//Solucionado :)
export default function Detail(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const pdetail = useSelector((state)=>state.detail)
    
    useEffect(()=>{
        dispatch(allPokemonbyID(id))
    },[dispatch,id])
    console.log(pdetail[0])
    return(
        <div>
            <div>{<Navbar />}</div>
            { pdetail ? (
             <div>
               <h2>Name: {pdetail.name  || pdetail[0].name } </h2>  
               <img src={pdetail.sprite || pdetail[0].sprite } alt="Not found" width="200px" height="250px"/>
               <h3>HP: {pdetail.hp || pdetail[0].hp }</h3>
               <h3>Attack: {pdetail.attack || pdetail[0].attack }</h3>
               <h3>Defense: {pdetail.defense || pdetail[0].defense } </h3>
               <h3>Speed: {pdetail.speed || pdetail[0].speed }</h3>
               <h3>Height: {pdetail.height || pdetail[0].height }</h3>
               <h3>Weight: {pdetail.weight || pdetail[0].weight }</h3>
               <h3>Types: {pdetail.types || pdetail[0].types.join(', ') }</h3>
             </div>
            ): (
           <h1>Loading...</h1>
          
            )}
        </div>
    )
}