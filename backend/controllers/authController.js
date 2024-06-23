const User = require('../models/User');

const signUp = async (req, res) => {
    const { first_name, last_name, email, password, confirmation_password } = req.body;

    // Check if the passwords match
    if (password !== confirmation_password) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    console.log('Password:', password);
    console.log('Confirmation Password:', confirmation_password);


    // Check if the user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already registered' });
    }
    
    // Create a new user
    const newUser = new User({ first_name, last_name, email, password,confirmation_password });
    try {
        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'An error occurred during registration' });
    }
};

module.exports = {
    signUp
};
