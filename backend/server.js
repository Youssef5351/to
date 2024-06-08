const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({
    origin: 'https://me-five-ebon.vercel.app'
}));


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
});


const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


app.post('/api/signup', async (req, res) => {
  const { first_name,last_name,email,password,confirmation_password } = req.body;

  try{
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already registered' });
  }


  const newUser = new User({ first_name,last_name, email, password,confirmation_password });
  await newUser.save();

  res.status(201).json({ success: true, message: 'User registered successfully' });
} catch (error) {

  console.error(error);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
}
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});