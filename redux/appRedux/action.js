import axios from "axios";
import * as types from "./actionTypes"

export const getTodos=()=>(dispatch)=>{
  dispatch({type:types.GET_TODO_DATA_REQUEST})
  return axios.get('https://dummyjson.com/todos').then((res)=>{
   
    return dispatch({type:types.GET_TODO_DATA_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    return dispatch({type:types.GET_TODO_DATA_FAILURE})
  })
 
  
}