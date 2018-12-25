const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  exp: { type: String, required: true },
  cvv: { type: Number, required: true }
});

const Cards = mongoose.model("Cards", cardSchema);

module.exports = Cards;
