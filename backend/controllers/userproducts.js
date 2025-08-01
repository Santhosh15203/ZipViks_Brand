const userproductmodel = require("../models/userproduct")


exports.allproduct=async(req,res,next)=>{
    try{
         const query=req.query.keyword?{
                  $or: [
                      { name: { $regex: req.query.keyword, $options: "i" } },
                      { description: { $regex: req.query.keyword, $options: "i" } }
                  ]
              }:{}
            const userproducts=await userproductmodel.find(query)    //use await to receive all data 
            res.json({
                message:"all product here",
                userproducts
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
