//Faltan filtros!!
const initialState = {
    pokemon: [],
    detail: {},
    byname: [],//{}
    newpoke:[],
    types: [],
    filter: [],
    typesfilter: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ALL_POKE":
            return {
                ...state,
                pokemon: action.payload,
            }
        case "ALL_POKE_ID":
            let aux = action.payload
           // let other = {...aux} //lo onvierte a obj si viene como array
            
            return{
                ...state,
                detail: aux,
            } 
        case "ALL_POKE_NAME":
            let name=action.payload
            
            console.log(name)
            return {
                ...state,
               byname: name,
            }
        case "NEW_POKE":
            return {
                ...state,
            }
        case "ALL_TYPES":
            return {
                ...state,
                types: action.payload,
            }
        case "FILTER": //creados
        let asc = action.payload
        asc.filter((poke)=> asc ==="All" || !!poke.createdInDb === (asc ==="Created") )    
        console.log(asc)    
            return {
                ...state,
                filter: asc,
            }
        case "TYPES_FILTER":
        let filtert = action.payload ==="All" ?
        state.pokemon :
        state.pokemon.filter(el=>el.types === action.payload)   
        console.log( filtert) 
            return {
                ...state,
                pokemon: filtert,
            }
        case "FILTER_ASC":
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
        case "FILTER_ATT":
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