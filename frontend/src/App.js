import Header from "./components/Header";
import Template from "./components/Template";
import MainBody from "./components/MainBody";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import FormHeader from './components/FormHeader'
// import CenterTab from "./components/Tab";
import QuestionForm from "./components/QuestionForm";
import Finish from "./components/Finish";
import Homepage from "./screen/Homepage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignInPage from "./screen/SignInPage";
import SignUpPage from "./screen/SignUpPage";
import GenerateCode from "./components/GenerateCode";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Homepage/>
        </Route>
        <Route path='/signin' exact component={SignInPage}/>
        <Route path='/signup' exact component={SignUpPage}/>
        <Route path='/blankForm'>
            <Header/>
            <Template/>
            <MainBody/> 
        </Route>
        <Route path='/generateCode' exact component={GenerateCode}/>
        <Route path='/form/:id'>
          <FormHeader/>
          {/* <CenterTab/> */}
          <QuestionForm/>
          </Route>
        <Route path='/finish' exact component={Finish}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
{/* */}