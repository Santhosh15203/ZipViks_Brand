const mongoose=require("mongoose")

const registerformschema=new mongoose.Schema({
    firstname:String,
    mobile:String,
    email:String,
    password:String,
    address:String,
    city:String,
    state:String,
    zipcode:String,
    country:String},
{
    strict: true 
  }
)

const registerformodal=mongoose.model('registerform',registerformschema)
module.exports=registerformodal