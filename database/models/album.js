// Todo: create Album Schema
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
});

module.exports = AlbumSchema;
