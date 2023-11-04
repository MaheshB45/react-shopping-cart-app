import { FETCH_REQUEST_INITIATED, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "./actionTypes";

export const fetchReqInitiated = ()=>{
    return {
        type : FETCH_REQUEST_INITIATED,
    }
}

export const fetchReqSuccess = (data)=>{
    return {
        type : FETCH_REQUEST_SUCCESS,
        payload : data
    }
}

export const fetchReqFailure = (error)=>{
    return {
        type : FETCH_REQUEST_FAILURE,
        payload : error
    }
}