import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './css/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {allReducer} from './reducers'
import { createStore, applyMiddleware,compose } from 'redux';
import {composeWithDevTools}   from 'redux-devtools-extension';


import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const allQuestionsFromStorage = localStorage.getItem('allQuestions') ? JSON.parse(localStorage.getItem('allQuestions')) :[];
const userInfoFromStroage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null;
const getQuestionFromStorage = localStorage.getItem('generateCode') ? JSON.parse(localStorage.getItem('generateCode')) : {}

const initalState={
  createFormData:{allQuestions:allQuestionsFromStorage,isLoading:true},
  userLogIn:{userInfo:userInfoFromStroage},
  codeGenerate:{generateCode:getQuestionFromStorage}

}


const middlewares = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer,initalState,composeWithDevTools(
    applyMiddleware(...middlewares)
));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
