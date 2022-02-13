import axios from 'axios';

export function allPokemon(){
   return async function(dispatch){
    const info = await axios.get('http://localhost:3001/pokemons')
      return dispatch({
          type: "ALL_POKE",
          payload: info.data
      })
   }    
}
export function allPokemonbyID(id){
   return async function(dispatch){
    const info = await axios.get(`http://localhost:3001/pokemons/${id}`)
      return dispatch({
          type: "ALL_POKE_ID",
          payload: info.data
      })
   }    
}
export function allPokemonbyName(name){
   return async function(dispatch){
    const info = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
      return dispatch({
          type: "ALL_POKE_NAME",
          payload: info.data
      })
   }    
}

export function newPokemon(payload){
   return async function(dispatch){
    const info = await axios.post('http://localhost:3001/pokemons', payload)
      return dispatch({
          type: "NEW_POKE",
          payload: info
      })
   }    
}
export function allTypes(){
   return async function(dispatch){
    const info = await axios.get('http://localhost:3001/types')
      return dispatch({
          type: "ALL_TYPES",
          payload: info.data
      })
   }    
}
export function filterPoke(payload){//por poke creado o all
   return{
      type: "FILTER",
      payload: payload
   }
}

export function filterTypes(payload){//por typo
   return{
      type: "TYPES_FILTER",
      payload: payload
   }
}

export function filterAsc(payload){//por a-z
   return{
      type: "FILTER_ASC",
      payload: payload
   }
}

export function filterAttack(payload){//por attack
   return{
      type: "FILTER_ATT",
      payload: payload
   }
}