import React from 'react';
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
//Faltan varias cosas!!

export default function SearchBar(){
    return(
        <div>
            <h1>Searcbar</h1>
            <input type="text" placeholder="Search by name" ></input>
            <button type="submit" >Search</button>
        </div>
    )

}