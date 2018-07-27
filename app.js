var express = require('express');
var http = require('http');
var path = require('path');


var web = express();
web.use(express.static(path.join(__dirname,'/')));

http.createServer(web).listen('3003',function(){
	console.log('server at port 3001');
});