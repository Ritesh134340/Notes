import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
import {reducer as authReducer} from "./authRedux/reducer";
import {reducer as appReducer} from "./appRedux/reducer";

import thunk from "redux-thunk";


const rootReducer=combineReducers({authReducer,appReducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}