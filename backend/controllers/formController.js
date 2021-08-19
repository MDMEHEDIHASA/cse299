const CreateForm = require('../models/createFormDb')
const asyncHandler = require('express-async-handler')

exports.createPostForm = asyncHandler(async(req,res)=>{
    const {questions,documentName,documentDescription,uniqueCode} = req.body;
    
    try{
        const createForm = new CreateForm({
            questions:questions,
            documentName:documentName,
            documentDescription:documentDescription,
            uniqueCode:uniqueCode
        })
    
           questions.map(qus=>{
               if(qus.answerKey==='' || qus.points===0){
                res.status(401).send(JSON.stringify('Answer key and set points must be fill up.'))
                return
               }
           })
        
            if(uniqueCode.length>5 || uniqueCode.length<=4  || uniqueCode.length===0){
                res.status(401).send(JSON.stringify('Unique code must be 5 character.'))
                return
                // console.log('Unique code must be 5 character.')
                // throw new Error("Unique code must be 5 character.")
                
            }else{
                const uniqueCodeExist = await CreateForm.findOne({uniqueCode})
                if(uniqueCodeExist){
                res.status(401).send(JSON.stringify('This code already taken. Try different one.'))
                return
                //console.log('This code already taken. Try different one')
                // throw new Error("This code already taken. Try different one")
               }
               const uniqueTitleExist = await CreateForm.findOne({documentName})
               if(uniqueTitleExist){
                res.status(401).send(JSON.stringify('This title already taken. Try different one.'))
                return
               }
               else{
                const saveCreateForm = await createForm.save()
                res.json(saveCreateForm)
               }
            }   
    }catch(error){
        res.status(401).send(JSON.stringify("Something wrong try to fill up all the value."))
    }
    
    
})
