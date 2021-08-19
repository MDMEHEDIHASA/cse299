import { React, useState,useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {signInAction} from '../actions/userAction'
import "../css/signuppage.css";
import ErrorMessage from "../screen/ErrorMessage";
import Loader from "../screen/Loader";
import HomePageHeader from "../screen/HomePageHeader";

const GenerateCode = ({history}) => {
    const [generateCode,setGenerateCode] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();
    const signInInfo = useSelector(state=>state.userLogIn)
    const {isLoading,userInfo,error} = signInInfo;
    
    useEffect(()=>{
        if(userInfo.isStudent){
            history.push('/')
        }else if(userInfo.isStudent === false){
            history.push('/generateCode')
        }else if(userInfo === null){
            history.push('/')
        }else{
            history.push('/')
        }
    },[userInfo,history])
    const submitHandler = (e)=>{
        e.preventDefault()
        // dispatch(signInAction({email,password}))
    }
  return (<div className='center'>
      {isLoading && <Loader/>}
      {error && <ErrorMessage top='-7%' variant='negative' children={error}/>}
      
      <p style={{textAlign:'center'}}>Hello {userInfo.name}</p>
      <form onSubmit={submitHandler}>
        <div class="txt_field">
          <input value={generateCode} name='generateCode' onChange={(e)=>setGenerateCode(e.target.value)} type="text" required/>
          <span></span>
          <label>Write the code for the exam.</label>
        </div>
        <input type="submit" value="Submit"/>
        <div  class="signup_link">
        <Link to="/">Go Back</Link>
        </div>
      </form>
  </div>);
};

export default GenerateCode;