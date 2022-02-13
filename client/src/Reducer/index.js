//Faltan filtros!!
const initialState = {
    pokemon: [],
    detail: {},
    types: [],
    filter: [],
    typesfilter: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ALL_POKE"://todos los pokes
            return {
                ...state,
                pokemon: action.payload,
                filter: action.payload,
                typesfilter: action.payload,
            }
        case "ALL_POKE_ID"://poke por id
            let aux = action.payload
            return{
                ...state,
                detail: aux,
            } 
        case "ALL_POKE_NAME"://poke por name
            let name=action.payload
            return {
                ...state,
               pokemon: name,
            }
        case "NEW_POKE"://nuevos pokes
            return {
                ...state,
            }
        case "ALL_TYPES": //todos los typos
            return {
                ...state,
                types: action.payload,
            }
        case "FILTER": //creados
        let filt = state.typesfilter
        let find = action.payload ==="All" ?
        filt :
        action.payload === "Created" ?
        filt.filter((v)=>
        v.id.toString().length>15) :
        filt.filter((v)=>
        v.id.toString().length<15)          
            return {
                ...state,
                pokemon: find,
            }
        case "TYPES_FILTER": //filtro por typos
        let filtert = state.pokemon === "All" ?
        state.pokemon :
        state.pokemon.filter((el)=>el.types.includes(action.payload))
        console.log(filtert)//.includes(el)
        return {
                ...state,
                pokemon: filtert
            }
        case "FILTER_ASC"://filtro po az/za
            let Asc = action.payload === "A-Z" ?
            state.pokemon.sort((a,b)=>{
                if(a.name.toUpperCase() > b.name.toUpperCase()){ return 1}
                if(b.name.toUpperCase() > a.name.toUpperCase()){ return -1}
                else{return 0}
            }) :
            state.pokemon.sort((a,b)=>{
                if(a.name.toUpperCase() > b.name.toUpperCase()){ return -1}
                if(b.name.toUpperCase() > a.name.toUpperCase()){ return 1}
                else{return 0}
            })
            return {
                ...state,
                pokemon: Asc,
            }   
        case "FILTER_ATT"://filtro por mayor o menor attaque
            let order = action.payload === "Least" ?
            state.pokemon.sort((a,b)=>{
                if(a.attack > b.attack){ return 1}
                if(b.attack > a.attack){ return -1}
                else{return 0}
            }) :
            state.pokemon.sort((a,b)=>{
                if(a.attack > b.attack){ return -1}
                if(b.attack > a.attack){ return 1}
                else{return 0}
            }) 
            return {
                ...state,
                pokemon: order,
            }            
        default:
            return state;
    }
}

export default rootReducer;