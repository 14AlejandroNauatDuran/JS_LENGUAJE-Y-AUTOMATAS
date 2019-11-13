//tcp-server ...........................................(telnet)
const {createServer} = require("net");

var server = createServer();
var port = 4001;

server.on('listening', function(){
	console.log('Servidor activo en el puerto 4001');
});

server.on('connection', function(socket){
	console.log('El servidor tienen una nueva conexión...');
	socket.end();
	server.close();
});

server.on('close', function(){
	console.log('El servidor está cerrado...');
});

server.on('error', function(err){
	console.log('Error en la conexión', err.message);
});

server.listen(port);