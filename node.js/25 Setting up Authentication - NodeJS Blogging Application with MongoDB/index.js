const express = require('express');
const path=require("path")
const cookieParser=require('cookie-parser')
const app = express();
const mongoose=require("mongoose")
const port = 8000
const Userroutes=require("./routes/user.js");
const Blogroutes=require("./routes/blog.js");
const Blog=require('./models/blog.js')
const { connected } = require('process');
const { checkForAuthenticationCookie } = require('./middlewares/authantication.js');

mongoose.connect("mongodb://localhost:27017/BlogTech").then((e)=>console.log("mongoDB connected"));

app.set("view engine","ejs")
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve("./public")))
app.get("/",async(req,res)=>{
    const allBlogs=await Blog.find({});
    res.render("home",{
        user:req.user,
        blogs:allBlogs,
    })
});
app.use("/user",Userroutes);
app.use("/blog",Blogroutes);

app.listen(port, () => console.log(`server Started port:  http://localhost:${port}`))