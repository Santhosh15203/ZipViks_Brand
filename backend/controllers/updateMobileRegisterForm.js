const registerMobileFormModal = require("../models/postRegisterMobileFormModel");

exports.updateMobileRegisterForm = async (req, res, next) => {
  try {
    const { mobile } = req.params;  
    const { fullname, mobile: newMobile, address, city, state, zipcode } = req.body;

    console.log("Params mobile:", mobile);
    console.log("Body data:", req.body);

    const updateData = { fullname, mobile: newMobile, address, city, state, zipcode };

    const updateRegisterMobileFormData = await registerMobileFormModal.findOneAndUpdate({ mobile },updateData,{ new: true }
    );
    res.json({ updateRegisterMobileFormData });

  } catch (error) {
    console.error("Update Register Form Data error", error);
  }
};
