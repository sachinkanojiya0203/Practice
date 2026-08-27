const express=require('express')
const {HandlegenerateNewURL,HandleanAlytics}=require('../controllers/url')
const router=express.Router();



// routes

router.post('/',HandlegenerateNewURL);
router.get('/analytics/:ShortId',HandleanAlytics)
module.exports=router;