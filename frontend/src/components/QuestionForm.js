import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { useHistory,useLocation } from "react-router-dom";

import {
  CropOriginal,
  CheckBox,
  ShortText,
  Subject,
  FilterNone,
  AddCircleOutline,
  Close,
  DragIndicator
} from "@material-ui/icons";
import {
  Select,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Radio,
  FormControlLabel,
  Typography,
  MenuItem,
} from "@material-ui/core";

import { BsTrash } from "react-icons/bs";
// import { FcRightUp } from "react-icons/fc";

import "../css/QuestionForm.css";
import { DragDropContext, Droppable,Draggable } from "react-beautiful-dnd";
// import { Link } from "react-router-dom";
import {createForm} from '../actions/createFormAction'
// import Loader from '../screen/Loader';
import ErrorMessage from '../screen/ErrorMessage'



const QuestionForm = () => {
    const [documentName,setDocumentName] = useState('')
   const [documentDescription,setDocumentDescription] = useState('')
   const [questionId,setQuestionId] = useState([])
   const [uniqueCode,setUniqueCode]= useState('')

   const dispatch = useDispatch()
   const history = useHistory()
   const location = useLocation()

   const questionState = useSelector(state=>state.createFormData)
   const {isLoading,allQuestions,error} = questionState
   
   console.log(allQuestions)
   let allQuestions2=[]
   
  useEffect(async()=>{
      allQuestions2 =await allQuestions
      console.log(allQuestions2)
  },[allQuestions,allQuestions2])

  const [questions, setQuestions] = useState([
    { questionText: "What is the captial city of Bangladesh?",
      questionType:'radio',
      options:[
          {optionText:'Dhaka'},
          {optionText:'Chittagong'},
          {optionText:'Cumilla'},
          {optionText:'Sylhet'},
      ],
      answer:false,
      answerKey:'',
      points:0,
      open:true,
      required:false
    }
  ]);

   
  const submitHandler = async(e)=>{
        e.preventDefault()
        dispatch(createForm(questionId,documentName,documentDescription,uniqueCode))
        console.log(isLoading)
    }


    useEffect(()=>{
        if(!isLoading){
            history.push('/')
            // window.confirm("Refresh your screen.");
        }
    },[history,isLoading])

  const [paragraph,setParagraph] = useState(null);
  const onClickPargraph = (e)=>{
      setParagraph(e.target.value)
    //   console.log(paragraph)
  }

  const [paragraph2,setParagraph2] = useState(null);
  const onClickPargraph2 = (e)=>{
      setParagraph2(e.target.value)
    //   console.log(paragraph)
  }

  const changeQuestion = (text,i)=>{
      let newQuestion = [...questions]
      newQuestion[i].questionText = text;
      setQuestions(newQuestion);
    //   console.log(newQuestion);
  }

  const addQuestionType = (i,type)=>{
      let qs = [...questions]
      console.log(type)
      qs[i].questionType = type;
      setQuestions(qs)
  }

  const changeOptionValue = (text,i,j)=>{
      let optionQuestions  = [...questions]
      optionQuestions[i].options[j].optionText = text
      setQuestions(optionQuestions)
    //   console.log(optionQuestions)
  }

  const removeOption = (i,j)=>{
      let RemoveOptionQuestion = [...questions]
      if(RemoveOptionQuestion[i].options.length > 1){
          RemoveOptionQuestion[i].options.splice(j,1)
          setQuestions(RemoveOptionQuestion)
        //   console.log(i+'__'+j);
      }
  }

  const addOption = (i)=>{
      let optionQuestion = [...questions]
      if(optionQuestion[i].options.length < 5){
          optionQuestion[i].options.push({optionText:'Option '+(optionQuestion[i].options.length+1)})
      }else{
          console.log("Max 5 options");
      }
      setQuestions(optionQuestion)
  }

  const expandCloseAll = ()=>{
    let qs = [...questions]
    for(let j=0;j<qs.length;j++){
        qs[j].open = false;
    }
    setQuestions(qs)
}

  const copyQuestion = (i)=>{
      expandCloseAll()
      let qs = [...questions]
      let newQuestion = {...qs[i]}
      setQuestions([...questions,newQuestion])
  }

  const deleteQuestion = (i)=>{
      let qs = [...questions]
      if(questions.length > 1){
          qs.splice(i,1);
      }
      setQuestions(qs)
  }

  const requiredQuestion = (i)=>{
      let reqQuestion  = [...questions]
      reqQuestion[i].required = !reqQuestion[i].required
    //   console.log(reqQuestion[i].required+' '+i)
      setQuestions(reqQuestion)
  }

  const addMoreQuestionField = ()=>{
      expandCloseAll()
      setQuestions([...questions,{
        questionText:'Question',
        questionType:'radio',
        options:[{optionText:'option 1'}],
        open:true,
        required:false
    }])
  }


  const reorder = (list,startIndex,endIndex)=>{
    const result = Array.from(list)
    const [removed]  = result.splice(startIndex,1)
    result.splice(endIndex,0,removed)
    return result
    }

  const onDragEnd = (result)=>{
      if(!result.destination){
          return
      }
      let itemgg = [...questions];
      const itemF = reorder(
          itemgg,
          result.source.index,
          result.destination.index,
      )
      setQuestions(itemF)
  }
  
   //expandCloseAll

   const handleExpand = (i)=>{
       let qs = [...questions];
       for(let j=0;j<qs.length;j++){
          if(i === j){
              qs[i].open = true;
           }else{
               qs[j].open = false;
           }
           setQuestions(qs)
        }
   }



  function questionUI(){
      return questions.map((ques,i)=>(
          <Draggable key={i} draggableId={i+'id'} index={i}>
              {(provided,snapshot)=>(
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div>
                          <div style={{marginBottom:'0px'}}>
                              <div style={{width:'100%',marginBottom:'0px'}}>
                                  <DragIndicator style={{transform:'rotate(-90deg)',
                                  color:'#DAE0E2',position:'relative',
                                  left:'300px',fontSize:'small'}}/>
                              </div>
                              <Accordion expanded={questions[i].open} onChange={()=>handleExpand(i)} style={{width:'100%'}} className={questions[i].open ? 'add_border' : ''}>
              <AccordionSummary 
              aria-controls='panel1a-content'
              id='panel1a-header'
              elevation={1} style={{width:'100%'}}
              >
                  {!questions[i].open ? (
                   <div className="saved_questions">
                       <Typography style={{fontSize:'15px', letterSpacing:'0.1px',
                       fontWeight:'400',lineHeight:'24px',paddingBottom:'8px'}}>
                           {i+1}. {questions[i].questionText}
                       </Typography>
                       {ques.questionType === 'text' ? (
                           <input type='text' className='text_input' placeholder='write your answer here.' value={paragraph2} onChange={(e)=>onClickPargraph2(e)}/>
                       )
                       : ques.options.map((op,j)=>(
                        <div key={j}>
                            <div style={{display:'flex'}}>
                                <FormControlLabel style={{marginLeft:'5px',marginBottom:'5px'}} 
                                disabled 
                                control={<input type={ques.questionType} 
                                color='primary' style={{marginRight:'3px'}} 
                                required={ques.type}/>}
                                label={
                                    <Typography style={{fontFamily:'Roboto, sans-serif',
                                    fontSize:'13px',
                                    fontWeight:'400',
                                    letterSpacing:'0.2px',
                                    lineHeight:'20px',
                                    color:'#202124',
                                 }}>{ques.options[j].optionText}</Typography>
                                }
                                />
                            </div>
                        </div>
                    ))
                       
                       }
                   </div>
                  ):''}
              </AccordionSummary>
              {questions[i].open?(
                  <div className="question_boxes">
                  <AccordionDetails className='add_question'>
                      <div className="add_question_top">
                          <input type='text' className='questions' placeholder='Questions' onChange={(e)=>changeQuestion(e.target.value,i)} value={ques.questionText}/>
                          <CropOriginal style={{color:'#5f63668'}}/>
                          <Select className='select' style={{color:'#5f6368'}}>
                              <MenuItem className='menuitem' id='text' value='Text' onClick={()=>addQuestionType(i,'text')}><Subject style={{marginRight:'10px'}}/> Paragraph</MenuItem>
                              <MenuItem className='menuitem' id='checkbox' value='CheckBox' onClick={()=>addQuestionType(i,'checkbox')}><CheckBox style={{marginRight:'10px',color:'#70757a'}} checked/>Checkboxes</MenuItem>
                              <MenuItem className='menuitem' id='radio' value='Radio' onClick={()=>addQuestionType(i,'radio')}><Radio style={{marginRight:'10px',color:'#70757a'}}/> Multiple Choice</MenuItem>
                          </Select>
                      </div>
                  </AccordionDetails>
                  <div className="question_edit">
                      <AddCircleOutline className='edit' onClick={addMoreQuestionField}/>
                      {/* <OndemandVideo className='edit'/> */}
                      {/* <CropOriginal className='edit'/>
                      <TextFields className='edit'/> */}
                  </div>
              </div>
              ):''}

              {ques.questionType === 'text' && (
                <div className='add_questions_body'>
                <input type='text' className='text_input' placeholder='text' value={paragraph} onChange={(e)=>onClickPargraph(e)}/>
                </div>
              )}
                  
              {ques.questionType!== 'text' && ques.options.map((op,j)=>(
                  <div className="add_questions_body" key={j}>
                      {(ques.questionType!=='text') ?
                      <input type={ques.questionType} style={{marginRight:'10px'}}/>:
                      <ShortText style={{marginRight:'10px'}}/>
                      }
                      <div>
                          <input type='text' className='text_input' placeholder='option' value={ques.options[j].optionText} onChange={(e)=>changeOptionValue(e.target.value,i,j)}/>
                      </div>
                      <CropOriginal style={{color:'#5f6368'}}/>
                      <IconButton aria-label='delete'>
                          <Close onClick={()=>removeOption(i,j)}/>
                      </IconButton>
                  </div>
              ))}
              

              {ques.questionType !== 'text' && ques.options.length < 5 ? (
                  <div className="add_questions_body">
                      <FormControlLabel disabled control={
                          (ques.questionType!=='text') ? 
                          <input type={ques.questionType} color='primary' inputProps={{'aria-lable': 'secondary checkbox'}} style={{marginLeft:'10px',marginRight:'10px'}} disabled/>
                          : <ShortText style={{marginRight:'10px'}}/>
                      } label={
                          <div>
                              <input type='text' className='text_input' style={{fontSize:'13px',width:'60px'}} placeholder='Add other'/>
                              <Button onClick={()=>addOption(i)} size='small' style={{textTransform:'none', color:'#4285f4',fontSize:'13px',fontWeight:'600'}}>Add Option</Button>
                          </div>
                      }/>
                  </div>   
              ) : ''}
              <div className="add_footer">
                  <div style={{display:'inherit',gap:'20%'}} className="add_question_bottom_left">
                      {/* <Button 
                      size='small' style={{textTransform:'none',color:'#4285f4',fontSize:'13px',fontWeight:'600'}}>
                          <FcRightUp style={{border:'2px solid #4285f4',padding:'2px',marginRight:'8px'}}/>
                      </Button> */}
                      <div>
                      <input type='text' required style={{width:'17rem'}} className='text_input' placeholder='write answer'  
                      onChange={(e)=>{
                      questions[i].answerKey = e.target.value;
                    //   console.log(questions)
                      }
                      }/>
                      </div>
                      <div>
                      <input type='text' required style={{width:'5rem'}} className='text_input' placeholder='Set Points'  
                      onChange={(e)=>{
                      questions[i].points = parseInt(e.target.value);
                    //   console.log(questions)
                      }
                      }/>
                      </div>
                  </div>
                  <div className="add_question_bottom">
                      <IconButton aria-label='copy' onClick={()=>copyQuestion(i)}>
                          <FilterNone/>
                      </IconButton>
                      <IconButton aria-label='delete' onClick={()=>deleteQuestion(i)}>
                          <BsTrash/>
                      </IconButton>
                      {/* <span style={{color:'#5f6368',fontSize:'13px'}}>Required</span><Switch name='checkedA' color='primary' onClick={()=>requiredQuestion(i)} checked={ques.required}/> */}
                      {/* <IconButton aria-label='copy'>
                          <MoreVert/>
                      </IconButton> */}
                  </div>
              </div>
          </Accordion>
                          </div>
                      </div>
                  </div>
              )}
          </Draggable>
      ))
  }

  return(
    <>
    {error && <ErrorMessage variant='negative' children={error}></ErrorMessage>}
    <div>
    
    <div className="question_form">
      <br></br>
      <div className="section">
        <div className="question_title_section">
          <div className="question_form_top">
            <input onChange={(e)=>setDocumentName(e.target.value)}
              value={documentName}
              type="text"
              className="question_form_top_name"
              style={{ color: "black" }}
              placeholder='Enter your question title here.'
            ></input>
            <input value={documentDescription}
            onChange={(e)=>setDocumentDescription(e.target.value)}
              type="text"
              className="question_form_top_desc"
              style={{ color: "black" }}
              placeholder='Enter your question title description here.'
            ></input>
            <input  
            onChange={(e)=>setUniqueCode(e.target.value)} 
            type='text' 
            className='question_form_top_desc' style={{color:'black'}}
            required
            placeholder='Enter the 5 digit code.This code is for the student when they submit the code they going to get the exam'/>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
            {(provided,snapshot)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
                {questionUI()}
                {provided.placeholder}
            </div>
          )}
            </Droppable>
        </DragDropContext>
        
      </div>
      <form onSubmit={submitHandler} method='post'>
        <button style={{position:'absolute',right:'27rem'}} onClick={()=>{setQuestionId(questions)}} className="ui primary button">Submit</button>
      </form>
    </div>
    {/* <Link to={{pathname:'/finish',state: {fulldetails:{documentName,documentDescription,questions}},}}>
    
    </Link> */}
    
  </div>
    </>
  );
};

export default QuestionForm;
