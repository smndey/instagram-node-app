const util = require('util');
const express = require('express');
const app = express();
const ig = require('instagram-node').instagram();

// Serve static files.
app.use(express.static(__dirname + '/public'));

ig.use({access_token: 'Your token goes here'});

// Set the view engine.
app.set('view engine', 'ejs');

// Homepage route.
app.get('/', function(req, res) {
  ig.user_self_media_recent([], function(err, medias, pagination, remaining, limit) {
    res.render('index', {images:medias});
  });
  
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log('Node server running on http://localhost:'+ PORT);