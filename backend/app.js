const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
require('./config/db')
const app = express()
const cors=require('cors')
app.use(morgan('dev'))
const PORT = process.env.PORT
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const userRoute = require('./routes/userRoutes')
app.use('/user',userRoute)
const adminRoute = require('./routes/adminRoutes')
app.use('/admin',adminRoute)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})


