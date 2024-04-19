const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'shiv'
const AuthController = {
  register: async (req, res) => {
    try {
      const { email, firstName, lastName } = req.body;
      // if (!email) {
      //   return res.status(400).json({ error: 'Email is required' });
      // }
      const user = new User({ email, firstName, lastName });
      await user.save();
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Generate JWT token
      const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      // Send the token back in the response
     res.json({ message: 'Login successful', user: user.email, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = AuthController;
