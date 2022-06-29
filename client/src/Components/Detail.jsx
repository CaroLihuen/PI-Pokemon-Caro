import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {useEffect} from "react";
import { allPokemonbyID } from '../Actions/index'
import Navbar from './Navbar';
import '../Styles/Detail.css';
//Solucionado :)
export default function Detail(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const pdetail = useSelector((state)=>state.detail)
    
    useEffect(()=>{
        dispatch(allPokemonbyID(id))
    },[dispatch,id])

    return(
        <div className="">
            <header>
                {<Navbar />}
            </header>
            
            { pdetail ? (
             <div className="detail">
               <h2 className="named">{pdetail.name }</h2>  
               <img src={pdetail.sprite } alt="Not found" width="200px" height="250px"/>
               <h3 className="font">HP: {pdetail.hp }</h3>
               <h3 className="font">Attack: {pdetail.attack }</h3>
               <h3 className="font">Defense: {pdetail.defense } </h3>
               <h3 className="font">Speed: {pdetail.speed }</h3>
               <h3 className="font">Height: {pdetail.height }</h3>
               <h3 className="font">Weight: {pdetail.weight }</h3>
               <h3 className="font">Types: {pdetail.types}</h3>
             </div>
            ): (
           <h1 className="font">Loading...</h1>
            )}
            <footer>
            <details>
               <summary>Thank you for your visit!</summary>
               <p><Link to={'/home'}>Home</Link></p>
            </details>
           </footer>
        </div>
    )
}