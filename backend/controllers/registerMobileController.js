const userRegisterMobileModal = require("../models/registerMobile");
const axios = require("axios");

let storeOTP = {};

exports.registerMobileController = async (req, res, next) => {
     console.log("📩 Request received:", req.body);
     console.log("API Key present locally?", !!process.env.FAST2SMS_API_KEY);
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

    // Send OTP using GET
    const response = await axios.get("https://www.fast2sms.com/dev/bulkV2", {
      params: {
        variables_values: otp,
        route: "otp",
        numbers: mobile
      },
      headers: {
        authorization: process.env.FAST2SMS_API_KEY
      }
    });

    if (response.data.return) {
      res.json({
        message: "OTP sent successfully",
        otpSent: true,
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
