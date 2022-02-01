import React from 'react';
import { Link } from 'react-router-dom';
//Faltan, varias cosas :) estados y armar los controladores
export default function Create(){
    
    return(
        <div>
            <h1>Create Pokemon</h1>
            <form>
             <div>
              <label>Name: </label>
              <input placeholder="Name" ></input>   
             </div> 
             <div>
              <label>Hp:</label>
              <input placeholder='Hp' ></input>   
             </div>
             <div>
              <label> Attack: </label>
              <input placeholder='Attack' ></input>   
             </div>
             <div>
              <label>Defense: </label>
              <input placeholder='Defense' ></input>   
             </div>
             <div>
              <label>Speed: </label>
              <input placeholder='Speed' ></input>   
             </div>
             <div>
              <label>Height: </label>
              <input placeholder='Height' ></input>   
             </div>
             <div>
              <label>Weight:</label>
              <input placeholder='weight' ></input>   
             </div>
             <div>
              <label>Sprite:</label>
              <input placeholder='Image' ></input>   
             </div>  
             <div>
              <label>Types:</label>
              <select>
               <option></option> 
              </select>   
             </div> 
             <br/>
             <button>Create Pokemon</button>
            </form>
        </div>
    )

}