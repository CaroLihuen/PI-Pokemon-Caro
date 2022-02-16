import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from './Navbar';
import { newPokemon , allTypes } from '../Actions/index';
import '../Styles/Create.css';
// creaaa!! arreglar validaciones!!
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
    e.preventDefault();
    const {name, hp, attack, defense, speed, height, weight} = input;
    
    if(name === undefined || !name ) {
        return alert("Name is invalid or name is invalid");
    }
     if(hp === undefined || !hp  ){ //
    return alert('Hp is undefined or hp is invalid') 
    }
     if(attack === undefined || !attack){ 
    return alert('Attack is undefined or attack is invalid') 
    }
     if(defense === undefined || !defense ){ 
    return alert('Defense is undefined or defense is invalid') 
    }
     if(speed === undefined || !speed ){ 
    return alert('Speed is undefined or speed is invalid') 
    }
     if(height === undefined  || !height ){ 
    return alert('Height is undefined or height is invalid') 
    }
     if(weight === undefined  || !weight ){ 
    return alert('Weight is undefined or weight is invalid') 
    }
   
   dispatch(newPokemon(input));
   alert("Pokemon created succesfuly");
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
     <div >{<Navbar />}</div>
        <div className="modal">
            <div className="modal__header">
            <h1>Create new Pokemon</h1>
            </div>
            <form className="form" onSubmit={(e)=>handleSubmit(e) } >
             <div className="name">
              <label>Name: </label>
              <input className="input" type="text" placeholder="Name" value={input.name} name="name" onChange={(e)=>handleChange(e)} ></input>   
             </div> 
             <div className="name">
              <label>Hp:</label>
              <input className="input" min='0' max='999' placeholder='Hp' type="number" value={input.hp} name="hp" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div className="name">
              <label > Attack: </label>
              <input className="input" min='0' max='999' placeholder='Attack' type="number" value={input.attack} name="attack" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div className="name">
              <label>Defense: </label>
              <input className="input" min='0' max='999' placeholder='Defense' type="number" value={input.defense} name="defense" onChange={(e)=>handleChange(e)} ></input>   
             </div>
             <div className="name">
              <label>Speed: </label>
              <input className="input" min='0' max='999' placeholder='Speed' type="number" value={input.speed} name="speed" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div className="name">
              <label>Height: </label>
              <input className="input" min='0' max='999' placeholder='Height' type="number" value={input.height} name="height" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div className="name">
              <label>Weight:</label>
              <input className="input" min='0' max='999' placeholder='weight' type="number" value={input.weight} name="weight" onChange={(e)=>handleChange(e)}></input>   
             </div>
             <div className="name">
              <label >Sprite:</label>
              <input className="input" placeholder='Image/Url' type="text" value={input.sprite} name="sprite" onChange={(e)=>handleChange(e)}></input>   
             </div>  
             <div className="name">
              <label >Types:</label>
              <select className="select" name="types" onChange={(e) => handleSelect(e)}>
                Types:
                { alltypes.map((t)=>(
                   <option key={t.id} value={t.name}> {t.name}</option>  
                ))}  
              </select>   
             </div> 
             {input.types.map((el) => (
              <div key={el}>
               <p className='result'>{el}</p>
               <button onClick={() => handleDelete(el)}>x</button>
             </div>
              ))}
             <br/>
             <div className="name">
              <button className="button" type="submit">Create Pokemon</button>
             </div>
             
            </form>
        </div>
        </div>
    )
}
// onSubmit={handleSubmit}