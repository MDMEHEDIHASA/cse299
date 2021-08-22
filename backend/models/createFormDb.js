const mongoose  = require('mongoose')

const creatFormSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
     },
    questions:[
        {
            questionText:{
                type:String,
                required:true
            },
            questionType:{
                type:String,
                required:true
            },
            options:[{
                optionText:{
                    type:String,
                    required:true
                }
            }],
            answerKey:{
                type:String,
                required:true
            },
            points:{
                type:Number,
                required:true
            },
           
        }
    ],
    documentName:{
        type:String,
        required:true
    },
    documentDescription:{
        type:String,
        required:true
    },
    uniqueCode:{
        type:String,
        required:true
    }
})

const CreateForm = mongoose.model('CreateForm',creatFormSchema)

module.exports = CreateForm





