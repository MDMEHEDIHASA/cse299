const ResponseGot = require('../models/checkResponseDb')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')


exports.getStudentResponse = asyncHandler(async(req,res)=>{
    const generateCode = req.params.code;
    //console.log("code=",generateCode)
    const checkResponse = await ResponseGot.findOne({generateCode:generateCode})
    if(checkResponse){
        res.status(401).send(JSON.stringify("You have already submitted this quiz."))
    }else{
        res.status(200).send(JSON.stringify(false))
    }
})


exports.sendStudentResponse = asyncHandler(async(req,res)=>{
    const {generateCode,response} = req.body;
    // console.log(generateCode,response)
    try{
        const user = await ResponseGot.findOne({generateCode:generateCode});
        if(user){
            res.status(401).send(JSON.stringify("You have already submitted. Cannot submit again."))
        }else{
            const gotResponse = new ResponseGot({
                userId:req.user._id,
                generateCode:generateCode,
                response:response
            })
            const saveResponse  = await gotResponse.save()
            res.status(200).send(JSON.stringify("Your response got recorder."))
        }
    }catch(error){
        res.status(401).send(JSON.stringify("Your submission fail. Try to resubmit again."))
    }
})

