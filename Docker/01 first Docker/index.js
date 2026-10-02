const express=require("express")

const app=express()
const PORT=8000;

app.get("/",(req,res)=>{
    res.json({message:"Hello form Docker"})
})

app.listen(PORT,()=>console.log(`server started prot:http://localhost:${PORT}`))