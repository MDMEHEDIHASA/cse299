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

// export const createForm = (questions)=>{
//     return async(dispatch)=>{
//         try{
//             const {data} = await axios.post('/createForm')
//             dispatch({type:'CREATE_FORM',payload:{product:data}})
//         }catch(err){
//             console.log(err)
//         }
//     }
// }

// const initalState={product:[]}
// export const createFormReducer = (state=initalstate)=>{
//     switch(action.type){
//         case 'CREATE_FORM':
//             return {...state,product:action.payload.product}
//         default:
//             return state
//     }
// }

// import { combineReducers } from 'redux';
// import createFrom from '../actions'

// export const allReducer = combineReducers({
//     createForm:createFormReducer
// })

// import {createStore} from 'redux'

// const store = createStore(allReducer)

// dispatch({type:'CREATE_FORM'})
