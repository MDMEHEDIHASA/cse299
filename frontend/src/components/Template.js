import React,{useEffect, useState} from 'react'
import '../css/Template.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import blank from '../images/blank.PNG'
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const Template  = ()=>{

    const [products,setProducts] = useState([])
    const history = useHistory()
    const blankForm = ()=>{
        history.push(`/form/${uuidv4()}`)
        window.location.reload(false);
        localStorage.removeItem('allQuestions')
    }

    
    return (<div className='template_section'>
        <div className='template_top'>
        <div className='template_left'>
        <span style={{color:'#202124'}}>Start New form</span>
        </div>
        <div className='template_right'>
            <div className='gallery_button'>
                Template gallery_button
                <UnfoldMoreIcon/>
            </div>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
        </div>
        <div className='template_body'>
            <div className='card' onClick={blankForm}>
                <img className='card_image' src={blank} alt='Blank Form'></img>
                <span>Blank</span>
            </div>
        </div>
    </div>)
}

export default Template