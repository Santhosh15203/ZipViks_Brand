const legginsproductmodel = require("../models/legginsproduct");

exports.legginsproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await legginsproductmodel.countDocuments(); // total count
    
        const legginsproducts = await legginsproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          legginsproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}
exports.legginsproduct=async(req,res,next)=>{
    try{
        const singlelegginsproduct=await legginsproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singlelegginsproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}