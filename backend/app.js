const express=require('express')
const app=express()

const path=require('path')
const cors=require('cors')

const dotenv=require('dotenv')
const router = require('./routes/user')
const { dbconnection } = require('./config/dbconnection')
dotenv.config({path:path.join(__dirname,'config','config.env')})

app.use(cors())
app.use(express.json())      //get data from req to save mongodb in json method
dbconnection()
app.use(express.urlencoded({ extended: true }));
app.use(router)
app.use('/public',express.static(path.join(__dirname,'public')))
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));


app.listen(process.env.PORT,()=>{     //to change port :i dotenv,dotenv.config({path})
    console.log(`server running in port ${process.env.PORT}`);   
    
})