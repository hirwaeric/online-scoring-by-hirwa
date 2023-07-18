const express = require('express');
const router = express.Router();
const Tournament = require('../models/Tournament');

// Add a new tournament
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const tournament = new Tournament({ name });
    await tournament.save();
    res.status(201).json({ message: 'Tournament added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add tournament' });
  }
});

module.exports = router;
