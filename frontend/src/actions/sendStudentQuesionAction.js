import axios from "axios";

export const sendStudentQuestionAction = ({solutions,code})=>async(dispatch,getState)=>{
    try{
        dispatch({type:'STUDENT_QUESTION_ANSWER_LOADING'})
        const {userLogIn} = getState();
        const {userInfo} = userLogIn;
        const config = {
          headers:{
            'Content-Type':'application/json',
             Authorization:`Bearer ${userInfo.token}`
          }
        }
        const {data} = await axios.post('/marks',{solutions,code},config)
        dispatch({
            type:'STUDENT_QUESTION_ANSWER_SUCCESS',
            payload:{
                handleAnswer:data
            }
        })
    }catch(error){
        dispatch({
            type:"STUDENT_QUESTION_ANSWER_FAIL",
            payload:{
                error: error.response && error.response.data ? error.response.data : error.message
            }
          })
    }
}