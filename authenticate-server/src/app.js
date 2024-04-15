const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/AuthRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const watchlistRoutes = require('./routes/watchListRoutes');

require('dotenv').config();

const app = express();
const { DB_URL } = process.env;


app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/watchlist', authMiddleware, watchlistRoutes);
// Connect to MongoDB using Mongoose
mongoose.connect("mongodb+srv://shivkumarsalunkhe50:r9zjY1cXLpGkAygl@cluster0.xvug0as.mongodb.net/movie-watch-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('Error connecting to MongoDB: ', err.message);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
