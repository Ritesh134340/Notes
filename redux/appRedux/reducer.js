
import * as types from "./actionTypes"

const initialState={
     todos:[]
}

 const reducer = (state=initialState,action) => {
    const {type,payload}=action

    switch(type){
          case types.GET_TODO_DATA_REQUEST : return {...state}
          case types.GET_TODO_DATA_SUCCESS : return {...state,todos:payload.todos}
          case types.GET_TODO_DATA_FAILURE : return {...state}
         default : return state
    }
}

export {reducer}

