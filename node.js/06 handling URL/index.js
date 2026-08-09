const http=require('http');
const fs=require('fs');
const url=require('url')
const port=8000;

const myserver=http.createServer((req,res)=>{
    if(req.url ==='/favicon.ico')return res.end();
    const log= `${Date.now()}:${req.url} :new request received \n`
    const myurl=url.parse(req.url,true);    // query parameter in url 
    console.log(myurl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myurl.pathname){
            case'/': res.end("HOME");
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
            
            default:res.end("404 not Found!");

        }
    })
})

myserver.listen(port,()=>console.log(`server started port no : ${port}`))