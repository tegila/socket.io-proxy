var socket = require('socket.io-client')('http://localhost:3000/out');

socket.on('connect', function(){
  console.log('connected');
});

socket.on('new_info', console.log);

socket.on('event', function(data){});
socket.on('disconnect', function(){});
