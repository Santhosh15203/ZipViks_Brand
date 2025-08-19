const registerMobileFormModal = require("../models/postRegisterMobileFormModel");

exports.updateMobileRegisterForm = async (req, res, next) => {
  try {
    const { mobile } = req.params;   // <--- must be here
    const { fullname, mobile: newMobile, address, city, state, zipcode } = req.body;

    console.log("Params mobile:", mobile);
    console.log("Body data:", req.body);

    const updateData = { fullname, mobile: newMobile, address, city, state, zipcode };

    const updateRegisterMobileFormData = await registerMobileFormModal.findOneAndUpdate(
      { mobile },        // search by old mobile (from params)
      updateData, 
      { new: true }
    );

    if (!updateRegisterMobileFormData) {
      return res.status(404).json({ error: "Mobile not found" });
    }

    res.json({ updateRegisterMobileFormData });
  } catch (error) {
    console.error("Update Register Form Data error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
