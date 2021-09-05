import axios from "axios";


export const createForm = (questions,documentName,documentDescription,uniqueCode) => async (dispatch,getState) => {
  try {
    dispatch({type:'CREATE_FORM_LOADING'})
    const {userLogIn} = getState()
    const {userInfo} = userLogIn
    const config = {
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    };
    const { data } = await axios.post("/createForm",{ questions,documentName,documentDescription,uniqueCode},config);
    dispatch({
      type: 'CREATE_FORM',
      payload: {
        questions: data,
      },
      
    });
    localStorage.setItem("allQuestions", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type:'CREATE_FORM_FAIL',
      payload:{
        error: error.response && error.response.data ? error.response.data : error.message
      }
    })
  }
};


export const updateFormAction = (code,response)=>async(dispatch,getState)=>{
  try {
    dispatch({type:'UPDATE_FORM_LOADING'})
    const {userLogIn} = getState()
    const {userInfo} = userLogIn
    const config = {
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
    };
    const { data } = await axios.put("/updateForm",{code,response},config);
    dispatch({
      type: 'UPDATE_FORM_SUCCESS',
      payload: {
        questions: data,
      },
      
    });
    const {codeGenerate} = getState();
    getState().codeGenerate = data
    localStorage.setItem('generateCode', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type:'UPDATE_FORM_FAIL',
      payload:{
        error: error.response && error.response.data ? error.response.data : error.message
      }
    })
  }
}