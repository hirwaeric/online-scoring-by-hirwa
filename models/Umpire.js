const mongoose = require('mongoose');

const umpireSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tournaments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }]
});

module.exports = mongoose.model('Umpire', umpireSchema);
