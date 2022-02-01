import React from 'react';
import { Link } from 'react-router-dom';
//ver de agregar cosas
/*
Faltan funcionalidades mas estados 
quizas agregar otro.. 
 */
export default function Filter(){
    return(
        <div>
            <h1>Filtros</h1>
            <div>
             <h4>Filter by Existing or Created</h4>
             <div>
              <select>
               <option>All Pokemons</option>
               <option>Created</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4>Filter by alphabet</h4>
             <div>
              <select>
               <option>A-Z</option>
               <option>Z-A</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4>Filter by attack</h4>
             <div>
              <select>
               <option>Most</option>
               <option>Least</option>      
              </select>   
             </div>
            </div>
            <div>
             <h4>Filter by Type</h4>
             <div>
              <select>
               <option>All</option>
               <option>Other</option>      
              </select>   
             </div>
            </div>
        </div>
        
    )

}