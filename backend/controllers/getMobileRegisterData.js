const userRegisterMobileModal = require("../models/registerMobile")

exports.getMobileRegisterData=async(req,res,next)=>{
    try{
        const registerMobileData=await userRegisterMobileModal.find({})
        res.json({
            registerMobileData
        })

    }
    catch(error){
        console.error("Mobile Registeration User Data error:", error);

    }
    





}