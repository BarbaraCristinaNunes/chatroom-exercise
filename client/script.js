let socket = io.connect();

let target = document.getElementById("target");
let message = document.getElementById("message");
const sendToAll = document.getElementById("sendToAll");

console.log(message)

sendToAll.addEventListener('click', () => {
    socket.emit('sendToAll', message.value);
});

socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});


