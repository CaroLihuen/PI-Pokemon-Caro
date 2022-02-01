import axios from 'axios';
//faltan filtros!!
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
    const info = await axios.get(`http://localhost:3001/pokemons/${name}`)
      return dispatch({
          type: "ALL_POKE_NAME",
          payload: info.data
      })
   }    
}
export function newPokemon(payload){
   return async function(dispatch){
    const info = await axios.post('http://localhost:3001/pokemons',payload)
      return dispatch({
          type: "NEW_POKE",
          payload: info.data
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