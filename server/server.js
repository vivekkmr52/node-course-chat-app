const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
let server = http.createServer(app)
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'meo@vivek.com',
    text: 'Hi this is Vivek',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from:'meo',
    text: 'Hey',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('Create Message', newMessage);
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

socket.on('disconnect', () => {
  console.log('Dosconnected from server');
});
});
server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
