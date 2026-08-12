const http=require('http');
const express=require('express')

const port=8000;

const app=express();





app.listen(port,()=>console.log(`server started! ${port}`))