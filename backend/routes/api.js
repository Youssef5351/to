// routes/api.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/api/signup', async (req, res) => {
  const { first_name,last_name, email, password, confirmation_password} = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already registered' });
  }

  // Create a new user
  const newUser = new User({ first_name,last_name, email, password, confirmation_password});
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
});

router.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = router;
