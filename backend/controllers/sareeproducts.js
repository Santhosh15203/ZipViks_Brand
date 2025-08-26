
const sareeproductmodel = require("../models/sareeproduct");

exports.sareeproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await sareeproductmodel.countDocuments(); // total count
    
        const sareeproducts = await sareeproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          sareeproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}