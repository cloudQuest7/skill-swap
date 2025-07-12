const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const protect = require('../middleware/authMiddleware');
const User = require('../models/User');

// GET user profile
router.put('/photo', protect, upload.single('profilePhoto'), async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.profilePhoto = req.file.path;
    await user.save();

    res.status(200).json({
      message: 'Profile photo updated',
      profilePhoto: req.file.path
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating photo' });
  }
});

module.exports = router;
