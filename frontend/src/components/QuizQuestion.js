import React,{useEffect, useState,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import '../css/QuizQuestion.css'
import Loader from '../screen/Loader'
import HomePageHeader from '../screen/HomePageHeader';


const QuizQuestion = ({history})=>{
   
   const allGenerate = useSelector(state=>state.codeGenerate);
   const {isLoading,generateCode,error} = allGenerate;
   const selectRef = useRef(null)
  
    let  questions;

   if(generateCode){
     questions = generateCode.questions
   }
   let sendOptionsAndAnswer = []
   const [currentQUestion,setCurrentQuestion] = useState(0)
   const [answer,setAnswer] = useState('');
   //let [sendOptionsAndAnswer,setSendOptionsAndAnswer] = useState([])
  
   if(questions){
     questions.map(ques=>{
      sendOptionsAndAnswer.push({'questionText':ques.questionText,'answerKey':null})
     })
   }
   console.log(sendOptionsAndAnswer)

   const nextQuestionHandler = ()=>{
     let nextQuestion = currentQUestion+1;
     if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
     }else{
       alert('you have reached the end.')
     }
     
   }

  

    return(isLoading ? <Loader/> : <div>
      <div style={{background:'cadetblue'}}>
      <HomePageHeader/>
      </div>
      <div className="quiz-container quiz-container2" id="quiz">
      
      <div className="quiz-header">
        {/* {questions.map((ques,j)=>( */}
          <div>
          <h2 className='h2' id="question">{questions[currentQUestion].questionText}</h2>
          <ul>
    
            <li>
              {questions[currentQUestion].options.map((op,i)=>(
                <div  key={i}>
                  <label >
                    <input 
                    className='answer'   type={questions[currentQUestion].questionType}  
                    name={questions[currentQUestion].options[i].optionText}
                    onChange={(e)=>{console.log('name',e.target.name);
                      setAnswer(e.target.name);
                      console.log(answer)
                      sendOptionsAndAnswer[currentQUestion].answerKey=`${e.target.name}`
                    }}/>
                     {questions[currentQUestion].options[i].optionText}
                  </label>
                </div>
              ))}
              
            </li>
    
          </ul>
          <button className='button' onClick={nextQuestionHandler} id="submit">Next Question</button>
          </div>
        {/* ))} */}
      </div>
      <button className='button' id="submit">Submit</button>
    </div>
    </div>)
}

export default QuizQuestion

/*

<li>
            <input type="radio" name="answer" id="c" className="answer"/>
            <label for="c" id="c_text">Question</label>
          </li>
  
          <li>
            <input type="radio" name="answer" id="d" className="answer"/>
            <label for="d" id="d_text">Question</label>
          </li>


          <input value={questions[currentQUestion].options[i].optionText} 
                  onChange={()=>{
                  console.log(selectRef)
                  setAnswer(questions[currentQUestion].options[i].optionText);
                  console.log(answer)
                  sendOptionsAndAnswer[currentQUestion].answerKey=questions[currentQUestion].options[i].optionText
                  }}
                  type={questions[currentQUestion].questionType} name="answer" />
                   <label >{questions[currentQUestion].options[i].optionText}</label>
 
 */