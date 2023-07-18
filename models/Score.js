const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', scoreSchema);
