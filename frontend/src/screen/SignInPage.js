import { React, useState,useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {signInAction} from '../actions/userAction'
import "../css/signuppage.css";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";


const SignInPage = ({history}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();
    const signInInfo = useSelector(state=>state.userLogIn)
    const {isLoading,userInfo,error} = signInInfo;
    
    useEffect(()=>{
      if(userInfo){
        history.push('/')
      }else if(userInfo &&userInfo.isStudent === false){
        history.push('/')
      }
    },[dispatch,userInfo])

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(signInAction({email,password}))
    }
  return (<div className='center'>
      {isLoading && <Loader/>}
      {error && <ErrorMessage top='-7%' variant='negative' children={error}/>}
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div class="txt_field">
          <input value={email} name='email' onChange={(e)=>setEmail(e.target.value)} type="text" required/>
          <span></span>
          <label>Email</label>
        </div>
        <div  class="txt_field">
          <input value={password} name='password' onChange={(e)=>setPassword(e.target.value)} type="password" required/>
          <span></span>
          <label>Password</label>
        </div>

        <input type="submit" value="Login"/>
        <div  class="signup_link">
          Not a member? <Link to="/signup">Signup</Link> <Link to="/">Go Back</Link>
        </div>
      </form>
  </div>);
};

export default SignInPage;