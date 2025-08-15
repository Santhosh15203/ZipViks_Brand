const registerformodal = require("../models/registerform")


exports.registerMobileFinder=async(req,res,next)=>{
    const { mobile } = req.query;
    const registerFormMobileUser=await registerformodal.findOne({ mobile });
    res.json({
        registerFormMobileUser

    })
}