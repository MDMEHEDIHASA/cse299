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
          <Link to='/' class="logo">
            Quiz
          </Link>
        </h2>
        <div class="navigation">
          {(userInfo && userInfo.name) ?
          <div style={{display:'flex',gap:'12%'}}>
          <button  className="btn">{userInfo.name}</button>
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