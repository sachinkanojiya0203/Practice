const express = require('express');
const path=require("path")
const app = express()
const port = 8000
const Userroutes=require("./routes/user.js")


app.set("view engine","ejs")
app.set("views",path.resolve("./views"));

app.use("/user",Userroutes)
app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(port, () => console.log(`server Started port:  http://localhost:${port}`))