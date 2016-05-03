var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());//Enable bodyParser when the app is a JSON
app.use(bodyParser.urlencoded({extended: true}));//Parse the body form 

var cats = require('./cats.js')(app);//the cats.js exports a function which takes the app as parameter

var server = app.listen(3000, function() {
	console.log('Server running at http://127.0.0.1:3000/');
})