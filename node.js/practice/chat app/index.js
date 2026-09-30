const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const Port = 3000;
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(Port, () => {
    console.log(`Server Started:http://localhost:${Port}/`);
});