const express=require('express');
const urlRoutes=require('./routes/url')
const staticRoute=require('./routes/staticRouter')
const path=require('path')
const {connectTomongoDB}=require('./connect')
const URL=require('./models/url')
const app=express();
const port=8001;


connectTomongoDB('mongodb://127.0.0.1:27017/Short-url').then(()=>console.log("MOngoDB Connected!"))
app.set("view engine","ejs");
app.set('views',path.resolve('./views'))
app.use(express.json());   

app.use(express.urlencoded({extended:false}))

// app.get('/test',async(req,res)=>{
//     const allurls= await URL.find({});
//     return res.render('home',{
//         urls:allurls,
//     })
// });
app.get('/url/:ShortId',async(req,res)=>{
    const ShortId=req.params.ShortId;
    const entry = await URL.findOneAndUpdate({
        ShortId 
    },{$push:{
        VisitHistory:{
            timestamp:Date.now(),
        },
    }});
    res.redirect(entry.redirectURL)
});
app.use('/url',urlRoutes);
app.use('/',staticRoute);

app.listen(port,()=>console.log(`Server started PORT: ${port}`))