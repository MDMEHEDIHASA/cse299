import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {teacherResponseAction} from '../actions/teacherResponseAction'
import Loader from "./Loader";
import ErrorMessage from '../screen/ErrorMessage'
import HomePageHeader from "./HomePageHeader";

const QuestionResponses = ({ history,match }) => {
  const generateCode = match.params.generateCode;
  console.log(generateCode)
  const dispatch = useDispatch();
  const userLogIn = useSelector((state) => state.userLogIn);
  const tcr = useSelector(state=>state.tcR);
  const {isLoading,teacherResponse,error} = tcr;
  const { userInfo } = userLogIn;
  

  useEffect(() => {
    if (userInfo && userInfo.isStudent === false) {
      history.push("/");
    }
    if(generateCode){
      dispatch(teacherResponseAction({generateCode}))
    }
  }, [userInfo, history,dispatch,generateCode]);
  return(
      <div>
          {isLoading  ? <Loader/> : error ? <ErrorMessage variant='negative' children={error} top='8%'/> :
          <div style={{background:'#dedede'}}>
              <HomePageHeader/>
              
            <table  className="ui celled table" style={{padding:'3rem'}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
            {teacherResponse.map((tr,i)=>(
                  <tr key={i}>
                   <td data-label="Name">{tr.name}</td>
                   <td data-label="Email">{tr.email}</td>
                   <td data-label="Marks">{tr.marks.marks}</td>
                  </tr>
              ))}
            </tbody>
          </table>
         
          </div>
        }
      </div>
  );
};

export default QuestionResponses;
