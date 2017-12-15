// require mongoose and connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tunely_test');

var Album = require('./album');
var Song = require('./song');

module.exports = {
  Album: Album,
  Song: Song
};
//could be written like 
// module.exports.Album = Album;