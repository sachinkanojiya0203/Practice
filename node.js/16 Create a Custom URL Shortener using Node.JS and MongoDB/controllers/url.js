const shortid=require('shortid')
const URL = require('../models/url');

async function HandlegenerateNewURL(req,res) {
    const body=req.body;
    if(!body.url)return res.status(400).json({error:"Url Required"});
    const ShortID = shortid();
    await URL.create({
        shortid:ShortID,
        redirectURL:body.url,
        visitedhistory:[],

    });
    return res.json({id:ShortID});
}

module.exports={HandlegenerateNewURL}