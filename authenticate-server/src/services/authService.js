const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const AuthService = {
  register: async (userData) => {
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      // Create user
      const user = new User({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      });
      await user.save();
      return user;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },
};

module.exports = AuthService;
