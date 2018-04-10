var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ip = require('ip');
app.use(express.static('./'));

http.listen(8080, function(){
	console.log("Node Server is setup and listenin on http://"+ ip.address()+ ":8080");
})
