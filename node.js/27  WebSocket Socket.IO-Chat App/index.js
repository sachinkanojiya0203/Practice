const http=require("http")
const express=require('express');

const PORT=9000;
const App=express();
const Server=http.createServer(App);


Server.listen(PORT,()=>console.log(`server started Port:${PORT}.`))