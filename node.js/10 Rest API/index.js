const http=require('http');
const express=require('express')

const port=8000;

const app=express();

// Rest api



app.listen(port,()=>console.log(`server started! ${port}`))