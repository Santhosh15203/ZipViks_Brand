const registerMobileFormModal = require("../models/postRegisterMobileFormModel");


exports.registerMobileFormController=async(req,res,next)=>{


       try{
       const {name,mobile,address,city,state,zipcode}=req.body

    const registerMobileForm=await registerMobileFormModal.create({
        name,
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