const hoodieproductmodel = require("../models/hoodieproduct");

exports.hoodieproducts=async(req,res,next)=>{
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
                 const total = await hoodieproductmodel.countDocuments(query); //total quaery count
    
                const hoodieproducts=await hoodieproductmodel.find(query).skip(skip).limit(limit)    //use await to receive all data 
                res.json({
                    message:"all product here",
                    hoodieproducts,
                    pages: Math.ceil(total / limit)
                })
        }catch(error){
           res.json({
             message:"Doesnot found"
           })
        }

}