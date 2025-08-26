const mongoose=require('mongoose')
const nightwearproductSchema=new mongoose.Schema({
    name:String,
    description:String,
    ratings:String,
    sellingprice:String,
    fixedprice:String,
    discount:String,
    image:String
})
const nightwearproductmodel=mongoose.model('nightwearproducts',nightwearproductSchema)

module.exports=nightwearproductmodel 