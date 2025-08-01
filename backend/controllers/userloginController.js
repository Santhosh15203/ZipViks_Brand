const registerformodal = require("../models/registerform")

exports.userloginController=async(req,res,next)=>{
    try{
        const userlogindata =await registerformodal.find({})
        res.json({
            userlogindata
        })

    }
    catch(error){
        console.log("userlogin error",error)
    }

}