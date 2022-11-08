var http = require('http');
http.createServer(function (req, res){
res.write('Hello World');
	res.end();


}).listen(5000);
console.log("Server Running at port 5000 http://localhost:5000/");