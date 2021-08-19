import axios from "axios";

export const signUpAction = ({name,email,password,confirmPassword,isStudent})=>async(dispatch)=>{
    try{
        dispatch({type:'SIGNUP_REQUEST'})
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const {data} = await axios.post('/signup',{name,email,password,confirmPassword,isStudent},config)
        dispatch({
            type:'SIGNUP_SUCCESS',
            payload:{
                userInfo:data
            }
        })
        dispatch({
          type:'SIGNIN_SUCCESS',
          payload:{
              userInfo:data
          }
      })
      localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:'SIGNUP_FAIL',
            payload:{
              error: error.response && error.response.data ? error.response.data : error.message
            }
          })
    }
}


export const signInAction = ({email,password})=>async(dispatch,getState)=>{
  try{
      dispatch({type:"SIGNIN_REQUEST"})
      
      const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
      const {data} = await axios.post('/signin',{email,password},config)
      dispatch({
          type:'SIGNIN_SUCCESS',
          payload:{
              userInfo:data
          }
      })
      localStorage.setItem('userInfo',JSON.stringify(data))
  }catch(error){
      dispatch({
          type:'SIGNIN_FAIL',
          payload:{
            error: error.response && error.response.data ? error.response.data : error.message
          }
        })
  }
}


export const LogoutAction = ()=>async(dispatch)=>{
  localStorage.removeItem('userInfo')
  localStorage.removeItem('allQuestions')
  dispatch({type:'USER_LOGOUT'})
  document.location.href='/signin'
}