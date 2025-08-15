const registerformodal = require("../models/registerform")


exports.registerMobileFinder=async(req,res,next)=>{
    const registerFormMobileUser=await registerformodal.findByMobile(mobile)
    res.json({
        registerFormMobileUser

    })
}