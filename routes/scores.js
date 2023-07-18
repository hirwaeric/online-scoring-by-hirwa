const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

// Add a new score
router.post('/', async (req, res) => {
  try {
    const { matchId, teamId, score } = req.body;
    const scoreData = new Score({ match: matchId, team: teamId, score });
    await scoreData.save();
    res.status(201).json({ message: 'Score added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add score' });
  }
});

module.exports = router;
