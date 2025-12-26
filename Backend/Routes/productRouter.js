
const express=require('express')
const router=express.Router()
const ensureAuthentication =require('../Middlewares/authProduct')
const { product } = require('../Controllers/productController')


router.get('/',ensureAuthentication,product)


module.exports=router