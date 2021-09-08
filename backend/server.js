const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const products = require('./products')
require('dotenv').config()

// connectDB()




const app = express()
const homeRoute = require('./routes/homeRoutes')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const formRoute = require('./routes/formRoute')
const marksRoute = require('./routes/marksRoute')
const generateCodeRoute = require('./routes/generateCodeRoute')
const questionResponseRouter = require('./routes/questionResponseRoute')

// app.use(bodyparser.json())
app.use(express.json())
app.use(userRoute);
app.use(formRoute)
app.use(marksRoute)
app.use(generateCodeRoute)
app.use(questionResponseRouter)

app.use('/fm',productRoute)




mongoose.connect(process.env.MONGO_URI,
{ useNewUrlParser: true,useUnifiedTopology: true  }
).then(result=>{
    console.log("DataBase connected successfullly.")

}).catch(err=>{
    console.log(err)
})

app.use(express.static('public'))

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    )
}else{
    app.use('/',homeRoute)
}

const  PORT = process.env.PORT || 5000;


app.listen(PORT,console.log('Server is connected'))