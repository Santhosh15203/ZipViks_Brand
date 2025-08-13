const express=require('express')
const { allproduct, singleproduct } = require('../controllers/userproducts')
const { userorders } = require('../controllers/userorders')
const { registerformController } = require('../controllers/registerform')
const { userloginController } = require('../controllers/userloginController')
const { registerformControllerUpdate } = require('../controllers/registerformUpdate')
const { registerMobileController } = require('../controllers/registerMobileController')
const router=express.Router()
const axios = require("axios");
router.get("/my-ip", async (req, res) => {
    try {
        const ipResponse = await axios.get("https://api.ipify.org");
        res.send(`Server Public IP: ${ipResponse.data}`);
    } catch (error) {
        res.status(500).send("Error fetching IP");
    }
});
router.get('/product',allproduct)
router.get('/product/:id',singleproduct)
router.post('/order',userorders)
router.post('/registerform',registerformController)
router.post('/sendOTP',registerMobileController)
router.put('/registerform/:id',registerformControllerUpdate)
router.get('/userlogin',userloginController)
module.exports=router
