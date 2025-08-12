const userRegisterMobileModal = require("../models/registerMobile")


exports.registerMobileController=async(req,res,next)=>{
    try{
        const{mobile}=req.body
        const MobileRegister=await userRegisterMobileModal.create({
            mobile

        })
        res.json({
            message:"Successfully Mobile Number Register",
            MobileRegister
        })
        

    }
    catch(error){
        console.error("Mobile Register error",error)
    }

      


}