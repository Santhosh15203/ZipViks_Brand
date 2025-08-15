const userRegisterMobileModal = require("../models/registerMobile");
exports.registerMobileController = async (req, res, next) => {
    console.log("Mobile received from frontend:", mobile);

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
