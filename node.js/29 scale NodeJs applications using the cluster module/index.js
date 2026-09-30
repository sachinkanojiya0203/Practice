const express=require("express")
const app=express()

const PORT=8000;


app.get("/",(req,res)=>{
    return res.json({message:`Hello form server! ${process.pid}`})
    console.log("hello!")
});


app.listen(PORT,()=>console.log(`Server Started Prot: http://localhost:${PORT}`))