var express = require('express');
var app = express();
var router = express.Router();
var server = require('http').createServer(app);

//***************MYSQL CONNECTION CONFIGURATION***************************
//var connection  = require('express-myconnection'); 
//var mysql = require('mysql');



	
//***************CRON EXECUTION CODE***************************
var cron = require('./crons/mailSender');
cron();


server.listen(5000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});



