const express=require('express');
const fs=require('fs');
const status=require('express-status-monitor')
const zlib=require("zlib")

const PORT=9000;
const App=express();


App.use(status());

fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")))

App.get("/",(req,res)=>{
    const stream=fs.createReadStream("./sample.txt","utf-8");
    stream.on("data",(chunk)=>res.write(chunk));
    stream.on("end",()=>res.end())
})

App.listen(PORT,()=>console.log(`server started Port:http://localhost:${PORT}`))