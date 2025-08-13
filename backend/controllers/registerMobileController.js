const userRegisterMobileModal = require("../models/registerMobile");
const axios = require("axios");
const { route } = require("../routes/user");

let storeOTP = {};
const FAST2SMS_API_KEY='jVCW6qgdyI0RHZeFY7wAh2Q1tBLnpfxrJPNoU98SD4aObcT3Gst5fnSO0ZJmGxUlk7YsoKvIVXCwcRyu'

exports.registerMobileController = async (req, res, next) => {
     console.log("📩 Request received:", req.body);
  try {
    const { mobile } = req.body;
    if (!mobile || mobile.length !== 10) {
      return res.status(400).json({ message: "Invalid mobile number" });
    }

    // Save mobile in DB
    const MobileRegister = await userRegisterMobileModal.create({ mobile });
 
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    storeOTP[mobile] = { otp, expires: Date.now() + 5 * 60 * 1000 };

    const smsData={
        message: `Welcome to zipvikz! ${otp} is your OTP for logging into https://zipvikzin.vercel.app/ Thank You - zipvikz Brand`,
        language:"english",
        route:"q",
        numbers:mobile
    }

    // Send OTP using GET
    const response = await axios.post("https://www.fast2sms.com/dev/bulkV2",smsData {
      headers: {
        authorization: FAST2SMS_API_KEY,
        'Content-Type':"application/json"
      }
    });

    if (response.data.return) {
      res.json({
        message: "OTP sent successfully",
        MobileRegister
      });
    } else {
      res.status(500).json({ message: "Failed to send OTP" });
    }

  } catch (error) {
    console.error("Mobile Register error", error.response?.data || error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
