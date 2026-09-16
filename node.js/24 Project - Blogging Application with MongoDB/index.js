const express = require('express');
const path=require("path")
const app = express();
const mongoose=require("mongoose")
const port = 8000
const Userroutes=require("./routes/user.js");
const { connected } = require('process');

mongoose.connect("mongodb://localhost:27017/BlogTech").then((e)=>console.log("mongoDB connected"));

app.set("view engine","ejs")
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("home")
});
app.use("/user",Userroutes)

app.listen(port, () => console.log(`server Started port:  http://localhost:${port}`))