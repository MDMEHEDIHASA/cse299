const CreateForm = require('../models/createFormDb')
const ResponseGot = require('../models/checkResponseDb')
const OnlyMarks = require('../models/onlyMarksDb')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')


exports.userResponsesByCode = asyncHandler(async(req,res)=>{
    const findUserCodeQuestion = await CreateForm.find({userId:req.user._id}).select('uniqueCode -_id');
    const allGenerateCode = []
    if(findUserCodeQuestion){
        for(let i=0;i<findUserCodeQuestion.length;i++){
            allGenerateCode.push({uniqueCode:findUserCodeQuestion[i].uniqueCode})
        }
        res.json(allGenerateCode)
    }else{
        res.status(401).send("You have Not created any Question.")
    }
})






exports.questionResponseControllerUsingCode = asyncHandler(async(req,res)=>{
    const generateCode = req.params.generateCode;
    const findUserCodeQuestion = await CreateForm.find({userId:req.user._id}).select('uniqueCode -_id');
    const findResponse = [];
    const userInforamtion = [];

    const responses = await ResponseGot.find({generateCode:generateCode}).select('userId generateCode -_id')
    // console.log('Response',responses);
    if(responses){
        for(let i=0;i<responses.length;i++){
                const user = await User.findOne({_id:mongoose.Types.ObjectId(responses[i].userId)}).select('name email -_id')
                const marks = await OnlyMarks.findOne({userId:responses[i].userId,generateCode:generateCode}).select('marks -_id')
                // console.log(marks);
                //console.log("user = ",user);
                    userInforamtion.push({name:user.name,email:user.email,marks:marks});
            }
            res.status(200).json(userInforamtion)
    }else{
        res.status(401).send(JSON.stringify("No response yet."))
    }
    
})