const path=require("path")
const express=require("express")

const app=express();
const PORT=8000;

app.set("View Engine","ejs");
app.set("View",path.resolve("./views"));

app.use(express.json());

app.get("/",(req,res)=>{
    return res.render("homepage")
});


app.listen(PORT,()=>console.log(`server started Port No: ${PORT}`))