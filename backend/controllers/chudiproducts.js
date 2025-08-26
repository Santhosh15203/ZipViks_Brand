const chudiproductmodel = require("../models/chudiproduct");


exports.chudiproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await chudiproductmodel.countDocuments(); // total count
    
        const chudiproducts = await chudiproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          chudiproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}

exports.chudiproduct=async(req,res,next)=>{
    try{
        const singlechudiproduct=await chudiproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singlechudiproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}