//require express in our app
var express = require('express'),
    bodyParser = require('body-parser'),
    controllers = require('./controllers'),
    db = require('./models');

// generate a new express app and call it 'app'
var app = express();



// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api', controllers.api.index);
  


app.get('/api/albums', controllers.albums.index);

app.post('/api/albums', controllers.albums.create);

// app.get('api/albums', controllers.albums.show);
// app.delete('/api/albums', controllers.albums.destroy);
// app.put('/api/albums', controllers.albums.update);
















app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely app listening at http://localhost:3000/');
});