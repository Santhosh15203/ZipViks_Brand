const registerformodal = require("../models/registerform")

exports.registerformController=async(req,res,next)=>{

    try{

    console.log("REQ BODY:", req.body);     // Check if text fields are present
    console.log("REQ FILE:", req.file); 

        const {firstname,mobile,email,password,gender,address,city,state,zipcode,country} = req.body
        const profile=req.file?.filename||""
            
        const registerformdetails=await registerformodal.create({
            firstname,
            mobile,
            email,
            password,
            profile,
            gender,
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
        console.log("registeration error",error)
    }

}