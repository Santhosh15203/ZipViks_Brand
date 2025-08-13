const userRegisterMobileModal = require("../models/registerMobile");
const axios = require("axios");

let storeOTP = {};
const FAST2SMS_API_KEY = 'jVCW6qgdyI0RHZeFY7wAh2Q1tBLnpfxrJPNoU98SD4aObcT3Gst5fnSO0ZJmGxUlk7YsoKvIVXCwcRyu';

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
        
        try {
            // Send OTP via Fast2SMS
           const fast2sms = require("fast-two-sms");

            const response=await fast2sms.sendMessage({
            authorization: FAST2SMS_API_KEY,
            message: `Welcome to zipvikz! ${otp} is your OTP for logging into https://zipvikzin.vercel.app/ Thank You - zipvikz Brand`,
            numbers: [mobile],
            route: 'otp', // or 'dlt' if DLT-approved
            language: 'english'
            });
            console.log("📩 Fast2SMS Response:", response);

            console.log("OTP send")
            res.json({
                message: "OTP sent successfully",
                MobileRegister
            });

        } catch (smsError) {
            console.warn("⚠️ SMS sending failed, possibly IP blocked.", smsError.response?.data || smsError.message);

            // Fallback: send OTP in response for local testing
            res.json({
                message: "OTP generated (local test, SMS not sent)",
                otp,
                MobileRegister
            });
        }

    } catch (error) {
        console.error("Mobile Register error", error.response?.data || error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
