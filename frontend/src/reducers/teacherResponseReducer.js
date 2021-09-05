export const allGenerateCodeReducer = (state={allGenerateCode:[]},action)=>{
    switch(action.type){
        case 'ALLGENERATECODE_LOADING':
            return {...state,isLoading:true}
        case 'ALLGENERATECODE_SUCCESS':
            return {isLoading:false,allGenerateCode:action.payload.allGenerateCode}
        case 'ALLGENERATECODE_FAIL':
            return {...state,isLoading:false,error:action.payload.error}
        default:
            return state;
    }
}


export const teacherResponseReducer = (state={teacherResponse:[]},action)=>{
    switch(action.type){
        case 'TEACHER_LOADING':
            return {...state,isLoading:true}
        case 'TEACHER_SUCCESS':
            return {isLoading:false,teacherResponse:action.payload.teacherResponse}
        case 'TEACHER_FAIL':
            return {...state,isLoading:false,error:action.payload.error}
        default:
            return state;
    }
}