
import * as types from "./actionTypes"
import saveToLocalStorage from "@/utils/saveToLocalStorage"
import getFromLocalStorage from "@/utils/getFromLocalStorage"

const data=getFromLocalStorage("profile");
const token=data?.token || ""

const initialState={
 token:token,

}

 const reducer = (state=initialState,action) => {
    const {type,payload}=action

    switch(type){
         case types.LOGIN_REQUEST : return {...state,loading:true,error:false}
         case types.LOGIN_SUCCESS :
         saveToLocalStorage("profile",payload.profile)
         return  {...state,token:token}
         case types.LOGIN_FAILURE : return {...state,loading:false,error:true}


         case types.SIGNUP_REQUEST : return {...state,loading:true,error:false}
         case types.SIGNUP_SUCCESS : 
         saveToLocalStorage("profile",payload.profile)
         return {...state,token:token}
         case types.SIGNUP_FAILURE : return {...state,loading:false,error:true}


         default : return state
    }
}

export {reducer}

