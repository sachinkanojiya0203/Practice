const express=require('express');
const router=express.Router()
const {HandleuserSignup,HandleuserLogin}=require('../controllers/user')

router.post('/',HandleuserSignup)
router.post('/login',HandleuserLogin)




module.exports=router