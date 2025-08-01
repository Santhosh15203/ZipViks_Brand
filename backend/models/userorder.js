const mongoose=require('mongoose')

const userorderSchema=new mongoose.Schema({
    user:Array,
    cardItems:Array,
    totalAmount:String,
    status:String,
    creditDate:Date
})

const userordermodel=mongoose.model('userorder',userorderSchema)

module.exports=userordermodel