import React from "react";
import Header from "./components/Header";
import Template from "./components/Template";
import MainBody from "./components/MainBody";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import FormHeader from './components/FormHeader'
// import CenterTab from "./components/Tab";
import QuestionForm from "./components/QuestionForm";
import Homepage from "./screen/Homepage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignInPage from "./screen/SignInPage";
import SignUpPage from "./screen/SignUpPage";
import GenerateCode from "./components/GenerateCode";
import QuizQuestion from './components/QuizQuestion'
import UserProfile from "./screen/UserProfile";
import SuccessAnswer from "./components/SuccessAnswer";


function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/signin' exact component={SignInPage}/>
      <Route path='/signup' exact component={SignUpPage}/>
      <Route path='/profile' exact component={UserProfile}/>
      <Route path='/generateCode' exact component={GenerateCode}/>
      <Route path='/successMessage' exact component={SuccessAnswer}/>
        <Route path='/blankForm' exact>
            <Header/>
            <Template/>
            <MainBody/> 
        </Route>
        
        <Route path='/form/:id' exact>
          <FormHeader/>
          {/* <CenterTab/> */}
          <QuestionForm/>
          </Route>
          <Route path='/getQuestion' exact>
            <QuizQuestion/>
          </Route>
          
          
      </Switch>
    </Router>
  );
}

export default App;
{/* */}