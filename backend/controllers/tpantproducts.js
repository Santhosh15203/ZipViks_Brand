const tpantproductmodel = require("../models/tpantproduct");

exports.tpantproducts=async(req,res,next)=>{
    
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 12; // default limit = 12
        const skip = (page - 1) * limit;
    
        const total = await tpantproductmodel.countDocuments(); // total count
    
        const tpantproducts = await tpantproductmodel.find().skip(skip).limit(limit);
    
        res.json({
          message: "All products ",
          tpantproducts,
          pages: Math.ceil(total / limit) // total number of pages
        });
      } catch (error) {
        res.json({
          message: "Not found"
        });
      }


}