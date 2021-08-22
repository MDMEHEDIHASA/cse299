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


/*case 'USER_LOGOUT':
return{}*/