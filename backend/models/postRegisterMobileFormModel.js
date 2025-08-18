const mongoose=require("mongoose")
const postRegisterMobileFormSchema=new mongoose.Schema({
    name:String,
    mobile:String,
    address:String,
    city:String,
    state:String,
    zipcode:String

})
const registerMobileFormModal=mongoose.model("registermobileformtable",postRegisterMobileFormSchema)
module.exports=registerMobileFormModal 