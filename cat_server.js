var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());//Enable bodyParser when the app is a JSON
app.use(bodyParser.urlencoded({extended: true}));//Parse the body form

//The app is singleton... to hit this one we need to pass it through

var cats = require('./routes/cat.js')(app);//the cats.js exports a function which takes the app as parameter

var server = app.listen(3000, function() {
	console.log('Server running at http://127.0.0.1:3000/');
})
