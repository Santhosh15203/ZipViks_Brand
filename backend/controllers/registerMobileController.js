const userRegisterMobileModal = require("../models/registerMobile");
exports.registerMobileController = async (req, res, next) => {
     console.log("Incoming request body:", req.body); // debug log

    try {
        const { mobile } = req.body
             const MobileRegister = await userRegisterMobileModal.create({ mobile });
                res.json({
                    MobileRegister
                })                 
    

    } catch (error) {
        console.error("Mobile Register error",error)
    }
};
