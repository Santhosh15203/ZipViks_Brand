const express=require('express')
const app=express()

const path=require('path')
const cors=require('cors')

const dotenv=require('dotenv')
const router = require('./routes/user')
const { dbconnection } = require('./config/dbconnection')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const multer = require('multer');
const upload = multer(); // no file storage, just parse text fields


app.use(cors())

app.use(express.json())      //get data from req to save mongodb in json method
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static(path.join(__dirname,'public')))

dbconnection()
// Apply multer to all routes
app.use(upload.none());  // parses multipart/form-data without files
app.use(router)


app.listen(process.env.PORT,()=>{     //to change port :i dotenv,dotenv.config({path})
    console.log(`server running in port http://localhost:${process.env.PORT}`);   
    
})