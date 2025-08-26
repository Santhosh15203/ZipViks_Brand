const shortsproductmodel = require("../models/shortsproduct");

exports.shortsproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await shortsproductmodel.countDocuments(); // total count
    
        const shortsproducts = await shortsproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          shortsproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}
exports.shortsproduct=async(req,res,next)=>{
    try{
        const singleshortsproduct=await legginsproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singleshortsproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}