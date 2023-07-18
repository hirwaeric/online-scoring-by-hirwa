const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, enum: ['Male', 'Female'], required: true },
  dob: { type: Date, required: true },
  school: { type: String, required: true },
  region: { type: String, required: true }
});

module.exports = mongoose.model('Player', playerSchema);
