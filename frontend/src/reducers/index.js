

import { combineReducers } from "redux";
import createFormReducer from './createFormReducer'
import { userRegisterReducer,userSignInReducer,generateCodeReducer,getUserProfileReducer,updateUserProfileReducer } from "./userReducer";
import {sendStudentQuestionReducer,sendStudentResponseReducer,getStudentResponseReducer} from './sendStudentQuestionReducer'

export const allReducer = combineReducers({
    createFormData:createFormReducer,
    userRegister:userRegisterReducer,
    userLogIn:userSignInReducer,
    codeGenerate:generateCodeReducer,
    getUserProfile:getUserProfileReducer,
    updateUserProfile:updateUserProfileReducer,
    sendStudentQuestion:sendStudentQuestionReducer,
    sendStudentResponsePost:sendStudentResponseReducer,
    sendStudentResponseGet:getStudentResponseReducer
})