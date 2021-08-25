export const userRegisterReducer  = (state={},action)=>{
    switch(action.type){
        case 'SIGNUP_REQUEST':
            return{isLoading:true};
        case 'SIGNUP_SUCCESS':
            return{...state,isLoading:false,userInfo:action.payload.userInfo};
        case 'SIGNUP_FAIL':
            return{...state,isLoading:false,error:action.payload.error};
        default:
            return state;
    }
}


export const userSignInReducer = (state={},action)=>{
    switch(action.type){
        case 'SIGNIN_REQUEST':
            return {isLoading:true}
        case 'SIGNIN_SUCCESS':
            return {...state,userInfo:action.payload.userInfo,isLoading:false}
        case 'SIGNIN_FAIL':
            return {...state,isLoading:false,error:action.payload.error}
        default:
            return state
    }
}


export const generateCodeReducer = (state={},action)=>{
    switch(action.type){
        case 'CODE_LOADING':
            return {isLoading:true}
        case 'CODE_SUCCESS':
            return {...state,isLoading:false,generateCode:action.payload.generateCode}
        case 'CODE_FAIL':
            return {...state,isLoading:false,error:action.payload.error}
        default:
            return state
    }
}


export const getUserProfileReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_PROFILE_LOADING':
            return {isLoading:true}
        case 'USER_PROFILE_SUCCESS':
            return{...state,isLoading:false,getProfile:action.payload.getProfile}
        case 'USER_PROFILE_FAIL':
            return{...state,isLoading:false,error:action.payload.error}
        default:
            return state
    }
}

export const updateUserProfileReducer = (state={},action)=>{
    switch(action.type){
        case 'UPDATE_USER_PROFILE_LOADING':
            return {isLoading:true}
        case 'UPDATE_USER_PROFILE_SUCCESS':
            return{...state,isLoading:false,success:true,updateProfile:action.payload.updateProfile}
        case 'UPDATE_USER_PROFILE_FAIL':
            return{...state,isLoading:false,error:action.payload.error}
        default:
            return state
    }
}