let socket = io.connect();

let target = document.getElementById("target");
let message = document.getElementById("message");
const sendToAll = document.getElementById("sendToAll");
const sendToMe = document.getElementById("sendToMe");

console.log(message)

sendToAll.addEventListener('click', () => {
    socket.emit('sendToAll', message.value);
});

sendToMe.addEventListener('click', () => {
    socket.emit('sendToMe', message.value);
});

socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});


