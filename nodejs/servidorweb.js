const {createServer} = require("http");

let server = createServer((request, response) => {
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hola a todos</h1><p> Ejemplo de un Automata</p>");
	response.end();
});

server.listen(8000);
console.log("Servidor se abrio en el puerto 8000");