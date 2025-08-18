const registerMobileFormModal = require("../models/postRegisterMobileFormModel");


exports.registerMobileFormController=async(req,res,next)=>{
    console.log("POST /mobileform hit with:", req.body);


       try{
       const {fullname,mobile,address,city,state,zipcode}=req.body

    const registerMobileForm=await registerMobileFormModal.create({
        fullname,
        mobile,
        address,
        city,
        state,
        zipcode
    })
    res.json({
        registerMobileForm
    })
    }
    catch(error){
        console.error("Mobile Registeration Form Submit:", error);
    }

    

}