const mongoose = require('mongoose')

const {Schema} = mongoose

const responseSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    generateCode:{
        type:String,
        required:true,
    },
    response:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
});





const ResponseGot = mongoose.model('ResponseGot',responseSchema)

module.exports = ResponseGot



