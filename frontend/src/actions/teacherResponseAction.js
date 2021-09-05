import axios from 'axios'


export const allGenerateCodeAction = ()=>async(dispatch,getState)=>{
    try{
      dispatch({type:"ALLGENERATECODE_LOADING"})
      const {userLogIn} = getState();
      const {userInfo} = userLogIn;
      const config = {
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
      
      const {data} = await axios.get('/allGenerateCode',config)
  
      dispatch({
        type:"ALLGENERATECODE_SUCCESS",
        payload:{
            allGenerateCode:data
        }
      })
    }catch(error){
      dispatch({
          type:'ALLGENERATECODE_FAIL',
          payload:{
            error: error.response && error.response.data ? error.response.data : error.message
          }
        })
  }
  }






export const teacherResponseAction = ({generateCode})=>async(dispatch,getState)=>{
    try{
      dispatch({type:"TEACHER_LOADING"})
      const {userLogIn} = getState();
      const {userInfo} = userLogIn;
      const config = {
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
      
      const {data} = await axios.get(`/questionResponses/${generateCode}`,config)
  
      dispatch({
        type:"TEACHER_SUCCESS",
        payload:{
          teacherResponse:data
        }
      })
    }catch(error){
      dispatch({
          type:'TEACHER_FAIL',
          payload:{
            error: error.response && error.response.data ? error.response.data : error.message
          }
        })
  }
  }