const jwt  = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protectMiddlewares = asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
           token = req.headers.authorization.split(' ')[1]
           const decode = jwt.verify(token,process.env.SECRET_KEY)
           req.user = await User.findById({_id:decode.id}).select('-password');
           next()
        }catch(err){
            res.status(401).send(JSON.stringify("Your token is expired."))
        }
    }
    if(!token){
        res.status(401).send(JSON.stringify("NO token is found."))
    }
    
    
})

module.exports = protectMiddlewares