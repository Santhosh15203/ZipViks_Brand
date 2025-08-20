const registerMobileFormModal = require("../models/postRegisterMobileFormModel");

exports.updateMobileRegisterForm = async (req, res, next) => {
  try {
    const { id } = req.params;  
    const { fullname, mobile, address, city, state, zipcode } = req.body;

    console.log("Params mobile:", id);
    console.log("Body data:", req.body);

    const updateData = { fullname, mobile, address, city, state, zipcode };

    const updateRegisterMobileFormData = await registerMobileFormModal.findByIdAndUpdate(id,updateData,{ new: true }
    );
    res.json({ updateRegisterMobileFormData });

  } catch (error) {
    console.error("Update Register Form Data error", error);
  }
};
