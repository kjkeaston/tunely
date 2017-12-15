// controllers/albumsController.js
var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Album.find({}, function(err, getAllAlbums) {
    res.json(getAllAlbums);
  });
}

// POST /api/albums
function create(req, res) {
  var genres = req.body.genres.split(', ');
  req.body.genres = genres;

  db.Album.create(req.body, function(err, album) {
    if (err) {
      res.json(err);
    }
    res.json(album);
  })
}


// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}


// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};