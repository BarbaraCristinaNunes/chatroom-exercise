const express = require('express');
const http = require('http');
const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);
const io = require('socket.io')(server);
let counter = 0

server.listen(8080, () =>{
    console.log("server running on "+8080);
});

io.on('connection', (socket) => {
    counter++;
    console.log(counter + 'someone connected');
    console.log(socket.id)

    socket.on('sendData', (obj) => {
        io.emit("displayName", (obj));
    })

    socket.on('sendToAll', (obj) =>{
        console.log(obj.message, obj.userName);
        io.emit("displayMessage", (obj));
    });

    socket.on('sendToMe', (obj) =>{
        console.log("OKOKOK");
        socket.emit("displayMessage", (obj));
    });

    socket.on('getSocket', (socket) => {
        socket.emit('setSockeId', socket.id)
    })
});

