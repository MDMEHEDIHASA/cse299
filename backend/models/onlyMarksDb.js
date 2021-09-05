const mongoose = require('mongoose')

const {Schema} = mongoose

const onlyMarksSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    generateCode:{
        type:String,
        required:true
    },
    marks:{
        type:String,
        required:true
    }
});





const OnlyMarks = mongoose.model('OnlyMarks',onlyMarksSchema)

module.exports = OnlyMarks
