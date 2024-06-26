const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/watchlist/add - Add a movie to the watch list
router.post('/add', async (req, res) => {
  const { email, movie } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $push: { watchList: movie } },
      { new: true }
    );
    res.json(user.watchList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add movie to watch list' });
  }
});

// GET /api/watchlist - Get user's watch list
router.get('/', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user.watchList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get watch list' });
  }
});

router.delete('/delete', async (req, res) => {
  const { email, movieId } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $pull: { watchList: { _id: movieId } } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!user.watchList || user.watchList.length === 0) {
      return res.status(404).json({ error: 'Watch list is empty' });
    }
    res.json({watchList:user.watchList,
    message:"Watch List Item Deleted Successfully."});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete movie from watch list' });
  }
});


module.exports = router;
