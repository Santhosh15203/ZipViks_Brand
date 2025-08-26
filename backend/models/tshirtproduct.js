const mongoose=require('mongoose')
const tshirtproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const tshirtproductmodel=mongoose.model('tshirtproducts',tshirtproductSchema)

module.exports=tshirtproductmodel 