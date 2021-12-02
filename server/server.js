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

    socket.on('sendToAll', (message) =>{
        console.log("OKOKOK");
        io.emit("displayMessage", (message));
    });

    socket.on('sendToMe', (message) =>{
        console.log("OKOKOK");
        socket.emit("displayMessage", (message));
    });
});

