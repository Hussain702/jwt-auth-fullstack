
const express=require('express')
const { validateLogin, validateSignup } = require('../Middlewares/authMiddleware')
const { signup, login } = require('../Controllers/authController')
const router=express.Router()


router.post('/login',validateLogin,login)
router.post('/signup',validateSignup,signup)


module.exports=router