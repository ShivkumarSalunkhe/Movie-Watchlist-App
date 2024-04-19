const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/AuthRoutes');
const AuthMiddleware = require('./middleWare/authMiddleware.js');
const WatchlistRoutes = require('./routes/watchlistRoutes.js');

require('dotenv').config();

const { DB_URL, PORT } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/watchlist', AuthMiddleware, WatchlistRoutes);

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
}).catch(err => {
  console.error('Error connecting to MongoDB: ', err.message);
});

const APP_PORT = PORT || 5000;

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`));
