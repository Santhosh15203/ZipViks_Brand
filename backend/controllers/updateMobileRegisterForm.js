const registerMobileFormModal = require("../models/postRegisterMobileFormModel")

exports.updateMobileRegisterForm=async(req,res,next)=>{
    try{
         const {mobileMobile}=req.params
    const{fullname,mobile,address,city,state,zipcode}=req.body
    const updateData={
        fullname,
        mobile,
        address,
        city,
        state,
        zipcode

    }
    const updateRegisterMobileFormData=await registerMobileFormModal.findOneAndUpdate({mobile:mobileMobile},updateData,{new:true})
    res.json(
        {updateRegisterMobileFormData}

    )

    }
    catch(error){
        console.log("Update Register Form Data error",error.message)
    }
   

}