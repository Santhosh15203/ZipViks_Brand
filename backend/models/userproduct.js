const mongoose=require('mongoose')
const userproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const userproductmodel=mongoose.model('userproducts',userproductSchema)

module.exports=userproductmodel 