//Falta llenar
const initialState = {
    pokemon= [],
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case 1:
            return{
                ...state,
                pokemon: action.payload,
            }
        default:
            return state;    
    }
}

export default rootReducer;