const express=require('express')
const {HandlegenerateNewURL}=require('../controllers/url')
const router=express.Router();



// routes

router.post('/',HandlegenerateNewURL);


module.exports=router;