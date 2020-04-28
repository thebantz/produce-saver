const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array
})

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;