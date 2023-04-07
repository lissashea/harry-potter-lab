const mongoose = require('mongoose');
const { Schema } = mongoose

const CharachterSchema = new Schema({
  name: {type: String, required: true },
  gender: { type: String },
  wand: { type: String },
  house: { type: Schema.Types.ObjectId, ref: 'House' },
});

const Charachter = mongoose.model('Character', CharachterSchema)

module.exports = Charachter