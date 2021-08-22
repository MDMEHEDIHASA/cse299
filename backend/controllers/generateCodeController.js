const CreateForm = require('../models/createFormDb');
const asyncHandler = require('express-async-handler')

exports.generateCodeController = asyncHandler(async(req,res)=>{
    const code = req.body.code;
    console.log(code)
    const questionFinder = await CreateForm.findOne({uniqueCode:code});
    if(questionFinder){
        res.json({
            uniqueCode:questionFinder.uniqueCode,
            questions:questionFinder.questions
        })
    }else{
        res.status(404).send(JSON.stringify("Sorry,this code is not exist."))
    }
})