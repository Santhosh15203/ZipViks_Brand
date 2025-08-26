const mongoose=require('mongoose')
const shortsproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const shortsproductmodel=mongoose.model('shortsproducts',shortsproductSchema)

module.exports=shortsproductmodel 