const initalState2 = {
    allQuestions:[],
    isLoading:true
    
}

const createFormReducer = (state=initalState2,action)=>{
    switch(action.type){
        case 'CREATE_FORM_LOADING':
            return {...state,isLoading:true}
        case 'CREATE_FORM':
            return {...state,isLoading:false,allQuestions:action.payload.questions}
        case 'CREATE_FORM_FAIL':
            return {...state,isLoading:true,error:action.payload.error}
        default:
            return state
    }
}

export default createFormReducer;