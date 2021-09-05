import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allGenerateCodeAction } from "../actions/teacherResponseAction";
import Loader from "./Loader";
import ErrorMessage from "../screen/ErrorMessage";
import HomePageHeader from "./HomePageHeader";
import { Link } from "react-router-dom";

const AllGenerateCode = ({ history }) => {
  const dispatch = useDispatch();
  const userLogIn = useSelector((state) => state.userLogIn);
  const allGC = useSelector((state) => state.allGC);
  const { isLoading, allGenerateCode, error } = allGC;
  const { userInfo } = userLogIn;

  useEffect(() => {
    if (userInfo && userInfo.isStudent === false) {
      history.push("/");
    }
  }, [userInfo, history, dispatch]);

  useEffect(() => {
    dispatch(allGenerateCodeAction());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <Loader />}
      {/* {error && <ErrorMessage variant='negative' children={error} top='8%'/>} */}
      <div style={{ background: "#dee6e8" }}>
        <HomePageHeader />
      </div>
      <main style={{marginTop:'3rem',marginLeft:'3rem',marginRight:'3rem' ,display: "grid",gridTemplateColumns: '25rem 25rem 25rem 25rem',gridGap:'4%'}}>
      {allGenerateCode.map((agc) => (
          <div className="ui-cards">
            <div className="card">
              <div className="content" style={{textAlign:'center'}}>
                <div className="header">GenerateCode</div>
                <div className="description">Name:{agc.uniqueCode}</div>
              </div>
              <div className="ui bottom  button">
                  <Link style={{textDecoration:'none'}} to={`/questionResponses/${agc.uniqueCode}`}>Details</Link>
                  </div>
            </div>
          </div>
        
      ))}
      </main>
    </div>
  );
};

export default AllGenerateCode;
