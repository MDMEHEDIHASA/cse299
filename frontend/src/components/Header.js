import React, { useEffect } from "react";
import "../css/Header.css";
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
// import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppIcon from "@material-ui/icons/Apps";
import fromImage from "../images/forms.png";
import userImage from "../images/g.jpg";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {LogoutAction} from '../actions/userAction'
import Sidebar from "./Sidebar";

const Header = () => {
  const userLogIn = useSelector(state=>state.userLogIn)
  const {isLoading,userInfo,error} = userLogIn;
  const history = useHistory();
  const dispatch = useDispatch()
  useEffect(()=>{
    if(userInfo.isStudent){
      history.push('/blankForm')
    }else{
      history.push('/')
    }
  },[history,userInfo])
  
  
  return (
    <div className="header">
      <div className="header_info">
        <IconButton>
          <Sidebar />
        </IconButton>
        <img src={fromImage} className="fromImage1" alt="Image" />
        <div className="info">Forms</div>
      </div>
      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" name="search" placeholder="Search" />
      </div>
      <div className="header_right">
        {/* <IconButton><AppIcon /></IconButton> */}
        <Navbar>
          <Container>
          <Nav className="me-auto">
          <NavDropdown title={userInfo && userInfo.name} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>dispatch(LogoutAction())} style={{minWidth:'7rem'}} >LogOut</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          </Container>
        </Navbar>
        <img src={userImage} className="userImage1" alt="User Image" />
      </div>
    </div>
  );
};

export default Header;


/*

color: #000;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 2px 15px;
    border-radius: 20px;
    transition: 0.3s;
    transition-property: background;
    background: #fff;

*/