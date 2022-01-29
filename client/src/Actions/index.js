import axios from 'axios';

export function allPokemon(){
   return async function(dispatch){
    const info = await axios.get('http://localhost:3001')
      return dispatch({
          type: "1",
          payload: info.data
      })
   }    
}