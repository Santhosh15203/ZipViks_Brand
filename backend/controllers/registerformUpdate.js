const registerformodal = require("../models/registerform")

exports.registerformControllerUpdate=async(req,res,next)=>{
    try{
        const {id}=req.params
        const {firstname,mobile,email,password,gender,address,city,state,zipcode,country} = req.body
        const profile=req.file?.filename||""
         const updateData = {
                    firstname,
                    mobile,
                    email,
                    password,
                    gender,
                    address,
                    city,
                    state,
                    zipcode,
                    country,
                    };
        if(profile){
            updateData.profile=profile
        }

        const updateUser=await registerformodal.findByIdAndUpdate(id,updateData,{new:true})
        
        res.json({
            message:"updated successfull",
            updateUser
        })
    }
    catch(error){
        console.log("Update error: ",error)
    }

}