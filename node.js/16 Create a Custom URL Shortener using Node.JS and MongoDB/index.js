const express=require('express');
const urlRoutes=require('./routes/url')
const {connectTomongoDB}=require('./connect')
const URL=require('./models/url')
const app=express();
const port=8001;


connectTomongoDB('mongodb://127.0.0.1:27017/Short-url').then(()=>console.log("MOngoDB Connected!"))
app.use(express.json());    

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        VisitHistory:{
            timestamp:Date.now(),
        },
    }});
    res.redirect(entry.redirectURL)
})
app.use('/url',urlRoutes);

app.listen(port,()=>console.log(`Server started PORT: ${port}`))