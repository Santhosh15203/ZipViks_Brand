const mongoose =require('mongoose')    //db connect mod:mongoose 

exports.dbconnection=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log(`database connected : ${process.env.PORT}`)
    })
}