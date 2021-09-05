import React,{useState,useEffect} from 'react'
// import {FiStar,FiSettings} from 'react-icons/fi'
// import {AiOutlineEye} from 'react-icons/ai'
import '../css/FormHeader.css'
import fromImage from "../images/forms.png";
import {useSelector,useDispatch} from 'react-redux'
import userImage from "../images/g.jpg";
import { useHistory } from 'react-router-dom';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
import {LogoutAction} from '../actions/userAction'


const FormHeader = ()=>{
    const [value,setValue]  = useState('untitle')
    const history = useHistory();
    const allState  = useSelector(state=>console.log(state))
    console.log(allState)
    const userLogIn = useSelector(state=>state.userLogIn)
    const {isLoading,userInfo,error} = userLogIn;
    const dispatch = useDispatch()
    useEffect(()=>{
      if(!userInfo){
        history.push('/signin')
      }else if(userInfo.isStudent === false){
        history.push('/')
        return;
      }
    },[history,userInfo])
    const onClickImage = ()=>{
        history.push('/')
    }
    return (<div className='form_header'>
        <div className="form_header_left">
        <img src={fromImage} onClick={onClickImage} className="fromImage" alt="Image"/>
        <div className="from_header_right">
            
            {/* <img src={userImage} className='userImage2' alt="userImage" /> */}
            <Navbar>
          <Container>
          <Nav className="me-auto">
          <NavDropdown title={userInfo && userInfo.name} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>dispatch(LogoutAction())} style={{minWidth:'7rem'}} >LogOut</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          </Container>
        </Navbar>
        </div>
        </div>
    </div>)
}


export default FormHeader