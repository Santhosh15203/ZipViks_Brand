const express=require('express')
const { allproduct, singleproduct } = require('../controllers/userproducts')
const { userorders } = require('../controllers/userorders')
const { registerformController } = require('../controllers/registerform')
const { userloginController } = require('../controllers/userloginController')
const upload = require('../controllers/userImgUpload')
const { registerformControllerUpdate } = require('../controllers/registerformUpdate')
const router=express.Router()

//  routes,controller,model
router.get('/product',allproduct)
router.get('/product/:id',singleproduct)

router.post('/order',userorders)
router.post('/registerform',upload.single('profile'),registerformController)
router.put('/registerform/:id',upload.single('profile'),registerformControllerUpdate)
router.get('/userlogin',userloginController)

module.exports=router
