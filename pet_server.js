var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());//Enable bodyParser when the app is a JSON
app.use(bodyParser.urlencoded({extended: true}));//Parse the body form

//The app is singleton... to hit this one we need to pass it through

var cats = require('./routes/pet.js')(app);//the cats.js exports a function which takes the app as parameter

var server = app.listen(3002, function() {
	console.log('Server running at http://127.0.0.1:3002/');
})
