const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Add a new team
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const team = new Team({ name });
    await team.save();
    res.status(201).json({ message: 'Team added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add team' });
  }
});

module.exports = router;
