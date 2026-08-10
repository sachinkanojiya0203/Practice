/*
----HTTP methods---
1. GET -> to get data form server
2. POST -> to send or post data to server
3. PUT  -> to put some data on server
4. PATCH -> to update the exsiting data update 
5. DELETE -> to remove data on server
*/
const http=require('http');
const fs=require('fs');
const url=require('url')
const port=8000;

const myserver=http.createServer((req,res)=>{
    if(req.url ==='/favicon.ico')return res.end();
    const log= `${Date.now()}:${req.method} ${req.url} :new request received \n`
    const myurl=url.parse(req.url,true);    // query parameter in url 
    console.log(myurl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myurl.pathname){
            case'/':if (req.method==='GET') res.end("HOME");
            break;
           
            case'/about':
            const username=myurl.query.name
            const userid=myurl.query.id
            res.end(`hi ${username}\nid ${userid}`)
            break;
            
            case'/search':
            const search=myurl.query.search_query;
            res.end('here your result '+search);
            break;
            
            case '/signup':
                if(req.method==='GET')res.end('this the sign up FORM');
                else if(req.mathod==='POST'){
                    // DB Query
                    res.end('sucess')
                };

                break;
            default:res.end("404 not Found!");

        }
    })
})

myserver.listen(port,()=>console.log(`server started port no : ${port}`))