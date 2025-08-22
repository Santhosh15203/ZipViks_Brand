const userproductmodel = require("../models/userproduct")


exports.allproduct=async(req,res,next)=>{
    try{
         const query=req.query.keyword?{
                  $or: [
                      { name: { $regex: req.query.keyword, $options: "i" } },
                      { description: { $regex: req.query.keyword, $options: "i" } }
                  ]
              }:{}


             const page = parseInt(req.query.page) || 1;   // default page = 1
            const limit = parseInt(req.query.limit) || 12; // default limit = 12
            const skip = (page - 1) * limit;
             const total = await userproductmodel.countDocuments(query); //total quaery count

            const userproducts=await userproductmodel.find(query).skip(skip).limit(limit)    //use await to receive all data 
            res.json({
                message:"all product here",
                userproducts,
                pages: Math.ceil(total / limit)
            })
    }catch(error){
       res.json({
         message:"Doesnot found"
       })
    }
   
}
exports.singleproduct=async(req,res,next)=>{
    try{
        const singleuserproduct=await userproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singleuserproduct
    })

    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}
