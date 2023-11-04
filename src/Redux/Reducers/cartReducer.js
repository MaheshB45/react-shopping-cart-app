import { ADD_ITEM, REMOVE_ITEM, GET_FROM_LOCAL_STORAGE, CLEAR_All } from "../Actions/actionTypes";

const initialState = [];

// let total = 0;
const cartReducer = (state = initialState, action)=>{

    if(action.type === ADD_ITEM){
            return [...state,action.payload];
    }else if(action.type === REMOVE_ITEM){
            return state.filter(prod => prod.id !== action.payload) ;
    }else if(action.type === GET_FROM_LOCAL_STORAGE){
            let arr = JSON.parse(localStorage.getItem('cart-items'))
            return [...arr];
    }else if(action.type === CLEAR_All){
        return initialState;
    }else{
        return state;

    }
    
}

export default cartReducer;