const express=require('express');
const urlRoutes=require('./routes/url')
const staticRoute=require('./routes/staticRouter')
const userRoute=require('./routes/user')
const path=require('path')
const {connectTomongoDB}=require('./connect')
const URL=require('./models/url')
const CookieParser=require('cookie-parser');
const cookieParser = require('cookie-parser');
const {checkForAuthentication,restrictTo}=require('./middleware/auth')
const app=express();
const port=8001;


connectTomongoDB('mongodb://127.0.0.1:27017/Short-url').then(()=>console.log("MOngoDB Connected!"))
app.set("view engine","ejs");
app.set('views',path.resolve('./views'))
app.use(express.json());   

app.use(express.urlencoded({extended:false}))
app.use(CookieParser());
app.use(checkForAuthentication)

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
app.use('/url',restrictTo(["NORMAL","ADMIN"]),urlRoutes);
app.use('/user',userRoute);
app.use('/',staticRoute);

app.listen(port,()=>console.log(`Server started PORT: ${port}`))