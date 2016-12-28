// Todo: Create Artist Model
import mongoose from 'mongoose';
import AlbumSchema from './album';

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: String,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema],
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
