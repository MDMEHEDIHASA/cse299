const products = require('../products')

exports.homeMiddleware = (req,res,next)=>{
    res.send("Api is running....")
}

exports.getProudcts = (req,res,next)=>{
    res.json(products)
}