const mongoose=require("mongoose")

const userRegisterMboileSchema=new mongoose.Schema({
    "mobile":String
})
const userRegisterMobileModal=mongoose.model("userRegisterMobile",userRegisterMboileSchema)
module.exports=userRegisterMobileModal