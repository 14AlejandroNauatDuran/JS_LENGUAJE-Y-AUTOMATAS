var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
  id: 1,
  text: "Ejercicio Chat Socket",
  author: "alejandro"
}];

app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.status(200).send("hola mundo");
});

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);

  });
});

server.listen(9045, function() {
  console.log("Servidor corriendo en el puerto 9045");
});