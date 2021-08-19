import React,{useState,useEffect} from 'react'
// import {FiStar,FiSettings} from 'react-icons/fi'
// import {AiOutlineEye} from 'react-icons/ai'
import { IconButton } from '@material-ui/core'
import fromImage from "../images/forms.png";
import userImage from "../images/g.jpg";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../css/FormHeader.css'

const FormHeader = ()=>{
    const [value,setValue]  = useState('untitle')
    const history = useHistory();
    const allState  = useSelector(state=>console.log(state))
    console.log(allState)

    const onClickImage = ()=>{
        history.push('/')
    }
    return (<div className='form_header'>
        <div className="form_header_left">
        <img src={fromImage} onClick={onClickImage} className="fromImage" alt="Image"/>
        <div className="from_header_right">
            <button className="ui primary button">Send</button>
            <IconButton><MoreVertIcon/></IconButton>
            <img src={userImage} className='userImage2' alt="userImage" />
        </div>
        </div>
    </div>)
}


export default FormHeader