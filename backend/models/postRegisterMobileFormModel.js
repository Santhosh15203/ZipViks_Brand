const mongoose=require("mongoose")
const registermobileformschema=new mongoose.Schema({
    fullname:String,
    mobile:String,
    address:String,
    city:String,
    state:String,
    zipcode:String

})
const registerMobileFormModal=mongoose.model("registermobileformtable",registermobileformschema)
module.exports=registerMobileFormModal 