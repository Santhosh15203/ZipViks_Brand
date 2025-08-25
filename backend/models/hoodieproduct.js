const mongoose=require('mongoose')
const hoodieproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const hoodieproductmodel=mongoose.model('hoodieproducts',hoodieproductSchema)

module.exports=hoodieproductmodel 