const url = process.env.URL || 'localhost:3000';
var socket = require('socket.io-client')(`http://${url}/out`);

socket.on('connect', function(){
  console.log('connected');
});

socket.on('new_info', console.log);

socket.on('event', function(data){});
socket.on('disconnect', function(){});
