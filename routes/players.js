const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Add a new player
router.post('/', async (req, res) => {
  try {
    const { name, sex, dob, school, region } = req.body;
    const player = new Player({ name, sex, dob, school, region });
    await player.save();
    res.status(201).json({ message: 'Player added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add player' });
  }
});

module.exports = router;
