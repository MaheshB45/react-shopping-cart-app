import { FETCH_REQUEST_INITIATED, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "../Actions/actionTypes";

const initialState = {
    loader: false,
    data: null,
    error: null
}

const fetchReducer = (state = initialState,action) => {

    switch(action.type){
        case FETCH_REQUEST_INITIATED :
            return {...initialState, loader: true};

        case FETCH_REQUEST_SUCCESS :
            return {...initialState, loader: false, data: action.payload};

        case FETCH_REQUEST_FAILURE :
            return {...initialState, loader: false, data: action.payload};

        default : return state;
    }

}

export default fetchReducer;