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


export const generateCodeAction = (code)=>async(dispatch,getState)=>{
  try{
    dispatch({type:"CODE_LOADING"})
    const {userLogIn} = getState();
    const {userInfo} = userLogIn;
    const config = {
      headers:{
        'Content-Type':'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    
    const {data} = await axios.post('/generateCode',{code},config)

    dispatch({
      type:"CODE_SUCCESS",
      payload:{
        generateCode:data
      }
    })
    localStorage.setItem('generateCode',JSON.stringify(data))
  }catch(error){
    dispatch({
        type:'CODE_FAIL',
        payload:{
          error: error.response && error.response.data ? error.response.data : error.message
        }
      })
}
}


export const LogoutAction = ()=>async(dispatch)=>{
  localStorage.removeItem('userInfo')
  localStorage.removeItem('allQuestions')
  localStorage.removeItem('generateCode')
  dispatch({type:'USER_LOGOUT'})
  document.location.href='/signin'
}