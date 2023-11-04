import { ADD_ITEM, REMOVE_ITEM, GET_FROM_LOCAL_STORAGE, CLEAR_All } from "./actionTypes";

export const addItem = (item) => {
    return {
        type : ADD_ITEM,
        payload : item
    }
}
export const removeItem = (id) => {
    return {
        type : REMOVE_ITEM,
        payload : id
    };
}
export const clearAll = () => {
    return {
        type : CLEAR_All,
    };
}

export const getItemsFromLocale = (data) => {
    return {
        type : GET_FROM_LOCAL_STORAGE,
        payload : data
    };
}