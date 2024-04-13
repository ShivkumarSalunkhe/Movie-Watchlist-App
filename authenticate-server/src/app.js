const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', authMiddleware, userRoutes);

module.exports = app;
