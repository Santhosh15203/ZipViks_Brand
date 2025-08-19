const registerMobileFormModal = require("../models/postRegisterMobileFormModel")

exports.updateMobileRegisterForm=async(req,res,next)=>{
    console.log("Searching by:", mobile);
console.log("Body:", req.body);
    try{
         const {mobile}=req.params
    const{fullname,mobile: newMobile,address,city,state,zipcode}=req.body
    const updateData={
        fullname,
        mobile: newMobile,
        address,
        city,
        state,
        zipcode

    }
    const updateRegisterMobileFormData=await registerMobileFormModal.findOneAndUpdate({mobile},updateData,{new:true})
    res.json(
        {updateRegisterMobileFormData}

    )

    }
    catch(error){
        console.log("Update Register Form Data error",error.message)
    }
   

}