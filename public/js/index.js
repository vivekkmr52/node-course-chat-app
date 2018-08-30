var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   to: 'him@vivek.com',
  //   text: 'Hey. This is me'
  // });
});

socket.on('disconnect', function() {
  console.log('Dosconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New Email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New Message', message);
});
