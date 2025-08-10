const registerformodal = require("../models/registerform")

exports.registerformController=async(req,res,next)=>{
    try{

        const {firstname,mobile,email,password,address,city,state,zipcode,country} = req.body
            
        const registerformdetails=await registerformodal.create({
            firstname,
            mobile,
            email,
            password,
            address,
            city,
            state,
            zipcode,
            country
        })
        res.json({
            message:"registeration successful",     
            registerformdetails
        })

    }
    catch(error){
    console.error("registration error", error);
    res.status(500).json({
        message: "Internal Server Error",
        error: error.message
    });
}

}