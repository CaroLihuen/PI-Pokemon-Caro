//Faltan filtros!!
const initialState = {
    pokemon: [],
    detail: [],
    byname: [],
    newpoke:[],
    types: [],
    filter: [],
    typesfilter: "All"
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ALL_POKE":
            return {
                ...state,
                pokemon: action.payload,
            }
        case "ALL_POKE_ID":
            return {
                ...state,
                detail: action.payload,
            }
        case "ALL_POKE_NAME":
            return {
                ...state,
                byname: action.payload,
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
        case "FILTER":
        let asc = action.payload
        asc.filter((poke)=> asc ==="All" || !!poke.createdInDb === (asc ==="Created") )    
        console.log(asc)    
            return {
                ...state,
                filter: asc,
            }
        case "TYPES_FILTER":
            return {
                ...state,
                typesfilter: action.payload,
            }    
        default:
            return state;
    }
}

export default rootReducer;