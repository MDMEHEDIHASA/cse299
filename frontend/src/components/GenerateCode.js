import { React, useState,useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {signInAction} from '../actions/userAction'
import "../css/signuppage.css";
import ErrorMessage from "../screen/ErrorMessage";
import Loader from "../screen/Loader";
import HomePageHeader from "../screen/HomePageHeader";
import {generateCodeAction} from '../actions/userAction'

const GenerateCode = ({history}) => {
    const [questionCode,setQuestionCode] = useState('')
    // const [password,setPassword] = useState('')
    const dispatch = useDispatch();
    const signInInfo = useSelector(state=>state.userLogIn)
    const generateQuestionCode = useSelector(state=>state.codeGenerate)
    const {isLoading,userInfo,error} = signInInfo;
    const {isLoading:Loading,generateCode,error:error2} = generateQuestionCode;
    
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

    useEffect(()=>{
        if(generateCode && generateCode.questions){
            history.push('/getQuestion')
        }
        if(!generateCode){
            history.push('/generateCode')
        }
    },[generateCode,history])

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(generateCodeAction(questionCode))
    }
  return (<div>
      <div style={{background:'cadetblue'}}>
      <HomePageHeader/>
      </div>
      <div className='center'>
      {isLoading && <Loader/>}
      {error && <ErrorMessage top='-7%' variant='negative' children={error}/>}
      {error2 && <ErrorMessage top='-11%' variant='negative' children={error2}/>}
      <p style={{textAlign:'center'}}>Hello {userInfo.name}</p>
      <form onSubmit={submitHandler}>
        <div class="txt_field">
          <input value={questionCode} name='questionCode' onChange={(e)=>setQuestionCode(e.target.value)} type="text" required/>
          <span></span>
          <label>Write the code for the exam.</label>
        </div>
        <input type="submit" value="Submit"/>
        <div  class="signup_link">
        <Link to="/">Go Back</Link>
        </div>
      </form>
     </div>
    </div>
      );
};

export default GenerateCode;