import { React, useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import "../css/signuppage.css";
import Loader from '../screen/Loader'
import ErrorMessage from '../screen/ErrorMessage'

import {signUpAction} from '../actions/userAction'

const SignUpPage = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [isStudent,setIsStudent] = useState(false)
    const [message,setMessage] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()


    const userInformation = useSelector(state=>state.userRegister)
    const {isLoading,userInfo,error} =userInformation;
    const chooseIsStudent = (e)=>{
        setIsStudent(!isStudent)
        
    }
    
    useEffect(()=>{
      if(userInfo){
        history.push('/')
      }
    },[userInfo,history])
   
    const submitHandler = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
          setMessage('Password donot match')
          return;
        }else{
          dispatch(signUpAction({name,email,password,confirmPassword,isStudent}))
        }
        
    }

  return (<div  className='center'>
       {isLoading && <Loader/>}
       {message && <ErrorMessage  variant='negative' children={message} top='-5%'/>}
       {error && <ErrorMessage variant='negative' top='-5%' children={error}/>}
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
      <div class="txt_field">
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required/>
          <span></span>
          <label>Name</label>
        </div>
        <div class="txt_field">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" required/>
          <span></span>
          <label>Email</label>
        </div>
        <div  class="txt_field">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <div  class="txt_field">
          <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" required/>
          <span></span>
          <label>Confirm Password</label>
        </div>
        {/* <div class="pass">Forgot Password?</div> */}
        <div className='inputCheck'>
        <input type="checkbox" id="If you are teacher then click this" 
        onChange={chooseIsStudent} name="If you are teacher then click this" 
        value={isStudent}/>
        <label for="scales">If you are teacher then click this</label>
        </div>
        
        <input type="submit" value="SIGN UP"/>
        <div class="signup_link">
          Already a member? <Link to="/signin">SignIn</Link> <Link to="/">Go Back</Link>
        </div>
      </form>
  </div>);
};

export default SignUpPage;


/*


*/