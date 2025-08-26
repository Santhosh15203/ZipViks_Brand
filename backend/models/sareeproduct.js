const mongoose=require('mongoose')
const sareeproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const sareeproductmodel=mongoose.model('sareeproducts',sareeproductSchema)

module.exports=sareeproductmodel 