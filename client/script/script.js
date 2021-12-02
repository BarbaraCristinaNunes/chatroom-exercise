let socket = io.connect();

let target = document.getElementById("target");
let message = document.getElementById("message");
const sendToAll = document.getElementById("sendToAll");
const sendToMe = document.getElementById("sendToMe");
let userName = document.getElementById("search");
let d = new Date;
let hs = d.getHours();
let min = d.getMinutes();


console.log(message)

sendToAll.addEventListener('click', () => {
    socket.emit('sendToAll', {message: message.value, userName: userName.value});
});

sendToMe.addEventListener('click', () => {
    socket.emit('sendToMe', message.value);
});

socket.on('displayMessage', (obj) => {
    target.innerHTML += "<div class='test'>"+ "<p><i>" + obj.userName + "</i></p>" + obj.message+ "     " + hs + ":"+ min + "</div><br>";
});


