import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import '../css/homepage.css'
// import {LogoutAction} from '../actions/userAction'
// import Loader from "./Loader";
import HomePageHeader from "./HomePageHeader";
const Homepage = () => {
  //const userRegister = useSelector(state=>state.userRegister)
  const userSignIn = useSelector(state=>state.userLogIn)

  // const dispatch = useDispatch()
  const {userInfo} = userSignIn

  return (
    <div>
      <section>
        <HomePageHeader/>
        <div className="content">
        <div className="info">
        <h2>Like Nature <br></br><span>Be Creative!</span></h2>
          <p>This is a online quiz Website where a student <br></br>can attend the exam and the teacher <br></br>can give the question.</p>
          {(userInfo && userInfo.isStudent ) && 
            (<Link to='/blankForm' className="info-btn">Create Quiz</Link>)
          }
          {(userInfo && userInfo.isStudent === false) && 
            (<Link to='/generateCode' className="info-btn">Attend Quiz</Link>)
          }
          {userInfo===null && 
            (<Link to='/signup' className="info-btn">Get Started</Link>)
          }
        </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
