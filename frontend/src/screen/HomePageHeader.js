import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../css/homepage.css'
import {LogoutAction} from '../actions/userAction'
import Loader from "./Loader";
import { Link } from 'react-router-dom';


const HomePageHeader = ()=>{
    const userSignIn = useSelector(state=>state.userLogIn)

    const dispatch = useDispatch()
    const {userInfo} = userSignIn
    return(
        <header>
        <h2>
          <Link to='/' className="logo">
            Quiz
          </Link>
        </h2>
        <div className="navigation">
          {(userInfo && userInfo.name) ?
          <div style={{display:'flex',gap:'8%'}}>
          <Link to='/profile' className="btn" style={{background:'none'}}><button  className="btn">{userInfo.name}</button></Link>
          {userInfo.isStudent && <Link to='/allGenerateCode' className="btn" style={{background:'none'}}><button  className="btn">Response</button></Link>}
          <button onClick={()=>{dispatch(LogoutAction())}} className="btn">Logout</button>
          </div>
          :
          <div>
            <Link to="/signin" className="info-btn">LogIN</Link>  
           <Link to='/signup' className="info-btn">Register</Link>
          </div>
           
        }
        </div>
      </header>
    )
}

export default HomePageHeader