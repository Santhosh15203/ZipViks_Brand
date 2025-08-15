const registerformodal = require("../models/registerform")


exports.registerMobileFinder=async(req,res,next)=>{
      try{
             const registerFormMobileUser=await registerformodal.find({})
            res.json({
                registerFormMobileUser

            })
    
        }
        catch(error){
            console.log("registerMobile error",error)
        }
   
}