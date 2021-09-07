const CreateForm = require("../models/createFormDb");
const OnlyMarks = require('../models/onlyMarksDb');
const  nodemailer = require('nodemailer')
const sendgridTransport  = require('nodemailer-sendgrid-transport');



const transport =  nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.API_KEY
    }
}));




exports.postMarksController = async(req, res, next) => {
  const { solutions,code} =  req.body;
  const email = req.user.email;
  const questionForm = await CreateForm.findOne({uniqueCode:code});
  let points = 0;
  let totalPoints = 0;
  const questionsFormQuestion = questionForm.questions
  // console.log(questionsFormQuestion);
  try {
      questionsFormQuestion.forEach(pt=>{
          totalPoints = totalPoints + pt.points;
      })
      // console.log('Total poinst',totalPoints)
      if(questionForm.response === false){
        res.status(401).send(JSON.stringify("Sorry the response time is off. Better luck next time."))
      }
      if(questionsFormQuestion.length !== solutions.length){
        res.status(401).send(JSON.stringify("Fill up all the values."))
      }else{
        for (let i = 0; i < solutions.length; i++) {
          if (solutions[i].questionText === questionsFormQuestion[i].questionText) {
            if ((solutions[i].userAnswer.toLowerCase() === questionsFormQuestion[i].answerKey.toLowerCase())) {
              points += questionsFormQuestion[i].points;
            } else {
              points = totalPoints - questionsFormQuestion[i].points;
            }
          } else {
            res.send("No question match.");
          }
        }
        const marks = await  OnlyMarks.create({
          userId:req.user._id,
          generateCode:code,
          marks:`${points}/${totalPoints}`
        })
        res.json(marks);
        await transport.sendMail({
          to:email,
          from:'mhd7894@outlook.com',
          subject:'Your quiz point',
          text:"Thank you for this quiz",
          html:`<h1>You got ${points}/${totalPoints}</h1>`
      })
      }
  } catch(err){
    res.status(401).send(JSON.stringify("Something went wrong."));
  }
};
