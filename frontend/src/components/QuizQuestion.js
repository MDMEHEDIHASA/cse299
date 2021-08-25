import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import '../css/QuizQuestion.css'
import Loader from '../screen/Loader'
import HomePageHeader from '../screen/HomePageHeader';
import {FormControlLabel,Link,Typography} from "@material-ui/core"
import {sendStudentQuestionAction} from '../actions/sendStudentQuesionAction'
import ErrorMessage from '../screen/ErrorMessage';


const QuizQuestion = ({history})=>{
   const dispatch = useDispatch()
   const allGenerate = useSelector(state=>state.codeGenerate);
   const sendStudentQuestion = useSelector(state=>state.sendStudentQuestion)
   const {isLoading,generateCode,error} = allGenerate;
   const {isLoading:isLoading2,success,error:error2} = sendStudentQuestion

   useEffect(()=>{
     if(sendStudentQuestion.success){
       document.location.href = '/successMessage'
     }
   },[sendStudentQuestion,success,history])
  
    let  questions;

   if(generateCode){
     questions = generateCode.questions
   }
   let sendOptionsAndAnswer = []
   //let [sendOptionsAndAnswer,setSendOptionsAndAnswer] = useState([])
   const [rightQuestion,setRightQuestions] = useState([{
    'questionText':'',
    'userAnswer':''
   }]);
  
   if(questions){
     questions.map(ques=>{
      sendOptionsAndAnswer.push({'questionText':ques.questionText,'answerKey':null})
     })
   }

  const sendQuestionToBackend=(e)=>{
    e.preventDefault();
    let rightQuestion2 = rightQuestion;
    rightQuestion2 = rightQuestion2.slice(0,rightQuestion2.length-1)
    dispatch(sendStudentQuestionAction({code:generateCode.uniqueCode,solutions:rightQuestion2}))
  }



    return(isLoading ? <Loader/> : <div>
      <div style={{background:'cadetblue'}}>
      <HomePageHeader/>
      </div>
      {error2 && <ErrorMessage variant='negative'top='13%'  children={error2}/>}
      <form onSubmit={sendQuestionToBackend}>
      {questions.map((qt,i)=>(
        <div className="saved_questions2">
        <Typography style={{fontSize:'15px', letterSpacing:'0.1px',
        fontWeight:'400',lineHeight:'24px',paddingBottom:'8px'}}>
           {i+1}. {questions[i].questionText}
        </Typography>
        {questions[i].questionType === 'text' ? (
            <input type='text' className='text_input' placeholder='write your answer here.' />
        )
        : 
        questions[i].options.map((op,j)=>(
         <div key={j}>
             <div style={{display:'flex'}}>
                 <FormControlLabel  style={{marginLeft:'5px',marginBottom:'5px'}} 
                 onChange={(e)=>{
                   console.log(questions[i].options[j].optionText)
                   let qs = [...rightQuestion,{'noQuestion':'none'}]
                    qs[i].questionText=questions[i].questionText;
                    qs[i].userAnswer=questions[i].options[j].optionText;
                    setRightQuestions(qs)
                    console.log(rightQuestion)
                  }} 
                 control={<input type={questions[i].questionType} 
                 color='primary' style={{marginRight:'3px'}}
                 required="required"
                 />}
                 label={
                     <Typography style={{fontFamily:'Roboto, sans-serif',
                     fontSize:'13px',
                     fontWeight:'400',
                     letterSpacing:'0.2px',
                     lineHeight:'20px',
                     color:'#202124',
                  }}>{questions[i].options[j].optionText}</Typography>
                 }
                 />
             </div>
               
         </div>
         
     ))
     
        }
        
</div>

      ))}
    <button className='buttonforQuiz'>Submit</button>
    </form>




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