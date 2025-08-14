const userRegisterMobileModal = require("../models/registerMobile");
exports.registerMobileController = async (req, res, next) => {

    try {
        const { mobile } = req.body;
        if (!mobile || mobile.length !== 10) {
             const MobileRegister = await userRegisterMobileModal.create({ mobile });
                res.json({
                    MobileRegister
                })                                                                                                                 
          
        }
    

    } catch (error) {
        console.error("Mobile Register error",error)
    }
};
