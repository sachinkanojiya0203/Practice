//EXpess.js 
const express=require('express')
const http = require('http');
const port = 8000;

const app=express();

app.get('/',(req,res)=>{
    return res.send("HEllo this is home page!")
})
app.get('/about',(req,res)=>{
    return res.send(`HEllo this is about page! \n hey ${req.query.name} your age is ${req.query.age}`)
})

app.listen(port,()=>console.log(`server started port no : ${port}`));