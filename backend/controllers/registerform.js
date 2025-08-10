const registerformodal = require("../models/registerform");

exports.registerformController = async (req, res) => {
    try {
        console.log("Incoming request body:", req.body); // debug log

        const { firstname, mobile, email, password, address, city, state, zipcode, country } = req.body;

        if (!firstname || !email) {
            return res.status(400).json({ message: "Firstname and Email are required" });
        }

        const registerformdetails = await registerformodal.create({
            firstname,
            mobile,
            email,
            password,
            address,
            city,
            state,
            zipcode,
            country
        });

        res.status(201).json({
            message: "Registration successful",
            data: registerformdetails
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};
