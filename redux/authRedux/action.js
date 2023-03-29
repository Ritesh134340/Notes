import axios from "axios"

export const userLogin=(payload)=>(dispatch)=>{
  dispatch({type:types.LOGIN_REQUEST})
  return axios.post("")
  .then((res)=>{
    return dispatch({type:types.LOGIN_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.LOGIN_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
  })
}


export const userSignup=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST})
    return axios.post("")
    .then((res)=>{
      return dispatch({type:types.SIGNUP_SUCCESS,payload:res.data,status:res.status})
    })
    .catch((err)=>{
      return dispatch({type:types.SIGNUP_FAILURE,status:err.response.status,mesg:err.response.data.mesg})
    })
  }