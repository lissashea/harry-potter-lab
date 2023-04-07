const mongoose = require("mongoose");
const { Schema } = mongoose;

const HouseSchema = new Schema({
  name: { type: String, required: true },
  mascot: { type: String },
  headOfHouse: { type: String },
  houseGhost: { type: String },
  founder: { type: String },
  values: [{ type: String }],
  colors: [{ type: String }],
  members: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
});

const House = mongoose.model('House',HouseSchema)

module.exports = House;