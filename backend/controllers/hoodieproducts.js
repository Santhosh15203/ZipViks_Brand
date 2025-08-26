const hoodieproductmodel = require("../models/hoodieproduct");

exports.hoodieproducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;   // default page = 1
    const limit = parseInt(req.query.limit) || 12; // default limit = 12
    const skip = (page - 1) * limit;

    const total = await hoodieproductmodel.countDocuments(); // total count

    const hoodieproducts = await hoodieproductmodel.find().skip(skip).limit(limit);

    res.json({
      message: "All products ",
      hoodieproducts,
      pages: Math.ceil(total / limit) // total number of pages
    });
  } catch (error) {
    res.json({
      message: "Not found"
    });
  }
};

exports.hoodieproduct=async(req,res,next)=>{
    try{
        const singlehoodieproduct=await hoodieproductmodel.findById(req.params.id)
        res.json({
        message:"single product here",
        singlehoodieproduct
    })
    }
    catch(error){
        res.json({
            message:"Id doesn't match the product ",
            error_message:error.message
        })
    }
    
}