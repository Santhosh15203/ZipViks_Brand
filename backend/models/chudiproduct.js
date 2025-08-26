const mongoose=require('mongoose')
const chudiproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const chudiproductmodel=mongoose.model('chudiproducts',chudiproductSchema)

module.exports=chudiproductmodel 