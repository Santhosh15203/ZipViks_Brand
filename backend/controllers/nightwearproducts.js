const nightwearproductmodel = require("../models/nightwearproduct");

exports.nightwearproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await nightwearproductmodel.countDocuments(); // total count
    
        const nightwearproducts = await nightwearproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          nightwearproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}
exports.nightyproduct=async(req,res,next)=>{
    try{
        const singlenightyproduct=await legginsproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singlenightyproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}