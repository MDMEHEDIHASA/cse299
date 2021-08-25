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