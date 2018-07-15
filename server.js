const io = require('socket.io')(3000);

io.on('connection', function (socket) {
  console.log('new connection', socket.id);
});

var in_exchange = io.of('/in');
var out_exchange = io.of('/out');

in_exchange.on('connection', function(socket){
  console.log('someone connected to input', socket.id);
  socket.on('new_info', function(data) {
    out_exchange.emit('new_info', data);
  })
});

out_exchange.on('connection', function(socket){
  console.log('someone connected to output', socket.id);
});
