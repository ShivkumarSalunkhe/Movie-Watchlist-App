const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "shiv";
const AuthController = {
  register: async (req, res) => {
    try {
      const { email, firstName, lastName } = req.body;
      const user = new User({ email, firstName, lastName });
      await user.save();
      res.status(200).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Generate JWT token
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });
      // Send the token back in the response
      res.json({ message: "Login successful", user: user, token });
    } catch (error) {
      res.status(500).json({ error: "User not found" });
    }
  },
};

module.exports = AuthController;
