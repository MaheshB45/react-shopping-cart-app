import { createStore, combineReducers } from "redux";
import fetchReducer from "./Reducers/fetchReducer";
import cartReducer from "./Reducers/cartReducer";

const rootReducer = combineReducers({
    fetch : fetchReducer,
    cart : cartReducer
})

const store = createStore(rootReducer);

export default store;