const mongoose=require('mongoose')
const leggingsproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const legginsproductmodel=mongoose.model('leggingsproducts',leggingsproductSchema)

module.exports=legginsproductmodel 