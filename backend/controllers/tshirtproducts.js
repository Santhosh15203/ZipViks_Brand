const tshirtproductmodel = require("../models/tshirtproduct");

exports.tshirtproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await tshirtproductmodel.countDocuments(); // total count
    
        const tshirtproducts = await tshirtproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          tshirtproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}
exports.tshirtproduct=async(req,res,next)=>{
    try{
        const singleshirtproduct=await legginsproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singleshirtproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}