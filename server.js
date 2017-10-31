
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// Serve static files.
app.use(express.static(__dirname + '/public'));

// Set the view engine.
app.set('view engine', 'ejs');

// Homepage route.
app.get('/', function(req, res) {
  res.render('index');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log('Node server running on http://localhost:'+ PORT);