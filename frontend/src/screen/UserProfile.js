import { React, useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import "../css/signuppage.css";
import Loader from '../screen/Loader'
import ErrorMessage from '../screen/ErrorMessage'
import {getUserProfile,updateUserProfile} from '../actions/userAction'


const UserProfile = ({history})=>{
    const dispatch = useDispatch();
    const userDetails = useSelector(state=>state.getUserProfile)
    const {isLoading,getProfile,error} = userDetails;
    const userLogIn = useSelector(state=>state.userLogIn)
    const {userInfo} = userLogIn;

    const userUpdate = useSelector(state=>state.updateUserProfile)
    const {success} = userUpdate;
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState('')

    useEffect(()=>{
        if(!userInfo){
          history.push('/');
        }else{
          if(!getProfile){
            dispatch(getUserProfile())
          }else{
              setName(getProfile.name)
              setEmail(getProfile.email)
          }
        }
    },[userInfo,dispatch,history,getProfile])

    const submitHandler = (e)=>{
      e.preventDefault()
        if(password !== confirmPassword){
          setMessage('Password donot match')
          return;
        }else{
          //dispatch update profiel
          dispatch(updateUserProfile({name,email,password}))
        }
    }

    return(<div  className='center'>
    {isLoading && <Loader/>}
    {message && <ErrorMessage  variant='negative' children={message} top='-5%'/>}
    {error && <ErrorMessage variant='negative' top='-5%' children={error}/>}
    {success && <ErrorMessage variant='positive' children='Profile Update Successfully'/>}
   <h1>User Profile</h1>
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
       <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
       <span></span>
       <label>Change Password</label>
     </div>
     <div  class="txt_field">
          <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password"/>
          <span></span>
          <label>Confirm Password</label>
      </div>
     {/* <div class="pass">Forgot Password?</div> */}
     
     <input type="submit" value="Submit"/>
     <div class="signup_link">
      <Link to="/">Go Back</Link>
     </div>
   </form>
</div>)
}


export default UserProfile;