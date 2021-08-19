const CreateForm = require("../models/createFormDb");

const  nodemailer = require('nodemailer')
const sendgridTransport  = require('nodemailer-sendgrid-transport');



const transport =  nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.API_KEY
    }
}));




exports.postMarksController = async(req, res, next) => {
  const { solutions,email } =  req.body;
  const questionForm = await CreateForm.find();
  console.log(questionForm)
  let points = 0;
  let totalPoints = 0;
  const questionsFormQuestion = questionForm[0].questions
  
  try {
      questionsFormQuestion.forEach(pt=>{
          totalPoints += pt.points;
      })
    for (let i = 0; i < solutions.length; i++) {
      if (solutions[i].question === questionsFormQuestion[i].questionText) {
        if ((solutions[i].value === questionsFormQuestion[i].answerKey)) {
          points += questionsFormQuestion[i].points;
        } else {
          points = totalPoints - questionsFormQuestion[i].points;
        }
      } else {
        res.send("No question match.");
      }
    }
    res.json(points);
    transport.sendMail({
      to:email,
      from:'mhd7894@outlook.com',
      subject:'Your quiz point',
      text:"Thank you for this quiz",
      html:`<h1>You got ${points}/${totalPoints}</h1>`
  })
  } catch(err){
    console.log(err);
  }
};
