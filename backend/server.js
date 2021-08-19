const express = require('express')
const bodyparser = require('body-parser')

const mongoose = require('mongoose');

const products = require('./products')
require('dotenv').config()

// connectDB()

const app = express()
const homeRoute = require('./routes/homeRoutes')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const formRoute = require('./routes/formRoute')
const marksRoute = require('./routes/marksRoute')



app.use(bodyparser.json())
app.use(userRoute);
app.use(formRoute)
app.use(marksRoute)
app.use('/',homeRoute)
app.use('/fm',productRoute)




mongoose.connect(process.env.MONGO_URI,
{ useNewUrlParser: true,useUnifiedTopology: true  }
).then(result=>{
    console.log("DataBase connected successfullly.")

}).catch(err=>{
    console.log(err)
})



app.listen(5000,console.log('Server is connected'))