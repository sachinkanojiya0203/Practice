const shortid=require('ShortId')
const URL = require('../models/url');

async function HandlegenerateNewURL(req,res) {
    const body=req.body;
    if(!body.url)return res.status(400).json({error:"Url Required"});
    const ShortID = shortid.generate();
    await URL.create({
        ShortId:ShortID,
        redirectURL:body.url,
        visitedhistory:[],

    });
    return res.json({id:ShortID});
}

async function HandleanAlytics(req,res) {
    const ShortId=req.params.ShortId;
    const result=await URL.findOne({ShortId});
    return res.json({totalClicks:result.VisitHistory.length,analytics:result.VisitHistory}) 
}
// commet
module.exports={HandlegenerateNewURL,HandleanAlytics}