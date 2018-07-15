var socket = require('socket.io-client')('http://localhost:3000/in');

socket.on('connect', function(){
  console.log('connected');
  socket.emit('new_info', 'my name is jack');
});

socket.on('event', function(data){});
socket.on('disconnect', function(){});
