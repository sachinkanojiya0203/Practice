/*
----HTTP methods---
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE
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