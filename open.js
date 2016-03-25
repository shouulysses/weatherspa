var express = require('express')
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/client'));

var port = process.env.PORT || 3000;
var IP = process.env.IP || "0.0.0.0";


app.get('/', function(req, res) {
    	res.render('index');
});
	
app.listen(process.env.PORT, process.env.IP);