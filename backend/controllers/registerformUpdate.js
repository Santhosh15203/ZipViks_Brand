const registerformodal = require("../models/registerform")

exports.registerformControllerUpdate=async(req,res,next)=>{
    try{
        const {id}=req.params
        const {firstname,mobile,email,password,address,city,state,zipcode,country} = req.body
         const updateData = {
                    firstname,
                    mobile,
                    email,
                    password,
                    address,
                    city,
                    state,
                    zipcode,
                    country,
                    };
       
        const updateUser=await registerformodal.findByIdAndUpdate(id,updateData)
        
        res.json({
            message:"updated successfull",
            updateUser
        })
    }
    catch(error){
        console.log("Update error: ",error)
    }

}