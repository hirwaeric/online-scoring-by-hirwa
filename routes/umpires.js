const express = require('express');
const router = express.Router();
const Umpire = require('../models/Umpire');

// Add a new umpire
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const umpire = new Umpire({ name });
    await umpire.save();
    res.status(201).json({ message: 'Umpire added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add umpire' });
  }
});

module.exports = router;
