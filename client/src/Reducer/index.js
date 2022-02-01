//Faltan filtros!!
const initialState = {
    pokemon: [],
    detail: [],
    byname: [],
    newpoke:[],
    types: []
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
        default:
            return state;
    }
}

export default rootReducer;