const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  leaderboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Leaderboard' },
  live: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  upcoming: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  completed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }]
});

module.exports = mongoose.model('Tournament', tournamentSchema);
