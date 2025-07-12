const express = require('express');
const router = express.Router();

// Middleware
const upload = require('../middleware/uploadMiddleware');
const protect = require('../middleware/authMiddleware');

// Controller
const {
  updateProfilePhoto,
  updateProfileInfo,
} = require('../controllers/userController');

// @route   PUT /api/users/photo
// @desc    Update profile photo
// @access  Private
router.put('/photo', protect, upload.single('profilePhoto'), updateProfilePhoto);
router.put('/profile', protect, updateProfileInfo);

module.exports = router;

module.exports = router;
