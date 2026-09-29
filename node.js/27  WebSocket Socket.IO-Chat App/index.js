const http=require("http")
const express=require('express');
const {Server}=require("socket.io")
const path=require("path");


const PORT=9000;
const App=express();
const server=http.createServer(App);
const io=new Server(server);

// Socket IO
io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit("message",message)
    })
})

//

// Request

App.use(express.static(path.resolve("./public")));

App.get("/",(req,res)=>{
    return res.sendFile("/public/index.html");
})

server.listen(PORT,()=>console.log(`server started Port:http://localhost:${PORT}`))