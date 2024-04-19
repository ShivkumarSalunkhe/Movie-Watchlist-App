const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Year: String,
  imdbID: { type: String},
  Type: String,
  Poster: String,
});

const userSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: { type: String, required: true, unique: true },
  watchList: [movieSchema], // Embedded watch list schema
});

module.exports = mongoose.model('User', userSchema);
