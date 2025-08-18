const registerMobileFormModal = require("../models/postRegisterMobileFormModel")

exports.getMobileRegisterFormData=async(req,res,next)=>{
    try{
        const registermobileformData=registerMobileFormModal.find({})
    res.json({
        registermobileformData
    })

    }
    catch(error){
        console.log("register form data user error: ",error.message)
    }
    

}