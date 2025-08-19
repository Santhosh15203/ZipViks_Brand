const registerMobileFormModal = require("../models/postRegisterMobileFormModel")

exports.getMobileRegisterFormData=async(req,res,next)=>{
    try{
        const {mobile}=req.params
        const registermobileformData=await registerMobileFormModal.findOne({mobile})
    res.json({
        registermobileformData
    })

    }
    catch(error){
        console.log("register form data user error: ",error.message)
    }
    

}