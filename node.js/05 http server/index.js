const http=require('http');
const fs=require('fs');
const port=8000;

const myserver=http.createServer((req,res)=>{
    const log= `${Date.now()}:${req.url} :new request received \n`
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case'/': res.end("hello this server this is home page");
            break;
            case'/about':res.end("this is about page");
            break
            default:res.end("404 not Found!");

        }
    })
})

myserver.listen(port,()=>console.log(`server started port no : ${port}`))