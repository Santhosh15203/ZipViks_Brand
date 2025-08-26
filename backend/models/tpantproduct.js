const mongoose=require('mongoose')
const tpantproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const tpantproductmodel=mongoose.model('tpantproducts',tpantproductSchema)
module.exports=tpantproductmodel 