//requiring packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//ES6 version of setting up express app and port for application to be used
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Creates a static public directory to be used
app.use(express.static('./public'));

//Setting up our mongoDB connection using ES6 format
const link = 'mongodb://heroku_xxkwmxvg:10jkt346l7ltipb1ptg0e0mlc0@ds143141.mlab.com:43141/heroku_xxkwmxvg';

mongoose.connect(link);
const db = mongoose.connection;

db.on('error', err => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose Connection Successful.');
});

//Sets up and listens on our defined port using ES6
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
