export const sendStudentQuestionReducer = (state={},action)=>{
    switch(action.type){
        case 'STUDENT_QUESTION_ANSWER_LOADING':
            return {isLoading:true}
        case 'STUDENT_QUESTION_ANSWER_SUCCESS':
            return {isLoading:false,success:true}
        case 'STUDENT_QUESTION_ANSWER_FAIL':
            return {isLoading:false,success:false,error:action.payload.error}
        default:
            return state;
    }
}


export const sendStudentResponseReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_RESPONSE_LOADING':
            return {isLoading:true}
        case 'USER_RESPONSE_SUCCESS':
            return {...state,isLoading:false,successResponsePost:true}
        case 'USER_RESPONSE_FAIL':
            return {...state,isLoading:false,error:action.payload.error}
        default:
            return state;
    }
}


export const getStudentResponseReducer = (state={exist:null},action)=>{
    switch(action.type){
        case 'GET_USER_RESPONSE_LOADING':
            return {isLoading:true}
        case 'GET_USER_RESPONSE_SUCCESS':
            return {isLoading:false,gotResponse:action.payload.gotResponse}
        case 'GET_USER_RESPONSE_FAIL':
            return {isLoading:false,error:action.payload.error}
        default:
            return state;
    }
}