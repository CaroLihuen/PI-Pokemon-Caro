import React from 'react';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from './Navbar';
import { newPokemon , allTypes } from '../Actions/index';
//Hay un error , creo que en el handlesubmit, ha que verlo!!
export default function Create(){
   const dispatch = useDispatch();  
   const navigate = useNavigate();
   const alltypes = useSelector((state)=>state.types) 
   
   useEffect(() => {
     dispatch(allTypes())
   }, [dispatch]);
   
   const [input, setInput] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    sprite: '',
    types: []
   })

   function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
   }

   function handleSelect(e){
    setInput({
      ...input,
      types: [...input.types, e.target.value ],
    })
   } 

   function handleSubmit(e){
    e.prevenDefault();
    
    const {name, hp, attack, defense, speed, height, weight} = input;
    if(name === undefined || name.length < 3) {
        return alert("Name is invalid");
    }
    else if(hp === undefined ){ //|| hp < 1
    return alert('Hp is undefined') 
    }
    else if(attack === undefined || attack < 1){ 
    return alert('Attack is undefined') 
    }
    else if(defense === undefined || defense < 1){ 
    return alert('Defense is undefined') 
    }
    else if(speed === undefined || speed < 1){ 
    return alert('Speed is undefined') 
    }
    else if(height === undefined || height < 1){ 
    return alert('Height is undefined') 
    }
    else if(weight === undefined || weight < 1){ 
    return alert('Weight is undefined') 
    }
   
   dispatch(newPokemon(input));
   alert("Pokemon created succesfuly")
   setInput({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    sprite: '',
    types: []
   });

   navigate('/home');
 }
  
 function handleDelete(e){
    setInput({
      ...input,
      types: input.types.filter((t) => t !== e)
    })
  }

   return(
        <div>
            <div>{<Navbar />}</div>
            <h1>Create new Pokemon</h1>
            <form onSubmit={(e)=>handleSubmit(e) } >
             <div>
              <label>Name: </label>
              <input type="text" placeholder="Name" value={input.name} name="name" onChange={(e)=>handleChange(e)} ></input>   
             </div> 
             <div>
              <label>Hp:</label>
              <input placeholder='Hp' type="number" value={input.hp} name="hp" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div>
              <label> Attack: </label>
              <input placeholder='Attack' type="number" value={input.attack} name="attack" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div>
              <label>Defense: </label>
              <input placeholder='Defense' type="number" value={input.defense} name="defense" onChange={(e)=>handleChange(e)} ></input>   
             </div>
             <div>
              <label>Speed: </label>
              <input placeholder='Speed' type="number" value={input.speed} name="speed" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div>
              <label>Height: </label>
              <input placeholder='Height' type="number" value={input.height} name="height" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div>
              <label>Weight:</label>
              <input placeholder='weight' type="number" value={input.weight} name="weight" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div>
              <label>Sprite:</label>
              <input placeholder='Image/Url' type="text" value={input.sprite} name="sprite" onChange={(e)=>handleChange(e)}></input>   
             </div>  
             <div>
              <label>Types:</label>
              <select name="types" onChange={(e) => handleSelect(e)}>
                Types:
                { alltypes.map((t)=>(
                   <option key={t.id} value={t.name}> {t.name}</option>  
                ))}  
              </select>   
             </div> 
             {input.types.map((el) => (
              <div key={el}>
               <p>{el}</p>
               <button onClick={() => handleDelete(el)}>x</button>
             </div>
              ))}
             <br/>
             <button type="submit">Create Pokemon</button>
            </form>
        </div>
    )
}
// onSubmit={handleSubmit}