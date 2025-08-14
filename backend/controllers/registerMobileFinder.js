const { registerformController } = require("./registerform")


exports.registerMobileFinder=async(req,res,next)=>{
    const mobileUser=await registerformController.findByMobile()
    res.json({
        mobileUser

    })
}