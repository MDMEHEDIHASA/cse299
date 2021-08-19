

import { combineReducers } from "redux";
import createFormReducer from './createFormReducer'
import { userRegisterReducer,userSignInReducer } from "./userReducer";

export const allReducer = combineReducers({
    createFormData:createFormReducer,
    userRegister:userRegisterReducer,
    userLogIn:userSignInReducer
})