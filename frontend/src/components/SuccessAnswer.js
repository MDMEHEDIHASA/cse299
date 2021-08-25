import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import ErrorMessage from '../screen/ErrorMessage';
import { Link } from 'react-router-dom';
import '../css/homepage.css'

const SuccessAnswer = ({history})=>{
    const userLogIn = useSelector(state=>state.userLogIn)
    const {userInfo} = userLogIn;
    const sendStudentQuestion = useSelector(state=>state.sendStudentQuestion);
    const {isLoading,success} = sendStudentQuestion;
    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }
        
    },[userInfo,sendStudentQuestion,history])
    return(<div>
         <ErrorMessage variant='positive' top='28%' children="You marks will be send to your email Address."/>
        <Link to="/" style={{position: 'absolute',top: '34%',left: '60%'}}>Go Back</Link>
    </div>)
}


export default SuccessAnswer;